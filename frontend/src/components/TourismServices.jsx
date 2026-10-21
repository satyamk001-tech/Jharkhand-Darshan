import React from 'react';
import { 
  Building2, 
  User, 
  Calendar, 
  Car, 
  Video, 
  ShoppingBag
} from 'lucide-react';
import { TOURISM_SERVICES } from '../data/mockData';

export default function TourismServices({ onSelectService, onOpenMarketplace, onOpenLiveStream }) {
  const getIcon = (iconName, isMarketplace) => {
    if (isMarketplace) {
      return <ShoppingBag className="w-5 h-5 text-white" />;
    }
    switch (iconName) {
      case 'Building':
        return <Building2 className="w-5 h-5 text-orange-600" />;
      case 'UserCheck':
        return <User className="w-5 h-5 text-orange-600" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-orange-600" />;
      case 'Car':
        return <Car className="w-5 h-5 text-orange-600" />;
      case 'Video':
        return <Video className="w-5 h-5 text-orange-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-orange-600" />;
      default:
        return null;
    }
  };

  const handleCardClick = (service) => {
    if (service.actionTab) {
      onSelectService(service.actionTab);
    } else if (service.actionModal === 'marketplace') {
      onOpenMarketplace();
    } else if (service.actionModal === 'liveStream') {
      onOpenLiveStream();
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Exact Figma Heading matching media_1792581964363_34582567.png */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Tourism Services
          </h2>
        </div>

        {/* 6 Core Services Grid matching Figma media_1792581964363_34582567.png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOURISM_SERVICES.map((service) => {
            const isMarketplace = service.id === 'market';
            return (
              <div
                key={service.id}
                onClick={() => handleCardClick(service)}
                className="group cursor-pointer bg-white rounded-2xl p-8 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col items-center text-center"
              >
                {/* Icon Container matching Figma */}
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-105 ${
                    isMarketplace 
                      ? 'bg-orange-600 text-white shadow-xs' 
                      : 'bg-orange-50 border border-orange-100/80 text-orange-600'
                  }`}
                >
                  {getIcon(service.icon, isMarketplace)}
                </div>

                {/* Service Name */}
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-2 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-xs">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
