package com.jharkhand.darshan.repository;

import com.jharkhand.darshan.entity.TourismServiceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TourismServiceRepository extends JpaRepository<TourismServiceEntity, String> {
}
