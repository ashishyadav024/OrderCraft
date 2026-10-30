package com.ordercraft.backend.service;

import com.ordercraft.backend.dto.InvoiceCreateRequest;
import com.ordercraft.backend.dto.PaymentRequest;
import com.ordercraft.backend.entity.Invoice;
import com.ordercraft.backend.entity.Payment;
import com.ordercraft.backend.entity.SalesOrder;
import com.ordercraft.backend.repository.InvoiceRepository;
import com.ordercraft.backend.repository.PaymentRepository;
import com.ordercraft.backend.repository.SalesOrderRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.List;

@Service
public class InvoiceService {

    private final InvoiceRepository invoiceRepository;
    private final SalesOrderRepository salesOrderRepository;
    private final PaymentRepository paymentRepository;

    public InvoiceService(InvoiceRepository invoiceRepository,
                          SalesOrderRepository salesOrderRepository,
                          PaymentRepository paymentRepository) {
        this.invoiceRepository = invoiceRepository;
        this.salesOrderRepository = salesOrderRepository;
        this.paymentRepository = paymentRepository;
    }

    public List<Invoice> getAllInvoices() {
        return invoiceRepository.findAll();
    }

    public Invoice getInvoiceById(Long id) {
        return invoiceRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invoice not found with ID: " + id));
    }

    @Transactional
    public Invoice createInvoiceForOrder(InvoiceCreateRequest request) {
        SalesOrder order = salesOrderRepository.findById(request.getOrderId())
                .orElseThrow(() -> new IllegalArgumentException("Sales order not found with ID: " + request.getOrderId()));

        invoiceRepository.findBySalesOrderId(order.getId()).ifPresent(inv -> {
            throw new IllegalStateException("An invoice already exists for this order: " + inv.getInvoiceNo());
        });

        Invoice invoice = new Invoice();
        invoice.setInvoiceNo("INV-" + LocalDate.now().getYear() + "-" + String.format("%04d", (int)(Math.random() * 9000 + 1000)));
        invoice.setSalesOrder(order);
        invoice.setInvoiceDate(LocalDate.now());
        invoice.setDueDate(request.getDueDate() != null ? request.getDueDate() : LocalDate.now().plusDays(30));

        BigDecimal subtotal = order.getTotalAmount();
        BigDecimal taxRate = request.getTaxRatePercent() != null ? request.getTaxRatePercent() : BigDecimal.ZERO;
        BigDecimal taxAmount = subtotal.multiply(taxRate).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
        BigDecimal totalAmount = subtotal.add(taxAmount);

        invoice.setSubtotal(subtotal);
        invoice.setTaxAmount(taxAmount);
        invoice.setTotalAmount(totalAmount);
        invoice.setStatus("UNPAID");

        // Update sales order status to INVOICED
        order.setStatus("INVOICED");
        salesOrderRepository.save(order);

        return invoiceRepository.save(invoice);
    }

    @Transactional
    public Payment recordPayment(Long invoiceId, PaymentRequest request) {
        Invoice invoice = getInvoiceById(invoiceId);

        if ("PAID".equalsIgnoreCase(invoice.getStatus())) {
            throw new IllegalStateException("This invoice has already been fully paid.");
        }

        // Calculate already paid total
        BigDecimal totalPaidSoFar = invoice.getPayments().stream()
                .map(Payment::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal remainingBalance = invoice.getTotalAmount().subtract(totalPaidSoFar);

        if (request.getAmount().compareTo(remainingBalance) > 0) {
            throw new IllegalArgumentException("Payment amount (" + request.getAmount() +
                    ") exceeds remaining balance (" + remainingBalance + ").");
        }

        Payment payment = new Payment();
        payment.setInvoice(invoice);
        payment.setAmount(request.getAmount());
        payment.setPaymentDate(LocalDate.now());
        payment.setMethod(request.getMethod().toUpperCase());
        payment.setReferenceNo(request.getReferenceNo());

        Payment savedPayment = paymentRepository.save(payment);
        invoice.getPayments().add(savedPayment);

        // Update Invoice status
        BigDecimal newTotalPaid = totalPaidSoFar.add(request.getAmount());
        if (newTotalPaid.compareTo(invoice.getTotalAmount()) >= 0) {
            invoice.setStatus("PAID");
            invoice.getSalesOrder().setStatus("PAID");
        } else {
            invoice.setStatus("PARTIAL");
        }
        invoiceRepository.save(invoice);

        return savedPayment;
    }
}