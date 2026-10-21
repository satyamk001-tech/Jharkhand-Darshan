import React, { useState } from 'react';
import { 
  Building2, 
  User, 
  Calendar, 
  Car, 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  ArrowLeft,
  Ticket
} from 'lucide-react';
import { BOOKING_ITEMS } from '../data/mockData';

export default function ExperienceBooking({ activeTab = 'hotels', setActiveTab, onBookItem, onBack }) {
  const [searchQuery, setSearchQuery] = useState('');

  const currentItems = BOOKING_ITEMS[activeTab] || [];
  const filteredItems = currentItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const tabs = [
    { id: 'hotels', label: 'Hotels & Resorts', icon: Building2 },
    { id: 'guides', label: 'Tour Guides', icon: User },
    { id: 'festivals', label: 'Festival Passes', icon: Calendar },
    { id: 'transport', label: 'Transportation', icon: Car },
  ];

  return (
    <div className="py-8 sm:py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        {/* Title & Subtitle matching Figma media_1792581974243_8613e6b4.png */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Book Your Jharkhand Experience
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Hotels, guides, festival passes, and transportation across Jharkhand
          </p>
        </div>

        {/* Search & Filter Bar matching Figma */}
        <div className="max-w-4xl mx-auto mb-6 flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50/70 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-slate-400 focus:bg-white transition-all"
            />
          </div>
          <button className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-700 text-xs font-medium hover:bg-slate-50 flex items-center gap-1.5 shadow-2xs">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            <span>Filter</span>
          </button>
        </div>

        {/* 4 Tabs Bar in light grey container */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex items-center bg-slate-100/80 p-1 rounded-xl">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Cards per row Grid matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo with Badges */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {item.tag && (
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-orange-600 text-white text-[10px] font-bold shadow-2xs">
                      Jharkhand Special
                    </span>
                  )}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/95 text-slate-800 text-[10px] font-bold flex items-center gap-1 shadow-2xs">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500 leading-relaxed font-normal">
                    {item.subtitle || 'Experience rich hospitality and scenic landscape in Jharkhand.'}
                  </p>

                  <div className="mt-3 flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.location}</span>
                    </span>
                    <span className="flex items-center gap-1 text-emerald-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>Available</span>
                    </span>
                  </div>

                  {/* Feature Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.features && item.features.slice(0, 3).map((feat, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-slate-100 rounded text-[10px] text-slate-600">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Book Now Row */}
              <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                <div className="text-base font-extrabold text-orange-600">
                  {item.price}
                </div>

                <button
                  onClick={() => onBookItem(item, activeTab)}
                  className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
                >
                  <Ticket className="w-3.5 h-3.5" />
                  <span>Book Now</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
