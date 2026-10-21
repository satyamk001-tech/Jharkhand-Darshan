package com.jharkhand.darshan.repository;

import com.jharkhand.darshan.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    Optional<Booking> findByBookingRef(String bookingRef);
    List<Booking> findByCategory(String category);
    List<Booking> findByCustomerEmail(String customerEmail);
}
