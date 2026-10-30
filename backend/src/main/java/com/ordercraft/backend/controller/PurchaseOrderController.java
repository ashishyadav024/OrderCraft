package com.ordercraft.backend.controller;

import com.ordercraft.backend.dto.PurchaseOrderRequest;
import com.ordercraft.backend.entity.PurchaseOrder;
import com.ordercraft.backend.service.PurchaseOrderService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/purchase-orders")
public class PurchaseOrderController {

    private final PurchaseOrderService purchaseOrderService;

    public PurchaseOrderController(PurchaseOrderService purchaseOrderService) {
        this.purchaseOrderService = purchaseOrderService;
    }

    @GetMapping
    public ResponseEntity<List<PurchaseOrder>> getAll() {
        return ResponseEntity.ok(purchaseOrderService.getAllOrders());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PurchaseOrder> getById(@PathVariable Long id) {
        return ResponseEntity.ok(purchaseOrderService.getOrderById(id));
    }

    @PostMapping
    public ResponseEntity<PurchaseOrder> createManualPO(@Valid @RequestBody PurchaseOrderRequest request) {
        PurchaseOrder created = purchaseOrderService.createManualPO(request);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PostMapping("/generate/sales-order/{orderId}")
    public ResponseEntity<List<PurchaseOrder>> generateForSalesOrder(@PathVariable Long orderId) {
        List<PurchaseOrder> created = purchaseOrderService.generateFromShortages(orderId);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PutMapping("/{id}/receive")
    public ResponseEntity<PurchaseOrder> receivePO(@PathVariable Long id) {
        PurchaseOrder received = purchaseOrderService.receivePurchaseOrder(id);
        return ResponseEntity.ok(received);
    }
}