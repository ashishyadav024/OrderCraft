package com.ordercraft.backend.repository;

import com.ordercraft.backend.entity.PurchaseOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder, Long> {
    List<PurchaseOrder> findBySalesOrderId(Long orderId);
    Optional<PurchaseOrder> findByPoNo(String poNo);
}