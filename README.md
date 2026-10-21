# 🌄 Jharkhand Darshan — Official Tourism & Travel Portal

[![Figma Prototype](https://img.shields.io/badge/Figma-1%3A1%20Pixel--Perfect%20Replica-F24E1E?logo=figma&logoColor=white)](https://www.figma.com/make/Y59KseSU70uRQq3OcHCA5U/Government-Website-UI-Design?code-node-id=0-9&p=f&t=fUdtDM52GYcyF4dz-0&fullscreen=1)
[![Frontend](https://img.shields.io/badge/Frontend-React%2018%20%7C%20Vite%206%20%7C%20Tailwind%20CSS-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Backend](https://img.shields.io/badge/Backend-Spring%20Boot%203.3.4%20%7C%20Java%2021-6DB33F?logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Database](https://img.shields.io/badge/Database-PostgreSQL%2016-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Caching](https://img.shields.io/badge/Cache-Redis%207-DC382D?logo=redis&logoColor=white)](https://redis.io/)
[![Container](https://img.shields.io/badge/Orchestration-Docker%20Compose-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![Swagger Docs](https://img.shields.io/badge/API%20Docs-Swagger%20%2F%20OpenAPI%203.0-85EA2D?logo=swagger&logoColor=black)](http://localhost:8080/swagger-ui.html)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Jharkhand Darshan** is an enterprise-grade, full-stack tourism and cultural portal built as an **exact 1:1 replica** of the [Figma Government Website UI Design](https://www.figma.com/make/Y59KseSU70uRQq3OcHCA5U/Government-Website-UI-Design?code-node-id=0-9&p=f&t=fUdtDM52GYcyF4dz-0&fullscreen=1). 

Built for the **Department of Tourism, Government of Jharkhand**, the portal promotes sustainable eco-tourism, living tribal traditions, sacred pilgrimage circuits, and fair-trade handicraft commerce across all 24 districts with **100% authentic regional photography and zero foreign stock imagery**.

---

## 🎨 Figma Design Replication Overview

This project directly reproduces every screen, interaction, layout, and visual token specified in the Figma prototype:
- **Design Prototype Link**: [Figma: Government Website UI Design](https://www.figma.com/make/Y59KseSU70uRQq3OcHCA5U/Government-Website-UI-Design?code-node-id=0-9&p=f&t=fUdtDM52GYcyF4dz-0&fullscreen=1)
- **Extracted Design Assets**: Native orange shield logo emblem, Hundru Falls, tribal festival performers, Palamau tiger conservation dancers, certified eco-resorts, and authentic live stream captures directly cropped and rendered from the original design canvas.
- **Strict Uniform Sizing**: Card boxes and image frames (`h-52 w-full shrink-0 object-cover`) across Tour Guides, Transportation, 3D Explorer, and Local Marketplace maintain identical height and horizontal alignment.

---

## 🏛️ System Architecture

```text
                                 ┌────────────────────────────────────────────────────────┐
                                 │                React 18 + Vite Frontend                │
                                 │       • Tailwind CSS 3         • Lucide Icons          │
                                 │       • Canvas Confetti        • Web Audio Synthesizer │
                                 └───────────────────────────┬────────────────────────────┘
                                                             │  HTTP / REST (Port 5173 / 80)
                                                             ▼
                                 ┌────────────────────────────────────────────────────────┐
                                 │              Spring Boot 3.3.4 REST Backend            │
                                 │       • Java 21 / 25           • Spring Data JPA       │
                                 │       • SpringDoc OpenAPI 3    • Spring Data Redis     │
                                 └───────────────────────────┬────────────────────────────┘
                                                             │
                                        ┌────────────────────┴────────────────────┐
                 JPA / Hibernate Queries│                                         │Redis Cache & Pub/Sub
                                        ▼                                         ▼
                         ┌─────────────────────────────┐           ┌─────────────────────────────┐
                         │    PostgreSQL 16 Engine     │           │        Redis 7 Cache        │
                         │    • Automated Data Seeder  │           │    • Atomic Like Counters   │
                         │    • 24 Districts Schema    │           │    • Tour Live Chat Feeds   │
                         │    • Bookings & Marketplace │           │    • @Cacheable Query Cache │
                         └─────────────────────────────┘           └─────────────────────────────┘
```

---

## ✨ Features & Interface Modules

### 1. 🏛️ Exact Figma Home Page
- **Government Header / Navbar**:
  - Official orange shield logo emblem + `Jharkhand Darshan` title & `Tourism & Travel Portal` subtitle.
  - Active black rounded pill `[ ⌂ Home ]`, `3D Explorer`, `Help Bot`, and red `Emergency`.
  - Right controls: `us English ▾` dropdown, `[→ Login]` with 3-role dropdown (*Tourist*, *Local Seller*, *Government Admin*), and `(o) Online` globe indicator.
- **Hero Banner**:
  - Full-width crimson-rust gradient (`#991b1b` via `#c2410c` to `#991b1b`).
  - Title: *"Discover the Beauty of Jharkhand"*.
  - Subtitle: *"Experience rich tribal culture, stunning waterfalls, and pristine forests. Book tours, accommodations, and explore live with local guides."*
  - Dual action pills: `[ 📍 Start Exploring ]` and `[ 🧭 3D Explorer ]`.
- **Featured Destinations (3 Exact Cards)**:
  1. **Hundru Falls** (`74m high waterfall near Ranchi`) with top-right badge `≡ waterfall`.
  2. **Tribal Festivals** (`Experience authentic Santhali culture`) with top-right badge `👥 culture`.
  3. **Palamau Tiger Reserve** (`Wildlife sanctuary and tiger conservation`) with top-right badge `▲ wildlife`.
- **6 Core Tourism Services**:
  1. 🏢 **Hotel & Resort Booking**: Luxury hill resorts, forest lodges, and business hotels.
  2. 👤 **Tour Guide Services**: Department-certified guides fluent in Santhali, Mundari, Hindi, and English.
  3. 📅 **Festival Passes**: VIP access passes for Sarhul, Karma, and Chhau Dance Mahotsav.
  4. 🚗 **Transportation**: 4x4 Betla forest gypsies, airport transfers, and Patratu valley electric shuttles.
  5. 📹 **Live Tourism**: Interactive virtual live tours led by certified naturalists.
  6. 🛍️ **Local Marketplace**: Direct fair-trade tribal handicrafts, cuisine, and cultural artifacts.
- **Tourism Statistics (4 Mint Green Metrics)**:
  - `2.8M+` Annual Visitors
  - `50+` Tourist Destinations
  - `25+` Live Tours Daily
  - `500+` Local Partners
- **Floating Quick-Action Dock**:
  - Floating circular buttons on the bottom-right: Blue Chat, Red Emergency SOS, Blue 3D Compass, Orange Helpline (`1363`), and Quick Info (`?`).

---

### 2. 🗺️ 3D Spatial Explorer & Interactive Jharkhand Map
- **Interactive State Map**: Vector schematic map of Jharkhand with clickable, pulsing location markers across Ranchi, Latehar, Giridih, Hazaribagh, Ramgarh, and East Singhbhum.
- **7 Category Filters**: All Places, Waterfalls, Wildlife, Religious, Hill Stations, Cities, and Heritage.
- **11 Authentically Photographed Destinations**:
  - Hundru Falls, Jonha Falls (Gautamdhara), Dassam Falls, Parasnath Hills (Shikharji), Netarhat, Hazaribagh Sanctuary, Ranchi (Jagannath Temple), Jamshedpur (Jubilee Park), Rajrappa Temple, Palamu Forts, and Sun Temple Bundu.
- **360° Virtual Spatial Viewer**: Interactive azimuth rotation, elevation telemetry, and Web Audio synthesizer generating tranquil natural ambient frequencies.

---

### 3. 🎫 Experience Booking Engine
- **Search & Filter Bar**: Instant search with category filters and availability verification.
- **4 Tabbed Categories**: Hotels & Resorts, Tour Guides, Festival Passes, Transportation.
- **Equal-Height Uniform Cards**: Strict `h-52` image box and aligned pricing/booking buttons.
- **Interactive Booking Dialog**: Step-by-step reservation modal generating official tracking reference numbers (`JKD-XXXXXX-XXXX`).

---

### 4. 📡 Live Tourism Streaming Hub & Video Room
- **Scheduled & Live Broadcasts**: High-definition virtual live tours led by certified guides (Ravi Kumar ₹299, Sunita Devi ₹399, Amit Singh ₹499).
- **Interactive Live Stream Room**:
  - Video feed displaying live Hundru Falls cascade.
  - Real-time chat feed with department tour guides.
  - Atomic heart reactions with Redis persistence.
  - Direct guide tipping modal with celebratory canvas confetti.

---

### 5. 🛍️ Direct Fair-Trade Tribal Marketplace
- **Direct Support for Indigenous Artisans**: 100% fair-trade certified products supporting Santhal, Oraon, and Malhor families.
- **3 Comprehensive Categories**:
  1. **Crafts & Art**: GI-tagged Sohrai & Khovar clay murals, 4,000-year-old ancient Dokra lost-wax brass castings, handspun Jharkhand Tussar silk sarees, and wooden Mandar drums.
  2. **Authentic Tribal Cuisine**: Dhuska with Ghugni, Sattu Litti Chokha, wild foraged Rugda mushroom curry, Chilka Roti, and Bamboo shoot curry.
  3. **Tribes, Music & People**: Cultural documentation of Santhal, Oraon, Munda, and Ho traditions, folk instruments, and UNESCO-recognized Chhau dances.
- **Tribal Cart & Checkout**: Slide-over drawer with live total calculation, quantity modifiers, and order placement.

---

### 6. 🚨 24/7 Emergency SOS & AI Help Bot
- **Official Emergency SOS Directory**:
  - **112**: Jharkhand State Police Emergency (24/7 Toll-Free)
  - **1363**: Jharkhand Tourist Police Helpline (Dept of Tourism)
  - **108**: State Medical Ambulance Service
  - **1091**: Women Safety & Crisis Helpline
- **AI Help Bot Modal**: Built-in travel assistant answering questions regarding routes, permits, weather, attire, and local customs.

---

### 7. 🔐 3 Dedicated Role-Based Logins & Custom Dashboards
The portal features a unified Single Sign-On (SSO) system with 3 distinct user roles, tailored privileges, and dedicated dashboards:

| Role | Demo Credentials | Primary Capabilities & Dashboard Features |
|---|---|---|
| **👤 Tourist** | `tourist@jharkhand.travel`<br>`demo2026` | • **Active Bookings & Reservations**: Hotel reservations (e.g., Ranchi Hill View Resort) & festival access.<br>• **E-Tickets & Pass Wallet**: Instant downloadable QR-coded digital travel passes valid across all 24 districts.<br>• **Marketplace Orders**: Real-time dispatch and tracking of authentic tribal art orders. |
| **🎒 Guide or Seller** | `guide.seller@jharkhand.travel`<br>`demo2026` | • **Live Tour Studio**: Start and broadcast live video tours across Jharkhand destinations.<br>• **Earnings Ledger**: Direct bank settlement records (₹14,250 monthly earnings).<br>• **Itinerary Schedule**: Manage assigned tourist treks (Netarhat Sunrise trek, Palamau Fort heritage walk).<br>• **Artisan Store**: List GI-tagged handicrafts (Sohrai murals, Dokra brass casting). |
| **🛡️ Government Admin** | `admin@tourism.jharkhand.gov.in`<br>`demo2026` | • **Tourism Analytics**: High-level state telemetry (2.8M+ visitors, +14.2% YoY growth, 50+ spots).<br>• **Emergency SOS Dispatch**: Real-time status for State Police 112 & Tourist Police 1363 helplines.<br>• **Destination Registrar**: Add and approve new tourist attractions with GPS and photos.<br>• **GI Certification**: Verify and approve indigenous tribal artisan cooperatives. |

> **⚡ 1-Click Instant Demo**: Each role in the Login modal includes a 1-click instant login button for friction-free testing without manual typing.

---

## 🛠️ Technology Stack Details

| Component | Technology | Version | Purpose |
|---|---|---|---|
| **Frontend Framework** | React | `18.3.1` | Reactive component tree & state management |
| **Build Tool** | Vite | `6.4.5` | Lightning-fast HMR and optimized production bundles |
| **CSS Framework** | Tailwind CSS | `3.4.1` | Utility-first responsive design matching Figma tokens |
| **Icons** | Lucide React | `0.453.0` | Crisp SVG iconography |
| **Visual FX** | Canvas Confetti | `1.9.4` | Particle celebration animations for bookings and tipping |
| **Backend Framework** | Spring Boot | `3.3.4` | Enterprise RESTful web services |
| **Language** | Java | `21 / 25` | LTS modern Java runtime |
| **ORM / Data** | Spring Data JPA / Hibernate | `6.5.x` | Relational data persistence & mapping |
| **Database** | PostgreSQL | `16-alpine` | ACID-compliant relational storage |
| **Caching & Pub/Sub** | Redis | `7-alpine` | High-speed cache for likes, chat, and queries |
| **Documentation** | SpringDoc OpenAPI | `2.6.0` | Automated Swagger UI & OpenAPI 3.0 specification |
| **Containerization** | Docker & Docker Compose | `v2+` | Multi-container unified orchestration |

---

## 🚀 Getting Started

### Option 1: Run with Docker Compose (Recommended)

Make sure you have **Docker Desktop** installed and running on your machine.

```bash
# 1. Clone the repository
git clone https://github.com/satyamk001-tech/Jharkhand-Darshan.git
cd Jharkhand-Darshan

# 2. Build and launch all containers (Postgres, Redis, Spring Boot, Frontend)
docker compose up --build -d

# 3. Verify that all 4 containers are healthy
docker compose ps
```

The services will be immediately accessible at:
- **Web Portal (Frontend)**: [http://localhost:5173](http://localhost:5173) (or [http://localhost:3000](http://localhost:3000))
- **REST API Backend**: [http://localhost:8080](http://localhost:8080)
- **Interactive Swagger UI**: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
- **PostgreSQL Database**: `localhost:5432` (`jharkhand_darshan`)
- **Redis Server**: `localhost:6379`

To stop the containers:
```bash
docker compose down -v
```

---

### Option 2: Run Locally (Manual Setup)

#### Prerequisites
- **JDK 21 or higher**
- **Maven 3.8+**
- **Node.js 18+ and npm**
- **PostgreSQL 16 & Redis 7** running locally (or via Docker: `docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres:16-alpine && docker run -d -p 6379:6379 redis:7-alpine`)

#### 1. Backend Setup
```bash
cd backend

# Build and start Spring Boot
mvn clean spring-boot:run
```
*The backend automatically initializes tables and seeds authentic destinations, tours, hotels, and products on port `8080`.*

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

## 📡 REST API Reference

| Method | Endpoint | Description | Cache Layer |
|---|---|---|---|
| `GET` | `/api/destinations` | List all tourist destinations (supports `?category=` and `?search=`) | `@Cacheable("destinations")` |
| `GET` | `/api/destinations/{id}` | Get single destination by ID | `@Cacheable("destination")` |
| `POST` | `/api/destinations` | Add a new destination (Admin only) | Evicts cache |
| `GET` | `/api/bookings` | List all bookings (supports `?category=`) | Database |
| `POST` | `/api/bookings` | Create new reservation (generates `JKD-XXXXXX-XXXX`) | Database |
| `GET` | `/api/bookings/{bookingRef}` | Look up reservation details by reference code | Database |
| `GET` | `/api/live-tours` | List active live and scheduled virtual tours | `@Cacheable("liveTours")` |
| `GET` | `/api/live-tours/{id}` | Get tour details | Database |
| `POST` | `/api/live-tours/{id}/like` | Increment live heart reaction counter | Redis Atomic Long |
| `GET` | `/api/live-tours/{id}/chat` | Retrieve recent live stream messages | Redis List |
| `POST` | `/api/live-tours/{id}/chat` | Broadcast new chat message into live stream | Redis List & PubSub |
| `GET` | `/api/products` | List marketplace artisan products (supports `?category=`) | `@Cacheable("products")` |
| `GET` | `/api/products/{id}` | Get single craft product | Database |
| `GET` | `/api/emergency` | Get 24x7 emergency contacts directory | `@Cacheable("emergency")` |
| `GET` | `/api/stats` | Get annual visitor and destination statistics | Database |
| `POST` | `/api/auth/login` | Authenticate user by role (`tourist`, `guide_seller`, `admin`) | Database |

*Interactive API testing and schema exploration is available via Swagger UI at [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html).*

---

## 📁 Repository File Structure

```text
Jharkhand-Darshan/
├── backend/                                  # Spring Boot 3.3.4 Application
│   ├── src/main/java/com/jharkhand/darshan/
│   │   ├── JharkhandDarshanApplication.java   # Application Entrypoint
│   │   ├── config/                           # RedisConfig, WebConfig, OpenApiConfig, DataInitializer
│   │   ├── controller/                       # REST Controllers (Destinations, Bookings, Tours, etc.)
│   │   ├── dto/                              # Request & Response DTOs
│   │   ├── entity/                           # JPA Entities (Destination, Booking, LiveTour, Product, etc.)
│   │   ├── repository/                       # Spring Data JPA Repositories
│   │   └── service/                          # Business Services & Redis Caching
│   ├── src/main/resources/
│   │   └── application.yml                   # Database, Redis, and Port Settings
│   ├── Dockerfile                            # Multi-stage Dockerfile (Maven -> OpenJDK)
│   └── pom.xml                               # Maven Project Dependencies
├── frontend/                                 # React 18 + Vite Application
│   ├── public/
│   │   └── figma_assets/                     # 1:1 Extracted Figma Prototype Assets
│   │       ├── figma_logo.png                # Official Orange Shield Logo Emblem
│   │       ├── featured_hundru.png           # Authentic Hundru Falls Photo
│   │       ├── featured_tribal.png           # Authentic Tribal Festival Dancers
│   │       ├── featured_palamau.png          # Palamau Tiger Conservation Dancers
│   │       ├── hotel_ranchi.png              # Ranchi Hill View Resort
│   │       ├── hotel_netarhat.png            # Netarhat Forest Lodge
│   │       ├── hotel_jamshedpur.png          # Jamshedpur Grand Hotel
│   │       ├── pass_sarhul.png               # Sarhul Festival Pass
│   │       ├── tour_palamau.png              # Palamau Tiger Safari Tour
│   │       └── livestream_hundru.png         # Live Stream Video Frame
│   ├── src/
│   │   ├── components/                       # Modular UI Components
│   │   │   ├── Navbar.jsx                    # Top Government Navigation & Role Dropdown
│   │   │   ├── Hero.jsx                      # Crimson Gradient Hero Banner
│   │   │   ├── FeaturedDestinations.jsx      # Exactly 3 Featured Destination Cards
│   │   │   ├── TourismServices.jsx           # 6 Core Service Cards (3x2 Grid)
│   │   │   ├── TourismStatistics.jsx         # 4 Mint Green Metrics
│   │   │   ├── ExperienceBooking.jsx         # Uniform Card Experience Booking Engine
│   │   │   ├── Explore3DPage.jsx             # 3D Spatial Explorer & Interactive State Map
│   │   │   ├── LiveTourismHub.jsx            # Live Guide Broadcast Hub
│   │   │   ├── LiveStreamRoom.jsx            # Fullscreen Stream Room with Live Chat
│   │   │   ├── MarketplaceView.jsx           # Fair-Trade Crafts, Cuisine & Culture
│   │   │   ├── FloatingActions.jsx           # 5-Button Floating Action Dock
│   │   │   ├── Footer.jsx                    # Government Department Footer
│   │   │   └── modals/                       # HelpBotModal, EmergencyModal, BookingModal, LoginModal
│   │   ├── data/mockData.js                  # Authentic Seed Dataset & Tourism Catalog
│   │   ├── services/api.js                   # Axios HTTP Client with Resilient Fallbacks
│   │   ├── App.jsx                           # View State Orchestration & Routing
│   │   └── index.css                         # Tailwind Directives & Inter Typography
│   ├── Dockerfile                            # Multi-stage Dockerfile (Node -> Nginx)
│   ├── nginx.conf                            # Nginx Production Reverse Proxy
│   ├── package.json                          # Frontend Dependencies & Scripts
│   ├── tailwind.config.js                    # Tailwind Theme Customizations
│   └── vite.config.js                        # Vite Configuration
├── docker-compose.yml                        # Full-Stack Multi-Container Orchestration
├── .gitignore                                # Git Ignore Configuration
└── README.md                                 # Comprehensive Documentation
```

---

## 🤝 Acknowledgements & Cultural Respect

This project was developed with deep appreciation and respect for the indigenous peoples of Jharkhand — including the **Santhal**, **Oraon (Kurukh)**, **Munda**, and **Ho** communities. Special recognition goes to the master artisans of Khunti, Amadubi, Seraikela, and Chaibasa for preserving their ancient artistic lineages and sustainable nature stewardship.

**Johar Jharkhand!** 🙏
