// Authentic Jharkhand Darshan Dataset

export const TOURISM_SERVICES = [
  {
    id: 'hotels',
    title: 'Hotel & Resort Booking',
    description: 'Book verified hotels, eco-cottages, and government tourist lodges across all 24 districts of Jharkhand.',
    icon: 'Building',
    actionTab: 'hotels'
  },
  {
    id: 'guides',
    title: 'Tour Guide Services',
    description: 'Certified local tribal and heritage guides fluent in Santhali, Mundari, Hindi, and English.',
    icon: 'UserCheck',
    actionTab: 'guides'
  },
  {
    id: 'passes',
    title: 'Festival Passes',
    description: 'Official VIP and visitor passes for Sarhul, Karma Puja, Baidyanath Shravani Mela, and Tusu Parab.',
    icon: 'Calendar',
    actionTab: 'festivals'
  },
  {
    id: 'transport',
    title: 'Transportation',
    description: 'Verified airport taxi transfers, Patratu valley drives, Betla forest safari gypsies, and intercity EV cabs.',
    icon: 'Car',
    actionTab: 'transport'
  },
  {
    id: 'live',
    title: 'Live Tourism',
    description: 'Join real-time guided interactive virtual tours streamed directly from waterfalls, temples, and wildlife sanctuaries.',
    icon: 'Video',
    actionModal: 'liveStream'
  },
  {
    id: 'market',
    title: 'Local Marketplace',
    description: 'Authentic GI-tagged Sohrai murals, Dokra lost-wax brass sculptures, and handspun Tussar silk from indigenous cooperatives.',
    icon: 'ShoppingBag',
    actionModal: 'marketplace'
  }
];

export const TOURISM_STATS = [
  { label: 'Annual Visitors', value: '2.8M+' },
  { label: 'Destinations', value: '50+' },
  { label: 'Live Tours Daily', value: '25+' },
  { label: 'Local Partners', value: '500+' }
];

