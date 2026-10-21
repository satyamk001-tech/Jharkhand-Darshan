// Authentic Jharkhand Darshan Dataset matching Figma screenshots 1:1

export const TOURISM_SERVICES = [
  {
    id: 'hotels',
    title: 'Hotel & Resort Booking',
    description: 'Book premium accommodations across Jharkhand',
    icon: 'Building',
    actionTab: 'hotels'
  },
  {
    id: 'guides',
    title: 'Tour Guide Services',
    description: 'Expert local guides for authentic experiences',
    icon: 'UserCheck',
    actionTab: 'guides'
  },
  {
    id: 'passes',
    title: 'Festival Passes',
    description: 'Get passes for tribal festivals and cultural events',
    icon: 'Calendar',
    actionTab: 'festivals'
  },
  {
    id: 'transport',
    title: 'Transportation',
    description: 'Cab booking and vehicle rentals',
    icon: 'Car',
    actionTab: 'transport'
  },
  {
    id: 'live',
    title: 'Live Tourism',
    description: 'Experience Jharkhand remotely through live streams',
    icon: 'Video',
    actionModal: 'liveStream'
  },
  {
    id: 'market',
    title: 'Local Marketplace',
    description: 'Buy authentic tribal crafts and products',
    icon: 'ShoppingBag',
    actionModal: 'marketplace'
  }
];

export const TOURISM_STATS = [
  { label: 'Annual Visitors', value: '2.8M+' },
  { label: 'Tourist Destinations', value: '50+' },
  { label: 'Live Tours Daily', value: '25+' },
  { label: 'Local Partners', value: '500+' }
];

