import React, { useState } from 'react';
import { X, Bot, Send, Sparkles, MapPin, Compass } from 'lucide-react';

export default function HelpBotModal({ onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Johar! 🙏 I am your Jharkhand Darshan AI Travel Assistant. How can I help plan your visit today?'
    }
  ]);
  const [input, setInput] = useState('');

  const quickQuestions = [
    'Best time to visit Hundru Falls?',
    'How do I reach Netarhat from Ranchi?',
    'What is authentic Dhuska with Ghugni?',
    'Where to see live Chhau mask dance?'
  ];

  const getBotReply = (query) => {
    const q = query.toLowerCase();
    if (q.includes('hundru')) {
      return 'Hundru Falls is best visited between October and February right after the monsoon when the Subarnarekha river is in full cascade. It is 45km from Ranchi.';
    }
    if (q.includes('netarhat')) {
      return 'Netarhat is located in Latehar district, approx 156km from Ranchi (4 hours via NH39). The road goes through scenic hill passes. Magnolia sunset point is a must-see!';
    }
    if (q.includes('dhuska') || q.includes('food') || q.includes('cuisine')) {
      return 'Dhuska is Jharkhand\'s iconic breakfast made from soaked rice and chana dal ground into a fermented batter and deep fried, served hot with spicy black chickpea Ghugni!';
    }
    if (q.includes('chhau') || q.includes('dance')) {
      return 'Seraikela Chhau is a UNESCO-recognized martial masked dance. You can watch live performances in Seraikela Kharsawan during the annual Chaitra Parva festival.';
    }
    return 'Jharkhand offers 24 districts filled with waterfalls, ancient temples like Baidyanath Jyotirlinga, and the Betla Tiger Reserve. Feel free to ask about any specific destination!';
  };

  const handleSend = (textToSend) => {
    const msg = textToSend || input;
    if (!msg.trim()) return;

    setMessages(prev => [
      ...prev,
      { sender: 'user', text: msg },
      { sender: 'bot', text: getBotReply(msg) }
    ]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 flex flex-col h-[520px]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-orange-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base">Jharkhand Darshan AI Assistant</h3>
              <p className="text-[11px] text-orange-200">24/7 Official Tourism Help Bot</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Feed */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-orange-600 text-white font-medium rounded-br-none'
                    : 'bg-white border border-slate-200/80 text-slate-800 rounded-bl-none shadow-xs'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Question Pills */}
        <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2 overflow-x-auto text-[11px]">
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-orange-50 hover:text-orange-600 text-slate-600 whitespace-nowrap transition-colors shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about travel permits, stays, festivals..."
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          />
          <button
            type="submit"
            className="p-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
