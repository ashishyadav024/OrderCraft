package com.ordercraft.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

// One object = one row of the "app_user" table
@Entity
@Table(name = "app_user")
@Getter
@Setter
@NoArgsConstructor
public class AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    // Only the BCrypt HASH is stored, never the real password
    @Column(name = "password_hash", nullable = false)
    private String passwordHash;

    // stored as text (ADMIN, SALES...) in the VARCHAR column
    @Enumerated(EnumType.STRING)
    @JdbcTypeCode(SqlTypes.VARCHAR)
    @Column(nullable = false)
    private Role role;

    @Column(nullable = false)
    private boolean enabled = true;
}