export const EXPLORE_3D_DESTINATIONS = [
  {
    id: 1,
    name: 'Hundru Falls',
    district: 'Ranchi',
    category: 'waterfall',
    tag: 'Waterfall',
    rating: 4.7,
    reviews: 1850,
    entryFee: '₹20',
    timings: '6:00 AM - 5:30 PM',
    bestTime: 'October to February',
    description: 'One of the highest waterfalls in Jharkhand where the Subarnarekha River plunges 98 meters over jagged rocky terrain, creating a majestic misty spectacle.',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
    coordinates: { x: 55, y: 52 },
    stats: { height: '98m', river: 'Subarnarekha', trekLevel: 'Easy' }
  },
  {
    id: 2,
    name: 'Betla National Park',
    district: 'Latehar',
    category: 'wildlife',
    tag: 'Wildlife',
    rating: 4.8,
    reviews: 2340,
    entryFee: '₹100 (Safari extra)',
    timings: '6:00 AM - 5:00 PM',
    bestTime: 'November to April',
    description: 'One of India\'s earliest tiger project reserves featuring Sal forests, elephants, sloth bears, chital, and the historical Chero kings\' Palamau Fort.',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80',
    coordinates: { x: 28, y: 38 },
    stats: { area: '226 sq km', wildlife: 'Tigers & Elephants', elevation: '1,000m' }
  },
  {
    id: 3,
    name: 'Baidyanath Dham',
    district: 'Deoghar',
    category: 'spiritual',
    tag: 'Spiritual',
    rating: 4.9,
    reviews: 5420,
    entryFee: 'Free (VIP ₹500)',
    timings: '4:00 AM - 9:00 PM',
    bestTime: 'October to March / Shravan',
    description: 'One of the sacred 12 Jyotirlingas of Lord Shiva. Celebrated for the revered Kanwar Yatra where millions of devotees carry holy Ganga water from Sultanganj.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    coordinates: { x: 74, y: 32 },
    stats: { deity: 'Lord Shiva Jyotirlinga', architecture: 'Nagari Stone', antiquity: '8th Century' }
  },
  {
    id: 4,
    name: 'Dassam Falls',
    district: 'Ranchi',
    category: 'waterfall',
    tag: 'Waterfall',
    rating: 4.6,
    reviews: 1420,
    entryFee: '₹30',
    timings: '7:00 AM - 5:00 PM',
    bestTime: 'September to January',
    description: 'A breathtaking natural cascade on the Kanchi River falling from 44 meters, surrounded by scenic Chotanagpur plateau greenery.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    coordinates: { x: 52, y: 60 },
    stats: { height: '44m', river: 'Kanchi River', nature: 'Plateau Rapids' }
  },
  {
    id: 5,
    name: 'Netarhat (Queen of Chotanagpur)',
    district: 'Latehar',
    category: 'nature',
    tag: 'Nature',
    rating: 4.8,
    reviews: 3120,
    entryFee: 'Free',
    timings: 'Open 24 Hours',
    bestTime: 'Year-round',
    description: 'Serene hill station perched at 1,128 meters above sea level, famed for panoramic sunrise points, Magnolia sunset point, and cool pine forests.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    coordinates: { x: 22, y: 55 },
    stats: { elevation: '1,128m', weather: 'Pleasant & Cool', highlights: 'Magnolia Sunset' }
  },
  {
    id: 6,
    name: 'Palamau Forts',
    district: 'Latehar',
    category: 'heritage',
    tag: 'Heritage',
    rating: 4.6,
    reviews: 980,
    entryFee: '₹25',
    timings: '9:00 AM - 5:00 PM',
    bestTime: 'October to March',
    description: 'Ancient 16th-century twin fortresses built by the tribal Chero dynasty deep inside the Auranga river valley and dense tiger reserve.',
    image: 'https://images.unsplash.com/photo-1599831104618-33e387c6aa56?auto=format&fit=crop&w=800&q=80',
    coordinates: { x: 25, y: 42 },
    stats: { dynasty: 'Chero Kings', built: '16th Century', features: 'Nagpuri Gate' }
  },
  {
    id: 7,
    name: 'Shikharji (Parasnath Hill)',
    district: 'Giridih',
    category: 'spiritual',
    tag: 'Spiritual',
    rating: 4.9,
    reviews: 4210,
    entryFee: 'Free',
    timings: 'Open 24 Hours',
    bestTime: 'October to March',
    description: 'The highest mountain peak in Jharkhand at 1,365 meters, the most revered Jain pilgrimage destination where 20 of the 24 Tirthankaras attained Nirvana.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    coordinates: { x: 68, y: 38 },
    stats: { peak: '1,365m (Highest in JH)', significance: '20 Tirthankara Moksha', distance: '9km Parikrama' }
  },
  {
    id: 8,
    name: 'Jonha Falls (Gautam Dhara)',
    district: 'Ranchi',
    category: 'waterfall',
    tag: 'Waterfall',
    rating: 4.5,
    reviews: 1200,
    entryFee: '₹20',
    timings: '7:00 AM - 5:30 PM',
    bestTime: 'October to February',
    description: 'Magnificent cascade on the Raru River with 722 steps descent, sacred to Lord Buddha with an ancient Buddhist shrine atop the cliff.',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80',
    coordinates: { x: 57, y: 55 },
    stats: { height: '43m', steps: '722 Stone Steps', sanctuary: 'Buddha Temple' }
  },
  {
    id: 9,
    name: 'Maluti Terracotta Temples',
    district: 'Dumka',
    category: 'heritage',
    tag: 'Heritage',
    rating: 4.7,
    reviews: 760,
    entryFee: 'Free',
    timings: '6:00 AM - 6:00 PM',
    bestTime: 'October to March',
    description: 'Historic village of 72 surviving terracotta temples built between the 17th and 19th centuries by the Baj Basanta dynasty portraying Ramayana & Mahabharata.',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
    coordinates: { x: 84, y: 34 },
    stats: { count: '72 Temples', style: 'Terracotta Chala', deity: 'Mauliksha Devi' }
  },
  {
    id: 10,
    name: 'Dalma Wildlife Sanctuary',
    district: 'East Singhbhum',
    category: 'wildlife',
    tag: 'Wildlife',
    rating: 4.6,
    reviews: 1680,
    entryFee: '₹50',
    timings: '6:00 AM - 5:00 PM',
    bestTime: 'October to June',
    description: 'Famous elephant sanctuary situated atop the Dalma mountain range overlooking Jamshedpur steel city, home to leopards, deer, and giant squirrels.',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80',
    coordinates: { x: 75, y: 68 },
    stats: { fauna: 'Asian Elephants', range: 'Dalma Hills', view: 'Subarnarekha Valley' }
  },
  {
    id: 11,
    name: 'Patratu Valley',
    district: 'Ramgarh',
    category: 'nature',
    tag: 'Nature',
    rating: 4.7,
    reviews: 3450,
    entryFee: 'Free',
    timings: 'Open 24 Hours',
    bestTime: 'Round the year',
    description: 'Scenic serpentine ghat roads cutting through forested hills overlooking the shimmering Patratu dam reservoir with boat rides and island park.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    coordinates: { x: 48, y: 46 },
    stats: { reservoir: 'Patratu Dam', road: 'S-curve Valley Ghat', activity: 'Speed Boating' }
  },
  {
    id: 12,
    name: 'Dokra & Terracotta Craft Village',
    district: 'Khunti / Amadubi',
    category: 'craft',
    tag: 'Craft',
    rating: 4.8,
    reviews: 640,
    entryFee: 'Free',
    timings: '9:00 AM - 6:00 PM',
    bestTime: 'October to March',
    description: 'Live tribal artisan settlements practicing ancient Dokra lost-wax metal casting and Pyatkar scroll paintings passed down over millennia.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    coordinates: { x: 44, y: 65 },
    stats: { craft: 'Dokra Lost-Wax & Pyatkar', lineage: '4000 Years Old', workshop: 'Live Master Artisans' }
  }
];

