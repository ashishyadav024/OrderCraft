package com.ordercraft.backend.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.LocalDate;

public class InvoiceCreateRequest {

    @NotNull(message = "Order ID is required")
    private Long orderId;

    private LocalDate dueDate;

    @DecimalMin(value = "0.00", message = "Tax rate cannot be negative")
    private BigDecimal taxRatePercent = BigDecimal.valueOf(18.0); // Default 18% GST

    public Long getOrderId() { return orderId; }
    public void setOrderId(Long orderId) { this.orderId = orderId; }

    public LocalDate getDueDate() { return dueDate; }
    public void setDueDate(LocalDate dueDate) { this.dueDate = dueDate; }

    public BigDecimal getTaxRatePercent() { return taxRatePercent; }
    public void setTaxRatePercent(BigDecimal taxRatePercent) { this.taxRatePercent = taxRatePercent; }
}