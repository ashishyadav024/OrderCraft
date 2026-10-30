package com.ordercraft.backend.repository;

import com.ordercraft.backend.entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {

    // Spring writes the SQL for these two from the method names alone
    Optional<AppUser> findByUsername(String username);

    boolean existsByUsername(String username);
}