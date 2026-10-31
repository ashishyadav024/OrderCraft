package com.ordercraft.backend.dto;

import com.ordercraft.backend.entity.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

// Small "shapes" of data sent to / from the API. Records need Java 17+.
public class AuthDtos {

    public record LoginRequest(
            @NotBlank(message = "Username or email is required") String username,
            @NotBlank(message = "Password is required") String password) {
    }

    public record LoginResponse(
            String token,
            String username,
            String role,
            String fullName,
            String email) {
        public LoginResponse(String token, String username, String role) {
            this(token, username, role, null, null);
        }
    }

    public record RegisterRequest(
            @NotBlank(message = "Full Name is required")
            @Size(min = 2, max = 100, message = "Full Name must be between 2 and 100 characters")
            String fullName,

            @NotBlank(message = "Username is required")
            @Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters")
            String username,

            @NotBlank(message = "Email is required")
            @Email(message = "Valid email address is required")
            String email,

            @NotBlank(message = "Password is required")
            @Size(min = 8, message = "Password must be at least 8 characters")
            String password,

            String confirmPassword,

            @NotNull(message = "Role is required")
            Role role
    ) {
    }

    // Never includes the password hash
    public record RegisterResponse(
            Long id,
            String fullName,
            String username,
            String email,
            String role,
            String message
    ) {
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
