package com.jharkhand.darshan.controller;

import com.jharkhand.darshan.dto.BookingRequest;
import com.jharkhand.darshan.entity.Booking;
import com.jharkhand.darshan.service.BookingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@Tag(name = "Bookings", description = "Endpoints for reserving hotels, guides, festival passes, and transportation")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping
    @Operation(summary = "Create a new booking and receive a unique booking reference code")
    public ResponseEntity<Booking> createBooking(@Valid @RequestBody BookingRequest request) {
        Booking created = bookingService.createBooking(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @GetMapping
    @Operation(summary = "Get all bookings or filter by category")
    public ResponseEntity<List<Booking>> getBookings(@RequestParam(required = false) String category) {
        if (category != null && !category.trim().isEmpty()) {
            return ResponseEntity.ok(bookingService.getByCategory(category));
        }
        return ResponseEntity.ok(bookingService.getAllBookings());
    }

    @GetMapping("/{bookingRef}")
    @Operation(summary = "Retrieve booking details using booking reference code")
    public ResponseEntity<Booking> getBookingByRef(@PathVariable String bookingRef) {
        return bookingService.getByReference(bookingRef)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
