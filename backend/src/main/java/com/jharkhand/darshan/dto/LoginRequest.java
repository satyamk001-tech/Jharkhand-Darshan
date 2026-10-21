package com.jharkhand.darshan.dto;

import java.io.Serializable;

public class LoginRequest implements Serializable {
    private String email;
    private String password;
    private String role; // 'tourist', 'seller', 'admin'

    public LoginRequest() {}

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
}
