package com.jharkhand.darshan.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.io.Serializable;

public class BookingRequest implements Serializable {
    @NotBlank(message = "Category is required")
    private String category; // 'hotels', 'guides', 'festivals', 'transport'

    @NotBlank(message = "Title is required")
    private String title;

    private String location;
    private String bookingDate;
    private String durationOrPassType;

    @NotNull(message = "Guests or tickets count is required")
    private Integer guestsOrTickets;

    @NotNull(message = "Total price is required")
    private Double totalPrice;

    @NotBlank(message = "Customer name is required")
    private String customerName;

    @NotBlank(message = "Customer email is required")
    private String customerEmail;

    private String customerPhone;

    public BookingRequest() {}

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
}
