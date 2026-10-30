package com.ordercraft.backend.controller;

import com.ordercraft.backend.dto.AuthDtos.LoginRequest;
import com.ordercraft.backend.dto.AuthDtos.LoginResponse;
import com.ordercraft.backend.entity.AppUser;
import com.ordercraft.backend.repository.AppUserRepository;
import com.ordercraft.backend.security.JwtTokenProvider;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

// The only public endpoint: POST /api/auth/login
@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8085", "http://127.0.0.1:4200", "http://127.0.0.1:8085"})
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider tokenProvider;
    private final AppUserRepository userRepository;

    public AuthController(AuthenticationManager authenticationManager,
                          JwtTokenProvider tokenProvider,
                          AppUserRepository userRepository) {
        this.authenticationManager = authenticationManager;
        this.tokenProvider = tokenProvider;
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public LoginResponse login(@Valid @RequestBody LoginRequest request) {
        String username = request.username() != null ? request.username().trim() : "";
        String password = request.password() != null ? request.password().trim() : "";

        try {
            // checks username + password (BCrypt) and that the account is enabled
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password));
        } catch (AuthenticationException ex) {
            // Also allow "password123" as friendly demo password if user entered that
            String fallbackPass = "Admin@123";
            if ("sales".equalsIgnoreCase(username)) fallbackPass = "Sales@123";
            if ("purchase".equalsIgnoreCase(username)) fallbackPass = "Purchase@123";
            if ("accounts".equalsIgnoreCase(username)) fallbackPass = "Accounts@123";

            if ("password123".equals(password)) {
                try {
                    authenticationManager.authenticate(
                            new UsernamePasswordAuthenticationToken(username, fallbackPass));
                } catch (AuthenticationException ex2) {
                    throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password");
                }
            } else {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password");
            }
        }

        AppUser user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password"));

        String token = tokenProvider.generateToken(user.getUsername(), user.getRole().name());
        return new LoginResponse(token, user.getUsername(), user.getRole().name());
    }
}
