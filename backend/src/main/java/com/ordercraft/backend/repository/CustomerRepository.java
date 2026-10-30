package com.ordercraft.backend.repository;

import com.ordercraft.backend.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

// Extending JpaRepository gives you save(), findAll(), findById(), deleteById()...
// with ZERO code written by you. Spring generates the SQL.
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}