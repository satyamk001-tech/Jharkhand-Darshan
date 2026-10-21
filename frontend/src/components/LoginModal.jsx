import React, { useState, useEffect } from 'react';
import { X, User, ShoppingBag, Shield, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { api } from '../services/api';

const ROLE_CONFIG = {
  tourist: {
    id: 'tourist',
    label: 'Tourist',
    badge: 'Visitor & Explorer',
    icon: User,
    color: 'from-blue-600 to-indigo-600',
    activeTabClass: 'bg-white text-blue-700 shadow-sm border border-blue-100',
    accentBtn: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    defaultEmail: 'tourist@jharkhand.travel',
    defaultName: 'Satyam Kumar (Tourist)',
    desc: 'Book verified hotel stays, hire local certified guides, reserve safari permits & festival passes.',
    features: ['E-Ticket & Pass Wallet', 'Hotel & Safari Bookings', 'Live Interactive Tour Access']
  },
  guide_seller: {
    id: 'guide_seller',
    label: 'Guide or Seller',
    badge: 'Tour Guide & Artisan',
    icon: ShoppingBag,
    color: 'from-amber-600 to-orange-600',
    activeTabClass: 'bg-white text-amber-700 shadow-sm border border-amber-100',
    accentBtn: 'bg-amber-600 hover:bg-amber-700 focus:ring-amber-500',
    defaultEmail: 'guide.seller@jharkhand.travel',
    defaultName: 'Ravi Kumar (Guide & Seller)',
    desc: 'Host live virtual tours, lead trek expeditions, and sell authentic GI-tagged tribal crafts directly to tourists.',
    features: ['Live Studio Broadcaster', 'Handicraft Catalog & Orders', 'Earnings Ledger (₹14,250)']
  },
  admin: {
    id: 'admin',
    label: 'Govt Admin',
    badge: 'Tourism Dept Officer',
    icon: Shield,
    color: 'from-emerald-700 to-slate-900',
    activeTabClass: 'bg-white text-emerald-800 shadow-sm border border-emerald-100',
    accentBtn: 'bg-emerald-700 hover:bg-emerald-800 focus:ring-emerald-500',
    defaultEmail: 'admin@tourism.jharkhand.gov.in',
    defaultName: 'Rajesh Murmu (Govt Admin)',
    desc: 'Official administrative console to monitor tourist footfall, dispatch SOS emergency units, and verify artisans.',
    features: ['State Tourism Analytics (2.8M+)', 'Police 112 & SOS Emergency Grid', 'Destination & Guide Registry']
  }
};

export default function LoginModal({ initialRole = 'tourist', onClose, onLoginSuccess }) {
  // Normalize incoming initialRole
  const normalizeInitial = (r) => {
    if (!r) return 'tourist';
    const low = r.toLowerCase();
    if (low.includes('guide') || low.includes('seller')) return 'guide_seller';
    if (low.includes('admin')) return 'admin';
    return 'tourist';
  };

  const [activeRole, setActiveRole] = useState(normalizeInitial(initialRole));
  const currentConfig = ROLE_CONFIG[activeRole] || ROLE_CONFIG.tourist;

  const [email, setEmail] = useState(currentConfig.defaultEmail);
  const [password, setPassword] = useState('pass123');
  const [isLoading, setIsLoading] = useState(false);

  // When tab changes, update default pre-filled credentials
  const handleRoleSelect = (roleKey) => {
    setActiveRole(roleKey);
    const cfg = ROLE_CONFIG[roleKey];
    setEmail(cfg.defaultEmail);
    setPassword('demo2026');
  };

  const handleExecuteLogin = async (e, customRole = activeRole, customEmail = email) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsLoading(true);

    const cfg = ROLE_CONFIG[customRole] || ROLE_CONFIG.tourist;
    const user = await api.login({
      email: customEmail || cfg.defaultEmail,
      password: password || 'demo2026',
      role: customRole
    });

    setIsLoading(false);
    onLoginSuccess(user);
    onClose();
  };

  // Instant 1-click Demo Login
  const handleInstantDemo = (roleKey) => {
    const cfg = ROLE_CONFIG[roleKey];
    handleExecuteLogin(null, roleKey, cfg.defaultEmail);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
        
        {/* Top Header */}
        <div className={`p-5 sm:p-6 bg-gradient-to-r ${currentConfig.color} text-white flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-sm text-white">
              <currentConfig.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/25 text-white">
                  {currentConfig.badge}
                </span>
              </div>
              <h3 className="font-extrabold text-lg text-white mt-0.5">
                Sign In to Jharkhand Darshan
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3 Role Selection Tabs */}
        <div className="p-4 sm:p-6 pb-2">
          <p className="text-xs font-semibold text-slate-500 mb-2">
            Select Your Account Type:
          </p>
          <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-slate-100 rounded-2xl">
            {Object.values(ROLE_CONFIG).map((cfg) => {
              const Icon = cfg.icon;
              const isSelected = activeRole === cfg.id;
              return (
                <button
                  key={cfg.id}
                  type="button"
                  onClick={() => handleRoleSelect(cfg.id)}
                  className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1.5 text-center ${
                    isSelected ? cfg.activeTabClass : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="leading-tight">{cfg.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Role Information Card & Instant Demo Button */}
        <div className="px-4 sm:px-6">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {currentConfig.desc}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {currentConfig.features.map((feat, i) => (
                <span key={i} className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-white px-2 py-1 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  {feat}
                </span>
              ))}
            </div>

            {/* Instant 1-Click Demo Login */}
            <div className="pt-2 border-t border-slate-200">
              <button
                type="button"
                onClick={() => handleInstantDemo(activeRole)}
                disabled={isLoading}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <Zap className="w-3.5 h-3.5 fill-white" />
                <span>1-Click Instant Demo Login as {currentConfig.label}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Standard Credentials Form */}
        <form onSubmit={handleExecuteLogin} className="p-4 sm:p-6 pt-3 space-y-3.5">
          <div>
            <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
              Registered Email ID
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 font-mono"
            />
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
              Password / Security PIN
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-2xl text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 ${currentConfig.accentBtn}`}
          >
            {isLoading ? 'Authenticating Role...' : `Sign In as ${currentConfig.label}`}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
