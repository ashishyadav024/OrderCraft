package com.ordercraft.backend.service;

import com.ordercraft.backend.dto.AuthDtos.UserRequest;
import com.ordercraft.backend.dto.AuthDtos.UserResponse;
import com.ordercraft.backend.entity.AppUser;
import com.ordercraft.backend.repository.AppUserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class UserService {

    private final AppUserRepository repository;
    private final PasswordEncoder passwordEncoder;

    public UserService(AppUserRepository repository, PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<UserResponse> getAll() {
        return repository.findAll().stream().map(this::toResponse).toList();
    }

    public UserResponse create(UserRequest request) {
        if (repository.existsByUsername(request.username())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Username already exists");
        }
        AppUser user = new AppUser();
        user.setUsername(request.username());
        user.setPasswordHash(passwordEncoder.encode(request.password()));   // hash it!
        user.setRole(request.role());
        user.setEnabled(true);
        return toResponse(repository.save(user));
    }

    public UserResponse setEnabled(Long id, boolean enabled) {
        AppUser user = repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "User not found with id " + id));
        user.setEnabled(enabled);
        return toResponse(repository.save(user));
    }

    private UserResponse toResponse(AppUser u) {
        return new UserResponse(u.getId(), u.getUsername(), u.getRole().name(), u.isEnabled());
    }
}