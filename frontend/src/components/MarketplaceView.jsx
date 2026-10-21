import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Star, 
  ShieldCheck, 
  ArrowLeft, 
  Plus, 
  Minus, 
  Trash2, 
  Sparkles,
  UtensilsCrossed,
  Users,
  MapPin,
  Heart
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  MARKETPLACE_PRODUCTS, 
  JHARKHAND_CUISINE_DATA, 
  JHARKHAND_PEOPLE_CULTURE_DATA 
} from '../data/mockData';

export default function MarketplaceView({ onBack }) {
  const [activeTab, setActiveTab] = useState('crafts'); // 'crafts' | 'cuisine' | 'people'
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [favoriteDishes, setFavoriteDishes] = useState({});

  const toggleFavorite = (id) => {
    setFavoriteDishes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  const handleCheckout = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setIsOrderPlaced(true);
    setTimeout(() => {
      setCart([]);
      setIsOrderPlaced(false);
      setIsCartOpen(false);
    }, 2500);
  };

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Tribal Cart ({cart.reduce((a, b) => a + b.qty, 0)})</span>
            {cart.length > 0 && (
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute -top-1 -right-1 ring-2 ring-white"></span>
            )}
          </button>
        </div>

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Local Marketplace & Cultural Heritage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Authentic Tribal Treasures of Jharkhand
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Fair-trade tribal handicrafts, native indigenous cuisines, and celebrated folk cultures.
          </p>
        </div>

        {/* 3 Categories Selector */}
        <div className="max-w-md mx-auto mb-10">
          <div className="flex items-center bg-slate-200/70 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('crafts')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'crafts'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Crafts & Art</span>
            </button>

            <button
              onClick={() => setActiveTab('cuisine')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'cuisine'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>Tribal Cuisine</span>
            </button>

            <button
              onClick={() => setActiveTab('people')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'people'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Tribes & People</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CRAFTS & ARTISAN PRODUCTS */}
        {activeTab === 'crafts' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-200 items-stretch">
            {MARKETPLACE_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div className="flex flex-col flex-1">
                  {/* Photo with Badges - EXACT UNIFORM FIXED HEIGHT */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {prod.giCertified && (
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-emerald-700 text-white text-[10px] font-bold flex items-center gap-1 shadow-2xs">
                        <ShieldCheck className="w-3 h-3" />
                        GI Tagged
                      </span>
                    )}
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/95 text-[10px] font-bold text-slate-800 flex items-center gap-1 shadow-2xs">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{prod.rating}</span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-semibold text-orange-600 truncate h-5">
                        {prod.artisan} • {prod.tribe}
                      </div>
                      <h3 className="font-bold text-sm text-slate-900 mt-1 line-clamp-1 min-h-[1.25rem]" title={prod.name}>
                        {prod.name}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 h-9 overflow-hidden">
                        {prod.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-slate-100 mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-base font-extrabold text-slate-900">
                        ₹{prod.price}
                      </div>
                      <div className="text-[10px] text-emerald-600 font-medium">Free shipping</div>
                    </div>
                    <button
                      onClick={() => addToCart(prod)}
                      className="px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: AUTHENTIC TRIBAL CUISINE */}
        {activeTab === 'cuisine' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200 items-stretch">
            {JHARKHAND_CUISINE_DATA.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div className="flex flex-col flex-1">
                  {/* Photo with Badges - EXACT UNIFORM FIXED HEIGHT */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100 shrink-0">
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

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-sm text-slate-900 line-clamp-1" title={dish.name}>
                          {dish.name}
                        </h4>
                        <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded shrink-0">
                          {dish.price}
                        </span>
                      </div>
                      
                      <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal line-clamp-2 h-9 overflow-hidden">
                        {dish.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 h-5">
                      <span className="flex items-center gap-1 font-medium truncate max-w-[160px]">
                        <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <span className="truncate">{dish.region}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium text-[10px] shrink-0">
                        {dish.badge}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-slate-100 mt-auto">
                  <button
                    onClick={() => {
                      addToCart({
                        id: `cuisine-${dish.id}`,
                        name: `${dish.name} (Authentic Plate)`,
                        price: parseInt(dish.price.replace(/[^\d]/g, '')) || 120,
                        image: dish.image,
                        tribe: dish.region,
                        artisan: 'Local Kitchen',
                        rating: 4.8
                      });
                    }}
                    className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Order Tasting Box</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: TRIBES, MUSIC & PEOPLE */}
        {activeTab === 'people' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200 items-stretch">
            {JHARKHAND_PEOPLE_CULTURE_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div className="flex flex-col flex-1">
                  {/* Photo with Badges - EXACT UNIFORM FIXED HEIGHT */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-orange-600 text-white text-[10px] font-bold shadow-2xs">
                      {item.tribe}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 line-clamp-1" title={item.title}>
                        {item.title}
                      </h4>
                      
                      <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal line-clamp-2 h-9 overflow-hidden">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="font-semibold text-slate-900 shrink-0">Festivals:</span>
                        <span className="truncate">{item.festival}</span>
                      </div>
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="font-semibold text-slate-900 shrink-0">Dance:</span>
                        <span className="truncate">{item.music}</span>
                      </div>
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="font-semibold text-slate-900 shrink-0">Language:</span>
                        <span className="truncate">{item.language}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-slate-100 mt-auto">
                  <div className="px-3 py-2 rounded-xl bg-orange-50/60 border border-orange-100 text-[11px] text-orange-800 font-medium text-center">
                    Recognized UNESCO Cultural Heritage
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Cart Slide-Over / Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col p-6 animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-orange-600" />
                <h3 className="font-bold text-base text-slate-900">Your Tribal Cart</h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-xs text-slate-400 hover:text-slate-800"
              >
                Close ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-xs">
                  Your cart is empty. Add authentic Jharkhand tribal crafts or delicacies!
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                    <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-xs text-slate-900 truncate">{item.name}</div>
                      <div className="text-xs text-orange-600 font-semibold mt-0.5">₹{item.price} each</div>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-6 h-6 rounded bg-white border border-slate-200 flex items-center justify-center text-xs text-slate-700"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-slate-900">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-6 h-6 rounded bg-white border border-slate-200 flex items-center justify-center text-xs text-slate-700"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-xs text-slate-900">₹{item.price * item.qty}</div>
                      <button
                        onClick={() => updateQty(item.id, -item.qty)}
                        className="text-red-500 hover:text-red-700 mt-2 inline-block"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-extrabold text-slate-900">₹{cartTotal}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-emerald-600">
                  <span>Direct Tribal Benefit</span>
                  <span>100% Guaranteed</span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isOrderPlaced}
                  className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {isOrderPlaced ? (
                    <span>🎉 Order Placed Successfully!</span>
                  ) : (
                    <span>Proceed to Fair-Trade Checkout (₹{cartTotal})</span>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
