package com.ordercraft.backend.dto;

import java.math.BigDecimal;

public class MaterialRequirementResponse {

    private Long materialId;
    private String materialCode;
    private String materialName;
    private String unit;
    private BigDecimal requiredQty;
    private BigDecimal availableQty;
    private BigDecimal shortageQty;
    private Long supplierId;
    private String supplierName;

    public MaterialRequirementResponse(Long materialId, String materialCode, String materialName,
                                       String unit, BigDecimal requiredQty, BigDecimal availableQty,
                                       BigDecimal shortageQty, Long supplierId, String supplierName) {
        this.materialId = materialId;
        this.materialCode = materialCode;
        this.materialName = materialName;
        this.unit = unit;
        this.requiredQty = requiredQty;
        this.availableQty = availableQty;
        this.shortageQty = shortageQty;
        this.supplierId = supplierId;
        this.supplierName = supplierName;
    }

    public Long getMaterialId() { return materialId; }
    public String getMaterialCode() { return materialCode; }
    public String getMaterialName() { return materialName; }
    public String getUnit() { return unit; }
    public BigDecimal getRequiredQty() { return requiredQty; }
    public BigDecimal getAvailableQty() { return availableQty; }
    public BigDecimal getShortageQty() { return shortageQty; }
    public Long getSupplierId() { return supplierId; }
    public String getSupplierName() { return supplierName; }
}