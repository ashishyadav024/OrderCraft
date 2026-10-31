package com.ordercraft.backend.security;

import com.ordercraft.backend.entity.AppUser;
import com.ordercraft.backend.repository.AppUserRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

// Tells Spring Security how to find a user in OUR app_user table
@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final AppUserRepository repository;

    public CustomUserDetailsService(AppUserRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String identifier) throws UsernameNotFoundException {
        // Allows login with either username or email
        AppUser user = repository.findByUsername(identifier)
                .or(() -> repository.findByEmail(identifier))
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username/email: " + identifier));

        return User.withUsername(user.getUsername())
                .password(user.getPasswordHash())
                .roles(user.getRole().name())          // becomes ROLE_ADMIN, ROLE_SALES ...
                .disabled(!user.isEnabled())
                .build();
    }
}
