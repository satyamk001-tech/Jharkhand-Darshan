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
  ArrowLeft,
  Map as MapIcon,
  LayoutGrid
} from 'lucide-react';

export const JHARKHAND_3D_DESTINATIONS = [
  {
    id: 1,
    name: 'Hundru Falls',
    category: 'waterfall',
    rating: 4.6,
    description: '74-meter high waterfall on the Subarnarekha River, perfect for monsoon visits',
    visitors: '150K/year',
    duration: '4-5 hours',
    transports: ['car', 'bus'],
    image: '/portal_assets/featured_hundru.png',
    district: 'Ranchi',
    coordinates: { x: 52, y: 55 } // % on schematic map
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
    district: 'Ranchi',
    coordinates: { x: 55, y: 58 }
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
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    district: 'Ranchi',
    coordinates: { x: 50, y: 62 }
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
    district: 'Giridih',
    coordinates: { x: 68, y: 35 }
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
    district: 'Latehar',
    coordinates: { x: 28, y: 50 }
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
    district: 'Hazaribagh',
    coordinates: { x: 48, y: 36 }
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
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    district: 'Ranchi',
    coordinates: { x: 48, y: 56 }
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
    image: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80',
    district: 'East Singhbhum',
    coordinates: { x: 67, y: 72 }
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
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
    district: 'Ramgarh',
    coordinates: { x: 55, y: 46 }
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
    image: 'https://images.unsplash.com/photo-1599831104618-33e387c6aa56?auto=format&fit=crop&w=800&q=80',
    district: 'Latehar',
    coordinates: { x: 26, y: 40 }
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
    district: 'Ranchi',
    coordinates: { x: 54, y: 64 }
  }
];

export default function Explore3DPage({ onSelectDestination, onBackToHome }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'map'
  const [activePin, setActivePin] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Places', icon: MapPin },
    { id: 'waterfall', label: 'Waterfalls' },
    { id: 'wildlife', label: 'Wildlife' },
    { id: 'religious', label: 'Religious' },
    { id: 'hills', label: 'Hill Stations' },
    { id: 'cities', label: 'Cities' },
    { id: 'heritage', label: 'Heritage' },
  ];

  const filtered = JHARKHAND_3D_DESTINATIONS.filter(item => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.district.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Top Banner with Panoramic Landscape */}
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

          {/* Search & Category Pills Container */}
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
            <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 md:pb-0 scrollbar-none flex-1">
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

            {/* View Mode Toggle (Grid vs Map) */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-xl shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`p-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'map'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Jharkhand Tourist Map"
              >
                <MapIcon className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* VIEW MODE 1: INTERACTIVE JHARKHAND MAP (User Request 2) */}
      {viewMode === 'map' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
              <div>
                <h3 className="font-extrabold text-xl text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <span>Interactive Tourist Map of Jharkhand</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Click any marker on the map to view real location photos and launch 360° virtual tour
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                <span className="text-slate-600 font-medium">Tourist Location Pin</span>
              </div>
            </div>

            {/* Interactive Vector Map Canvas */}
            <div className="relative w-full aspect-16/10 bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-inner">
              
              {/* Map Background Grid & Topography */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              {/* Stylized State Outline SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path
                  d="M 20,30 Q 35,15 55,20 T 80,30 Q 88,45 82,65 T 70,85 Q 45,90 30,80 T 15,55 Z"
                  fill="rgba(249, 115, 22, 0.08)"
                  stroke="rgba(249, 115, 22, 0.4)"
                  strokeWidth="0.8"
                  strokeDasharray="2,2"
                />
              </svg>

              {/* District Labels */}
              <div className="absolute top-[28%] left-[24%] text-[10px] text-white/40 font-mono tracking-wider">Latehar / Palamu</div>
              <div className="absolute top-[25%] left-[46%] text-[10px] text-white/40 font-mono tracking-wider">Hazaribagh</div>
              <div className="absolute top-[26%] left-[68%] text-[10px] text-white/40 font-mono tracking-wider">Giridih</div>
              <div className="absolute top-[52%] left-[42%] text-[10px] text-orange-400/80 font-bold font-mono tracking-wider">RANCHI (Capital)</div>
              <div className="absolute top-[68%] left-[66%] text-[10px] text-white/40 font-mono tracking-wider">East Singhbhum</div>

              {/* Interactive Pins */}
              {filtered.map((spot) => {
                const isSelected = activePin?.id === spot.id;
                return (
                  <div
                    key={spot.id}
                    style={{ left: `${spot.coordinates.x}%`, top: `${spot.coordinates.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                  >
                    <button
                      onClick={() => setActivePin(spot)}
                      className={`group relative flex items-center justify-center transition-all ${
                        isSelected ? 'scale-125 z-20' : 'hover:scale-115'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                        isSelected 
                          ? 'bg-orange-500 text-white ring-4 ring-orange-500/40' 
                          : 'bg-white text-orange-600 hover:bg-orange-600 hover:text-white'
                      }`}>
                        <MapPin className="w-3.5 h-3.5" />
                      </div>

                      {/* Floating Pin Label */}
                      <span className="absolute left-1/2 -bottom-5 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900/90 text-white text-[9px] font-semibold whitespace-nowrap shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        {spot.name}
                      </span>
                    </button>
                  </div>
                );
              })}

              {/* Selected Pin Popover Card */}
              {activePin && (
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:w-80 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-200 z-30 animate-in fade-in slide-in-from-bottom-2 duration-150">
                  <div className="relative aspect-16/9 rounded-xl overflow-hidden mb-3">
                    <img src={activePin.image} alt={activePin.name} className="w-full h-full object-cover" />
                    <span className="absolute top-2 right-2 px-2 py-0.5 bg-black/70 rounded-full text-white text-[10px] font-bold">
                      ★ {activePin.rating}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">{activePin.name}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">{activePin.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 font-medium">📍 {activePin.district}</span>
                    <button
                      onClick={() => onSelectDestination(activePin)}
                      className="px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold"
                    >
                      Explore in 3D
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: 3 CARDS PER ROW GRID WITH EXACT UNIFORM BOX AND IMAGE SIZE */}
      {viewMode === 'grid' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div className="flex flex-col flex-1">
                  {/* Photo with Star Badge - EXACT UNIFORM FIXED HEIGHT */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100 shrink-0">
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

                  {/* Body with uniform height constraints */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-base text-slate-900 line-clamp-1 min-h-[1.5rem]" title={item.name}>
                        {item.name}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500 leading-relaxed font-normal line-clamp-2 h-9 overflow-hidden">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-600 h-5">
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

                {/* Bottom Row: Transports & View Details Button - always pinned */}
                <div className="p-5 pt-3 flex items-center justify-between border-t border-slate-100 mt-auto">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Car className="w-4 h-4" />
                    <Train className="w-4 h-4" />
                  </div>

                  <button
                    onClick={() => onSelectDestination(item)}
                    className="px-3.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-semibold transition-colors shrink-0"
                  >
                    View Details
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
