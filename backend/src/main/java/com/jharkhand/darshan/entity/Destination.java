package com.jharkhand.darshan.entity;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "destinations")
public class Destination implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String district;

    @Column(nullable = false)
    private String category; // 'waterfall', 'heritage', 'spiritual', 'wildlife', 'nature', 'adventure', 'craft'

    private String tag;

    @Column(length = 2000)
    private String description;

    @Column(length = 4000)
    private String fullDescription;

    private Double rating;
    private Integer reviewsCount;
    private String entryFee;
    private String timings;
    private String bestTimeToVisit;
    private Double latitude;
    private Double longitude;

    @Column(length = 1000)
    private String imageUrl;

    private String virtualTourUrl;
    private Boolean isPopular;

    public Destination() {}

    public Destination(String name, String district, String category, String tag, String description,
                       Double rating, Integer reviewsCount, String entryFee, String timings,
                       String bestTimeToVisit, Double latitude, Double longitude, String imageUrl, Boolean isPopular) {
        this.name = name;
        this.district = district;
        this.category = category;
        this.tag = tag;
        this.description = description;
        this.rating = rating;
        this.reviewsCount = reviewsCount;
        this.entryFee = entryFee;
        this.timings = timings;
        this.bestTimeToVisit = bestTimeToVisit;
        this.latitude = latitude;
        this.longitude = longitude;
        this.imageUrl = imageUrl;
        this.isPopular = isPopular;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDistrict() { return district; }
    public void setDistrict(String district) { this.district = district; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getTag() { return tag; }
    public void setTag(String tag) { this.tag = tag; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getFullDescription() { return fullDescription; }
    public void setFullDescription(String fullDescription) { this.fullDescription = fullDescription; }

    public Double getRating() { return rating; }
    public void setRating(Double rating) { this.rating = rating; }

    public Integer getReviewsCount() { return reviewsCount; }
    public void setReviewsCount(Integer reviewsCount) { this.reviewsCount = reviewsCount; }

    public String getEntryFee() { return entryFee; }
    public void setEntryFee(String entryFee) { this.entryFee = entryFee; }

    public String getTimings() { return timings; }
    public void setTimings(String timings) { this.timings = timings; }

    public String getBestTimeToVisit() { return bestTimeToVisit; }
    public void setBestTimeToVisit(String bestTimeToVisit) { this.bestTimeToVisit = bestTimeToVisit; }

    public Double getLatitude() { return latitude; }
    public void setLatitude(Double latitude) { this.latitude = latitude; }

    public Double getLongitude() { return longitude; }
    public void setLongitude(Double longitude) { this.longitude = longitude; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getVirtualTourUrl() { return virtualTourUrl; }
    public void setVirtualTourUrl(String virtualTourUrl) { this.virtualTourUrl = virtualTourUrl; }

    public Boolean getIsPopular() { return isPopular; }
    public void setIsPopular(Boolean isPopular) { this.isPopular = isPopular; }
}
