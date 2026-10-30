package com.ordercraft.backend.repository;

import com.ordercraft.backend.entity.BomItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BomItemRepository extends JpaRepository<BomItem, Long> {
    List<BomItem> findByProductId(Long productId);
    Optional<BomItem> findByProductIdAndMaterialId(Long productId, Long materialId);
    void deleteByProductId(Long productId);
}