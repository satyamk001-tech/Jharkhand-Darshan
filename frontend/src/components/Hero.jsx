import React from 'react';
import { MapPin, Compass } from 'lucide-react';

export default function Hero({ onStartExploring, onOpen3D }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#991b1b] via-[#c2410c] to-[#991b1b] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center">
      <div className="relative max-w-4xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
          Discover the Beauty of Jharkhand
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xs sm:text-base text-white/95 max-w-2xl mx-auto font-normal leading-relaxed">
          Experience rich tribal culture, stunning waterfalls, and pristine forests. Book tours, accommodations, and explore live with local guides.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onStartExploring}
            className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#c2410c] font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#c2410c]" />
            <span>Start Exploring</span>
          </button>

          <button
            onClick={onOpen3D}
            className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-slate-700" />
            <span>3D Explorer</span>
          </button>
        </div>

      </div>
    </div>
  );
}