export const BOOKING_ITEMS = {
  hotels: [
    {
      id: 'h1',
      title: 'Ranchi Hill View Resort',
      subtitle: 'Luxury resort overlooking Ranchi hills with modern amenities',
      location: 'Ranchi',
      price: '₹3500/night',
      numericPrice: 3500,
      rating: 4.5,
      tag: 'Jharkhand Special',
      image: '/figma_assets/hotel_ranchi.png',
      features: ['Free WiFi', 'Swimming Pool', 'Spa']
    },
    {
      id: 'h2',
      title: 'Netarhat Forest Lodge',
      subtitle: 'Eco-friendly lodge in the Queen of Chotanagpur',
      location: 'Netarhat',
      price: '₹2800/night',
      numericPrice: 2800,
      rating: 4.3,
      tag: 'Jharkhand Special',
      image: '/figma_assets/hotel_netarhat.png',
      features: ['Nature Walks', 'Sunrise View', 'Bonfire']
    },
    {
      id: 'h3',
      title: 'Jamshedpur Grand',
      subtitle: 'Business hotel in Steel City with modern facilities',
      location: 'Jamshedpur',
      price: '₹4200/night',
      numericPrice: 4200,
      rating: 4.2,
      tag: null,
      image: '/figma_assets/hotel_jamshedpur.png',
      features: ['Conference Hall', 'Gym', 'Room Service']
    }
  ],
  guides: [
    {
      id: 'g1',
      title: 'Ravi Kumar - Jharkhand Heritage Expert',
      subtitle: 'Expert guide specializing in Jharkhand tribal culture and waterfalls',
      location: 'Ranchi',
      price: '₹1200/day',
      numericPrice: 1200,
      rating: 4.8,
      tag: 'Jharkhand Special',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
      features: ['Waterfall Trekking', 'Heritage Circuits', 'Santhali & Hindi']
    },
    {
      id: 'g2',
      title: 'Sunita Devi - Wildlife Specialist',
      subtitle: 'Expert in Jharkhand wildlife sanctuaries and nature photography',
      location: 'Betla',
      price: '₹1500/day',
      numericPrice: 1500,
      rating: 4.6,
      tag: 'Jharkhand Special',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      features: ['Tiger Reserve Safari', 'Bird Watching', 'Photography Guide']
    },
    {
      id: 'g3',
      title: 'Amit Singh - Adventure Trek Guide',
      subtitle: 'Certified adventure trek guide for Parasnath and Netarhat hills',
      location: 'Giridih & Latehar',
      price: '₹1100/day',
      numericPrice: 1100,
      rating: 4.7,
      tag: null,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      features: ['Hill Trekking', 'First-Aid Certified', 'Camping Leader']
    }
  ],
  festivals: [
    {
      id: 'f1',
      title: 'Sarhul Festival Complete Pass',
      subtitle: "3-day complete access to Jharkhand's biggest tribal festival",
      location: 'Multiple Locations',
      availability: 'March-April',
      price: '₹750',
      numericPrice: 750,
      rating: 4.9,
      tag: 'Jharkhand Special',
      image: '/figma_assets/pass_sarhul.png',
      features: ['Cultural Performances', 'Traditional Food', 'Crafts Fair']
    },
    {
      id: 'f2',
      title: 'Karma Festival Experience',
      subtitle: 'Traditional harvest festival celebration with locals',
      location: 'Rural Jharkhand',
      availability: 'September',
      price: '₹500',
      numericPrice: 500,
      rating: 4.7,
      tag: 'Jharkhand Special',
      image: '/figma_assets/featured_tribal.png',
      features: ['Folk Dances', 'Local Music', 'Traditional Games']
    },
    {
      id: 'f3',
      title: 'Chhau Dance Mahotsav Pass',
      subtitle: 'VIP arena seating for UNESCO recognized masked martial dance',
      location: 'Seraikela',
      availability: 'April',
      price: '₹600',
      numericPrice: 600,
      rating: 4.9,
      tag: null,
      image: '/figma_assets/featured_palamau.png',
      features: ['Masked Dance Arena', 'Palace Grounds', 'Meet Master Artisans']
    }
  ],
  transport: [
    {
      id: 't1',
      title: '4x4 Forest Safari Gypsy',
      subtitle: 'Open-top safari gypsy for Betla National Park & Dalma Hills',
      location: 'Betla / Dalma',
      price: '₹2200/day',
      numericPrice: 2200,
      rating: 4.8,
      tag: 'Jharkhand Special',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
      features: ['6 Seater', 'Forest Permit Included', 'Experienced Driver']
    },
    {
      id: 't2',
      title: 'Intercity AC Cab (Innova / Ertiga)',
      subtitle: 'Airport pickup and intercity transfers across all 24 districts',
      location: 'Ranchi Airport (IXR)',
      price: '₹1800/trip',
      numericPrice: 1800,
      rating: 4.6,
      tag: null,
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      features: ['Air Conditioned', 'Luggage Carrier', '24/7 Service']
    },
    {
      id: 't3',
      title: 'Patratu Valley Eco Electric Shuttle',
      subtitle: 'Scenic valley ghat and Patratu dam guided eco ride',
      location: 'Ramgarh',
      price: '₹450/seat',
      numericPrice: 450,
      rating: 4.9,
      tag: 'Jharkhand Special',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
      features: ['Eco Friendly', 'Panoramic Roof', 'Local Audio Guide']
    }
  ]
};

export const LIVE_TOURS_DATA = [
  {
    id: 1,
    guideName: 'Ravi Kumar',
    guideRole: 'Tour Guide',
    title: 'Experience the majestic 74m high waterfall with local insights',
    subtitle: 'Experience the majestic 74m high waterfall with local insights',
    price: 299,
    status: 'LIVE',
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  },
  {
    id: 2,
    guideName: 'Sunita Devi',
    guideRole: 'Tour Guide',
    title: 'Authentic tribal lifestyle and traditional crafts',
    subtitle: 'Authentic tribal lifestyle and traditional crafts',
    price: 399,
    status: 'LIVE',
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
  },
  {
    id: 3,
    guideName: 'Amit Singh',
    guideRole: 'Tour Guide',
    title: 'Palamau Tiger Reserve Safari',
    subtitle: 'Wildlife photography and conservation insights',
    startTime: 'Tomorrow 10:00 AM',
    price: 499,
    status: 'SCHEDULED',
    image: '/figma_assets/tour_palamau.png'
  }
];

