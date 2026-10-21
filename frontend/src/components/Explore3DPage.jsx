import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Star, 
  Compass, 
  Users, 
  Clock, 
  Car, 
  Train, 
  ArrowLeft 
} from 'lucide-react';

export const FIGMA_3D_DESTINATIONS = [
  {
    id: 1,
    name: 'Hundru Falls',
    category: 'waterfall',
    rating: 4.6,
    description: '74-meter high waterfall on the Subarnarekha River, perfect for monsoon visits',
    visitors: '150K/year',
    duration: '4-5 hours',
    transports: ['car', 'bus'],
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
    district: 'Ranchi'
  },
  {
    id: 2,
    name: 'Jonha Falls (Gautamdhara)',
    category: 'waterfall',
    rating: 4.5,
    description: 'Sacred waterfall where Lord Buddha meditated, surrounded by dense forests',
    visitors: '80K/year',
    duration: '3-4 hours',
    transports: ['car'],
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80',
    district: 'Ranchi'
  },
  {
    id: 3,
    name: 'Dassam Falls',
    category: 'waterfall',
    rating: 4.4,
    description: '39-meter cascading waterfall with multiple tiers and natural swimming pools',
    visitors: '120K/year',
    duration: '3-4 hours',
    transports: ['car', 'bus'],
    // Authentic waterfall image (replaces erroneous gym photo from Figma draft)
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    district: 'Ranchi'
  },
  {
    id: 4,
    name: 'Parasnath Hills',
    category: 'religious',
    rating: 4.8,
    description: 'Highest peak in Jharkhand, sacred Jain pilgrimage site with ancient temples',
    visitors: '200K/year',
    duration: '2-3 days',
    transports: ['train', 'car'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    district: 'Giridih'
  },
  {
    id: 5,
    name: 'Netarhat',
    category: 'hills',
    rating: 4.7,
    description: 'Queen of Chotanagpur, famous for sunrise, sunset views and pleasant climate',
    visitors: '300K/year',
    duration: '2-3 days',
    transports: ['car'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    district: 'Latehar'
  },
  {
    id: 6,
    name: 'Hazaribagh Wildlife Sanctuary',
    category: 'wildlife',
    rating: 4.5,
    description: 'Home to tigers, leopards, sambars with beautiful sal forests and canopy walk',
    visitors: '75K/year',
    duration: '1-2 days',
    transports: ['train', 'car'],
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80',
    district: 'Hazaribagh'
  },
  {
    id: 7,
    name: 'Ranchi',
    category: 'cities',
    rating: 4.2,
    description: 'Capital city with Rock Garden, Tagore Hill, Jagannath Temple and modern attractions',
    visitors: '1.5M/year',
    duration: '2-3 days',
    transports: ['plane', 'train', 'car'],
    // Authentic Ranchi Jagannath temple / hills image (replaces erroneous Gateway of India photo)
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    district: 'Ranchi'
  },
  {
    id: 8,
    name: 'Jamshedpur',
    category: 'cities',
    rating: 4.0,
    description: 'Steel City with planned infrastructure, Jubilee Park, Tata Steel Zoological Park',
    visitors: '800K/year',
    duration: '1-2 days',
    transports: ['plane', 'train', 'car'],
    // Authentic planned city & park image
    image: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80',
    district: 'East Singhbhum'
  },
  {
    id: 9,
    name: 'Rajrappa Temple',
    category: 'religious',
    rating: 4.6,
    description: 'Ancient temple of Goddess Chinnamasta at confluence of Damodar and Bhera rivers',
    visitors: '500K/year',
    duration: '4-6 hours',
    transports: ['car', 'bus'],
    // Authentic sacred river temple image
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
    district: 'Ramgarh'
  },
  {
    id: 10,
    name: 'Palamu Fort',
    category: 'heritage',
    rating: 4.0,
    description: '16th-century fort complex with old and new sections, rich historical significance',
    visitors: '25K/year',
    duration: '3-4 hours',
    transports: ['car'],
    // Authentic Chero Dynasty Fort image (replaces erroneous Taj Mahal photo)
    image: 'https://images.unsplash.com/photo-1599831104618-33e387c6aa56?auto=format&fit=crop&w=800&q=80',
    district: 'Latehar'
  },
  {
    id: 11,
    name: 'Sun Temple, Bundu',
    category: 'heritage',
    rating: 4.3,
    description: '18th-century Sun temple with exquisite stone carvings and architectural beauty',
    visitors: '40K/year',
    duration: '2-3 hours',
    transports: ['car'],
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    district: 'Ranchi'
  }
];

export default function Explore3DPage({ onSelectDestination, onBackToHome }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Places', icon: MapPin },
    { id: 'waterfall', label: 'Waterfalls' },
    { id: 'wildlife', label: 'Wildlife' },
    { id: 'religious', label: 'Religious' },
    { id: 'hills', label: 'Hill Stations' },
    { id: 'cities', label: 'Cities' },
    { id: 'heritage', label: 'Heritage' },
  ];

  const filtered = FIGMA_3D_DESTINATIONS.filter(item => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Top Banner matching Figma media_1792583542880_71e5858d.png */}
      <div className="relative bg-slate-900 text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        
        {/* Background photo with dark mask */}
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
            alt="Jharkhand Landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-5xl mx-auto">
          {/* Back button */}
          <button
            onClick={onBackToHome}
            className="absolute left-0 top-0 inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Home</span>
          </button>

          {/* Heading */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <Compass className="w-6 h-6 text-orange-500 animate-spin-slow" />
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Explore Jharkhand in 3D
            </h2>
          </div>
          
          <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-xl mx-auto">
            Discover the pristine beauty of Jharkhand's hidden gems
          </p>

          {/* Search & Category Pills Container matching Figma */}
          <div className="mt-8 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-xl flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto text-slate-800">
            
            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations..."
                className="w-full pl-9 pr-3 py-2 bg-slate-50 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 md:pb-0 scrollbar-none">
              {filterTabs.map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-slate-950 text-white shadow-2xs'
                        : 'bg-white hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      {/* Cards Grid matching Figma 3 cards per row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo with Star Badge */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/95 text-slate-800 text-[10px] font-bold flex items-center gap-1 shadow-2xs">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="font-bold text-base text-slate-900">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-600">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.visitors}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.duration}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Transports & View Details Button */}
              <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                <div className="flex items-center gap-2 text-slate-400">
                  <Car className="w-4 h-4" />
                  <Train className="w-4 h-4" />
                </div>

                <button
                  onClick={() => onSelectDestination(item)}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-semibold transition-colors"
                >
                  View Details
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
