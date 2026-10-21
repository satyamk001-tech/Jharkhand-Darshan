import React, { useState } from 'react';
import { 
  Building2, 
  UserCheck, 
  Calendar, 
  Car, 
  Search, 
  SlidersHorizontal, 
  Star, 
  MapPin, 
  Check, 
  ArrowLeft 
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
    { id: 'guides', label: 'Tour Guides', icon: UserCheck },
    { id: 'festivals', label: 'Festival Passes', icon: Calendar },
    { id: 'transport', label: 'Transportation', icon: Car },
  ];

  return (
    <div className="py-10 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-orange-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Overview</span>
        </button>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
            Official Government Booking Portal
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">
            Book Your Jharkhand Experience
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Transparent pricing, certified local operators, and secure instant reservations
          </p>
        </div>

        {/* 4 Tabs Bar */}
        <div className="flex items-center justify-center mb-8 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-500/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-2xl mx-auto mb-12 flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${activeTab}...`}
              className="w-full pl-11 pr-4 py-3 bg-white rounded-2xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all shadow-xs"
            />
          </div>
          <button className="px-4 py-3 bg-white border border-slate-200 rounded-2xl text-slate-700 text-xs sm:text-sm font-semibold hover:border-orange-300 flex items-center gap-2 shadow-xs">
            <SlidersHorizontal className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold shadow-xs">
                    {item.tag}
                  </span>
                  <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-[11px] font-extrabold flex items-center gap-1 shadow-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{item.rating}</span>
                    <span className="text-slate-400 font-normal">({item.reviews})</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-1 text-xs text-orange-600 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-slate-900 line-clamp-1">
                    {item.title}
                  </h3>

                  {/* Feature bullet list */}
                  <ul className="mt-4 space-y-1.5">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price & Book Action */}
              <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Tariff / Fee</div>
                  <div className="text-base sm:text-lg font-extrabold text-slate-900">
                    {item.price}
                  </div>
                </div>

                <button
                  onClick={() => onBookItem(item, activeTab)}
                  className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-orange-500/20 transition-all hover:scale-105"
                >
                  Book Now
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
