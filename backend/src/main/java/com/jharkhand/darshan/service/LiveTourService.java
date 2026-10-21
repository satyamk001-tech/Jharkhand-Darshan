package com.jharkhand.darshan.service;

import com.jharkhand.darshan.dto.ChatMessageDTO;
import com.jharkhand.darshan.entity.LiveTour;
import com.jharkhand.darshan.repository.LiveTourRepository;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
public class LiveTourService {

    private final LiveTourRepository liveTourRepository;
    private final RedisTemplate<String, Object> redisTemplate;

    public LiveTourService(LiveTourRepository liveTourRepository, RedisTemplate<String, Object> redisTemplate) {
        this.liveTourRepository = liveTourRepository;
        this.redisTemplate = redisTemplate;
    }

    public List<LiveTour> getAllTours() {
        return liveTourRepository.findAll();
    }

    public List<LiveTour> getToursByStatus(String status) {
        return liveTourRepository.findByStatusIgnoreCase(status);
    }

    public Optional<LiveTour> getTourById(Long id) {
        return liveTourRepository.findById(id);
    }

    public Long incrementLikes(Long tourId) {
        String key = "tour:likes:" + tourId;
        try {
            return redisTemplate.opsForValue().increment(key);
        } catch (Exception e) {
            return 1L;
        }
    }

    public Long getLikes(Long tourId) {
        String key = "tour:likes:" + tourId;
        try {
            Object val = redisTemplate.opsForValue().get(key);
            return val != null ? Long.valueOf(val.toString()) : 142L;
        } catch (Exception e) {
            return 142L;
        }
    }

    public void addChatMessage(Long tourId, ChatMessageDTO msg) {
        String key = "tour:chat:" + tourId;
        if (msg.getTimestamp() == null) {
            msg.setTimestamp(LocalDateTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss")));
        }
        try {
            redisTemplate.opsForList().rightPush(key, msg);
            redisTemplate.opsForList().trim(key, -100, -1); // keep last 100 messages
        } catch (Exception ignored) {
        }
    }

    @SuppressWarnings("unchecked")
    public List<ChatMessageDTO> getChatMessages(Long tourId) {
        String key = "tour:chat:" + tourId;
        try {
            List<Object> rawList = redisTemplate.opsForList().range(key, 0, -1);
            if (rawList != null && !rawList.isEmpty()) {
                List<ChatMessageDTO> msgs = new ArrayList<>();
                for (Object item : rawList) {
                    if (item instanceof ChatMessageDTO) {
                        msgs.add((ChatMessageDTO) item);
                    }
                }
                return msgs;
            }
        } catch (Exception ignored) {
        }

        // Default initial simulated live chat messages
        List<ChatMessageDTO> defaults = new ArrayList<>();
        defaults.add(new ChatMessageDTO(UUID.randomUUID().toString(), "Ravi Kumar (Guide)", "Johar everyone! Welcome to our live tour of Betla National Park!", "10:30 AM", true));
        defaults.add(new ChatMessageDTO(UUID.randomUUID().toString(), "Pooja Sharma", "Johar bhaiya! What wildlife can we spot today?", "10:31 AM", false));
        defaults.add(new ChatMessageDTO(UUID.randomUUID().toString(), "Amit Verma", "The Sal forest looks so lush and dense!", "10:32 AM", false));
        return defaults;
    }
}
