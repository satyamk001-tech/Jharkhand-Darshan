package com.jharkhand.darshan.entity;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "live_tours")
public class LiveTour implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String guideName;

    private String guideAvatar;
    private String guideTitle;

    @Column(nullable = false)
    private String title;

    private String destination;
    private String status; // 'LIVE', 'SCHEDULED', 'ENDED'
    private String startTime;
    private Double price;
    private Integer viewerCount;
    private String streamUrl;
    private Double rating;
    private Integer totalReviews;

    public LiveTour() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getGuideName() { return guideName; }
    public void setGuideName(String guideName) { this.guideName = guideName; }

    public String getGuideAvatar() { return guideAvatar; }
    public void setGuideAvatar(String guideAvatar) { this.guideAvatar = guideAvatar; }

    public String getGuideTitle() { return guideTitle; }
    public void setGuideTitle(String guideTitle) { this.guideTitle = guideTitle; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDestination() { return destination; }
    public void setDestination(String destination) { this.destination = destination; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getStartTime() { return startTime; }
    public void setStartTime(String startTime) { this.startTime = startTime; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public Integer getViewerCount() { return viewerCount; }
    public void setViewerCount(Integer viewerCount) { this.viewerCount = viewerCount; }

    public String getStreamUrl() { return streamUrl; }
    public void setStreamUrl(String streamUrl) { this.streamUrl = streamUrl; }

    public Double getRating() { return rating; }
    public void setRating(Double rating) { this.rating = rating; }

    public Integer getTotalReviews() { return totalReviews; }
    public void setTotalReviews(Integer totalReviews) { this.totalReviews = totalReviews; }
}
