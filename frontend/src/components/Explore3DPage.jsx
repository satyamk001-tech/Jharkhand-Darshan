import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Star, 
  Compass, 
  Sparkles, 
  Eye, 
  Layers, 
  SlidersHorizontal,
  ArrowLeft,
  Navigation
} from 'lucide-react';
import { EXPLORE_3D_DESTINATIONS } from '../data/mockData';

export default function Explore3DPage({ onSelectDestination, onBackToHome }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMap, setShowMap] = useState(true);

  const categories = [
    { id: 'all', label: 'All Destinations' },
    { id: 'waterfall', label: 'Waterfalls' },
    { id: 'wildlife', label: 'Wildlife' },
    { id: 'spiritual', label: 'Spiritual' },
    { id: 'nature', label: 'Nature' },
    { id: 'heritage', label: 'Heritage' },
    { id: 'craft', label: 'Tribal Crafts' },
  ];

  const filteredDestinations = EXPLORE_3D_DESTINATIONS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.district.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-10 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={() => setShowMap(!showMap)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white border border-slate-200 text-slate-700 shadow-xs hover:border-orange-300"
          >
            <Navigation className="w-4 h-4 text-orange-600" />
            <span>{showMap ? 'Hide District Map' : 'Show Interactive Map'}</span>
          </button>
        </div>

        {/* Title & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center justify-center gap-1.5 mb-2">
            <Compass className="w-4 h-4 text-orange-500" />
            <span>Immersive 3D Spatial Exploration</span>
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore Jharkhand in 3D
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Take virtual aerial and panoramic walking tours across Jharkhand's waterfalls, ancient temples, and wildlife sanctuaries
          </p>
        </div>

        {/* Interactive Jharkhand SVG District Map with Clickable Pins */}
        {showMap && (
          <div className="mb-14 bg-linear-to-b from-stone-900 to-amber-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-amber-900/40">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-400" />
                  <span>Interactive Map of Jharkhand</span>
                </h3>
                <p className="text-xs text-stone-400">
                  Click any glowing location pin to launch full 360° virtual viewpoint
                </p>
              </div>
              <span className="text-xs font-bold bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-400/30">
                24 Districts Covered
              </span>
            </div>

            {/* SVG Interactive Canvas */}
            <div className="relative aspect-16/9 sm:aspect-21/9 w-full bg-stone-950/60 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-40">
                {/* Jharkhand plateau silhouette polygon */}
                <polygon 
                  points="25,20 45,15 70,18 85,30 92,50 82,75 65,85 45,88 20,82 12,65 15,35" 
                  fill="#78350f" 
                  stroke="#f59e0b" 
                  strokeWidth="0.8" 
                  strokeDasharray="2,2"
                />
                <circle cx="50" cy="50" r="1.5" fill="#f59e0b" opacity="0.6" />
                <text x="47" y="55" fill="#fde68a" fontSize="3" fontWeight="bold">Chotanagpur Plateau</text>
              </svg>

              {/* Pins placed over the map */}
              {EXPLORE_3D_DESTINATIONS.map((dest) => (
                <div
                  key={dest.id}
                  onClick={() => onSelectDestination(dest)}
                  style={{ left: `${dest.coordinates.x}%`, top: `${dest.coordinates.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
                >
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-6 h-6 rounded-full bg-orange-500/40 animate-ping"></span>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-linear-to-r from-orange-500 to-amber-500 border-2 border-white flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </div>

                  {/* Tooltip on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1.5 rounded-xl bg-stone-900/95 border border-white/20 text-white text-[11px] font-bold pointer-events-none shadow-xl">
                    <div>{dest.name}</div>
                    <div className="text-[9px] text-amber-300 font-normal">{dest.district} • {dest.tag}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7 Category Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shadow-xs ${
                selectedCategory === cat.id
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-500/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destinations by name or district..."
              className="w-full pl-11 pr-4 py-3 bg-white rounded-2xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all shadow-xs"
            />
          </div>
        </div>

        {/* 12 Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo & Badges */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Category Tag */}
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold shadow-xs">
                    {dest.tag}
                  </span>

                  {/* 3D View Badge */}
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-orange-600/90 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs group-hover:bg-orange-500">
                    <Compass className="w-3 h-3" />
                    <span>3D View</span>
                  </div>

                  {/* Location Title Over Image */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="text-[11px] text-amber-300 font-semibold flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{dest.district}, Jharkhand</span>
                    </div>
                    <h3 className="text-lg font-extrabold drop-shadow-md">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Description & Stats */}
                <div className="p-5 sm:p-6">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {dest.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-400">Entry: </span>
                      <span className="font-bold text-slate-800">{dest.entryFee}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Best Season: </span>
                      <span className="font-bold text-slate-800">{dest.bestTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-5 sm:p-6 pt-0">
                <button className="w-full py-2.5 rounded-xl bg-orange-50 hover:bg-orange-600 text-orange-600 hover:text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>Launch 3D Virtual Tour</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
