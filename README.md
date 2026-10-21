# 🌄 Jharkhand Darshan — Official Tourism & Cultural Portal

[![React](https://img.shields.io/badge/Frontend-React%2018%20%7C%20Vite%206%20%7C%20Tailwind-blue)](https://react.dev/)
[![Spring Boot](https://img.shields.io/badge/Backend-Spring%20Boot%203.3.4%20%7C%20Java%2021-brightgreen)](https://spring.io/projects/spring-boot)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL%2016-blue)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Cache-Redis%207-red)](https://redis.io/)
[![Docker](https://img.shields.io/badge/Containers-Docker%20Compose-2496ED)](https://www.docker.com/)
[![Swagger](https://img.shields.io/badge/API%20Docs-Swagger%20%2F%20OpenAPI%203-85EA2D)](http://localhost:8080/swagger-ui.html)

**Jharkhand Darshan** is a production-grade, full-stack tourism and cultural portal built for the **Department of Tourism, Government of Jharkhand**. Designed with a focus on indigenous representation, the platform promotes sustainable eco-tourism, living tribal traditions, sacred pilgrimage circuits, and fair-trade handicraft commerce across all 24 districts of Jharkhand.

---

## 🏛️ System Architecture

```text
                               ┌────────────────────────────────────────────────┐
                               │             React 18 + Vite Frontend           │
                               │       (Tailwind CSS, Lucide, Canvas Confetti)  │
                               └───────────────────────┬────────────────────────┘
                                                       │  HTTP / REST (Port 5173 / 80)
                                                       ▼
                               ┌────────────────────────────────────────────────┐
                               │           Spring Boot 3.3 REST Backend         │
                               │       (Java 21/25, Spring Data JPA, Web)       │
                               └───────────────┬────────────────┬───────────────┘
                                               │                │
                        JPA / Hibernate Queries│                │Redis Cache & Pub/Sub
                                               ▼                ▼
                               ┌───────────────────────┐ ┌──────────────────────┐
                               │  PostgreSQL 16 Engine │ │    Redis 7 Cache     │
                               │  (Entities & Seed DB) │ │ (Likes, Chat, Views) │
                               └───────────────────────┘ └──────────────────────┘
```

---

## ✨ Core Features & Modules

### 1. 🧭 Navigation & Role-Based Single Sign-On (SSO)
- **Top Government Branding**: Certified emblem, district count, and live server status indicator.
- **Role-Based Authentication**:
  - **Tourist / Traveler**: Book verified stays, hire tribal guides, and participate in live tours.
  - **Local Artisan / Seller**: List GI-tagged handicrafts and manage orders.
  - **Govt Tourism Officer (Admin)**: Oversee destination registries, emergency SOS feeds, and tourism analytics.

### 2. 🛎️ 6 Core Tourism Services
Direct interactive tiles matching the official government interface:
1. **Hotel & Resort Booking**: Verified government tourist lodges, forest rest houses, and luxury eco-resorts.
2. **Tour Guide Services**: Department-certified guides fluent in Santhali, Mundari, Hindi, and English.
3. **Festival Passes**: VIP registration for Sarhul, Karma, Baidyanath Shravani Mela, and Tusu Parab.
4. **Transportation**: Airport transfers, Patratu ghat drives, Betla 4x4 jungle safari gypsies, and EV cabs.
5. **Live Virtual Tourism**: Join real-time streaming tours with certified guides.
6. **Local Tribal Marketplace**: Direct fair-trade marketplace for authentic indigenous crafts.

### 3. 🍲 Living Heritage: Tribal Cuisine & Living Culture Toggle
- **Authentic Tribal Cuisine**: Featuring traditional Dhuska with Ghugni, Sattu Litti Chokha, wild foraged Rugda mushrooms, tender Karil (bamboo shoot) curry, Chhilka Roti, and Thekua.
- **Tribes, Music & People**: Showcasing Santhal, Oraon (Kurukh), Munda, and Seraikela Chhau communities, their traditional instruments (Mandar, Tumdak, Banam), and sacred festivals.
- **Strict Authenticity**: Exclusively real local photography with zero stock/foreign imagery.

### 4. 🌐 3D Spatial Explorer & Interactive Jharkhand Map
- **Vector District Map**: Interactive SVG map of Jharkhand with clickable, pulsing location pins.
- **7 Category Filters**: All, Waterfalls, Wildlife, Spiritual, Nature, Heritage, and Tribal Crafts.
- **12 Flagship Destinations**: Hundru Falls, Betla National Park, Baidyanath Dham, Dassam Falls, Netarhat, Palamau Forts, Shikharji Parasnath, Jonha Falls, Maluti Terracotta, Dalma Wildlife Sanctuary, Patratu Valley, and Dokra Craft Settlements.
- **360° Virtual Viewpoint Viewer**: Azimuth angle rotation, elevation telemetry, and Web Audio ambient nature sound synthesizer.

### 5. 📡 Live Virtual Tourism & Real-Time Stream Room
- High-definition live video tour streams led by certified eco-guides (Ravi Kumar, Sunita Devi, Amit Singh).
- **Interactive Live Chat Feed**: Stored and synchronized with Redis lists.
- **Atomic Heart Reactions**: Floating burst animations powered by Redis atomic counters.
- **Direct Guide Tipping**: Voluntary contribution modal with confetti animations.

### 6. 🛍️ Direct Fair-Trade Tribal Marketplace
- GI-tagged Sohrai & Khovar clay murals, 4,000-year-old ancient Dokra lost-wax brass castings, handspun Jharkhand Tussar silk, and wooden Mandar drums.
- Full shopping cart, quantity modifier, and instant checkout flow.

### 7. 🚨 Floating Quick-Action Dock & 24/7 Emergency SOS
- **Emergency SOS Modal**: Direct dial buttons for Police (112), Tourist Police (1363), Ambulance (108), Women Helpline (1091), and Forest Rescue (1800-345-6548).
- **AI Help Bot Assistant**: Conversational assistant answering queries on routes, permits, food, and culture.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, Vite 6, Tailwind CSS 3, Lucide React, Canvas Confetti |
| **Backend** | Spring Boot 3.3.4, Java 21 / 25, Spring Data JPA, Spring Cache |
| **Database** | PostgreSQL 16 (with automated DataInitializer seeder) |
| **Caching** | Redis 7 (Spring Data Redis, Lettuce driver) |
| **API Docs** | SpringDoc OpenAPI 3.0 / Swagger UI |
| **DevOps** | Docker, Docker Compose, Multi-stage builds, Nginx |

---

## 🚀 Quickstart Guide

### Option 1: Run with Docker Compose (Recommended)

Make sure you have Docker and Docker Compose installed.

```bash
# 1. Clone the repository
git clone https://github.com/satyamk001-tech/Jharkhand-Darshan.git
cd Jharkhand-Darshan

# 2. Build and launch all services in detached mode
docker compose up --build -d

# 3. Check service health
docker compose ps
```

Services will be available at:
- **Frontend Web UI**: [http://localhost:5173](http://localhost:5173) (or [http://localhost:3000](http://localhost:3000))
- **Spring Boot REST API**: [http://localhost:8080](http://localhost:8080)
- **Interactive Swagger UI**: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
- **PostgreSQL Database**: `localhost:5432` (DB: `jharkhand_darshan`, User: `postgres`, Pass: `postgrespassword`)
- **Redis Server**: `localhost:6379`

To stop services:
```bash
docker compose down -v
```

---

### Option 2: Run Locally Without Docker

#### Prerequisites
- **JDK 21 or later**
- **Apache Maven 3.8+**
- **Node.js 18+ and npm**
- **Local PostgreSQL and Redis** (or run them via Docker: `docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres:16-alpine && docker run -d -p 6379:6379 redis:7-alpine`)

#### 1. Backend Setup
```bash
cd backend

# Compile and run Spring Boot
mvn clean spring-boot:run
```
The backend will automatically create tables and seed authentic Jharkhand destinations, tours, and artisan products on port `8080`.

#### 2. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start Vite development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📡 REST API Documentation

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/destinations` | List all destinations with optional `?category=` and `?search=` filters |
| `GET` | `/api/destinations/{id}` | Retrieve details of a specific destination |
| `POST` | `/api/destinations` | Create or update a destination (Admin) |
| `GET` | `/api/bookings` | List bookings with optional `?category=` filter |
| `POST` | `/api/bookings` | Create a new booking (returns unique reference `JKD-XXXXXX-XXXX`) |
| `GET` | `/api/bookings/{bookingRef}` | Retrieve booking status by reference code |
| `GET` | `/api/live-tours` | List active live and scheduled virtual tours |
| `GET` | `/api/live-tours/{id}` | Get tour details |
| `POST` | `/api/live-tours/{id}/like` | Increment atomic like count in Redis |
| `GET` | `/api/live-tours/{id}/chat` | Retrieve recent live chat messages |
| `POST` | `/api/live-tours/{id}/chat` | Post a new message to the tour stream |
| `GET` | `/api/products` | List marketplace products with optional `?category=` filter |
| `GET` | `/api/products/{id}` | Get details of a single tribal craft item |
| `GET` | `/api/emergency` | Get list of official 24x7 emergency contacts |
| `GET` | `/api/stats` | Get annual visitor and destination statistics |
| `POST` | `/api/auth/login` | Authenticate user by role (Tourist, Seller, Admin) |

Full OpenAPI specification available at [http://localhost:8080/v3/api-docs](http://localhost:8080/v3/api-docs).

---

## 📁 Project Directory Structure

```text
Jharkhand-Darshan/
├── backend/                                # Spring Boot 3.3.4 Application
│   ├── src/main/java/com/jharkhand/darshan/
│   │   ├── JharkhandDarshanApplication.java # Spring Boot Entry Point
│   │   ├── config/                         # RedisConfig, WebConfig, OpenApiConfig, DataInitializer
│   │   ├── controller/                     # REST API Controllers (Destinations, Bookings, Tours, etc.)
│   │   ├── dto/                            # Data Transfer Objects (Requests & Responses)
│   │   ├── entity/                         # JPA Entities (Destination, Booking, LiveTour, Product, etc.)
│   │   ├── repository/                     # Spring Data JPA Repositories
│   │   └── service/                        # Business Logic & Redis Caching Services
│   ├── src/main/resources/
│   │   └── application.yml                 # Database, Redis, and JPA Configurations
│   ├── Dockerfile                          # Multi-stage Docker build for backend
│   └── pom.xml                             # Maven Dependencies
├── frontend/                               # React 18 + Vite Application
│   ├── src/
│   │   ├── components/                     # UI Components (Navbar, Hero, Services, 3D Explorer, etc.)
│   │   ├── data/mockData.js                # Authentic Jharkhand dataset & locations
│   │   ├── services/api.js                 # API Client with graceful fallback
│   │   ├── App.jsx                         # Main Router & View Orchestrator
│   │   ├── main.jsx                        # React Root
│   │   └── index.css                       # Tailwind CSS Custom Directives
│   ├── Dockerfile                          # Multi-stage Nginx build for frontend
│   ├── nginx.conf                          # Reverse proxy configuration
│   ├── package.json                        # Frontend dependencies & scripts
│   ├── tailwind.config.js                  # Tailwind Theme Customizations
│   └── vite.config.js                      # Vite Build Configuration
├── docker-compose.yml                      # Full-stack Container Orchestration
├── .gitignore                              # Git exclusion rules
└── README.md                               # Project Documentation
```

---

## 🤝 Contribution & Acknowledgements

Developed with reverence for the indigenous cultures of Jharkhand. Special acknowledgements to the artisans of Khunti, Amadubi, Seraikela, and Chaibasa for their living heritage and craftsmanship.

Johar Jharkhand! 🙏
