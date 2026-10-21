package com.jharkhand.darshan.entity;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "emergency_contacts")
public class EmergencyContact implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String number;

    private String availableTime;
    private String department;
    private String type; // 'police', 'ambulance', 'tourist_police', 'disaster', 'women_helpline'

    public EmergencyContact() {}

    public EmergencyContact(String title, String number, String availableTime, String department, String type) {
        this.title = title;
        this.number = number;
        this.availableTime = availableTime;
        this.department = department;
        this.type = type;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getNumber() { return number; }
    public void setNumber(String number) { this.number = number; }

    public String getAvailableTime() { return availableTime; }
    public void setAvailableTime(String availableTime) { this.availableTime = availableTime; }

    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
}
