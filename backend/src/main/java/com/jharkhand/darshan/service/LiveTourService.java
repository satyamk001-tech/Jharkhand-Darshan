package com.jharkhand.darshan.service;

import com.jharkhand.darshan.dto.ChatMessageDTO;
import com.jharkhand.darshan.entity.LiveTour;
import com.jharkhand.darshan.repository.LiveTourRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class LiveTourService {

    private final LiveTourRepository liveTourRepository;
    private final RedisTemplate<String, Object> redisTemplate;

    // Resilient in-memory fallback stores when Redis is not running
    private final Map<Long, Long> localLikes = new ConcurrentHashMap<>();
    private final Map<Long, List<ChatMessageDTO>> localChat = new ConcurrentHashMap<>();

    public LiveTourService(LiveTourRepository liveTourRepository,
                           @Autowired(required = false) RedisTemplate<String, Object> redisTemplate) {
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
        if (redisTemplate != null) {
            try {
                String key = "tour:likes:" + tourId;
                Long val = redisTemplate.opsForValue().increment(key);
                if (val != null) return val;
            } catch (Exception ignored) {
                // Redis unavailable, fallback to local memory
            }
        }
        return localLikes.compute(tourId, (k, v) -> (v == null ? 142L : v) + 1L);
    }

    public Long getLikes(Long tourId) {
        if (redisTemplate != null) {
            try {
                String key = "tour:likes:" + tourId;
                Object val = redisTemplate.opsForValue().get(key);
                if (val != null) {
                    return Long.valueOf(val.toString());
                }
            } catch (Exception ignored) {
                // Redis unavailable, fallback to local memory
            }
        }
        return localLikes.getOrDefault(tourId, 142L);
    }

    public void addChatMessage(Long tourId, ChatMessageDTO msg) {
        if (msg.getTimestamp() == null) {
            msg.setTimestamp(LocalDateTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss")));
        }
        if (redisTemplate != null) {
            try {
                String key = "tour:chat:" + tourId;
                redisTemplate.opsForList().rightPush(key, msg);
                redisTemplate.opsForList().trim(key, -100, -1); // keep last 100 messages
                return;
            } catch (Exception ignored) {
                // Redis unavailable, fallback to local memory
            }
        }
        localChat.computeIfAbsent(tourId, k -> new CopyOnWriteArrayList<>()).add(msg);
    }

    @SuppressWarnings("unchecked")
    public List<ChatMessageDTO> getChatMessages(Long tourId) {
        if (redisTemplate != null) {
            try {
                String key = "tour:chat:" + tourId;
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
                // Redis unavailable, fallback to local memory
            }
        }

        List<ChatMessageDTO> local = localChat.get(tourId);
        if (local != null && !local.isEmpty()) {
            return new ArrayList<>(local);
        }

        // Default initial simulated live chat messages
        List<ChatMessageDTO> defaults = new ArrayList<>();
        defaults.add(new ChatMessageDTO(UUID.randomUUID().toString(), "Ravi Kumar (Guide)", "Johar everyone! Welcome to our live tour of Betla National Park!", "10:30 AM", true));
        defaults.add(new ChatMessageDTO(UUID.randomUUID().toString(), "Pooja Sharma", "Johar bhaiya! What wildlife can we spot today?", "10:31 AM", false));
        defaults.add(new ChatMessageDTO(UUID.randomUUID().toString(), "Amit Verma", "The Sal forest looks so lush and dense!", "10:32 AM", false));
        return defaults;
    }
}
