package com.ordercraft.backend.dto;

import com.ordercraft.backend.entity.Role;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

// Small "shapes" of data sent to / from the API. Records need Java 17+.
public class AuthDtos {

    public record LoginRequest(
            @NotBlank(message = "Username is required") String username,
            @NotBlank(message = "Password is required") String password) {
    }

    public record LoginResponse(String token, String username, String role) {
    }

    public record UserRequest(
            @NotBlank(message = "Username is required") String username,
            @NotBlank @Size(min = 6, message = "Password must be at least 6 characters") String password,
            @NotNull(message = "Role is required") Role role) {
    }

    // Never includes the password hash
    public record UserResponse(Long id, String username, String role, boolean enabled) {
    }
}