export const JHARKHAND_CUISINE_DATA = [
  {
    id: 'c1',
    name: 'Authentic Dhuska with Ghugni',
    description: 'Crispy savory rice and chana dal pancakes served hot with spiced black chickpea curry.',
    tag: 'Heritage Breakfast',
    price: '₹40',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    badge: 'State Special',
    region: 'Ranchi & Khunti'
  },
  {
    id: 'c2',
    name: 'Sattu Litti with Baingan Chokha',
    description: 'Roasted wheat dough balls stuffed with spiced roasted gram flour baked over earthen embers.',
    tag: 'Plateau Specialty',
    price: '₹50',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    badge: 'Popular',
    region: 'Deoghar & Palamu'
  },
  {
    id: 'c3',
    name: 'Wild Rugda Mushroom Curry',
    description: 'Rare wild button-like subterranean mushrooms harvested from moist Sal tree roots.',
    tag: 'Forest Tribal Delicacy',
    price: '₹180',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    badge: 'Seasonal',
    region: 'Saranda & Latehar'
  }
];

export const JHARKHAND_PEOPLE_CULTURE_DATA = [
  {
    id: 'p1',
    community: 'Santhal Community & Sohrai Art',
    region: 'Dumka & Santhal Parganas',
    description: 'Renowned for vibrant Sohrai clay wall murals, rhythmic Tumdak drum beats, and sacred nature reverence.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    artForm: 'Sohrai & Khovar Painting',
    instrument: 'Tumdak & Tamak',
    festival: 'Sohrai & Baha Parab'
  },
  {
    id: 'p2',
    community: 'Oraon (Kurukh) & Karma Heritage',
    region: 'Ranchi, Gumla & Lohardaga',
    description: 'Guardians of the sacred Karam tree rituals with synchronized folk songs and line dancing.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    artForm: 'Folk Wall Relief',
    instrument: 'Mandar & Nagara',
    festival: 'Karma & Sarhul'
  }
];

export const MARKETPLACE_PRODUCTS = [
  {
    id: 1,
    name: 'Authentic Sohrai Clay Mural Wall Painting',
    artisan: 'Parvati Soren',
    tribe: 'Santhal Community',
    price: 1499,
    originalPrice: 2200,
    rating: 4.9,
    reviews: 48,
    stock: 12,
    category: 'art',
    giCertified: true,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    description: 'Handmade Sohrai painting depicting tribal fauna and flora with natural ochre, white kaolin, and charcoal pigments.'
  },
  {
    id: 2,
    name: 'Handcrafted Dokra Brass Tribal Dancing Idol',
    artisan: 'Mangal Malhor',
    tribe: 'Malhor Artisan Group',
    price: 2199,
    originalPrice: 2800,
    rating: 4.8,
    reviews: 35,
    stock: 8,
    category: 'metal',
    giCertified: true,
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80',
    description: '4000-year-old ancient lost-wax bell metal casting technique depicting indigenous tribal musicians.'
  },
  {
    id: 3,
    name: 'Pure Handspun Jharkhand Tussar Silk Dupatta',
    artisan: 'Anjali Hansda',
    tribe: 'Chaibasa Weavers Guild',
    price: 1899,
    originalPrice: 2600,
    rating: 4.9,
    reviews: 62,
    stock: 15,
    category: 'textiles',
    giCertified: true,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
    description: 'Natural wild silk cultivated from Arjun and Asan trees in the Chotanagpur forests with gold luster.'
  },
  {
    id: 4,
    name: 'Tribal Hand-Carved Wooden Madar Drum (Mandar)',
    artisan: 'Budhu Oraon',
    tribe: 'Oraon Community',
    price: 2799,
    originalPrice: 3500,
    rating: 5.0,
    reviews: 21,
    stock: 5,
    category: 'music',
    giCertified: false,
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=600&q=80',
    description: 'The soul of Jharkhand folk music, handcrafted from seasoned Gamhar timber with parchment drumheads.'
  }
];

export const EMERGENCY_CONTACTS = [
  { id: 1, title: 'Jharkhand State Police Emergency', number: '112', time: '24/7 Toll-Free', dept: 'State Police Control Room', icon: 'Shield' },
  { id: 2, title: 'Jharkhand Tourist Police Helpline', number: '1363', time: '24/7 Toll-Free', dept: 'Dept of Tourism, Govt of Jharkhand', icon: 'PhoneCall' },
  { id: 3, title: 'State Medical Ambulance Service', number: '108', time: '24/7 Toll-Free', dept: 'National Health Mission Jharkhand', icon: 'HeartPulse' },
  { id: 4, title: 'Women Safety & Crisis Helpline', number: '1091', time: '24/7 Toll-Free', dept: 'Jharkhand CID Women Protection Wing', icon: 'UserCheck' }
];
