import React from 'react';
import { MapPin, Compass } from 'lucide-react';

export default function Hero({ onStartExploring, onOpen3D }) {
  return (
    <div className="relative overflow-hidden bg-linear-to-r from-[#991b1b] via-[#c2410c] to-[#991b1b] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center">
      <div className="relative max-w-4xl mx-auto">
        
        {/* Exact Figma Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Discover the Beauty of Jharkhand
        </h1>

        {/* Exact Figma Subtitle */}
        <p className="mt-4 text-xs sm:text-base text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
          Experience rich tribal culture, stunning waterfalls, and pristine forests. Book tours, accommodations, and explore live with local guides.
        </p>

        {/* Exact Figma Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onStartExploring}
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-red-600 font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
          >
            <MapPin className="w-4 h-4 text-red-600" />
            <span>Start Exploring</span>
          </button>

          <button
            onClick={onOpen3D}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/40 font-semibold text-xs sm:text-sm backdrop-blur-xs transition-all flex items-center gap-1.5"
          >
            <Compass className="w-4 h-4 text-white" />
            <span>3D Explorer</span>
          </button>
        </div>

      </div>
    </div>
  );
}
