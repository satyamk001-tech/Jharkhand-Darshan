package com.jharkhand.darshan.dto;

import java.io.Serializable;
import java.time.LocalDateTime;

public class ChatMessageDTO implements Serializable {
    private String id;
    private String user;
    private String message;
    private String timestamp;
    private Boolean isGuide;

    public ChatMessageDTO() {
        this.timestamp = LocalDateTime.now().toString();
    }

    public ChatMessageDTO(String id, String user, String message, String timestamp, Boolean isGuide) {
        this.id = id;
        this.user = user;
        this.message = message;
        this.timestamp = timestamp;
        this.isGuide = isGuide;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getUser() { return user; }
    public void setUser(String user) { this.user = user; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public String getTimestamp() { return timestamp; }
    public void setTimestamp(String timestamp) { this.timestamp = timestamp; }

    public Boolean getIsGuide() { return isGuide; }
    public void setIsGuide(Boolean isGuide) { this.isGuide = isGuide; }
}
