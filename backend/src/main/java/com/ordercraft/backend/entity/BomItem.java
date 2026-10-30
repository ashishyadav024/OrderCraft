package com.ordercraft.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;

@Entity
@Table(name = "bom_item", uniqueConstraints = {
        @UniqueConstraint(name = "uq_bom", columnNames = {"product_id", "material_id"})
})
public class BomItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bom_item_id")
    private Long id;

    @NotNull(message = "Product is mandatory")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "product_id", referencedColumnName = "product_id", nullable = false)
    private Product product;

    @NotNull(message = "Material is mandatory")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "material_id", referencedColumnName = "material_id", nullable = false)
    private Material material;

    @NotNull(message = "Quantity per unit cannot be null")
    @DecimalMin(value = "0.001", message = "Quantity per unit must be greater than 0")
    @Column(name = "qty_per_unit", nullable = false, precision = 12, scale = 3)
    private BigDecimal qtyPerUnit;

    public BomItem() {}

    public BomItem(Product product, Material material, BigDecimal qtyPerUnit) {
        this.product = product;
        this.material = material;
        this.qtyPerUnit = qtyPerUnit;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Material getMaterial() {
        return material;
    }

    public void setMaterial(Material material) {
        this.material = material;
    }

    public BigDecimal getQtyPerUnit() {
        return qtyPerUnit;
    }

    public void setQtyPerUnit(BigDecimal qtyPerUnit) {
        this.qtyPerUnit = qtyPerUnit;
    }
}