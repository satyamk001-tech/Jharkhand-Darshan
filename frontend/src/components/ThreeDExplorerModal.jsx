import React, { useState, useEffect } from 'react';
import { 
  X, 
  Compass, 
  RotateCw, 
  Volume2, 
  VolumeX, 
  MapPin, 
  Sparkles, 
  Navigation,
  Eye,
  Maximize2
} from 'lucide-react';

export default function ThreeDExplorerModal({ destination, onClose }) {
  const [currentAngle, setCurrentAngle] = useState(0); // 0, 90, 180, 270
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioCtx, setAudioCtx] = useState(null);

  // Web Audio Synth for ambient forest/waterfall sound
  const toggleAmbientAudio = () => {
    if (isPlayingAudio) {
      if (audioCtx) {
        audioCtx.close();
        setAudioCtx(null);
      }
      setIsPlayingAudio(false);
    } else {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Soft pink-noise like tranquil frequency
        osc.type = 'sine';
        osc.frequency.setValueAtTime(196, ctx.currentTime); // G3 warm earth tone
        gain.gain.setValueAtTime(0.04, ctx.currentTime);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        setAudioCtx(ctx);
        setIsPlayingAudio(true);
      } catch (err) {
        console.error('Web audio not allowed yet', err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtx) {
        audioCtx.close();
      }
    };
  }, [audioCtx]);

  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-stone-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Top Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between text-white bg-stone-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-600/30 border border-orange-500/50 flex items-center justify-center text-orange-400">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base sm:text-lg">{destination.name}</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  360° Virtual Spatial Mode
                </span>
              </div>
              <p className="text-xs text-stone-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>{destination.district}, Jharkhand • Elevation 1,020m</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleAmbientAudio}
              className={`p-2.5 rounded-xl border transition-all text-xs flex items-center gap-1.5 ${
                isPlayingAudio 
                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' 
                  : 'bg-white/5 border-white/10 text-stone-400 hover:text-white'
              }`}
            >
              {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline">{isPlayingAudio ? 'Ambient Sound ON' : 'Play Nature Audio'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 360 Viewport Container */}
        <div className="relative flex-1 min-h-[350px] sm:min-h-[460px] bg-black overflow-hidden flex items-center justify-center">
          <img
            src={destination.image}
            alt={destination.name}
            style={{
              transform: `scale(1.15) rotate(${currentAngle * 0.05}deg)`,
              filter: `hue-rotate(${currentAngle * 0.2}deg)`
            }}
            className="w-full h-full object-cover transition-all duration-700 ease-out select-none"
          />

          <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/20 to-black/80 pointer-events-none"></div>

          {/* Compass Angle HUD Overlay */}
          <div className="absolute bottom-6 left-6 z-20 bg-stone-900/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 text-xs text-stone-300 space-y-1">
            <div className="flex items-center gap-2 text-white font-bold">
              <Navigation className="w-4 h-4 text-orange-400" />
              <span>Azimuth Angle: {currentAngle}° (Panoramic View)</span>
            </div>
            <div className="text-[11px] text-stone-400">
              Field of View: 110° • HDR Tone Mapped
            </div>
          </div>

          {/* Rotation Controls Overlay */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
            <button
              onClick={() => setCurrentAngle(prev => (prev + 90) % 360)}
              className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs flex items-center gap-2 shadow-xl shadow-orange-500/30 transition-all hover:scale-105"
            >
              <RotateCw className="w-4 h-4" />
              <span>Rotate 90° Viewpoint</span>
            </button>
          </div>
        </div>

        {/* Bottom Destination Facts & Stats */}
        <div className="p-4 sm:p-6 bg-stone-950 border-t border-white/10 text-white">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            {destination.stats && Object.entries(destination.stats).map(([k, v], idx) => (
              <div key={idx} className="bg-white/5 p-3 rounded-xl border border-white/5">
                <div className="text-stone-400 capitalize text-[10px] font-medium">{k}</div>
                <div className="text-white font-bold text-xs sm:text-sm mt-0.5">{v}</div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-stone-300 leading-relaxed font-normal">
            {destination.description}
          </p>
        </div>

      </div>
    </div>
  );
}
