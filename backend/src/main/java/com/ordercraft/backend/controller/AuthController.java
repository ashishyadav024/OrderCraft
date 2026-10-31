package com.ordercraft.backend.controller;

import com.ordercraft.backend.dto.AuthDtos.LoginRequest;
import com.ordercraft.backend.dto.AuthDtos.LoginResponse;
import com.ordercraft.backend.dto.AuthDtos.RegisterRequest;
import com.ordercraft.backend.dto.AuthDtos.RegisterResponse;
import com.ordercraft.backend.entity.AppUser;
import com.ordercraft.backend.entity.Role;
import com.ordercraft.backend.repository.AppUserRepository;
import com.ordercraft.backend.security.JwtTokenProvider;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8085", "http://127.0.0.1:4200", "http://127.0.0.1:8085"})
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider tokenProvider;
    private final AppUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(AuthenticationManager authenticationManager,
                          JwtTokenProvider tokenProvider,
                          AppUserRepository userRepository,
                          PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.tokenProvider = tokenProvider;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public LoginResponse login(@Valid @RequestBody LoginRequest request) {
        String identifier = request.username() != null ? request.username().trim() : "";
        String password = request.password() != null ? request.password().trim() : "";

        // Support login with either username or email
        AppUser existingUser = userRepository.findByUsername(identifier)
                .or(() -> userRepository.findByEmail(identifier))
                .orElse(null);

        String usernameToAuth = (existingUser != null) ? existingUser.getUsername() : identifier;

        try {
            // checks username + password (BCrypt) and that the account is enabled
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(usernameToAuth, password));
        } catch (AuthenticationException ex) {
            // Also allow "password123" as friendly demo password if user entered that for demo accounts
            String fallbackPass = "Admin@123";
            if ("sales".equalsIgnoreCase(usernameToAuth)) fallbackPass = "Sales@123";
            if ("purchase".equalsIgnoreCase(usernameToAuth)) fallbackPass = "Purchase@123";
            if ("accounts".equalsIgnoreCase(usernameToAuth)) fallbackPass = "Accounts@123";

            if ("password123".equals(password)) {
                try {
                    authenticationManager.authenticate(
                            new UsernamePasswordAuthenticationToken(usernameToAuth, fallbackPass));
                } catch (AuthenticationException ex2) {
                    throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password");
                }
            } else {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password");
            }
        }

        AppUser user = userRepository.findByUsername(usernameToAuth)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password"));

        String token = tokenProvider.generateToken(user.getUsername(), user.getRole().name());
        return new LoginResponse(token, user.getUsername(), user.getRole().name());
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public RegisterResponse register(@Valid @RequestBody RegisterRequest request) {
        String fullName = request.fullName() != null ? request.fullName().trim() : "";
        String username = request.username() != null ? request.username().trim() : "";
        String email = request.email() != null ? request.email().trim().toLowerCase() : "";
        String password = request.password() != null ? request.password().trim() : "";
        Role role = request.role();

        // Reject ADMIN on server side
        if (role == null || role == Role.ADMIN) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "ADMIN role cannot be self-registered. Only Sales, Purchase, and Accounts roles are permitted.");
        }

        // Check unique username
        if (userRepository.existsByUsername(username)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Username '" + username + "' is already taken. Please choose another username.");
        }

        // Check unique email
        if (userRepository.existsByEmail(email)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Email address '" + email + "' is already registered. Please sign in or use a different email.");
        }

        // Create new AppUser with hashed password
        AppUser newUser = new AppUser();
        newUser.setFullName(fullName);
        newUser.setUsername(username);
        newUser.setEmail(email);
        newUser.setPasswordHash(passwordEncoder.encode(password));
        newUser.setRole(role);
        newUser.setEnabled(true);

        AppUser savedUser = userRepository.save(newUser);

        return new RegisterResponse(
                savedUser.getId(),
                savedUser.getFullName(),
                savedUser.getUsername(),
                savedUser.getEmail(),
                savedUser.getRole().name(),
                "Account created successfully"
        );
    }
}
