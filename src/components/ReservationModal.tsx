import React, { useState } from 'react';
import { X, Calendar, Clock, Users, User, Phone, Mail, CheckCircle2 } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '19:00',
    guests: 2,
    occasion: 'Standard Dining'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-[#0B0B0B] border-2 border-[#D4AF37] rounded-2xl shadow-2xl overflow-hidden z-10 animate-fadeIn">
        {/* Header */}
        <div className="p-5 bg-[#111111] border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#F5C542]" />
            <h3 className="font-cinzel text-lg font-bold text-white">Book A Table</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#A0A0A0] hover:text-white rounded-lg hover:bg-[#222]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-950 border border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-cinzel text-xl font-bold text-white">Table Reserved!</h4>
              <p className="text-xs text-[#D0D0D0]">
                We look forward to welcoming you, <strong className="text-[#F5C542]">{form.name}</strong>. Your table for {form.guests} guests is set for {form.date || 'Today'} at {form.time}.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black gold-metallic-bg cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#D4AF37] uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#111111] text-white text-xs p-3 rounded-xl border border-[#D4AF37]/30 focus:border-[#F5C542] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#D4AF37] uppercase mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[#111111] text-white text-xs p-3 rounded-xl border border-[#D4AF37]/30 focus:border-[#F5C542] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#D4AF37] uppercase mb-1">
                    Guests
                  </label>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                    className="w-full bg-[#111111] text-white text-xs p-3 rounded-xl border border-[#D4AF37]/30 focus:border-[#F5C542] focus:outline-none"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={6}>6 Guests</option>
                    <option value={8}>8+ Guests (VIP Table)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#D4AF37] uppercase mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-[#111111] text-white text-xs p-3 rounded-xl border border-[#D4AF37]/30 focus:border-[#F5C542] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#D4AF37] uppercase mb-1">
                    Time
                  </label>
                  <select
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full bg-[#111111] text-white text-xs p-3 rounded-xl border border-[#D4AF37]/30 focus:border-[#F5C542] focus:outline-none"
                  >
                    <option value="12:00">12:00 PM</option>
                    <option value="13:30">01:30 PM</option>
                    <option value="18:00">06:00 PM</option>
                    <option value="19:30">07:30 PM</option>
                    <option value="21:00">09:00 PM</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black gold-metallic-bg hover:gold-metallic-hover shadow-xl gold-glow cursor-pointer transition-all duration-300"
              >
                Confirm Instant Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
