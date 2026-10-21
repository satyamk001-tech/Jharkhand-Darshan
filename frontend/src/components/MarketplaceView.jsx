import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Star, 
  ShieldCheck, 
  ArrowLeft, 
  Plus, 
  Minus, 
  Trash2, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MARKETPLACE_PRODUCTS } from '../data/mockData';

export default function MarketplaceView({ onBack }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

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
    <div className="py-10 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative px-5 py-2.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-orange-500/20"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Tribal Cart ({cart.reduce((a, b) => a + b.qty, 0)})</span>
            {cart.length > 0 && (
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute -top-1 -right-1 ring-2 ring-white"></span>
            )}
          </button>
        </div>

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Direct Fair-Trade Artisan Marketplace</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Authentic Tribal Crafts of Jharkhand
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Every purchase supports indigenous Santhal, Oraon, and Malhor artisan families directly with 100% fair trade certification
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MARKETPLACE_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {prod.giCertified && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-700 text-white text-[10px] font-bold flex items-center gap-1 shadow-sm">
                      <ShieldCheck className="w-3 h-3" />
                      GI Tagged
                    </span>
                  )}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/95 text-[10px] font-bold text-slate-800 flex items-center gap-1 shadow-xs">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{prod.rating}</span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-[11px] font-semibold text-orange-600">
                    {prod.artisan} • {prod.tribe}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 mt-1 line-clamp-2">
                    {prod.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 line-clamp-2">
                    {prod.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg font-extrabold text-slate-900">₹{prod.price}</span>
                    <span className="text-xs text-slate-400 line-through ml-2">₹{prod.originalPrice}</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    In Stock ({prod.stock})
                  </span>
                </div>

                <button
                  onClick={() => addToCart(prod)}
                  className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Cart Drawer Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-200">
            
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <ShoppingBag className="w-5 h-5 text-orange-600" />
                <span>Your Tribal Cart ({cart.reduce((a, b) => a + b.qty, 0)})</span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16 text-slate-400">
                  <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">Your cart is empty.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{item.name}</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">{item.tribe}</p>
                      <div className="text-xs font-extrabold text-orange-600 mt-1">₹{item.price * item.qty}</div>
                      
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-slate-100 bg-slate-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-slate-500 font-medium">Subtotal</span>
                  <span className="text-lg font-extrabold text-slate-900">₹{cartTotal}</span>
                </div>

                {isOrderPlaced ? (
                  <div className="p-4 rounded-2xl bg-emerald-500 text-white text-center text-sm font-bold flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Order Placed! Johar!</span>
                  </div>
                ) : (
                  <button
                    onClick={handleCheckout}
                    className="w-full py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm shadow-xl shadow-orange-500/25 transition-all"
                  >
                    Proceed to Official Checkout (₹{cartTotal})
                  </button>
                )}
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
