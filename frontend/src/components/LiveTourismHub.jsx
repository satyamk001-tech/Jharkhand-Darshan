import React from 'react';
import { Video, Users, Star, ArrowLeft, Radio, Calendar, CheckCircle } from 'lucide-react';
import { LIVE_TOURS_DATA } from '../data/mockData';

export default function LiveTourismHub({ onJoinLiveTour, onBack }) {
  return (
    <div className="py-10 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-orange-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>Interactive Virtual Tourism</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Live Virtual Guided Tours
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Connect live with certified indigenous guides streaming directly from sacred spots and wildlife reserves
          </p>
        </div>

        {/* Live Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {LIVE_TOURS_DATA.map((tour) => {
            const isLive = tour.status === 'LIVE';
            return (
              <div
                key={tour.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Guide Info Header */}
                  <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={tour.guideAvatar}
                        alt={tour.guideName}
                        className="w-12 h-12 rounded-full object-cover border-2 border-orange-500 shadow-sm"
                      />
                      <div>
                        <div className="flex items-center gap-1">
                          <h4 className="font-bold text-slate-900 text-sm">{tour.guideName}</h4>
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <p className="text-[11px] text-slate-500">{tour.guideTitle}</p>
                      </div>
                    </div>

                    {isLive ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500 text-white text-[11px] font-extrabold animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-white"></span>
                        LIVE
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold">
                        <Calendar className="w-3 h-3" />
                        UPCOMING
                      </span>
                    )}
                  </div>

                  {/* Tour details */}
                  <div className="p-6">
                    <h3 className="font-extrabold text-lg text-slate-900 leading-snug">
                      {tour.title}
                    </h3>
                    <p className="text-xs text-orange-600 font-semibold mt-1">
                      📍 {tour.destination}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-slate-400" />
                        <span>{isLive ? `${tour.viewerCount} watching` : tour.startTime}</span>
                      </div>
                      <div className="flex items-center gap-1 font-bold text-slate-800">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>{tour.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onJoinLiveTour(tour)}
                    className={`w-full py-3 rounded-2xl text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 ${
                      isLive 
                        ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-500/20' 
                        : 'bg-orange-600 hover:bg-orange-700 text-white shadow-orange-500/20'
                    }`}
                  >
                    <Video className="w-4 h-4" />
                    <span>{isLive ? `Join Live Stream (₹${tour.price})` : `Reserve Seat (₹${tour.price})`}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
