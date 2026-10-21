import React from 'react';
import { Compass, Sparkles, MapPin, Search, ArrowRight } from 'lucide-react';

export default function Hero({ onStartExploring, onOpen3D }) {
  return (
    <div className="relative overflow-hidden bg-linear-to-b from-stone-900 via-amber-950 to-stone-900 text-white py-20 sm:py-28 lg:py-32">
      
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 -left-20 w-96 h-96 rounded-full bg-orange-500 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-amber-500 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-400/30 text-orange-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-orange-400" />
          <span>Government of Jharkhand • Tourism & Culture</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-none">
          Explore Jharkhand's <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-amber-300 to-yellow-400">
            Timeless Wonders
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-sm sm:text-lg text-stone-300 max-w-2xl mx-auto font-normal leading-relaxed">
          From the roaring cascades of Hundru to the ancient sanctity of Baidyanath Jyotirlinga, discover raw natural beauty and living tribal heritage.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartExploring}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-linear-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-orange-500/25 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpen3D}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm sm:text-base backdrop-blur-md transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <Compass className="w-5 h-5 text-amber-400" />
            <span>Launch 3D Explorer</span>
          </button>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-stone-400">Districts</div>
              <div className="text-sm sm:text-base font-bold text-white">24 Cultural Zones</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <span className="font-bold text-xs">🌿</span>
            </div>
            <div>
              <div className="text-xs text-stone-400">Forest Canopy</div>
              <div className="text-sm sm:text-base font-bold text-white">29.7% Green Cover</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
              <span className="font-bold text-xs">🛕</span>
            </div>
            <div>
              <div className="text-xs text-stone-400">Spiritual Sanctuaries</div>
              <div className="text-sm sm:text-base font-bold text-white">12 Jyotirlinga Dham</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400">
              <span className="font-bold text-xs">🎨</span>
            </div>
            <div>
              <div className="text-xs text-stone-400">Art & Craft</div>
              <div className="text-sm sm:text-base font-bold text-white">GI-Tagged Sohrai</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
