package com.jharkhand.darshan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class JharkhandDarshanApplication {
    public static void main(String[] args) {
        SpringApplication.run(JharkhandDarshanApplication.class, args);
    }
}
