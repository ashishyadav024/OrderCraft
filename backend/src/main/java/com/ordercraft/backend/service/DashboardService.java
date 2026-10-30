package com.ordercraft.backend.service;

import com.ordercraft.backend.dto.DashboardMetricsDto;
import com.ordercraft.backend.entity.Invoice;
import com.ordercraft.backend.entity.Material;
import com.ordercraft.backend.entity.Payment;
import com.ordercraft.backend.entity.PurchaseOrder;
import com.ordercraft.backend.entity.SalesOrder;
import com.ordercraft.backend.repository.InvoiceRepository;
import com.ordercraft.backend.repository.MaterialRepository;
import com.ordercraft.backend.repository.PurchaseOrderRepository;
import com.ordercraft.backend.repository.SalesOrderRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class DashboardService {

    private final SalesOrderRepository salesOrderRepository;
    private final PurchaseOrderRepository purchaseOrderRepository;
    private final InvoiceRepository invoiceRepository;
    private final MaterialRepository materialRepository;

    public DashboardService(SalesOrderRepository salesOrderRepository,
                            PurchaseOrderRepository purchaseOrderRepository,
                            InvoiceRepository invoiceRepository,
                            MaterialRepository materialRepository) {
        this.salesOrderRepository = salesOrderRepository;
        this.purchaseOrderRepository = purchaseOrderRepository;
        this.invoiceRepository = invoiceRepository;
        this.materialRepository = materialRepository;
    }

    public DashboardMetricsDto getDashboardMetrics() {
        DashboardMetricsDto dto = new DashboardMetricsDto();
        DashboardMetricsDto.WorkflowStagesDto stages = dto.getWorkflowStages();

        List<SalesOrder> orders = salesOrderRepository.findAll();
        List<PurchaseOrder> pos = purchaseOrderRepository.findAll();
        List<Invoice> invoices = invoiceRepository.findAll();
        List<Material> materials = materialRepository.findAll();

        if (orders == null) orders = new ArrayList<>();
        if (pos == null) pos = new ArrayList<>();
        if (invoices == null) invoices = new ArrayList<>();
        if (materials == null) materials = new ArrayList<>();

        // 1. Sales Order Telemetry & Revenue
        BigDecimal totalRevenue = BigDecimal.ZERO;
        int openOrders = 0;
        int confirmedOrders = 0;
        int inProdOrders = 0;
        int invoicedOrders = 0;
        int paidOrders = 0;

        for (SalesOrder o : orders) {
            if (o != null) {
                if (o.getTotalAmount() != null) {
                    totalRevenue = totalRevenue.add(o.getTotalAmount());
                }
                String st = o.getStatus() != null ? o.getStatus().toUpperCase().trim() : "";
                if ("CONFIRMED".equals(st) || "IN_PRODUCTION".equals(st) || "CREATED".equals(st)) {
                    openOrders++;
                }
                if ("CONFIRMED".equals(st)) confirmedOrders++;
                if ("IN_PRODUCTION".equals(st)) inProdOrders++;
                if ("INVOICED".equals(st)) invoicedOrders++;
                if ("PAID".equals(st)) paidOrders++;
            }
        }

        dto.setTotalRevenue(totalRevenue);
        dto.setActiveOrdersCount(openOrders);
        dto.setOpenOrdersCount(openOrders);
        dto.setRecentOrders(orders.stream().limit(5).collect(Collectors.toList()));

        stages.setSalesOrdersCount(orders.size());
        stages.setBomExplodedCount(confirmedOrders + inProdOrders);
        stages.setInvoicedCount(invoicedOrders);
        stages.setPaidCount(paidOrders);

        // 2. Purchase Order Telemetry (Pending POs)
        int pendingPos = 0;
        int receivedPos = 0;
        for (PurchaseOrder po : pos) {
            if (po != null) {
                String st = po.getStatus() != null ? po.getStatus().toUpperCase().trim() : "";
                if ("DRAFT".equals(st) || "SENT".equals(st) || "PENDING".equals(st)) {
                    pendingPos++;
                }
                if ("RECEIVED".equals(st)) {
                    receivedPos++;
                }
            }
        }
        dto.setPendingPoCount(pendingPos);
        stages.setPurchaseOrdersCount(pos.size());
        stages.setGoodsReceivedCount(receivedPos);

        // 3. Invoices & Receivables (Unpaid Invoices)
        BigDecimal unpaidAmount = BigDecimal.ZERO;
        int unpaidCount = 0;
        for (Invoice inv : invoices) {
            if (inv != null) {
                String st = inv.getStatus() != null ? inv.getStatus().toUpperCase().trim() : "";
                if ("UNPAID".equals(st) || "PARTIAL".equals(st)) {
                    unpaidCount++;
                    BigDecimal invTotal = inv.getTotalAmount() != null ? inv.getTotalAmount() : BigDecimal.ZERO;
                    BigDecimal paidSum = BigDecimal.ZERO;
                    if (inv.getPayments() != null) {
                        for (Payment p : inv.getPayments()) {
                            if (p != null && p.getAmount() != null) {
                                paidSum = paidSum.add(p.getAmount());
                            }
                        }
                    }
                    BigDecimal diff = invTotal.subtract(paidSum);
                    if (diff.compareTo(BigDecimal.ZERO) > 0) {
                        unpaidAmount = unpaidAmount.add(diff);
                    }
                }
            }
        }
        dto.setUnpaidInvoicesAmount(unpaidAmount);
        dto.setUnpaidInvoicesCount(unpaidCount);

        // 4. Critical Stock Materials
        BigDecimal threshold = BigDecimal.valueOf(50.0);
        List<Material> lowStock = materials.stream()
                .filter(m -> m != null && m.getStockQty() != null && m.getStockQty().compareTo(threshold) < 0)
                .collect(Collectors.toList());

        dto.setLowStockMaterials(lowStock);
        dto.setCriticalStockMaterialsCount(lowStock.size());

        return dto;
    }
}
