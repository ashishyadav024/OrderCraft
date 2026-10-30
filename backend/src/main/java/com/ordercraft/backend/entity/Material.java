package com.ordercraft.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "material")
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Material {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "material_id")
    private Long id;

    @NotBlank(message = "Code is required")
    @Column(nullable = false, unique = true)
    private String code;                      // unique in the database

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Unit is required (kg, pcs, m ...)")
    private String unit;

    @NotNull
    @PositiveOrZero(message = "Stock cannot be negative")
    @Column(name = "stock_qty")
    private BigDecimal stockQty = BigDecimal.ZERO;

    @NotNull(message = "Unit cost is required")
    @PositiveOrZero(message = "Unit cost cannot be negative")
    @Column(name = "unit_cost")
    private BigDecimal unitCost;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "supplier_id")
    private Supplier supplier;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Material material = (Material) o;
        if (code != null && material.code != null) {
            return Objects.equals(code, material.code);
        }
        return id != null && Objects.equals(id, material.id);
    }

    @Override
    public int hashCode() {
        return code != null ? Objects.hash(code) : Objects.hash(id);
    }
}