export const JHARKHAND_CUISINE_DATA = [
  {
    id: 'c1',
    name: 'Authentic Dhuska with Ghugni & Chutney',
    description: 'Traditional deep-fried savory rice and chana dal batter pancakes, spiced with cumin, served hot with spicy black chickpea curry.',
    tag: 'Jharkhand Heritage Breakfast',
    price: '₹40 / plate',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    badge: 'GI Tag Candidate',
    region: 'Ranchi, Gumla & Khunti'
  },
  {
    id: 'c2',
    name: 'Sattu Litti with Baingan-Tamatar Chokha',
    description: 'Roasted wheat dough balls stuffed with spiced roasted gram flour (sattu), baked over earthen embers and steeped in pure desi ghee.',
    tag: 'Plateau Specialty',
    price: '₹50 / pair',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    badge: 'Classic Food',
    region: 'Deoghar & Palamu'
  },
  {
    id: 'c3',
    name: 'Wild Rugda Mushroom Curry',
    description: 'Rare wild button-like subterranean mushrooms harvested from moist Sal tree roots during the monsoon season, rich in umami.',
    tag: 'Forest Tribal Delicacy',
    price: '₹180 / bowl',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    badge: 'Forest Foraged',
    region: 'Saranda & Latehar Forests'
  },
  {
    id: 'c4',
    name: 'Karil (Tender Bamboo Shoot) Sabzi',
    description: 'Young bamboo shoots harvested in seasonal downpours, cooked with yellow mustard paste, garlic, and wild coriander.',
    tag: 'Monsoon Tribal Special',
    price: '₹120 / bowl',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    badge: 'Indigenous Nutrition',
    region: 'Chotanagpur Belt'
  },
  {
    id: 'c5',
    name: 'Chhilka Roti with Aloo Chana',
    description: 'Crispy rice flour and split Bengal gram crepes spread delicately on an earthen tawa using Sal leaves with minimal oil.',
    tag: 'Traditional Tribal Snack',
    price: '₹45 / plate',
    image: 'https://images.unsplash.com/photo-1505253758473-96b3015f21c9?auto=format&fit=crop&w=600&q=80',
    badge: 'Wholesome Grain',
    region: 'Santhal Parganas'
  },
  {
    id: 'c6',
    name: 'Crispy Thekua & Malpua',
    description: 'Traditional sweets crafted with whole wheat, jaggery, crushed fennel seeds, dry coconut, and cardamom fried in cow ghee.',
    tag: 'Festive Confection',
    price: '₹150 / 250g',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80',
    badge: 'Chhath & Sarhul Sweet',
    region: 'Across All 24 Districts'
  }
];

