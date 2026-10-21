import React from 'react';
import { MessageSquare, Shield, Compass, Phone, HelpCircle } from 'lucide-react';

export default function FloatingActions({ onOpenHelpBot, onOpenEmergency, onOpen3D }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2.5">
      {/* 1. Blue Chat Button -> Help Bot */}
      <button
        onClick={onOpenHelpBot}
        title="Jharkhand Travel Help Bot"
        className="w-11 h-11 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      >
        <MessageSquare className="w-5 h-5 fill-white/20 text-white" />
      </button>

      {/* 2. Red Shield Button -> Emergency SOS */}
      <button
        onClick={onOpenEmergency}
        title="Emergency SOS"
        className="w-11 h-11 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      >
        <Shield className="w-5 h-5 fill-white/20 text-white" />
      </button>

      {/* 3. Blue Compass Button -> 3D Explorer */}
      <button
        onClick={onOpen3D}
        title="Explore in 3D"
        className="w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      >
        <Compass className="w-5 h-5 text-white animate-spin-slow" />
      </button>

      {/* 4. Orange Phone Button -> Call Helpline */}
      <a
        href="tel:1363"
        title="Call 24/7 Tourist Helpline (1363)"
        className="w-11 h-11 rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* 5. Small Black Question Mark -> Quick Info */}
      <button
        onClick={onOpenHelpBot}
        title="Need Help?"
        className="w-7 h-7 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-md flex items-center justify-center text-xs font-bold transition-transform hover:scale-110"
      >
        ?
      </button>
    </div>
  );
}
