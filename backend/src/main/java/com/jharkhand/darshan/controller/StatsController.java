package com.jharkhand.darshan.controller;

import com.jharkhand.darshan.dto.StatsResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/stats")
@Tag(name = "Tourism Statistics", description = "Live statistics counters for visitors, destinations, tours, and partners")
public class StatsController {

    @GetMapping
    @Operation(summary = "Get current tourism statistics")
    public ResponseEntity<StatsResponse> getStats() {
        return ResponseEntity.ok(new StatsResponse("2.8M+", "50+", "25+", "500+"));
    }
}
