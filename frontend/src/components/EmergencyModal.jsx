import React from 'react';
import { X, ShieldAlert, PhoneCall, HeartPulse, UserCheck, Flame } from 'lucide-react';
import { EMERGENCY_CONTACTS } from '../data/mockData';

export default function EmergencyModal({ onClose }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Shield': return <ShieldAlert className="w-5 h-5 text-rose-600" />;
      case 'PhoneCall': return <PhoneCall className="w-5 h-5 text-blue-600" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-red-600" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-purple-600" />;
      case 'Flame': return <Flame className="w-5 h-5 text-emerald-600" />;
      default: return <PhoneCall className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-rose-100">
        
        {/* Header */}
        <div className="p-6 bg-rose-50 border-b border-rose-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-md">
              <ShieldAlert className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider">
                Emergency 24x7 Helplines
              </span>
              <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                Tourist SOS & Assistance
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-rose-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contacts List */}
        <div className="p-6 space-y-3">
          {EMERGENCY_CONTACTS.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between hover:border-rose-200 transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xs border border-slate-100">
                  {getIcon(item.icon)}
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900">{item.title}</h4>
                  <p className="text-[11px] text-slate-500">{item.dept} • {item.time}</p>
                </div>
              </div>

              <a
                href={`tel:${item.number}`}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs shadow-md shadow-rose-500/20 flex items-center gap-1.5 transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{item.number}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="p-4 bg-slate-50 text-center text-[11px] text-slate-500 border-t border-slate-100">
          Government of Jharkhand • State Emergency Operations Center (SEOC)
        </div>

      </div>
    </div>
  );
}
