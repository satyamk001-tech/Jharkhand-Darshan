import React, { useState } from 'react';
import { 
  Building2, 
  User, 
  Calendar, 
  Car, 
  Video, 
  ShoppingBag,
  UtensilsCrossed,
  Users,
  MapPin,
  Heart
} from 'lucide-react';
import { 
  TOURISM_SERVICES, 
  JHARKHAND_CUISINE_DATA, 
  JHARKHAND_PEOPLE_CULTURE_DATA 
} from '../data/mockData';

export default function TourismServices({ onSelectService, onOpenMarketplace, onOpenLiveStream }) {
  const [cultureTab, setCultureTab] = useState('cuisine'); // 'cuisine' | 'people'
  const [favoriteDishes, setFavoriteDishes] = useState({});

  const toggleFavorite = (id) => {
    setFavoriteDishes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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
        
        {/* Exact Figma Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Tourism Services
          </h2>
        </div>

        {/* 6 Core Services Grid matching Figma media_1792581964363_34582567.png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

        {/* Culture & Cuisine Toggle Feature (User Request 6) */}
        <div className="pt-10 border-t border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Living Heritage & Authentic Flavors
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Discover native tribal cuisines and indigenous cultural heritage
            </p>

            {/* Toggle Between Authentic Tribal Cuisine and Tribes, Music & People */}
            <div className="mt-6 inline-flex p-1 bg-slate-100 rounded-xl">
              <button
                onClick={() => setCultureTab('cuisine')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  cultureTab === 'cuisine'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <UtensilsCrossed className="w-3.5 h-3.5 text-orange-600" />
                <span>Authentic Tribal Cuisine</span>
              </button>

              <button
                onClick={() => setCultureTab('people')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  cultureTab === 'people'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Users className="w-3.5 h-3.5 text-orange-600" />
                <span>Tribes, Music & People</span>
              </button>
            </div>
          </div>

          {/* 1. Authentic Tribal Cuisine Content */}
          {cultureTab === 'cuisine' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
              {JHARKHAND_CUISINE_DATA.map((dish) => (
                <div
                  key={dish.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-semibold">
                        {dish.tag}
                      </span>

                      <button
                        onClick={() => toggleFavorite(dish.id)}
                        className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-600 hover:text-red-600 transition-colors"
                      >
                        <Heart className={`w-3.5 h-3.5 ${favoriteDishes[dish.id] ? 'fill-red-500 text-red-500' : ''}`} />
                      </button>
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-sm text-slate-900">
                          {dish.name}
                        </h4>
                        <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded shrink-0">
                          {dish.price}
                        </span>
                      </div>
                      
                      <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal">
                        {dish.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                        <span className="flex items-center gap-1 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-orange-500" />
                          {dish.region}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium text-[10px]">
                          {dish.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 2. Tribes, Music & People Content */}
          {cultureTab === 'people' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
              {JHARKHAND_PEOPLE_CULTURE_DATA.map((tribe) => (
                <div
                  key={tribe.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row"
                >
                  <div className="sm:w-2/5 aspect-4/3 sm:aspect-auto relative overflow-hidden bg-slate-100">
                    <img
                      src={tribe.image}
                      alt={tribe.community}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 sm:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-orange-600 mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{tribe.region}</span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900">
                        {tribe.community}
                      </h4>

                      <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal">
                        {tribe.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-xs">
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="text-slate-400 font-medium text-[11px]">Art & Craft:</span>
                        <span className="font-semibold text-slate-800 text-[11px]">{tribe.artForm}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="text-slate-400 font-medium text-[11px]">Music:</span>
                        <span className="font-semibold text-slate-800 text-[11px]">{tribe.instrument}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="text-slate-400 font-medium text-[11px]">Festival:</span>
                        <span className="font-semibold text-orange-600 text-[11px]">{tribe.festival}</span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
