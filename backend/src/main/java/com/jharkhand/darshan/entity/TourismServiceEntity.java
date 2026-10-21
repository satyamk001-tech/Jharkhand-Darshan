package com.jharkhand.darshan.entity;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "tourism_services")
public class TourismServiceEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private String id; // 'hotels', 'guides', 'passes', 'transport', 'live', 'market'

    @Column(nullable = false)
    private String title;

    private String description;
    private String icon;
    private String actionTab;
    private String actionModal;

    public TourismServiceEntity() {}

    public TourismServiceEntity(String id, String title, String description, String icon, String actionTab, String actionModal) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.icon = icon;
        this.actionTab = actionTab;
        this.actionModal = actionModal;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }

    public String getActionTab() { return actionTab; }
    public void setActionTab(String actionTab) { this.actionTab = actionTab; }

    public String getActionModal() { return actionModal; }
    public void setActionModal(String actionModal) { this.actionModal = actionModal; }
}