export const JHARKHAND_PEOPLE_CULTURE_DATA = [
  {
    id: 'p1',
    community: 'Santhal Community & Sohrai Art',
    region: 'Dumka, Jamtara, Pakur & Godda',
    description: 'The largest indigenous group of Jharkhand, renowned for vibrant Sohrai wall murals, rhythmic Tumdak drum beats, and sacred nature reverence.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    artForm: 'Sohrai & Khovar Painting',
    instrument: 'Tumdak & Tamak Drums',
    festival: 'Sohrai & Baha Parab'
  },
  {
    id: 'p2',
    community: 'Oraon (Kurukh) People & Karma Festival',
    region: 'Ranchi, Gumla, Simdega & Lohardaga',
    description: 'Guardians of the sacred Karam tree rituals, celebrated for group line dances with women singing folk ballads in harmonic synchronization.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    artForm: 'Folk Wall Relief & Tattooing',
    instrument: 'Mandar & Nagara',
    festival: 'Karma Festival & Sarhul'
  },
  {
    id: 'p3',
    community: 'Munda Tribe & Sasandiri Heritage',
    region: 'Khunti, Murhu & Tamar',
    description: 'Legendary freedom warrior Birsa Munda\'s heritage community, honoring ancestral Sasandiri megalith stone slabs and deep forest conservation ethics.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    artForm: 'Wood Carving & Megaliths',
    instrument: 'Banam & Tuila Violin',
    festival: 'Mage Parab & Baa Parab'
  },
  {
    id: 'p4',
    community: 'Chhau Mask Masters & Martial Dancers',
    region: 'Seraikela Kharsawan',
    description: 'UNESCO Intangible Cultural Heritage of Humanity: acrobatic masked martial dance reenacting epic tribal sagas with clay and papier-mâché masks.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
    artForm: 'Seraikela Chhau Mask Craft',
    instrument: 'Dhol, Shehnai & Dhamsa',
    festival: 'Chaitra Parva Chhau Mahotsav'
  }
];

export const BOOKING_ITEMS = {
  hotels: [
    {
      id: 'h1',
      title: 'Jharkhand Tourism Luxury Eco Resort',
      location: 'Betla National Park, Latehar',
      price: '₹3,499 / night',
      numericPrice: 3499,
      rating: 4.8,
      reviews: 412,
      tag: 'Eco Friendly',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      features: ['Sal Forest View', 'Tribal Dinner Buffet', 'Guided Morning Safari', 'Complimentary WiFi']
    },
    {
      id: 'h2',
      title: 'Chotanagpur Valley Hill Resort',
      location: 'Magnolia Point Road, Netarhat',
      price: '₹4,199 / night',
      numericPrice: 4199,
      rating: 4.9,
      reviews: 580,
      tag: 'Hilltop View',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      features: ['Magnolia Sunset Balcony', 'Bonfire & Folk Music', 'Pine Forest Trail', 'Mountain Biking']
    },
    {
      id: 'h3',
      title: 'Baidyanath Heritage Tourist Lodge',
      location: 'Near Shiva Temple, Deoghar',
      price: '₹2,299 / night',
      numericPrice: 2299,
      rating: 4.7,
      reviews: 950,
      tag: 'Temple Vicinity',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
      features: ['VIP Darshan Assistance', 'Pure Vegetarian Kitchen', '24/7 Hot Water', 'Station Pick-up']
    },
    {
      id: 'h4',
      title: 'Patratu Lake Resort & Water Villas',
      location: 'Patratu Dam Lake, Ramgarh',
      price: '₹4,899 / night',
      numericPrice: 4899,
      rating: 4.9,
      reviews: 730,
      tag: 'Lakefront',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
      features: ['Private Lake Deck', 'Speedboat Access', 'Fine Dining Restaurant', 'Infinity Pool']
    }
  ],
  guides: [
    {
      id: 'g1',
      title: 'Ravi Kumar - Senior Wildlife Tracker',
      location: 'Betla National Park & Palamu Tiger Reserve',
      price: '₹1,499 / day',
      numericPrice: 1499,
      rating: 4.9,
      reviews: 210,
      tag: 'Dept. Certified',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      features: ['8+ Years Tracking Experience', 'English, Hindi, Mundari', 'Bird Watching Specialist']
    },
    {
      id: 'g2',
      title: 'Sunita Devi - Santhal Heritage & Temple Scholar',
      location: 'Deoghar & Maluti Terracotta Circuit',
      price: '₹1,299 / day',
      numericPrice: 1299,
      rating: 5.0,
      reviews: 340,
      tag: 'Top Rated',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
      features: ['Doctorate in Chotanagpur History', 'VIP Temple Entry Escort', 'Santhali Folk Lore Expert']
    },
    {
      id: 'g3',
      title: 'Amit Singh - Waterfall Trekking & Adventure Guide',
      location: 'Hundru, Dassam & Jonha Circuit, Ranchi',
      price: '₹1,199 / day',
      numericPrice: 1199,
      rating: 4.8,
      reviews: 180,
      tag: 'Adventure Guide',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      features: ['First-Aid Certified', 'Secret Scenic Trails', 'Photography Assistance']
    }
  ],
  festivals: [
    {
      id: 'f1',
      title: 'Sarhul Festival Grand Procession Pass',
      location: 'Siram Toli Sarna Sthal, Ranchi',
      price: '₹299 / person',
      numericPrice: 299,
      rating: 4.9,
      reviews: 820,
      tag: 'Spring Festival',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80',
      features: ['Sal Tree Blooming Ritual Access', 'Traditional Sarna Puja Prasad', 'Tribal Dance Arena Seating']
    },
    {
      id: 'f2',
      title: 'Karma Festival Cultural Celebrations Pass',
      location: 'Hazaribagh & Gumla',
      price: '₹199 / person',
      numericPrice: 199,
      rating: 4.8,
      reviews: 450,
      tag: 'Cultural Heritage',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
      features: ['Karam Branch Worship Ceremony', 'All-Night Folk Music Performance', 'Traditional Handia Experience (Optional)']
    },
    {
      id: 'f3',
      title: 'Seraikela Chhau Mahotsav Royal Pass',
      location: 'Seraikela Palace Grounds',
      price: '₹499 / person',
      numericPrice: 499,
      rating: 5.0,
      reviews: 620,
      tag: 'UNESCO Heritage',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
      features: ['VIP Front Row Seating', 'Meet the Mask Master Artisans', 'Complimentary Commemorative Booklet']
    }
  ],
  transport: [
    {
      id: 't1',
      title: '4x4 Open Forest Safari Gypsy',
      location: 'Betla National Park & Netarhat',
      price: '₹2,199 / safari',
      numericPrice: 2199,
      rating: 4.9,
      reviews: 390,
      tag: 'Forest Certified',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
      features: ['Up to 6 Passengers', 'Authorized Forest Driver', 'Spotting Spotlight Included']
    },
    {
      id: 't2',
      title: 'Ranchi Airport to Patratu Valley AC SUV',
      location: 'Birsa Munda Airport (IXR) - Ranchi',
      price: '₹1,899 / trip',
      numericPrice: 1899,
      rating: 4.8,
      reviews: 520,
      tag: 'Airport Transfer',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
      features: ['Innova / Ertiga AC Vehicle', 'Professional Driver', 'Toll & Parking Covered', 'Sightseeing Stops']
    },
    {
      id: 't3',
      title: 'Deoghar Spiritual Circuit Private Cab',
      location: 'Baidyanath Dham, Tapovan & Basukinath',
      price: '₹2,499 / full day',
      numericPrice: 2499,
      rating: 4.9,
      reviews: 670,
      tag: 'Pilgrim Special',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80',
      features: ['Full Day 10 Hours / 120 KM', 'Temple Drop & Pickup', 'Complimentary Bottled Water']
    }
  ]
};

