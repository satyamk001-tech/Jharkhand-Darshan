import React from 'react';
import { Bot, ShieldAlert, Compass, PhoneCall, HelpCircle } from 'lucide-react';

export default function FloatingActions({ onOpenHelpBot, onOpenEmergency, onOpen3D }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* 3D Compass */}
      <button
        onClick={onOpen3D}
        title="3D Spatial Explorer"
        className="w-12 h-12 rounded-full bg-slate-900/90 text-amber-400 border border-white/20 shadow-xl flex items-center justify-center hover:scale-110 hover:bg-slate-900 transition-all backdrop-blur-md"
      >
        <Compass className="w-5 h-5 animate-spin-slow" />
      </button>

      {/* Emergency SOS */}
      <button
        onClick={onOpenEmergency}
        title="Emergency SOS"
        className="w-12 h-12 rounded-full bg-rose-600 text-white shadow-xl shadow-rose-600/30 flex items-center justify-center hover:scale-110 hover:bg-rose-700 transition-all animate-pulse"
      >
        <ShieldAlert className="w-5 h-5" />
      </button>

      {/* AI Help Bot */}
      <button
        onClick={onOpenHelpBot}
        title="Jharkhand Travel AI Assistant"
        className="w-12 h-12 rounded-full bg-linear-to-r from-orange-600 to-amber-600 text-white shadow-xl shadow-orange-500/30 flex items-center justify-center hover:scale-110 transition-all"
      >
        <Bot className="w-6 h-6" />
      </button>
    </div>
  );
}
