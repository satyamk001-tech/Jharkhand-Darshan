package com.jharkhand.darshan.controller;

import com.jharkhand.darshan.dto.ChatMessageDTO;
import com.jharkhand.darshan.entity.LiveTour;
import com.jharkhand.darshan.service.LiveTourService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/live-tours")
@Tag(name = "Live Virtual Tourism", description = "Real-time live streaming tours, live chat feed, and likes counter")
public class LiveTourController {

    private final LiveTourService liveTourService;

    public LiveTourController(LiveTourService liveTourService) {
        this.liveTourService = liveTourService;
    }

    @GetMapping
    @Operation(summary = "Get list of all live & scheduled virtual tours")
    public ResponseEntity<List<LiveTour>> getTours(@RequestParam(required = false) String status) {
        if (status != null && !status.trim().isEmpty()) {
            return ResponseEntity.ok(liveTourService.getToursByStatus(status));
        }
        return ResponseEntity.ok(liveTourService.getAllTours());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get single tour details")
    public ResponseEntity<LiveTour> getTour(@PathVariable Long id) {
        return liveTourService.getTourById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/{id}/like")
    @Operation(summary = "Increment live tour like count (Atomic Redis Counter)")
    public ResponseEntity<Map<String, Object>> likeTour(@PathVariable Long id) {
        Long totalLikes = liveTourService.incrementLikes(id);
        return ResponseEntity.ok(Map.of("tourId", id, "likes", totalLikes));
    }

    @GetMapping("/{id}/likes")
    @Operation(summary = "Get current like count for a tour")
    public ResponseEntity<Map<String, Object>> getTourLikes(@PathVariable Long id) {
        Long totalLikes = liveTourService.getLikes(id);
        return ResponseEntity.ok(Map.of("tourId", id, "likes", totalLikes));
    }

    @GetMapping("/{id}/chat")
    @Operation(summary = "Get recent live chat messages for this tour")
    public ResponseEntity<List<ChatMessageDTO>> getChatMessages(@PathVariable Long id) {
        return ResponseEntity.ok(liveTourService.getChatMessages(id));
    }

    @PostMapping("/{id}/chat")
    @Operation(summary = "Post a new live chat message to the tour stream")
    public ResponseEntity<ChatMessageDTO> postChatMessage(@PathVariable Long id, @RequestBody ChatMessageDTO message) {
        liveTourService.addChatMessage(id, message);
        return ResponseEntity.ok(message);
    }
}
