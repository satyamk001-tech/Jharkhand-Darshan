package com.jharkhand.darshan.service;

import com.jharkhand.darshan.entity.EmergencyContact;
import com.jharkhand.darshan.repository.EmergencyContactRepository;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmergencyService {

    private final EmergencyContactRepository emergencyContactRepository;

    public EmergencyService(EmergencyContactRepository emergencyContactRepository) {
        this.emergencyContactRepository = emergencyContactRepository;
    }

    @Cacheable(value = "emergency_contacts", key = "'all'")
    public List<EmergencyContact> getAllContacts() {
        return emergencyContactRepository.findAll();
    }
}
