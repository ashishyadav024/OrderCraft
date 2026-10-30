package com.ordercraft.backend.service;

import com.ordercraft.backend.dto.BomItemRequest;
import com.ordercraft.backend.entity.BomItem;
import com.ordercraft.backend.entity.Material;
import com.ordercraft.backend.entity.Product;
import com.ordercraft.backend.repository.BomItemRepository;
import com.ordercraft.backend.repository.MaterialRepository;
import com.ordercraft.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

@Service
public class BomService {

    private final BomItemRepository bomItemRepository;
    private final ProductRepository productRepository;
    private final MaterialRepository materialRepository;

    public BomService(BomItemRepository bomItemRepository,
                      ProductRepository productRepository,
                      MaterialRepository materialRepository) {
        this.bomItemRepository = bomItemRepository;
        this.productRepository = productRepository;
        this.materialRepository = materialRepository;
    }

    public List<BomItem> getBomByProduct(Long productId) {
        if (!productRepository.existsById(productId)) {
            throw new IllegalArgumentException("Product not found with ID: " + productId);
        }
        return bomItemRepository.findByProductId(productId);
    }

    @Transactional
    public BomItem addMaterialToBom(Long productId, BomItemRequest request) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("Product not found with ID: " + productId));

        Material material = materialRepository.findById(request.getMaterialId())
                .orElseThrow(() -> new IllegalArgumentException("Material not found with ID: " + request.getMaterialId()));

        bomItemRepository.findByProductIdAndMaterialId(productId, material.getId())
                .ifPresent(item -> {
                    throw new IllegalStateException("Material is already part of this Product's BOM. Update the quantity instead.");
                });

        BomItem bomItem = new BomItem(product, material, request.getQuantityRequired());
        return bomItemRepository.save(bomItem);
    }

    @Transactional
    public BomItem updateBomItemQuantity(Long bomItemId, BigDecimal newQuantity) {
        BomItem item = bomItemRepository.findById(bomItemId)
                .orElseThrow(() -> new IllegalArgumentException("BOM item not found with ID: " + bomItemId));

        if (newQuantity == null || newQuantity.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Quantity must be greater than zero");
        }

        item.setQtyPerUnit(newQuantity);
        return bomItemRepository.save(item);
    }

    @Transactional
    public void removeMaterialFromBom(Long bomItemId) {
        if (!bomItemRepository.existsById(bomItemId)) {
            throw new IllegalArgumentException("BOM item not found with ID: " + bomItemId);
        }
        bomItemRepository.deleteById(bomItemId);
    }
}