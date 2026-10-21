package com.jharkhand.darshan.repository;

import com.jharkhand.darshan.entity.LiveTour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LiveTourRepository extends JpaRepository<LiveTour, Long> {
    List<LiveTour> findByStatusIgnoreCase(String status);
}
