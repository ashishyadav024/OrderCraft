package com.ordercraft.backend.service;

import com.ordercraft.backend.dto.MaterialRequirementResponse;
import com.ordercraft.backend.dto.SalesOrderRequest;
import com.ordercraft.backend.entity.*;
import com.ordercraft.backend.repository.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.*;

@Service
public class SalesOrderService {

    private final SalesOrderRepository salesOrderRepository;
    private final CustomerRepository customerRepository;
    private final ProductRepository productRepository;
    private final BomItemRepository bomItemRepository;
    private final OrderBomRepository orderBomRepository;

    public SalesOrderService(SalesOrderRepository salesOrderRepository,
                             CustomerRepository customerRepository,
                             ProductRepository productRepository,
                             BomItemRepository bomItemRepository,
                             OrderBomRepository orderBomRepository) {
        this.salesOrderRepository = salesOrderRepository;
        this.customerRepository = customerRepository;
        this.productRepository = productRepository;
        this.bomItemRepository = bomItemRepository;
        this.orderBomRepository = orderBomRepository;
    }

    public List<SalesOrder> getAllOrders() {
        return salesOrderRepository.findAll();
    }

    public SalesOrder getOrderById(Long id) {
        return salesOrderRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Sales order not found with ID: " + id));
    }

    @Transactional
    public SalesOrder createOrder(SalesOrderRequest request) {
        Customer customer = customerRepository.findById(request.getCustomerId())
                .orElseThrow(() -> new IllegalArgumentException("Customer not found with ID: " + request.getCustomerId()));

        SalesOrder order = new SalesOrder();
        order.setOrderNo("SO-" + LocalDate.now().getYear() + "-" + String.format("%04d", (int)(Math.random() * 9000 + 1000)));
        order.setCustomer(customer);
        order.setOrderDate(LocalDate.now());
        order.setStatus("CONFIRMED");

        BigDecimal total = BigDecimal.ZERO;
        List<SalesOrderItem> orderItems = new ArrayList<>();

        for (SalesOrderRequest.OrderItemRequest itemReq : request.getItems()) {
            Product product = productRepository.findById(itemReq.getProductId())
                    .orElseThrow(() -> new IllegalArgumentException("Product not found with ID: " + itemReq.getProductId()));

            BigDecimal lineTotal = product.getUnitPrice().multiply(BigDecimal.valueOf(itemReq.getQuantity()));
            total = total.add(lineTotal);

            SalesOrderItem orderItem = new SalesOrderItem();
            orderItem.setSalesOrder(order);
            orderItem.setProduct(product);
            orderItem.setQuantity(itemReq.getQuantity());
            orderItem.setUnitPrice(product.getUnitPrice());
            orderItem.setLineTotal(lineTotal);

            orderItems.add(orderItem);
        }

        order.setTotalAmount(total);
        order.setItems(orderItems);

        SalesOrder savedOrder = salesOrderRepository.save(order);

        // Automatically calculate and persist BOM requirements in order_bom
        generateOrderBom(savedOrder.getId());

        return savedOrder;
    }

    @Transactional
    public List<MaterialRequirementResponse> generateOrderBom(Long orderId) {
        SalesOrder order = getOrderById(orderId);

        // Delete any existing calculation for this order before recalculating
        orderBomRepository.deleteBySalesOrderId(orderId);

        // Accumulate requirements per material
        Map<Material, BigDecimal> materialRequirements = new HashMap<>();

        for (SalesOrderItem item : order.getItems()) {
            List<BomItem> bomItems = bomItemRepository.findByProductId(item.getProduct().getId());
            for (BomItem bom : bomItems) {
                BigDecimal needed = bom.getQtyPerUnit().multiply(BigDecimal.valueOf(item.getQuantity()));
                materialRequirements.merge(bom.getMaterial(), needed, BigDecimal::add);
            }
        }

        List<MaterialRequirementResponse> responses = new ArrayList<>();

        for (Map.Entry<Material, BigDecimal> entry : materialRequirements.entrySet()) {
            Material material = entry.getKey();
            BigDecimal required = entry.getValue();
            BigDecimal available = material.getStockQty();
            BigDecimal shortage = required.subtract(available);

            if (shortage.compareTo(BigDecimal.ZERO) < 0) {
                shortage = BigDecimal.ZERO;
            }

            OrderBom orderBom = new OrderBom(order, material, required, available, shortage);
            orderBomRepository.save(orderBom);

            responses.add(new MaterialRequirementResponse(
                    material.getId(),
                    material.getCode(),
                    material.getName(),
                    material.getUnit(),
                    required,
                    available,
                    shortage,
                    material.getSupplier() != null ? material.getSupplier().getId() : null,
                    material.getSupplier() != null ? material.getSupplier().getName() : "Unassigned"
            ));
        }

        return responses;
    }

    public List<MaterialRequirementResponse> getShortages(Long orderId) {
        List<OrderBom> orderBoms = orderBomRepository.findBySalesOrderId(orderId);
        List<MaterialRequirementResponse> responses = new ArrayList<>();

        for (OrderBom ob : orderBoms) {
            Material m = ob.getMaterial();
            responses.add(new MaterialRequirementResponse(
                    m.getId(),
                    m.getCode(),
                    m.getName(),
                    m.getUnit(),
                    ob.getRequiredQty(),
                    ob.getAvailableQty(),
                    ob.getShortageQty(),
                    m.getSupplier() != null ? m.getSupplier().getId() : null,
                    m.getSupplier() != null ? m.getSupplier().getName() : "Unassigned"
            ));
        }

        return responses;
    }
}