import React from 'react';
import { Video, Calendar, ArrowLeft } from 'lucide-react';
import { LIVE_TOURS_DATA } from '../data/mockData';

export default function LiveTourismHub({ onJoinLiveTour, onBack }) {
  const liveTours = LIVE_TOURS_DATA.filter(t => t.status === 'LIVE');
  const scheduledTours = LIVE_TOURS_DATA.filter(t => t.status === 'SCHEDULED');

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

        {/* Live Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {liveTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700 text-sm">
                      {tour.guideName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{tour.guideName}</h4>
                      <p className="text-xs text-slate-500">Tour Guide</p>
                    </div>
                  </div>
                  <div className="text-sm font-extrabold text-orange-600">
                    ₹{tour.price}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6">
                  {tour.subtitle || tour.title}
                </p>
              </div>

              <button
                onClick={() => onJoinLiveTour(tour)}
                className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <Video className="w-4 h-4" />
                <span>Join Tour</span>
              </button>
            </div>
          ))}
        </div>

        {/* Scheduled Tours Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            Scheduled Tours
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scheduledTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Photo with Overlay Badge */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                    <img
                      src={tour.image || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80'}
                      alt={tour.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-semibold flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Scheduled
                    </span>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h4 className="font-bold text-sm leading-snug">{tour.title}</h4>
                      <p className="text-[11px] text-slate-300 mt-0.5">🕒 {tour.startTime}</p>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700 text-xs">
                          {tour.guideName.charAt(0)}
                        </div>
                        <div>
                          <h5 className="font-bold text-xs text-slate-900">{tour.guideName}</h5>
                          <p className="text-[10px] text-slate-500">Tour Guide</p>
                        </div>
                      </div>
                      <div className="text-xs font-bold text-orange-600">
                        ₹{tour.price}
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {tour.subtitle || 'Wildlife photography and conservation insights with native naturalists.'}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => alert(`Reminder set for ${tour.title}!`)}
                    className="w-full py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Schedule Reminder</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
