package com.ordercraft.backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    // Lets the Angular dev server (port 4200) call the API, including the Authorization header
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration cors = new CorsConfiguration();
        cors.setAllowedOrigins(List.of("http://localhost:4200", "http://localhost:8085", "http://127.0.0.1:4200", "http://127.0.0.1:8085"));
        cors.setAllowedMethods(List.of("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
        cors.setAllowedHeaders(List.of("*"));
        cors.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", cors);
        return source;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http,
                                           JwtTokenProvider tokenProvider,
                                           CustomUserDetailsService userDetailsService) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)                 // not needed for token-based APIs
                .cors(Customizer.withDefaults())
                .headers(headers -> headers.frameOptions(frame -> frame.sameOrigin())) // for H2 console
                .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                // not logged in -> 401 (wrong role -> 403), so Angular can tell them apart
                .exceptionHandling(e -> e.authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED)))
                .authorizeHttpRequests(auth -> auth
                        // RULES ARE CHECKED TOP TO BOTTOM: the first match wins.
                        // Authenticated auth endpoints
                        .requestMatchers("/api/auth/change-password").authenticated()
                        // Public auth endpoints: /api/auth/login, /api/auth/register
                        .requestMatchers("/api/auth/login", "/api/auth/register").permitAll()
                        .requestMatchers("/error").permitAll()
                        .requestMatchers("/h2-console/**").permitAll()
                        .requestMatchers("/api/users/**").hasRole("ADMIN")

                        // Invoices & payments: all authenticated roles may read; ADMIN & ACCOUNTS may change
                        .requestMatchers(HttpMethod.GET, "/api/invoices/**", "/api/payments/**")
                        .authenticated()
                        .requestMatchers("/api/invoices/**", "/api/payments/**")
                        .hasAnyRole("ADMIN", "ACCOUNTS")

                        // Everything else: any logged-in user may READ
                        .requestMatchers(HttpMethod.GET, "/api/**").authenticated()

                        // Who may CHANGE what
                        .requestMatchers("/api/customers/**", "/api/products/**", "/api/orders/**")
                        .hasAnyRole("ADMIN", "SALES")
                        .requestMatchers("/api/suppliers/**", "/api/materials/**", "/api/purchase-orders/**")
                        .hasAnyRole("ADMIN", "PURCHASE")

                        // Anything under /api not listed above: ADMIN only
                        .requestMatchers("/api/**").hasRole("ADMIN")

                        // Allow all static files and client-side SPA Angular routes
                        .anyRequest().permitAll())
                .addFilterBefore(new JwtAuthenticationFilter(tokenProvider, userDetailsService),
                        UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
