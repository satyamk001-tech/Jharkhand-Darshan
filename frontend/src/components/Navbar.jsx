import React, { useState } from 'react';
import { 
  Shield, 
  Home as HomeIcon, 
  Map, 
  MessageSquare, 
  Globe, 
  ChevronDown, 
  LogIn, 
  User, 
  ShoppingBag, 
  Settings,
  LogOut,
  Menu,
  X
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
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo matching Figma Screenshot */}
          <div 
            onClick={() => {
              setActiveNav('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-xs">
              <Shield className="w-5 h-5 fill-white/20 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-900 leading-tight">
                Jharkhand Darshan
              </h1>
              <p className="text-xs text-slate-500 font-normal">
                Tourism & Travel Portal
              </p>
            </div>
          </div>

          {/* Center Navigation Links (Exact Figma style) */}
          <nav className="hidden md:flex items-center gap-4">
            <button
              onClick={() => {
                setActiveNav('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeNav === 'home'
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/60'
              }`}
            >
              <HomeIcon className="w-4 h-4" />
              <span>Home</span>
            </button>

            <button
              onClick={() => {
                setActiveNav('3d');
                onOpen3D();
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeNav === '3d'
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/60'
              }`}
            >
              <Map className="w-4 h-4" />
              <span>3D Explorer</span>
            </button>

            <button
              onClick={onOpenHelpBot}
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/60 rounded-xl transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Help Bot</span>
            </button>

            <button
              onClick={onOpenEmergency}
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-red-600 hover:text-red-700 hover:bg-red-50/60 rounded-xl transition-all"
            >
              <Shield className="w-4 h-4" />
              <span>Emergency</span>
            </button>
          </nav>

          {/* Right Action Items */}
          <div className="hidden lg:flex items-center gap-2.5">
            
            {/* Language Selector */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-700 bg-slate-50/50 cursor-pointer">
              <span className="text-[11px] font-medium text-slate-500">us</span>
              <span>English</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </div>

            {/* Login / User Status */}
            {user ? (
              <div className="flex items-center gap-2 pl-1">
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-900">{user.name}</div>
                  <div className="text-[10px] text-orange-600 font-semibold uppercase">{user.role}</div>
                </div>
                <button
                  onClick={onLogout}
                  title="Logout"
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 shadow-2xs transition-all"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Login</span>
                </button>

                {/* Login Dropdown matching Figma media_1792583542897_c6c8ddcc.png */}
                {isLoginDropdownOpen && (
                  <div 
                    onMouseLeave={() => setIsLoginDropdownOpen(false)}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    <button
                      onClick={() => {
                        setIsLoginDropdownOpen(false);
                        onOpenLogin('tourist');
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-slate-50 text-xs font-medium text-slate-700 flex items-center gap-2.5"
                    >
                      <User className="w-4 h-4 text-slate-500" />
                      <span>Login as Tourist</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsLoginDropdownOpen(false);
                        onOpenLogin('seller');
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-slate-50 text-xs font-medium text-slate-700 flex items-center gap-2.5"
                    >
                      <ShoppingBag className="w-4 h-4 text-slate-500" />
                      <span>Login as Local Seller</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsLoginDropdownOpen(false);
                        onOpenLogin('admin');
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-slate-50 text-xs font-medium text-slate-700 flex items-center gap-2.5"
                    >
                      <Settings className="w-4 h-4 text-slate-500" />
                      <span>Login as Government Admin</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Online Indicator Badge matching Figma */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-700 bg-slate-50/50">
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>Online</span>
            </div>

          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-2">
          <button
            onClick={() => {
              setActiveNav('home');
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 flex items-center gap-2 hover:bg-slate-50"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Home</span>
          </button>
          <button
            onClick={() => {
              setActiveNav('3d');
              onOpen3D();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 flex items-center gap-2 hover:bg-slate-50"
          >
            <Map className="w-4 h-4" />
            <span>3D Explorer</span>
          </button>
          <button
            onClick={() => {
              onOpenHelpBot();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 flex items-center gap-2 hover:bg-slate-50"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Help Bot</span>
          </button>
          <button
            onClick={() => {
              onOpenEmergency();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-red-600 flex items-center gap-2 hover:bg-red-50"
          >
            <Shield className="w-4 h-4" />
            <span>Emergency</span>
          </button>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                onOpenLogin('tourist');
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold text-center"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
