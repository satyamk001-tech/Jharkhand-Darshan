import React, { useState } from 'react';
import { 
  X, 
  User, 
  ShoppingBag, 
  Shield, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  TrendingUp, 
  Package, 
  Radio, 
  AlertTriangle, 
  Award, 
  Download, 
  Plus,
  DollarSign,
  Phone
} from 'lucide-react';

export default function RoleDashboardModal({ user, onClose, onLogout }) {
  if (!user) return null;

  const role = (user.role || 'tourist').toLowerCase();
  const isAdmin = role.includes('admin');
  const isGuideOrSeller = !isAdmin && (role.includes('seller') || role.includes('guide'));
  const isTourist = !isAdmin && !isGuideOrSeller;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
        
        {/* Top Header */}
        <div className={`p-6 border-b flex items-center justify-between ${
          isTourist 
            ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white' 
            : isGuideOrSeller 
            ? 'bg-gradient-to-r from-amber-600 to-orange-700 text-white' 
            : 'bg-gradient-to-r from-emerald-800 to-slate-900 text-white'
        }`}>
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-sm">
              {isTourist && <User className="w-6 h-6" />}
              {isGuideOrSeller && <ShoppingBag className="w-6 h-6" />}
              {isAdmin && <Shield className="w-6 h-6" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-lg text-white">
                  {user.name}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 backdrop-blur-md uppercase tracking-wider text-white border border-white/30">
                  {isTourist ? 'Tourist Pass' : isGuideOrSeller ? 'Certified Guide & Artisan' : 'Govt Tourism Officer'}
                </span>
              </div>
              <p className="text-xs text-white/80 mt-0.5 font-mono">
                {user.email} • ID: JKD-USR-{user.role.toUpperCase()}-2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onLogout}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/20 transition-all"
            >
              Sign Out
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* ============================================================== */}
          {/* 1. TOURIST DASHBOARD */}
          {/* ============================================================== */}
          {isTourist && (
            <div className="space-y-6">
              
              {/* Quick Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
                  <div className="text-xs font-semibold text-blue-700">Active Bookings</div>
                  <div className="text-2xl font-extrabold text-blue-950 mt-1">2 Passes</div>
                  <div className="text-[11px] text-blue-600 mt-1">Hundru & Betla Safari</div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <div className="text-xs font-semibold text-emerald-700">Marketplace Orders</div>
                  <div className="text-2xl font-extrabold text-emerald-950 mt-1">1 Shipment</div>
                  <div className="text-[11px] text-emerald-600 mt-1">Sohrai Mural Dispatched</div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100">
                  <div className="text-xs font-semibold text-amber-700">Digital Travel Pass</div>
                  <div className="text-2xl font-extrabold text-amber-950 mt-1">Verified</div>
                  <div className="text-[11px] text-amber-600 mt-1">Valid across all 24 districts</div>
                </div>
              </div>

              {/* Active Bookings List */}
              <div>
                <h4 className="font-bold text-sm text-slate-900 mb-3 flex items-center justify-between">
                  <span>My Reservations & Passes</span>
                  <span className="text-xs text-orange-600 font-semibold cursor-pointer hover:underline flex items-center gap-1">
                    <Download className="w-3.5 h-3.5" /> Download E-Tickets
                  </span>
                </h4>

                <div className="space-y-3">
                  <div className="p-4 rounded-2xl border border-slate-200 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
                        🏨
                      </div>
                      <div>
                        <div className="font-bold text-sm text-slate-900">Ranchi Hill View Resort</div>
                        <div className="text-xs text-slate-500">Ref: JKD-948210 • Check-in: 25 Oct 2026</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-700">
                      CONFIRMED
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl border border-slate-200 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                        🎫
                      </div>
                      <div>
                        <div className="font-bold text-sm text-slate-900">Sarhul Festival VIP Pass</div>
                        <div className="text-xs text-slate-500">Ref: JKD-319582 • 3-Day All Access Pass</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-700">
                      ACTIVE PASS
                    </span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* 2. GUIDE OR SELLER DASHBOARD */}
          {/* ============================================================== */}
          {isGuideOrSeller && (
            <div className="space-y-6">
              
              {/* Income & Performance Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100">
                  <div className="text-xs font-semibold text-amber-700">Monthly Earnings</div>
                  <div className="text-2xl font-extrabold text-amber-950 mt-1">₹14,250</div>
                  <div className="text-[11px] text-amber-600 mt-1">Direct Bank Transfer Settled</div>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100">
                  <div className="text-xs font-semibold text-orange-700">Live Tour Viewers</div>
                  <div className="text-2xl font-extrabold text-orange-950 mt-1">1,247</div>
                  <div className="text-[11px] text-orange-600 mt-1">Hundru Falls Live Broadcast</div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <div className="text-xs font-semibold text-emerald-700">Artisan Rating</div>
                  <div className="text-2xl font-extrabold text-emerald-950 mt-1">4.9 ★</div>
                  <div className="text-[11px] text-emerald-600 mt-1">100% Fair-Trade Certified</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <button 
                  onClick={() => alert("Live stream studio started! Broadcasting to Jharkhand Darshan portal.")}
                  className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm"
                >
                  <Radio className="w-4 h-4" />
                  <span>Start Live Tour Stream</span>
                </button>

                <button 
                  onClick={() => alert("Product listing dialog opened: Upload Sohrai art or Dokra casting.")}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Handicraft Product</span>
                </button>
              </div>

              {/* Assigned Tour Itineraries */}
              <div>
                <h4 className="font-bold text-sm text-slate-900 mb-3">
                  My Upcoming Tour Sessions
                </h4>
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl border border-slate-200 bg-white flex items-center justify-between">
                    <div>
                      <div className="font-bold text-sm text-slate-900">Netarhat Sunrise & Hill Trekking</div>
                      <div className="text-xs text-slate-500">Tomorrow • 5:30 AM • 4 Tourists Booked (₹4,400)</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800">
                      SCHEDULED
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl border border-slate-200 bg-white flex items-center justify-between">
                    <div>
                      <div className="font-bold text-sm text-slate-900">Palamau Forts & Betla Forest Heritage Walk</div>
                      <div className="text-xs text-slate-500">24 Oct 2026 • 9:00 AM • 6 Tourists Booked (₹6,600)</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800">
                      CONFIRMED
                    </span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* 3. GOVERNMENT ADMIN DASHBOARD */}
          {/* ============================================================== */}
          {isAdmin && (
            <div className="space-y-6">
              
              {/* Department Overview */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <div className="text-xs font-semibold text-emerald-700">Total Tourists (2026)</div>
                  <div className="text-2xl font-extrabold text-emerald-950 mt-1">2.8M+</div>
                  <div className="text-[11px] text-emerald-600 mt-1">+14.2% YoY Growth</div>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
                  <div className="text-xs font-semibold text-blue-700">Registered Spots</div>
                  <div className="text-2xl font-extrabold text-blue-950 mt-1">50+</div>
                  <div className="text-[11px] text-blue-600 mt-1">Across 24 Districts</div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100">
                  <div className="text-xs font-semibold text-amber-700">Active Guides & Artisans</div>
                  <div className="text-2xl font-extrabold text-amber-950 mt-1">500+</div>
                  <div className="text-[11px] text-amber-600 mt-1">100% Certified</div>
                </div>

                <div className="p-4 rounded-2xl bg-red-50 border border-red-100">
                  <div className="text-xs font-semibold text-red-700">SOS Response Time</div>
                  <div className="text-2xl font-extrabold text-red-950 mt-1">4.2 min</div>
                  <div className="text-[11px] text-red-600 mt-1">Police 112 & Tourist 1363</div>
                </div>
              </div>

              {/* Department Control Tools */}
              <div className="flex flex-wrap items-center gap-3">
                <button 
                  onClick={() => alert("Destination Registry Manager: Add new tourist spot with GPS coordinates & photos.")}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Register New Destination</span>
                </button>

                <button 
                  onClick={() => alert("GI Verification: Approved 3 new Dokra metal artisans in Khunti district.")}
                  className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center gap-2 shadow-sm"
                >
                  <Award className="w-4 h-4" />
                  <span>Approve Artisan GI Tags</span>
                </button>
              </div>

              {/* Live Emergency SOS Dispatch Feed */}
              <div>
                <h4 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>Active Emergency Helpline Status (All Districts)</span>
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                    <span className="font-medium text-slate-800">State Police 112 Emergency Grid</span>
                    <span className="font-bold text-emerald-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Operational (24/7)
                    </span>
                  </div>
                  <div className="p-3 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                    <span className="font-medium text-slate-800">Tourist Police Helpline 1363 (Multilingual Desk)</span>
                    <span className="font-bold text-emerald-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Operational (24/7)
                    </span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
