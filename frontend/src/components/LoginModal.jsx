import React, { useState } from 'react';
import { X, User, ShoppingBag, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { api } from '../services/api';

export default function LoginModal({ initialRole = 'tourist', onClose, onLoginSuccess }) {
  const [role, setRole] = useState(initialRole);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const user = await api.login({
      email: email || `${role}@jharkhand.gov.in`,
      password,
      role
    });

    setIsLoading(false);
    onLoginSuccess(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-100">
        
        {/* Top Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">
              Single Sign-On Portal
            </span>
            <h3 className="font-extrabold text-lg text-slate-900 mt-0.5">
              Jharkhand Darshan Sign In
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3 Role Selection Tabs */}
        <div className="p-6 pb-2">
          <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-2xl">
            <button
              onClick={() => setRole('tourist')}
              className={`py-2 rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                role === 'tourist' ? 'bg-white text-orange-600 shadow-xs' : 'text-slate-500'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Tourist</span>
            </button>

            <button
              onClick={() => setRole('seller')}
              className={`py-2 rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                role === 'seller' ? 'bg-white text-amber-600 shadow-xs' : 'text-slate-500'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Artisan</span>
            </button>

            <button
              onClick={() => setRole('admin')}
              className={`py-2 rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                role === 'admin' ? 'bg-white text-emerald-600 shadow-xs' : 'text-slate-500'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Govt Officer</span>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 pt-2 space-y-4">
          <div className="p-3 rounded-2xl bg-orange-50/70 border border-orange-100 text-[11px] text-orange-800">
            {role === 'tourist' && 'Book stays, guides, and watch live tours across Jharkhand.'}
            {role === 'seller' && 'List authentic GI-tagged tribal crafts and receive direct payout.'}
            {role === 'admin' && 'Official access for Department of Tourism officers and inspectors.'}
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
              Official Email / Mobile
            </label>
            <input
              type="text"
              required
              placeholder={role === 'admin' ? 'officer@jharkhand.gov.in' : 'yourname@example.com'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            />
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
              Password / OTP
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? 'Verifying Credentials...' : 'Sign In to Portal'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
