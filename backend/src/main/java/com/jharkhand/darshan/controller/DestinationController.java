package com.jharkhand.darshan.controller;

import com.jharkhand.darshan.entity.Destination;
import com.jharkhand.darshan.service.DestinationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/destinations")
@Tag(name = "Destinations", description = "Endpoints for exploring Jharkhand destinations, categories, and 3D views")
public class DestinationController {

    private final DestinationService destinationService;

    public DestinationController(DestinationService destinationService) {
        this.destinationService = destinationService;
    }

    @GetMapping
    @Operation(summary = "Get all destinations, optionally filtered by category or search query")
    public ResponseEntity<List<Destination>> getDestinations(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String search) {
        
        if (search != null && !search.trim().isEmpty()) {
            return ResponseEntity.ok(destinationService.searchDestinations(search));
        }
        if (category != null && !category.trim().isEmpty()) {
            return ResponseEntity.ok(destinationService.getByCategory(category));
        }
        return ResponseEntity.ok(destinationService.getAllDestinations());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get a single destination by ID")
    public ResponseEntity<Destination> getDestinationById(@PathVariable Long id) {
        return destinationService.getDestinationById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @Operation(summary = "Create or update a destination (Admin)")
    public ResponseEntity<Destination> createDestination(@RequestBody Destination destination) {
        return ResponseEntity.ok(destinationService.saveDestination(destination));
    }
}
