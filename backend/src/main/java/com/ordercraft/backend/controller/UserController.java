package com.ordercraft.backend.controller;

import com.ordercraft.backend.dto.AuthDtos.UserRequest;
import com.ordercraft.backend.dto.AuthDtos.UserResponse;
import com.ordercraft.backend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// ADMIN-only (enforced in SecurityConfig): create users and enable/disable them
@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public List<UserResponse> getAll() {
        return service.getAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponse create(@Valid @RequestBody UserRequest request) {
        return service.create(request);
    }

    // PATCH /api/users/3/enabled?value=false
    @PatchMapping("/{id}/enabled")
    public UserResponse setEnabled(@PathVariable Long id, @RequestParam boolean value) {
        return service.setEnabled(id, value);
    }
}