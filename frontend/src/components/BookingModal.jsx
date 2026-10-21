import React, { useState } from 'react';
import { 
  X, 
  CheckCircle, 
  Calendar, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { api } from '../services/api';

export default function BookingModal({ item, category, onClose }) {
  const [formData, setFormData] = useState({
    customerName: 'Satyam Kumar',
    customerEmail: 'satyam@jharkhand.gov.in',
    customerPhone: '+91 98765 43210',
    bookingDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    guestsOrTickets: 2,
    durationOrPassType: 'Standard Full Day'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  if (!item) return null;

  const numericPrice = item.numericPrice || 1499;
  const totalPrice = numericPrice * (formData.guestsOrTickets || 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      category: category || 'hotels',
      title: item.title,
      location: item.location || 'Jharkhand',
      bookingDate: formData.bookingDate,
      durationOrPassType: formData.durationOrPassType,
      guestsOrTickets: Number(formData.guestsOrTickets),
      totalPrice: Number(totalPrice),
      customerName: formData.customerName,
      customerEmail: formData.customerEmail,
      customerPhone: formData.customerPhone
    };

    const result = await api.createBooking(payload);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setIsLoading(false);
    setConfirmedBooking(result);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100">
        
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">
              Official Reservation System
            </span>
            <h3 className="font-extrabold text-lg text-slate-900 mt-0.5">
              {confirmedBooking ? 'Booking Confirmed!' : `Reserve: ${item.title}`}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmedBooking ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h4 className="text-xl font-bold text-slate-900">
              Johar! Your Experience is Booked
            </h4>

            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Your official permit and voucher have been dispatched to <strong>{formData.customerEmail}</strong>.
            </p>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Booking Reference:</span>
                <span className="font-mono font-bold text-orange-600">{confirmedBooking.bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Total Paid:</span>
                <span className="font-bold text-slate-900">₹{totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Service:</span>
                <span className="font-semibold text-slate-800">{item.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Scheduled Date:</span>
                <span className="font-semibold text-slate-800">{formData.bookingDate}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Item Summary Pill */}
            <div className="flex items-center gap-3 p-3 bg-orange-50/60 rounded-2xl border border-orange-100">
              <img src={item.image} alt={item.title} className="w-14 h-14 rounded-xl object-cover shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{item.title}</h4>
                <div className="text-[11px] text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-orange-500" />
                  <span>{item.location}</span>
                </div>
                <div className="text-xs font-extrabold text-orange-600 mt-0.5">{item.price}</div>
              </div>
            </div>

            {/* Inputs */}
            <div>
              <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={formData.customerEmail}
                    onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                  Mobile Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={formData.customerPhone}
                    onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                  Booking Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    required
                    value={formData.bookingDate}
                    onChange={(e) => setFormData({ ...formData, bookingDate: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                  Guests / Passes
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  required
                  value={formData.guestsOrTickets}
                  onChange={(e) => setFormData({ ...formData, guestsOrTickets: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>
            </div>

            {/* Total and Submit */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-400 font-medium">Grand Total</span>
                <div className="text-xl font-black text-slate-900">₹{totalPrice}</div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-orange-500/25 transition-all flex items-center gap-2"
              >
                {isLoading ? 'Processing...' : 'Confirm & Reserve Permit'}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
