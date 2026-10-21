package com.jharkhand.darshan.entity;

import jakarta.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
public class Booking implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String bookingRef;

    @Column(nullable = false)
    private String category; // 'hotels', 'guides', 'festivals', 'transport'

    @Column(nullable = false)
    private String title;

    private String location;
    private String bookingDate;
    private String durationOrPassType;
    private Integer guestsOrTickets;
    private Double totalPrice;

    private String customerName;
    private String customerEmail;
    private String customerPhone;

    private String status; // 'CONFIRMED', 'PENDING', 'CANCELLED'

    private LocalDateTime createdAt;

    public Booking() {
        this.createdAt = LocalDateTime.now();
        this.status = "CONFIRMED";
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getBookingRef() { return bookingRef; }
    public void setBookingRef(String bookingRef) { this.bookingRef = bookingRef; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getBookingDate() { return bookingDate; }
    public void setBookingDate(String bookingDate) { this.bookingDate = bookingDate; }

    public String getDurationOrPassType() { return durationOrPassType; }
    public void setDurationOrPassType(String durationOrPassType) { this.durationOrPassType = durationOrPassType; }

    public Integer getGuestsOrTickets() { return guestsOrTickets; }
    public void setGuestsOrTickets(Integer guestsOrTickets) { this.guestsOrTickets = guestsOrTickets; }

    public Double getTotalPrice() { return totalPrice; }
    public void setTotalPrice(Double totalPrice) { this.totalPrice = totalPrice; }

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public String getCustomerEmail() { return customerEmail; }
    public void setCustomerEmail(String customerEmail) { this.customerEmail = customerEmail; }

    public String getCustomerPhone() { return customerPhone; }
    public void setCustomerPhone(String customerPhone) { this.customerPhone = customerPhone; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
