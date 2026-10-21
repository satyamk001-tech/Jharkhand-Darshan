import React from 'react';
import { Users, MapPin, Video, Award } from 'lucide-react';

export default function TourismStatistics() {
  const stats = [
    { label: 'Annual Visitors', value: '2.8M+', icon: Users },
    { label: 'Tourist Destinations', value: '50+', icon: MapPin },
    { label: 'Live Tours Daily', value: '25+', icon: Video },
    { label: 'Local Partners', value: '500+', icon: Award }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title matching Figma media_1792582024687_2674ec66.png */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Tourism Statistics
          </h2>
        </div>

        {/* 4 Metrics with green circular icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-100/70 text-emerald-600 flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {item.value}
                </div>
                <div className="mt-1 text-xs text-slate-500 font-medium">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
