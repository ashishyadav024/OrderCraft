package com.ordercraft.backend.controller;

import com.ordercraft.backend.dto.MaterialRequirementResponse;
import com.ordercraft.backend.dto.SalesOrderRequest;
import com.ordercraft.backend.entity.SalesOrder;
import com.ordercraft.backend.service.SalesOrderService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class SalesOrderController {

    private final SalesOrderService salesOrderService;

    public SalesOrderController(SalesOrderService salesOrderService) {
        this.salesOrderService = salesOrderService;
    }

    @GetMapping
    public ResponseEntity<List<SalesOrder>> getAllOrders() {
        return ResponseEntity.ok(salesOrderService.getAllOrders());
    }

    @GetMapping("/{id}")
    public ResponseEntity<SalesOrder> getOrderById(@PathVariable Long id) {
        return ResponseEntity.ok(salesOrderService.getOrderById(id));
    }

    @PostMapping
    public ResponseEntity<SalesOrder> createOrder(@Valid @RequestBody SalesOrderRequest request) {
        SalesOrder created = salesOrderService.createOrder(request);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @GetMapping("/{id}/bom")
    public ResponseEntity<List<MaterialRequirementResponse>> getOrderBom(@PathVariable Long id) {
        return ResponseEntity.ok(salesOrderService.getShortages(id));
    }
}