package com.ordercraft.backend.controller;

import com.ordercraft.backend.dto.InvoiceCreateRequest;
import com.ordercraft.backend.dto.PaymentRequest;
import com.ordercraft.backend.entity.Invoice;
import com.ordercraft.backend.entity.Payment;
import com.ordercraft.backend.service.InvoiceService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/invoices")
public class InvoiceController {

    private final InvoiceService invoiceService;

    public InvoiceController(InvoiceService invoiceService) {
        this.invoiceService = invoiceService;
    }

    @GetMapping
    public ResponseEntity<List<Invoice>> getAll() {
        return ResponseEntity.ok(invoiceService.getAllInvoices());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Invoice> getById(@PathVariable Long id) {
        return ResponseEntity.ok(invoiceService.getInvoiceById(id));
    }

    @PostMapping
    public ResponseEntity<Invoice> createInvoice(@Valid @RequestBody InvoiceCreateRequest request) {
        Invoice created = invoiceService.createInvoiceForOrder(request);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PostMapping("/{id}/payments")
    public ResponseEntity<Payment> recordPayment(@PathVariable Long id,
                                                 @Valid @RequestBody PaymentRequest request) {
        Payment recorded = invoiceService.recordPayment(id, request);
        return new ResponseEntity<>(recorded, HttpStatus.CREATED);
    }
}