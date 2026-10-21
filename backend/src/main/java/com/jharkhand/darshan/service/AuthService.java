package com.jharkhand.darshan.service;

import com.jharkhand.darshan.dto.AuthResponse;
import com.jharkhand.darshan.dto.LoginRequest;
import com.jharkhand.darshan.entity.User;
import com.jharkhand.darshan.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class AuthService {

    private final UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public AuthResponse login(LoginRequest req) {
        String email = (req.getEmail() != null && !req.getEmail().trim().isEmpty())
                ? req.getEmail()
                : "user@jharkhand.gov.in";
        String role = (req.getRole() != null) ? req.getRole().toUpperCase() : "TOURIST";

        Optional<User> existing = userRepository.findByEmail(email);
        User user;
        if (existing.isPresent()) {
            user = existing.get();
        } else {
            String defaultName = switch (role) {
                case "LOCAL_SELLER", "SELLER" -> "Tribal Artisan Cooperative";
                case "GOVT_ADMIN", "ADMIN" -> "Tourism Officer";
                default -> "Satyam Kumar";
            };
            user = new User(email, defaultName, role, "+91 98765 43210", "Ranchi");
            user = userRepository.save(user);
        }

        String mockJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." + UUID.randomUUID().toString();
        return new AuthResponse(mockJwt, user.getEmail(), user.getName(), user.getRole(), "Login successful");
    }
}
