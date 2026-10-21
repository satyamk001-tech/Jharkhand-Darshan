import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Heart, 
  Share2, 
  Gift, 
  MapPin, 
  Eye, 
  Clock, 
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LiveStreamRoom({ tour, onClose }) {
  const [likes, setLikes] = useState(447);
  const [hasLiked, setHasLiked] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: '1',
      avatar: 'T',
      user: 'Tourist123',
      text: 'Wow! This waterfall is amazing!',
      time: '2:41:37 PM',
      isGuide: false
    },
    {
      id: '2',
      avatar: 'R',
      user: 'Ravi Kumar',
      isGuide: true,
      text: "Thank you! This is one of Jharkhand's most beautiful waterfalls. The water drops from 74 meters!",
      time: '2:42:37 PM'
    },
    {
      id: '3',
      avatar: 'N',
      user: 'NatureLover',
      text: 'Can you show us the rainbow in the mist?',
      time: '2:43:37 PM',
      isGuide: false
    },
    {
      id: '4',
      avatar: 'R',
      user: 'Ravi Kumar',
      isGuide: true,
      text: 'Absolutely! Let me position the camera to catch the rainbow. You can see it best around noon.',
      time: '2:44:37 PM'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const chatBottomRef = useRef(null);

  const handleLike = () => {
    setLikes(prev => prev + 1);
    setHasLiked(true);
  };

  const handleSendTip = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
    alert('Thank you for tipping the guide!');
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        avatar: 'Y',
        user: 'You',
        text: inputMessage.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        isGuide: false
      }
    ]);
    setInputMessage('');
  };

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col lg:flex-row overflow-hidden font-sans">
      
      {/* LEFT: Video Viewport matching Figma media_1792582051194_d4f1a3c9.png */}
      <div className="flex-1 relative bg-black flex items-center justify-center">
        
        {/* Stream video / background photo matching Figma media_1792582051194_d4f1a3c9.png */}
        <img
          src="/figma_assets/livestream_hundru.png"
          alt="Hundru Falls Live View"
          className="w-full h-full object-cover"
        />

        {/* Live indicator top-left */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold shadow-md">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span>Live Now</span>
          </span>
        </div>

        {/* Close Button top-right */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Left Info Overlay */}
        <div className="absolute bottom-6 left-6 z-20 text-white">
          <h2 className="text-xl sm:text-2xl font-bold drop-shadow-md">
            Hundru Falls Live Tour
          </h2>
          <div className="flex items-center gap-3 text-xs text-white/90 font-medium mt-1 drop-shadow">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>Hundru Falls, Ranchi</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              <span>1247 viewers</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>45 min</span>
            </span>
          </div>
        </div>

        {/* Bottom Right Actions Overlay (Exact Figma Pill Buttons) */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
          <button
            onClick={handleLike}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/95 text-slate-800 text-xs font-semibold shadow-md hover:bg-white"
          >
            <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-red-500 text-red-500' : 'text-slate-700'}`} />
            <span>{likes}</span>
          </button>

          <button
            onClick={() => navigator.clipboard?.writeText(window.location.href)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/95 text-slate-800 text-xs font-semibold shadow-md hover:bg-white"
          >
            <Share2 className="w-3.5 h-3.5 text-slate-700" />
            <span>Share</span>
          </button>

          <button
            onClick={handleSendTip}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/95 text-slate-800 text-xs font-semibold shadow-md hover:bg-white"
          >
            <Gift className="w-3.5 h-3.5 text-slate-700" />
            <span>Send Tip</span>
          </button>
        </div>

      </div>

      {/* RIGHT: Pure White Chat Feed Panel matching Figma */}
      <div className="w-full lg:w-96 bg-white h-72 lg:h-full border-l border-slate-200 flex flex-col justify-between">
        
        {/* Top Guide Header */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700 text-sm">
            R
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900">Ravi Kumar</h4>
            <p className="text-xs text-slate-500">Tour Guide</p>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          {messages.map((m) => (
            <div key={m.id} className="space-y-1">
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] ${
                  m.isGuide ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {m.avatar}
                </div>
                <span className="font-bold text-slate-900">{m.user}</span>
                {m.isGuide && (
                  <span className="px-1.5 py-0.2 bg-blue-50 text-blue-600 text-[10px] font-semibold rounded">
                    Guide
                  </span>
                )}
              </div>
              <p className="text-slate-700 pl-8 leading-relaxed">
                {m.text}
              </p>
              <div className="text-[10px] text-slate-400 pl-8">
                {m.time}
              </div>
            </div>
          ))}
          <div ref={chatBottomRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-100 flex items-center gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3.5 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:bg-white"
          />
          <button
            type="submit"
            className="p-2 rounded-xl bg-slate-950 text-white hover:bg-slate-800"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>

    </div>
  );
}
