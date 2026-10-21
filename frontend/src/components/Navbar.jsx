import React, { useState } from 'react';
import { 
  Compass, 
  Bot, 
  ShieldAlert, 
  Globe, 
  ChevronDown, 
  User, 
  Menu, 
  X,
  Sparkles,
  LogOut,
  MapPin
} from 'lucide-react';

export default function Navbar({
  activeNav,
  setActiveNav,
  onOpenHelpBot,
  onOpenEmergency,
  onOpen3D,
  onOpenLogin,
  user,
  onLogout
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Portal Branding */}
          <div 
            onClick={() => {
              setActiveNav('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-linear-to-br from-orange-600 via-amber-600 to-amber-700 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                  JHARKHAND DARSHAN
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Govt of Jharkhand
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium tracking-wide">
                Official Tourism & Cultural Portal
              </p>
            </div>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/60">
            <button
              onClick={() => setActiveNav('home')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeNav === 'home'
                  ? 'bg-white text-orange-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                setActiveNav('3d');
                onOpen3D();
              }}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeNav === '3d'
                  ? 'bg-white text-orange-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Compass className="w-4 h-4 text-orange-500" />
              <span>3D Explorer</span>
            </button>
          </nav>

          {/* Right Action Icons & Auth */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Help Bot Trigger */}
            <button
              onClick={onOpenHelpBot}
              title="Jharkhand AI Travel Assistant"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50/80 transition-all border border-transparent hover:border-orange-100"
            >
              <Bot className="w-4 h-4 text-orange-600" />
              <span>Help Bot</span>
            </button>

            {/* Emergency SOS Trigger */}
            <button
              onClick={onOpenEmergency}
              title="Tourist Emergency SOS Numbers"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-700 bg-rose-50/80 hover:bg-rose-100 transition-all border border-rose-200/60"
            >
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>Emergency SOS</span>
            </button>

            {/* Language Selector */}
            <button 
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-all"
              title="Select Language"
            >
              <Globe className="w-4 h-4 text-slate-500" />
              <span>English</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* User Login / Profile Dropdown */}
            {user ? (
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-800">{user.name}</div>
                  <div className="text-[10px] text-orange-600 font-semibold uppercase">{user.role}</div>
                </div>
                <button
                  onClick={onLogout}
                  title="Logout"
                  className="p-2 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-600 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
                  className="flex items-center gap-2 bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-md shadow-orange-500/20 transition-all"
                >
                  <User className="w-4 h-4" />
                  <span>Portal Login</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {isLoginDropdownOpen && (
                  <div 
                    onMouseLeave={() => setIsLoginDropdownOpen(false)}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Select Login Role
                    </div>
                    <button
                      onClick={() => {
                        setIsLoginDropdownOpen(false);
                        onOpenLogin('tourist');
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-orange-50 text-xs font-semibold text-slate-700 hover:text-orange-600 flex items-center justify-between"
                    >
                      <span>Tourist / Traveler</span>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">User</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsLoginDropdownOpen(false);
                        onOpenLogin('seller');
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-orange-50 text-xs font-semibold text-slate-700 hover:text-orange-600 flex items-center justify-between"
                    >
                      <span>Local Artisan / Seller</span>
                      <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">Artisan</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsLoginDropdownOpen(false);
                        onOpenLogin('admin');
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-orange-50 text-xs font-semibold text-slate-700 hover:text-orange-600 flex items-center justify-between"
                    >
                      <span>Govt Tourism Officer</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded">Officer</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2">
          <button
            onClick={() => {
              setActiveNav('home');
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600"
          >
            Home
          </button>
          <button
            onClick={() => {
              setActiveNav('3d');
              onOpen3D();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600 flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-orange-500" />
            <span>3D Explorer</span>
          </button>
          <button
            onClick={() => {
              onOpenHelpBot();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600 flex items-center gap-2"
          >
            <Bot className="w-4 h-4 text-orange-600" />
            <span>Help Bot</span>
          </button>
          <button
            onClick={() => {
              onOpenEmergency();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-rose-700 bg-rose-50 flex items-center gap-2"
          >
            <ShieldAlert className="w-4 h-4 text-rose-600" />
            <span>Emergency SOS Numbers</span>
          </button>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                onOpenLogin('tourist');
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-linear-to-r from-orange-600 to-amber-600 text-white py-2.5 rounded-xl text-sm font-bold shadow-md text-center"
            >
              Sign In to Jharkhand Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
