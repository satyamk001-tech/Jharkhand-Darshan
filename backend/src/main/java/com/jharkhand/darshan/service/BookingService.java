package com.jharkhand.darshan.service;

import com.jharkhand.darshan.dto.BookingRequest;
import com.jharkhand.darshan.entity.Booking;
import com.jharkhand.darshan.repository.BookingRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public Booking createBooking(BookingRequest req) {
        Booking booking = new Booking();
        String refCode = "JKD-" + System.currentTimeMillis() % 1000000 + "-" + UUID.randomUUID().toString().substring(0, 4).toUpperCase();
        booking.setBookingRef(refCode);
        booking.setCategory(req.getCategory());
        booking.setTitle(req.getTitle());
        booking.setLocation(req.getLocation());
        booking.setBookingDate(req.getBookingDate());
        booking.setDurationOrPassType(req.getDurationOrPassType());
        booking.setGuestsOrTickets(req.getGuestsOrTickets());
        booking.setTotalPrice(req.getTotalPrice());
        booking.setCustomerName(req.getCustomerName());
        booking.setCustomerEmail(req.getCustomerEmail());
        booking.setCustomerPhone(req.getCustomerPhone());
        booking.setStatus("CONFIRMED");

        return bookingRepository.save(booking);
    }

    public Optional<Booking> getByReference(String bookingRef) {
        return bookingRepository.findByBookingRef(bookingRef);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public List<Booking> getByCategory(String category) {
        return bookingRepository.findByCategory(category);
    }
}
