import React from 'react';
import { Users, MapPin, Video, Award } from 'lucide-react';

export default function TourismStatistics() {
  const stats = [
    { label: 'Annual Visitors', value: '2.8M+', icon: Users, desc: 'Travelers welcomed across all 24 districts' },
    { label: 'Destinations', value: '50+', icon: MapPin, desc: 'Waterfalls, hill stations, and sacred heritage sites' },
    { label: 'Live Tours Daily', value: '25+', icon: Video, desc: 'Real-time interactive virtual guide streams' },
    { label: 'Local Partners', value: '500+', icon: Award, desc: 'Indigenous tribal artisans, eco-stays & certified guides' }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Jharkhand Tourism at a Glance
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Empowering local indigenous communities through sustainable eco-tourism
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="bg-slate-50/70 border border-slate-100 rounded-3xl p-8 text-center flex flex-col items-center hover:shadow-xl hover:border-orange-200 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-100/60 border border-orange-200/50 flex items-center justify-center text-orange-600 mb-6 shadow-xs">
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {item.value}
                </div>
                <div className="mt-2 font-bold text-slate-800 text-sm sm:text-base">
                  {item.label}
                </div>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
