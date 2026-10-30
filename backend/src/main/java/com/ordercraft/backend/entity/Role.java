package com.ordercraft.backend.entity;

// Must match the CHECK constraint on app_user.role in the database
public enum Role {
    ADMIN,
    SALES,
    PURCHASE,
    ACCOUNTS
}