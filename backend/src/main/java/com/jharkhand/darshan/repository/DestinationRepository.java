package com.jharkhand.darshan.repository;

import com.jharkhand.darshan.entity.Destination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DestinationRepository extends JpaRepository<Destination, Long> {
    List<Destination> findByCategoryIgnoreCase(String category);
    List<Destination> findByDistrictIgnoreCase(String district);
    List<Destination> findByNameContainingIgnoreCaseOrDistrictContainingIgnoreCase(String name, String district);
    List<Destination> findByIsPopularTrue();
}
