import React from 'react';
import { Compass, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onOpen3D }) {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white">
                  JHARKHAND DARSHAN
                </span>
                <p className="text-[11px] text-stone-400">Govt. of Jharkhand Portal</p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed font-normal">
              Official portal promoting eco-tourism, living tribal traditions, and sacred pilgrimages across the 24 districts of Jharkhand.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Government Portal</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Explore Destinations
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={onOpen3D} className="hover:text-orange-400">Hundru & Dassam Falls</button></li>
              <li><button onClick={onOpen3D} className="hover:text-orange-400">Betla Tiger Reserve</button></li>
              <li><button onClick={onOpen3D} className="hover:text-orange-400">Baidyanath Dham Deoghar</button></li>
              <li><button onClick={onOpen3D} className="hover:text-orange-400">Netarhat Hill Station</button></li>
              <li><button onClick={onOpen3D} className="hover:text-orange-400">Shikharji Parasnath Peak</button></li>
            </ul>
          </div>

          {/* Cultural Heritage */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Tribal Heritage & Art
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-stone-400">GI-Tagged Sohrai Paintings</li>
              <li className="text-stone-400">Dokra Lost-Wax Bell Metal</li>
              <li className="text-stone-400">Pure Jharkhand Tussar Silk</li>
              <li className="text-stone-400">Seraikela Chhau UNESCO Dance</li>
              <li className="text-stone-400">Sarhul & Karma Spring Festivals</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Department Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Department of Tourism, MDI Building, Dhurwa, Ranchi - 834004</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Tourist Helpline: 1363 (24x7)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span>tourism@jharkhand.gov.in</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} Directorate of Tourism, Government of Jharkhand. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-stone-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-stone-400 cursor-pointer">Hyperlink Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
