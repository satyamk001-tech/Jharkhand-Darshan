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
        String rawRole = (req.getRole() != null) ? req.getRole().toUpperCase() : "TOURIST";
        String normalizedRole = "TOURIST";
        if (rawRole.contains("GUIDE") || rawRole.contains("SELLER")) {
            normalizedRole = "GUIDE_SELLER";
        } else if (rawRole.contains("ADMIN")) {
            normalizedRole = "ADMIN";
        }

        Optional<User> existing = userRepository.findByEmail(email);
        User user;
        if (existing.isPresent()) {
            user = existing.get();
        } else {
            String defaultName = switch (normalizedRole) {
                case "GUIDE_SELLER" -> "Ravi Kumar (Guide & Seller)";
                case "ADMIN" -> "Rajesh Murmu (Govt Admin)";
                default -> "Satyam Kumar (Tourist)";
            };
            user = new User(email, defaultName, normalizedRole, "+91 98765 43210", "Ranchi");
            user = userRepository.save(user);
        }

        String mockJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." + UUID.randomUUID().toString();
        return new AuthResponse(mockJwt, user.getEmail(), user.getName(), user.getRole(), "Login successful");
    }
}
