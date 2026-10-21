import React, { useState } from 'react';
import { 
  Building2, 
  UserCheck, 
  Calendar, 
  Car, 
  Video, 
  ShoppingBag,
  UtensilsCrossed,
  Users,
  Sparkles,
  MapPin,
  Heart,
  Check,
  ArrowRight
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
    const props = { className: isMarketplace ? "w-6 h-6 text-white" : "w-6 h-6 text-orange-600" };
    switch (iconName) {
      case 'Building':
        return <Building2 {...props} />;
      case 'UserCheck':
        return <UserCheck {...props} />;
      case 'Calendar':
        return <Calendar {...props} />;
      case 'Car':
        return <Car {...props} />;
      case 'Video':
        return <Video {...props} />;
      case 'ShoppingBag':
        return <ShoppingBag {...props} />;
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
    <section className="py-14 sm:py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Tourism Services
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-normal">
            Everything you need for an unforgettable journey through Jharkhand
          </p>
        </div>

        {/* 6 Core Services Grid matching User Screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {TOURISM_SERVICES.map((service) => {
            const isFilled = service.id === 'market';
            return (
              <div
                key={service.id}
                onClick={() => handleCardClick(service)}
                className="group cursor-pointer bg-white rounded-2xl sm:rounded-3xl p-8 border border-slate-100 shadow-xs hover:shadow-xl hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Icon Container */}
                <div 
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                    isFilled 
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-500/25' 
                      : 'bg-orange-50/80 border border-orange-100 text-orange-600'
                  }`}
                >
                  {getIcon(service.icon, isFilled)}
                </div>

                {/* Service Name */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="mt-2 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-xs">
                  {service.description}
                </p>

                {/* Action button */}
                <span className="mt-4 text-[11px] font-semibold text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  {service.actionModal ? 'View Experience →' : 'Book Now →'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Culture & Cuisine Toggle Section */}
        <div className="pt-12 border-t border-slate-200/80">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center justify-center gap-1.5 mb-2">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span>Living Heritage of Jharkhand</span>
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Flavors, Living Heritage & People
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-normal">
              Taste authentic regional delicacies or connect with indigenous communities
            </p>

            {/* Toggle Between Authentic Tribal Cuisine and Tribes, Music & People */}
            <div className="mt-8 inline-flex p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <button
                onClick={() => setCultureTab('cuisine')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  cultureTab === 'cuisine'
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Authentic Tribal Cuisine</span>
              </button>

              <button
                onClick={() => setCultureTab('people')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  cultureTab === 'people'
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Tribes, Music & People</span>
              </button>
            </div>
          </div>

          {/* 1. Authentic Tribal Cuisine Content */}
          {cultureTab === 'cuisine' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-in fade-in duration-300">
              {JHARKHAND_CUISINE_DATA.map((dish) => (
                <div
                  key={dish.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Photo Container */}
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold shadow-xs">
                        {dish.tag}
                      </span>

                      <button
                        onClick={() => toggleFavorite(dish.id)}
                        className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-rose-600 transition-colors shadow-xs"
                      >
                        <Heart className={`w-4 h-4 ${favoriteDishes[dish.id] ? 'fill-rose-500 text-rose-500' : ''}`} />
                      </button>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-lg text-slate-900 group-hover:text-orange-600 transition-colors">
                          {dish.name}
                        </h4>
                        <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-lg shrink-0">
                          {dish.price}
                        </span>
                      </div>
                      
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {dish.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                        <span className="flex items-center gap-1 text-slate-600 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-orange-500" />
                          {dish.region}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-semibold text-[10px]">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 animate-in fade-in duration-300">
              {JHARKHAND_PEOPLE_CULTURE_DATA.map((tribe) => (
                <div
                  key={tribe.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row"
                >
                  <div className="sm:w-2/5 aspect-4/3 sm:aspect-auto relative overflow-hidden bg-slate-100">
                    <img
                      src={tribe.image}
                      alt={tribe.community}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 sm:p-6 sm:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-600 mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{tribe.region}</span>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                        {tribe.community}
                      </h4>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {tribe.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-xs">
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="text-slate-400 font-medium text-[11px]">Art & Craft:</span>
                        <span className="font-semibold text-slate-800">{tribe.artForm}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="text-slate-400 font-medium text-[11px]">Instruments:</span>
                        <span className="font-semibold text-slate-800">{tribe.instrument}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="text-slate-400 font-medium text-[11px]">Festivals:</span>
                        <span className="font-semibold text-orange-600">{tribe.festival}</span>
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
