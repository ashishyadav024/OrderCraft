package com.ordercraft.backend.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.List;

public class PurchaseOrderRequest {

    @NotNull(message = "Supplier ID is required")
    private Long supplierId;

    private Long orderId; // Optional link to a sales order

    @NotEmpty(message = "Purchase order must contain at least one item")
    @Valid
    private List<PurchaseItemRequest> items;

    public Long getSupplierId() { return supplierId; }
    public void setSupplierId(Long supplierId) { this.supplierId = supplierId; }

    public Long getOrderId() { return orderId; }
    public void setOrderId(Long orderId) { this.orderId = orderId; }

    public List<PurchaseItemRequest> getItems() { return items; }
    public void setItems(List<PurchaseItemRequest> items) { this.items = items; }

    public static class PurchaseItemRequest {
        @NotNull(message = "Material ID is required")
        private Long materialId;

        @NotNull(message = "Quantity is required")
        @DecimalMin(value = "0.001", message = "Quantity must be greater than zero")
        private BigDecimal quantity;

        public Long getMaterialId() { return materialId; }
        public void setMaterialId(Long materialId) { this.materialId = materialId; }

        public BigDecimal getQuantity() { return quantity; }
        public void setQuantity(BigDecimal quantity) { this.quantity = quantity; }
    }
}