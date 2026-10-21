package com.jharkhand.darshan.service;

import com.jharkhand.darshan.entity.Destination;
import com.jharkhand.darshan.repository.DestinationRepository;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DestinationService {

    private final DestinationRepository destinationRepository;

    public DestinationService(DestinationRepository destinationRepository) {
        this.destinationRepository = destinationRepository;
    }

    @Cacheable(value = "destinations", key = "'all'")
    public List<Destination> getAllDestinations() {
        return destinationRepository.findAll();
    }

    @Cacheable(value = "destinations", key = "'category_' + #category")
    public List<Destination> getByCategory(String category) {
        if ("all".equalsIgnoreCase(category)) {
            return destinationRepository.findAll();
        }
        return destinationRepository.findByCategoryIgnoreCase(category);
    }

    public List<Destination> searchDestinations(String query) {
        if (query == null || query.trim().isEmpty()) {
            return destinationRepository.findAll();
        }
        return destinationRepository.findByNameContainingIgnoreCaseOrDistrictContainingIgnoreCase(query, query);
    }

    public Optional<Destination> getDestinationById(Long id) {
        return destinationRepository.findById(id);
    }

    @CacheEvict(value = "destinations", allEntries = true)
    public Destination saveDestination(Destination destination) {
        return destinationRepository.save(destination);
    }

    @CacheEvict(value = "destinations", allEntries = true)
    public void deleteDestination(Long id) {
        destinationRepository.deleteById(id);
    }
}
