package com.ordercraft.backend.repository;

import com.ordercraft.backend.entity.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
    Optional<Invoice> findBySalesOrderId(Long orderId);
    Optional<Invoice> findByInvoiceNo(String invoiceNo);
}