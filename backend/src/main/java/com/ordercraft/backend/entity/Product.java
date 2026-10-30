package com.ordercraft.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Table(name = "product")
@Getter
@Setter
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long id;

    @NotBlank(message = "SKU is required")
    private String sku;                       // unique in the database

    @NotBlank(message = "Name is required")
    private String name;

    // BigDecimal (not double) is the correct type for money
    @NotNull(message = "Unit price is required")
    @PositiveOrZero(message = "Unit price cannot be negative")
    @Column(name = "unit_price")
    private BigDecimal unitPrice;
}