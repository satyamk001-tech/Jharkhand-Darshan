package com.jharkhand.darshan.entity;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "products")
public class Product implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String artisan;
    private String tribe;
    private Double price;
    private Double originalPrice;
    private Double rating;
    private Integer reviewsCount;
    private Integer stock;
    private String category;
    private Boolean giCertified;

    @Column(length = 1000)
    private String imageUrl;

    @Column(length = 2000)
    private String description;

    public Product() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getArtisan() { return artisan; }
    public void setArtisan(String artisan) { this.artisan = artisan; }

    public String getTribe() { return tribe; }
    public void setTribe(String tribe) { this.tribe = tribe; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public Double getOriginalPrice() { return originalPrice; }
    public void setOriginalPrice(Double originalPrice) { this.originalPrice = originalPrice; }

    public Double getRating() { return rating; }
    public void setRating(Double rating) { this.rating = rating; }

    public Integer getReviewsCount() { return reviewsCount; }
    public void setReviewsCount(Integer reviewsCount) { this.reviewsCount = reviewsCount; }

    public Integer getStock() { return stock; }
    public void setStock(Integer stock) { this.stock = stock; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public Boolean getGiCertified() { return giCertified; }
    public void setGiCertified(Boolean giCertified) { this.giCertified = giCertified; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
