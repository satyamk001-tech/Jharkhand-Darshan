package com.jharkhand.darshan.config;

import com.jharkhand.darshan.entity.*;
import com.jharkhand.darshan.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DataInitializer {

    @Bean
    public CommandLineRunner initData(
            DestinationRepository destinationRepository,
            LiveTourRepository liveTourRepository,
            ProductRepository productRepository,
            EmergencyContactRepository emergencyContactRepository,
            TourismServiceRepository tourismServiceRepository,
            UserRepository userRepository) {
        
        return args -> {
            // Seed Tourism Services
            if (tourismServiceRepository.count() == 0) {
                tourismServiceRepository.saveAll(List.of(
                    new TourismServiceEntity("hotels", "Hotel & Resort Booking", "Book comfortable stays across all 24 districts of Jharkhand.", "Building", "hotels", null),
                    new TourismServiceEntity("guides", "Tour Guide Services", "Certified local tribal & cultural guides for an authentic journey.", "UserCheck", "guides", null),
                    new TourismServiceEntity("passes", "Festival Passes", "Get official entry passes for Sarhul, Karma, and Chhau cultural festivals.", "Calendar", "festivals", null),
                    new TourismServiceEntity("transport", "Transportation", "Verified cabs, jungle safari gypsies & eco-friendly electric shuttles.", "Car", "transport", null),
                    new TourismServiceEntity("live", "Live Tourism", "Experience live guided virtual tours with real-time audio and interaction.", "Video", null, "liveStream"),
                    new TourismServiceEntity("market", "Local Marketplace", "Directly support indigenous tribal artisans: Sohrai art, Dokra & Tussar silk.", "ShoppingBag", null, "marketplace")
                ));
            }

            // Seed Authentic Jharkhand Destinations
            if (destinationRepository.count() == 0) {
                destinationRepository.saveAll(List.of(
                    new Destination(
                        "Hundru Falls", "Ranchi", "waterfall", "Waterfall",
                        "One of the highest waterfalls in Jharkhand where the Subarnarekha River plunges 98 meters over jagged rocky terrain, creating a majestic misty spectacle.",
                        4.7, 1850, "₹20", "6:00 AM - 5:30 PM", "October to February",
                        23.4333, 85.6500,
                        "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
                        true
                    ),
                    new Destination(
                        "Betla National Park", "Latehar / Palamu", "wildlife", "Wildlife",
                        "One of India's earliest tiger project reserves featuring Sal forests, elephants, sloth bears, chital, and the historical Chero kings' Palamau Fort.",
                        4.8, 2340, "₹100 (Safari extra)", "6:00 AM - 5:00 PM", "November to April",
                        23.8833, 84.1833,
                        "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
                        true
                    ),
                    new Destination(
                        "Baidyanath Dham", "Deoghar", "spiritual", "Spiritual",
                        "One of the sacred 12 Jyotirlingas of Lord Shiva. Celebrated for the revered Kanwar Yatra where millions of devotees carry holy Ganga water from Sultanganj.",
                        4.9, 5420, "Free Entry (VIP Darshan ₹500)", "4:00 AM - 9:00 PM", "October to March / Shravan",
                        24.4925, 86.7001,
                        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
                        true
                    ),
                    new Destination(
                        "Dassam Falls", "Ranchi", "waterfall", "Waterfall",
                        "A breathtaking natural fall formed on the Kanchi River falling from 44 meters, surrounded by scenic Chotanagpur plateau greenery.",
                        4.6, 1420, "₹30", "7:00 AM - 5:00 PM", "September to January",
                        23.1436, 85.4655,
                        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
                        true
                    ),
                    new Destination(
                        "Netarhat (Queen of Chotanagpur)", "Latehar", "nature", "Nature",
                        "Serene hill station perched at 1,128 meters above sea level, famed for panoramic sunrise points, Magnolia sunset point, and cool pine forests.",
                        4.8, 3120, "Free", "Open 24 Hours", "Year-round (Best Nov - Feb)",
                        23.4833, 84.2667,
                        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
                        true
                    ),
                    new Destination(
                        "Palamau Forts", "Latehar", "heritage", "Heritage",
                        "Ancient 16th-century twin fortresses built by the tribal Chero dynasty deep inside the Auranga river valley and dense tiger reserve.",
                        4.6, 980, "₹25", "9:00 AM - 5:00 PM", "October to March",
                        23.9000, 84.2333,
                        "https://images.unsplash.com/photo-1599831104618-33e387c6aa56?auto=format&fit=crop&w=800&q=80",
                        false
                    ),
                    new Destination(
                        "Shikharji (Parasnath Hill)", "Giridih", "spiritual", "Spiritual",
                        "The highest peak in Jharkhand at 1,365 meters, the most revered Jain pilgrimage destination where 20 of the 24 Tirthankaras attained Nirvana.",
                        4.9, 4210, "Free", "Open 24 Hours", "October to March",
                        23.9628, 86.1283,
                        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
                        true
                    ),
                    new Destination(
                        "Jonha Falls (Gautam Dhara)", "Ranchi", "waterfall", "Waterfall",
                        "Magnificent cascade on the Raru River with 722 steps descent, sacred to Lord Buddha with an ancient Buddhist shrine atop the cliff.",
                        4.5, 1200, "₹20", "7:00 AM - 5:30 PM", "October to February",
                        23.3444, 85.6078,
                        "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
                        false
                    ),
                    new Destination(
                        "Maluti Terracotta Temples", "Dumka", "heritage", "Heritage",
                        "Historic village of 72 surviving terracotta temples built between the 17th and 19th centuries by the Baj Basanta dynasty portraying Ramayana & Mahabharata.",
                        4.7, 760, "Free", "6:00 AM - 6:00 PM", "October to March",
                        24.1611, 87.6742,
                        "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
                        false
                    ),
                    new Destination(
                        "Dalma Wildlife Sanctuary", "East Singhbhum", "wildlife", "Wildlife",
                        "Famous elephant sanctuary situated atop the Dalma mountain range overlooking Jamshedpur steel city, home to leopards, deer, and giant squirrels.",
                        4.6, 1680, "₹50", "6:00 AM - 5:00 PM", "October to June",
                        22.9000, 86.2000,
                        "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80",
                        false
                    ),
                    new Destination(
                        "Patratu Valley", "Ramgarh", "nature", "Nature",
                        "Scenic serpentine ghat roads cutting through forested hills overlooking the shimmering Patratu dam reservoir with boat rides and island park.",
                        4.7, 3450, "Free", "Open 24 Hours", "Round the year",
                        23.6333, 85.3167,
                        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
                        true
                    ),
                    new Destination(
                        "Terracotta & Dokra Craft Village", "Khunti / Amadubi", "craft", "Craft",
                        "Live tribal artisan settlements practicing ancient Dokra lost-wax metal casting and Pyatkar scroll paintings passed down over millennia.",
                        4.8, 640, "Free", "9:00 AM - 6:00 PM", "October to March",
                        23.0833, 85.2833,
                        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
                        false
                    )
                ));
            }

            // Seed Live Virtual Tours
            if (liveTourRepository.count() == 0) {
                LiveTour tour1 = new LiveTour();
                tour1.setGuideName("Ravi Kumar");
                tour1.setGuideAvatar("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80");
                tour1.setGuideTitle("Senior Eco-Guide, 8+ Yrs");
                tour1.setTitle("Betla National Park Safari & Sal Forests");
                tour1.setDestination("Betla, Latehar");
                tour1.setStatus("LIVE");
                tour1.setStartTime("Streaming Now");
                tour1.setPrice(299.0);
                tour1.setViewerCount(248);
                tour1.setStreamUrl("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");
                tour1.setRating(4.9);
                tour1.setTotalReviews(128);

                LiveTour tour2 = new LiveTour();
                tour2.setGuideName("Sunita Devi");
                tour2.setGuideAvatar("https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80");
                tour2.setGuideTitle("Cultural Historian & Santhal Scholar");
                tour2.setTitle("Baidyanath Dham Darshan & Shravani Mela Rituals");
                tour2.setDestination("Deoghar");
                tour2.setStatus("LIVE");
                tour2.setStartTime("Streaming Now");
                tour2.setPrice(399.0);
                tour2.setViewerCount(412);
                tour2.setStreamUrl("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4");
                tour2.setRating(5.0);
                tour2.setTotalReviews(256);

                LiveTour tour3 = new LiveTour();
                tour3.setGuideName("Amit Singh");
                tour3.setGuideAvatar("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80");
                tour3.setGuideTitle("Wildlife Tracker");
                tour3.setTitle("Palamau Tiger Reserve: Hidden Auranga River Trails");
                tour3.setDestination("Palamu");
                tour3.setStatus("SCHEDULED");
                tour3.setStartTime("Tomorrow at 06:30 AM IST");
                tour3.setPrice(499.0);
                tour3.setViewerCount(0);
                tour3.setRating(4.8);
                tour3.setTotalReviews(94);

                liveTourRepository.saveAll(List.of(tour1, tour2, tour3));
            }

            // Seed Products
            if (productRepository.count() == 0) {
                Product p1 = new Product();
                p1.setName("Authentic Sohrai Clay Mural Wall Painting");
                p1.setArtisan("Parvati Soren");
                p1.setTribe("Santhal Community");
                p1.setPrice(1499.0);
                p1.setOriginalPrice(2200.0);
                p1.setRating(4.9);
                p1.setReviewsCount(48);
                p1.setStock(12);
                p1.setCategory("art");
                p1.setGiCertified(true);
                p1.setImageUrl("https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80");
                p1.setDescription("Handmade Sohrai painting depicting tribal fauna and flora with natural ochre, white kaolin, and charcoal pigments.");

                Product p2 = new Product();
                p2.setName("Handcrafted Dokra Brass Tribal Dancing Idol");
                p2.setArtisan("Mangal Malhor");
                p2.setTribe("Malhor Artisan Group");
                p2.setPrice(2199.0);
                p2.setOriginalPrice(2800.0);
                p2.setRating(4.8);
                p2.setReviewsCount(35);
                p2.setStock(8);
                p2.setCategory("metal");
                p2.setGiCertified(true);
                p2.setImageUrl("https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80");
                p2.setDescription("4000-year-old ancient lost-wax bell metal casting technique depicting indigenous tribal musicians.");

                Product p3 = new Product();
                p3.setName("Pure Handspun Jharkhand Tussar Silk Dupatta");
                p3.setArtisan("Anjali Hansda");
                p3.setTribe("Chaibasa Weavers Guild");
                p3.setPrice(1899.0);
                p3.setOriginalPrice(2600.0);
                p3.setRating(4.9);
                p3.setReviewsCount(62);
                p3.setStock(15);
                p3.setCategory("textiles");
                p3.setGiCertified(true);
                p3.setImageUrl("https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80");
                p3.setDescription("Natural wild silk cultivated from Arjun and Asan trees in the Chotanagpur forests with gold luster.");

                Product p4 = new Product();
                p4.setName("Tribal Hand-Carved Wooden Madar Drum (Mandar)");
                p4.setArtisan("Budhu Oraon");
                p4.setTribe("Oraon Community");
                p4.setPrice(2799.0);
                p4.setOriginalPrice(3500.0);
                p4.setRating(5.0);
                p4.setReviewsCount(21);
                p4.setStock(5);
                p4.setCategory("music");
                p4.setGiCertified(false);
                p4.setImageUrl("https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=600&q=80");
                p4.setDescription("The soul of Jharkhand folk music, handcrafted from seasoned Gamhar timber with parchment drumheads.");

                productRepository.saveAll(List.of(p1, p2, p3, p4));
            }

            // Seed Emergency Contacts
            if (emergencyContactRepository.count() == 0) {
                emergencyContactRepository.saveAll(List.of(
                    new EmergencyContact("Jharkhand State Police Emergency", "112", "24/7 Toll-Free", "State Police Control Room", "police"),
                    new EmergencyContact("Jharkhand Tourist Police Helpline", "1363", "24/7 Toll-Free", "Dept of Tourism, Govt of Jharkhand", "tourist_police"),
                    new EmergencyContact("State Medical Ambulance Service", "108", "24/7 Toll-Free", "National Health Mission Jharkhand", "ambulance"),
                    new EmergencyContact("Women Safety & Crisis Helpline", "1091", "24/7 Toll-Free", "Jharkhand CID Women Protection Wing", "women_helpline"),
                    new EmergencyContact("Forest & Wildlife Rescue Wing", "1800-345-6548", "24/7 Toll-Free", "Jharkhand Forest & Environment Dept", "disaster")
                ));
            }
            // Seed 3 Dedicated Role Users (Tourist, Guide/Seller, Govt Admin)
            if (userRepository.count() == 0) {
                userRepository.saveAll(List.of(
                    new User("tourist@jharkhand.travel", "Satyam Kumar (Tourist)", "TOURIST", "+91 98765 43210", "Ranchi"),
                    new User("guide.seller@jharkhand.travel", "Ravi Kumar (Guide & Seller)", "GUIDE_SELLER", "+91 98111 22334", "Latehar"),
                    new User("admin@tourism.jharkhand.gov.in", "Rajesh Murmu (Govt Admin)", "ADMIN", "+91 98000 11223", "Ranchi Secretariat")
                ));
            }
        };
    }
}
