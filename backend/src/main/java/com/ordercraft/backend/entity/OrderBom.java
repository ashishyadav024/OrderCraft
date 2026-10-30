package com.ordercraft.backend.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "order_bom")
public class OrderBom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_bom_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    private SalesOrder salesOrder;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "material_id", referencedColumnName = "material_id", nullable = false)
    private Material material;

    @Column(name = "required_qty", nullable = false, precision = 12, scale = 3)
    private BigDecimal requiredQty;

    @Column(name = "available_qty", nullable = false, precision = 12, scale = 3)
    private BigDecimal availableQty;

    @Column(name = "shortage_qty", nullable = false, precision = 12, scale = 3)
    private BigDecimal shortageQty;

    public OrderBom() {}

    public OrderBom(SalesOrder salesOrder, Material material, BigDecimal requiredQty,
                    BigDecimal availableQty, BigDecimal shortageQty) {
        this.salesOrder = salesOrder;
        this.material = material;
        this.requiredQty = requiredQty;
        this.availableQty = availableQty;
        this.shortageQty = shortageQty;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public SalesOrder getSalesOrder() { return salesOrder; }
    public void setSalesOrder(SalesOrder salesOrder) { this.salesOrder = salesOrder; }

    public Material getMaterial() { return material; }
    public void setMaterial(Material material) { this.material = material; }

    public BigDecimal getRequiredQty() { return requiredQty; }
    public void setRequiredQty(BigDecimal requiredQty) { this.requiredQty = requiredQty; }

    public BigDecimal getAvailableQty() { return availableQty; }
    public void setAvailableQty(BigDecimal availableQty) { this.availableQty = availableQty; }

    public BigDecimal getShortageQty() { return shortageQty; }
    public void setShortageQty(BigDecimal shortageQty) { this.shortageQty = shortageQty; }
}