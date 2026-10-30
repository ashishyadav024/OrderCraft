package com.ordercraft.backend.service;

import com.ordercraft.backend.dto.MaterialRequirementResponse;
import com.ordercraft.backend.dto.PurchaseOrderRequest;
import com.ordercraft.backend.entity.*;
import com.ordercraft.backend.repository.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class PurchaseOrderService {

    private final PurchaseOrderRepository purchaseOrderRepository;
    private final SupplierRepository supplierRepository;
    private final MaterialRepository materialRepository;
    private final SalesOrderRepository salesOrderRepository;
    private final SalesOrderService salesOrderService;

    public PurchaseOrderService(PurchaseOrderRepository purchaseOrderRepository,
                                SupplierRepository supplierRepository,
                                MaterialRepository materialRepository,
                                SalesOrderRepository salesOrderRepository,
                                SalesOrderService salesOrderService) {
        this.purchaseOrderRepository = purchaseOrderRepository;
        this.supplierRepository = supplierRepository;
        this.materialRepository = materialRepository;
        this.salesOrderRepository = salesOrderRepository;
        this.salesOrderService = salesOrderService;
    }

    public List<PurchaseOrder> getAllOrders() {
        return purchaseOrderRepository.findAll();
    }

    public PurchaseOrder getOrderById(Long id) {
        return purchaseOrderRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Purchase Order not found with ID: " + id));
    }

    // 1. AUTO-GENERATION: Create POs from Sales Order Shortages
    @Transactional
    public List<PurchaseOrder> generateFromShortages(Long salesOrderId) {
        SalesOrder salesOrder = salesOrderService.getOrderById(salesOrderId);
        List<MaterialRequirementResponse> requirements = salesOrderService.getShortages(salesOrderId);

        // Filter items that have shortages > 0
        List<MaterialRequirementResponse> shortages = requirements.stream()
                .filter(r -> r.getShortageQty().compareTo(BigDecimal.ZERO) > 0)
                .collect(Collectors.toList());

        if (shortages.isEmpty()) {
            return Collections.emptyList();
        }

        // Group shortages by supplier
        Map<Long, List<MaterialRequirementResponse>> groupedBySupplier = shortages.stream()
                .collect(Collectors.groupingBy(MaterialRequirementResponse::getSupplierId));

        List<PurchaseOrder> generatedPOs = new ArrayList<>();

        for (Map.Entry<Long, List<MaterialRequirementResponse>> entry : groupedBySupplier.entrySet()) {
            Long supplierId = entry.getKey();
            if (supplierId == null) {
                continue;
            }

            Supplier supplier = supplierRepository.findById(supplierId)
                    .orElseThrow(() -> new IllegalArgumentException("Supplier not found with ID: " + supplierId));

            PurchaseOrder po = new PurchaseOrder();
            po.setPoNo("PO-" + LocalDate.now().getYear() + "-" + String.format("%04d", (int)(Math.random() * 9000 + 1000)));
            po.setSupplier(supplier);
            po.setSalesOrder(salesOrder);
            po.setPoDate(LocalDate.now());
            po.setStatus("DRAFT");

            BigDecimal totalAmount = BigDecimal.ZERO;
            List<PurchaseOrderItem> poItems = new ArrayList<>();

            for (MaterialRequirementResponse req : entry.getValue()) {
                Material material = materialRepository.findById(req.getMaterialId())
                        .orElseThrow(() -> new IllegalArgumentException("Material not found: " + req.getMaterialId()));

                BigDecimal lineTotal = material.getUnitCost().multiply(req.getShortageQty());
                totalAmount = totalAmount.add(lineTotal);

                PurchaseOrderItem poItem = new PurchaseOrderItem();
                poItem.setPurchaseOrder(po);
                poItem.setMaterial(material);
                poItem.setQuantity(req.getShortageQty());
                poItem.setUnitCost(material.getUnitCost());
                poItem.setLineTotal(lineTotal);

                poItems.add(poItem);
            }

            po.setTotalAmount(totalAmount);
            po.setItems(poItems);

            generatedPOs.add(purchaseOrderRepository.save(po));
        }

        return generatedPOs;
    }

    // 2. MANUAL CREATION: Direct procurement from supplier
    @Transactional
    public PurchaseOrder createManualPO(PurchaseOrderRequest request) {
        Supplier supplier = supplierRepository.findById(request.getSupplierId())
                .orElseThrow(() -> new IllegalArgumentException("Supplier not found with ID: " + request.getSupplierId()));

        PurchaseOrder po = new PurchaseOrder();
        po.setPoNo("PO-" + LocalDate.now().getYear() + "-" + String.format("%04d", (int)(Math.random() * 9000 + 1000)));
        po.setSupplier(supplier);
        po.setPoDate(LocalDate.now());
        po.setStatus("DRAFT");

        if (request.getOrderId() != null) {
            salesOrderRepository.findById(request.getOrderId()).ifPresent(po::setSalesOrder);
        }

        BigDecimal total = BigDecimal.ZERO;
        List<PurchaseOrderItem> poItems = new ArrayList<>();

        for (PurchaseOrderRequest.PurchaseItemRequest itemReq : request.getItems()) {
            Material material = materialRepository.findById(itemReq.getMaterialId())
                    .orElseThrow(() -> new IllegalArgumentException("Material not found with ID: " + itemReq.getMaterialId()));

            BigDecimal lineTotal = material.getUnitCost().multiply(itemReq.getQuantity());
            total = total.add(lineTotal);

            PurchaseOrderItem poItem = new PurchaseOrderItem();
            poItem.setPurchaseOrder(po);
            poItem.setMaterial(material);
            poItem.setQuantity(itemReq.getQuantity());
            poItem.setUnitCost(material.getUnitCost());
            poItem.setLineTotal(lineTotal);

            poItems.add(poItem);
        }

        po.setTotalAmount(total);
        po.setItems(poItems);

        return purchaseOrderRepository.save(po);
    }

    // 3. RECEIVE GOODS: Increment raw material stock when order arrives
    @Transactional
    public PurchaseOrder receivePurchaseOrder(Long poId) {
        PurchaseOrder po = getOrderById(poId);

        if ("RECEIVED".equalsIgnoreCase(po.getStatus())) {
            throw new IllegalStateException("Purchase Order is already marked as RECEIVED.");
        }

        for (PurchaseOrderItem item : po.getItems()) {
            Material material = item.getMaterial();
            material.setStockQty(material.getStockQty().add(item.getQuantity()));
            materialRepository.save(material);
        }

        po.setStatus("RECEIVED");
        return purchaseOrderRepository.save(po);
    }
}