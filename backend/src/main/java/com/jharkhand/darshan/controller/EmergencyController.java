package com.jharkhand.darshan.controller;

import com.jharkhand.darshan.entity.EmergencyContact;
import com.jharkhand.darshan.service.EmergencyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/emergency")
@Tag(name = "Emergency Helplines", description = "Emergency SOS contact numbers and 24/7 helplines across Jharkhand")
public class EmergencyController {

    private final EmergencyService emergencyService;

    public EmergencyController(EmergencyService emergencyService) {
        this.emergencyService = emergencyService;
    }

    @GetMapping
    @Operation(summary = "Get list of all emergency helplines and quick dial contacts")
    public ResponseEntity<List<EmergencyContact>> getEmergencyContacts() {
        return ResponseEntity.ok(emergencyService.getAllContacts());
    }
}
