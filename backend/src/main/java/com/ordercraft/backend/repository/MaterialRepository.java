package com.ordercraft.backend.repository;

import com.ordercraft.backend.entity.Material;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MaterialRepository extends JpaRepository<Material, Long> {
}