package com.ordercraft.backend.repository;

import com.ordercraft.backend.entity.OrderBom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderBomRepository extends JpaRepository<OrderBom, Long> {
    List<OrderBom> findBySalesOrderId(Long orderId);
    void deleteBySalesOrderId(Long orderId);
}