import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Heart, 
  Send, 
  Users, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  MessageSquare,
  Gift,
  Share2,
  CheckCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { api } from '../services/api';

export default function LiveStreamRoom({ tour, onClose }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [likes, setLikes] = useState(142);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  const [showTipModal, setShowTipModal] = useState(false);
  const [tipSuccess, setTipSuccess] = useState(false);
  const chatEndRef = useRef(null);

  // Load chat messages and likes on tour mount
  useEffect(() => {
    let isMounted = true;
    const fetchChatAndLikes = async () => {
      if (!tour) return;
      const initialMsgs = await api.getTourChat(tour.id);
      if (initialMsgs && isMounted) {
        setMessages(initialMsgs);
      }
      const likesRes = await api.likeTour(tour.id);
      if (likesRes && isMounted) {
        setLikes(likesRes.likes || 142);
      }
    };
    fetchChatAndLikes();

    // Auto simulated incoming chat for vibrant experience
    const interval = setInterval(() => {
      const simulatedSenders = [
        { user: 'Sanjay Murmu', msg: 'The sound of the waterfall is crystal clear!' },
        { user: 'Anjali Gupta', msg: 'Are those wild elephants near the watering hole?' },
        { user: 'Rohit Soren', msg: 'Johar guide ji! Wonderful presentation.' }
      ];
      const randomItem = simulatedSenders[Math.floor(Math.random() * simulatedSenders.length)];
      setMessages(prev => [
        ...prev.slice(-40),
        {
          id: Date.now().toString(),
          user: randomItem.user,
          message: randomItem.msg,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isGuide: false
        }
      ]);
    }, 12000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [tour]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleLike = async () => {
    setLikes(prev => prev + 1);
    
    // Add floating heart
    const newHeartId = Date.now() + Math.random();
    setFloatingHearts(prev => [...prev, newHeartId]);
    setTimeout(() => {
      setFloatingHearts(prev => prev.filter(id => id !== newHeartId));
    }, 1800);

    if (tour) {
      await api.likeTour(tour.id);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMsg = {
      id: Date.now().toString(),
      user: 'You (Tourist)',
      message: inputMessage.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isGuide: false
    };

    setMessages(prev => [...prev, newMsg]);
    setInputMessage('');

    if (tour) {
      await api.sendTourChat(tour.id, newMsg);
    }
  };

  const handleSendTip = (amount) => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTipSuccess(true);
    setTimeout(() => {
      setShowTipModal(false);
      setTipSuccess(false);
    }, 1800);
  };

  if (!tour) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-xl flex flex-col lg:flex-row text-white overflow-hidden">
      
      {/* LEFT: Video Stream Viewport */}
      <div className="flex-1 flex flex-col relative bg-black">
        
        {/* Top Floating Controls */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto bg-stone-900/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
            <span className="text-xs font-extrabold uppercase tracking-wider text-rose-400">LIVE</span>
            <span className="text-slate-400 text-xs">|</span>
            <span className="text-xs text-white font-semibold flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-slate-300" />
              <span>{tour.viewerCount + 3} watching</span>
            </span>
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2.5 rounded-xl bg-stone-900/80 backdrop-blur-md hover:bg-stone-800 text-white border border-white/10"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-white" />}
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-stone-900/80 backdrop-blur-md hover:bg-stone-800 text-white border border-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="flex-1 relative flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
            src={tour.streamUrl || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/40 pointer-events-none"></div>

          {/* Floating Hearts Animation Container */}
          <div className="absolute bottom-20 right-8 pointer-events-none z-30">
            {floatingHearts.map((id) => (
              <div
                key={id}
                className="absolute bottom-0 right-0 animate-in fade-in zoom-in slide-out-to-top-36 duration-1000 text-rose-500 fill-rose-500"
              >
                <Heart className="w-8 h-8 fill-rose-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tour Info & Guide Controls */}
        <div className="p-4 sm:p-6 bg-stone-900/90 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={tour.guideAvatar}
              alt={tour.guideName}
              className="w-12 h-12 rounded-full object-cover border-2 border-orange-500 shadow-md"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-extrabold text-sm sm:text-base text-white">{tour.guideName}</h3>
                <CheckCircle className="w-4 h-4 text-emerald-500" />
              </div>
              <p className="text-xs text-amber-300 font-medium">{tour.title} • {tour.destination}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Heart Like Trigger */}
            <button
              onClick={handleLike}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-rose-500/20 text-white hover:text-rose-400 border border-white/10 transition-all font-bold text-xs"
            >
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span>{likes}</span>
            </button>

            {/* Tip Guide Trigger */}
            <button
              onClick={() => setShowTipModal(true)}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs shadow-md shadow-orange-500/20 transition-all"
            >
              <Gift className="w-4 h-4" />
              <span>Tip Guide</span>
            </button>
          </div>
        </div>

      </div>

      {/* RIGHT: Live Interactive Chat Drawer */}
      <div className="w-full lg:w-96 h-80 lg:h-full bg-stone-900 border-l border-white/10 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-300">
            <MessageSquare className="w-4 h-4 text-orange-400" />
            <span>Live Tour Chat Feed</span>
          </div>
          <span className="text-[10px] text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full font-semibold">
            Realtime
          </span>
        </div>

        {/* Chat Feed */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
          {messages.map((m) => (
            <div 
              key={m.id}
              className={`p-3 rounded-2xl ${
                m.isGuide 
                  ? 'bg-amber-950/70 border border-amber-600/40 text-amber-100' 
                  : 'bg-white/5 border border-white/5 text-stone-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-bold ${m.isGuide ? 'text-amber-300 flex items-center gap-1' : 'text-orange-400'}`}>
                  {m.user} {m.isGuide && '★'}
                </span>
                <span className="text-[10px] text-stone-400">{m.timestamp}</span>
              </div>
              <p className="leading-relaxed">{m.message}</p>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input Box */}
        <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 flex items-center gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask guide a question..."
            className="flex-1 bg-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-stone-400 border border-white/10 focus:outline-hidden focus:ring-1 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="p-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Tipping Modal */}
      {showTipModal && (
        <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-white/10 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center">
            <Gift className="w-12 h-12 text-amber-400 mx-auto mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-white">Directly Support Tribal Guides</h3>
            <p className="text-xs text-stone-400 mt-2">
              100% of your voluntary contribution goes directly into the guide's verified bank account.
            </p>

            {tipSuccess ? (
              <div className="mt-6 p-4 rounded-2xl bg-emerald-500/20 text-emerald-300 text-sm font-bold animate-in zoom-in">
                🎉 Thank you for supporting {tour.guideName}!
              </div>
            ) : (
              <div className="mt-6 space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  {[50, 100, 200].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => handleSendTip(amt)}
                      className="py-3 rounded-2xl bg-white/10 hover:bg-orange-600 text-white font-extrabold text-sm border border-white/10 transition-colors"
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setShowTipModal(false)}
                  className="w-full py-2.5 rounded-xl text-stone-400 text-xs font-semibold hover:text-white"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