export const LIVE_TOURS_DATA = [
  {
    id: 1,
    guideName: 'Ravi Kumar',
    guideAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    guideTitle: 'Senior Eco-Guide, 8+ Yrs',
    title: 'Betla National Park Safari & Sal Forests',
    destination: 'Betla, Latehar',
    status: 'LIVE',
    startTime: 'Streaming Now',
    price: 299,
    viewerCount: 248,
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    rating: 4.9,
    totalReviews: 128
  },
  {
    id: 2,
    guideName: 'Sunita Devi',
    guideAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    guideTitle: 'Cultural Historian & Santhal Scholar',
    title: 'Baidyanath Dham Darshan & Shravani Mela Rituals',
    destination: 'Deoghar',
    status: 'LIVE',
    startTime: 'Streaming Now',
    price: 399,
    viewerCount: 412,
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    rating: 5.0,
    totalReviews: 256
  },
  {
    id: 3,
    guideName: 'Amit Singh',
    guideAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    guideTitle: 'Wildlife Tracker',
    title: 'Palamau Tiger Reserve: Hidden Auranga River Trails',
    destination: 'Palamu',
    status: 'SCHEDULED',
    startTime: 'Tomorrow at 06:30 AM IST',
    price: 499,
    viewerCount: 0,
    rating: 4.8,
    totalReviews: 94
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
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
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
  { id: 4, title: 'Women Safety & Crisis Helpline', number: '1091', time: '24/7 Toll-Free', dept: 'Jharkhand CID Women Protection Wing', icon: 'UserCheck' },
  { id: 5, title: 'Forest & Wildlife Rescue Wing', number: '1800-345-6548', time: '24/7 Toll-Free', dept: 'Jharkhand Forest & Environment Dept', icon: 'Flame' }
];
