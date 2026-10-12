import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Calendar, CheckCircle2, User, Users } from 'lucide-react';
import { ReservationFormData } from '../types';

interface ContactSectionProps {
  onReservationSubmitted?: (data: ReservationFormData) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onReservationSubmitted }) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: 2,
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    if (onReservationSubmitted) {
      onReservationSubmitted(formData);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F5C542]">
            Connect With Us
          </p>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            Contact <span className="gold-gradient-text">Food Castle</span>
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
          <p className="text-sm text-[#D0D0D0]">
            We would love to serve you. Book your table in advance or reach out with any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info Cards & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#111111] border border-[#D4AF37]/30 rounded-2xl p-7 space-y-6">
              <h3 className="font-cinzel text-xl font-bold text-white border-b border-[#D4AF37]/20 pb-4">
                Restaurant Info
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black border border-[#D4AF37]/50 flex items-center justify-center text-[#F5C542] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">Location Address</h4>
                    <p className="text-xs text-[#A0A0A0] mt-1 leading-relaxed">
                      124 Royal Castle Boulevard, Gourmet District, City Center, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black border border-[#D4AF37]/50 flex items-center justify-center text-[#F5C542] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">Phone Number</h4>
                    <p className="text-xs text-[#A0A0A0] mt-1">+1 (800) 555-CASTLE (22785)</p>
                    <p className="text-xs text-[#A0A0A0]">+1 (555) 019-2834</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black border border-[#D4AF37]/50 flex items-center justify-center text-[#F5C542] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">Email Address</h4>
                    <p className="text-xs text-[#A0A0A0] mt-1">reservations@foodcastlerestaurant.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black border border-[#D4AF37]/50 flex items-center justify-center text-[#F5C542] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">Opening Hours</h4>
                    <p className="text-xs text-[#A0A0A0] mt-1">Monday - Thursday: 11:00 AM – 10:30 PM</p>
                    <p className="text-xs text-[#A0A0A0]">Friday - Sunday: 11:00 AM – 11:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Styled Map Card */}
            <div className="bg-[#111111] border border-[#D4AF37]/30 rounded-2xl overflow-hidden h-52 relative group shadow-xl">
              <iframe
                title="Food Castle Restaurant Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215701234123!2d-73.9855!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjIiTiA3M8KwNTknMDcuOCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                className="w-full h-full grayscale invert opacity-80 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#D4AF37] text-xs font-bold text-[#F5C542]">
                📍 Food Castle Restaurant - Main Hall
              </div>
            </div>

          </div>

          {/* Right Column: Reservation / Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#111111] border-2 border-[#D4AF37]/40 rounded-2xl p-8 relative shadow-2xl">
            <div className="space-y-2 mb-6 border-b border-[#D4AF37]/20 pb-4">
              <h3 className="font-cinzel text-2xl font-bold text-white">
                Reserve A Table
              </h3>
              <p className="text-xs text-[#A0A0A0]">
                Book your table online for an unforgettable dining experience.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-cinzel text-2xl font-bold text-white">
                  Reservation Confirmed!
                </h4>
                <p className="text-xs text-[#D0D0D0] max-w-md mx-auto">
                  Thank you, <strong className="text-[#F5C542]">{formData.name}</strong>. Your table for {formData.guests} guests has been reserved for {formData.date || 'Today'} at {formData.time}. We sent details to {formData.email || formData.phone}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black gold-metallic-bg cursor-pointer"
                >
                  Book Another Table
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#D4AF37] uppercase mb-1">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#777777]" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#080808] text-white text-xs pl-10 pr-3 py-3 rounded-xl border border-[#D4AF37]/30 focus:border-[#F5C542] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#D4AF37] uppercase mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#777777]" />
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#080808] text-white text-xs pl-10 pr-3 py-3 rounded-xl border border-[#D4AF37]/30 focus:border-[#F5C542] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#D4AF37] uppercase mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#080808] text-white text-xs px-3 py-3 rounded-xl border border-[#D4AF37]/30 focus:border-[#F5C542] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#D4AF37] uppercase mb-1">
                      Time
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#080808] text-white text-xs px-3 py-3 rounded-xl border border-[#D4AF37]/30 focus:border-[#F5C542] focus:outline-none"
                    >
                      <option value="12:00">12:00 PM (Lunch)</option>
                      <option value="13:30">01:30 PM</option>
                      <option value="18:00">06:00 PM (Dinner)</option>
                      <option value="19:30">07:30 PM</option>
                      <option value="21:00">09:00 PM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#D4AF37] uppercase mb-1">
                      Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full bg-[#080808] text-white text-xs px-3 py-3 rounded-xl border border-[#D4AF37]/30 focus:border-[#F5C542] focus:outline-none"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={4}>4 Guests</option>
                      <option value={6}>6 Guests</option>
                      <option value={8}>8+ Guests (VIP Table)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D4AF37] uppercase mb-1">
                    Special Requests / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Dietary requirements, birthday celebration, quiet corner table..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full bg-[#080808] text-white text-xs p-3 rounded-xl border border-[#D4AF37]/30 focus:border-[#F5C542] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black gold-metallic-bg hover:gold-metallic-hover shadow-xl gold-glow transition-all duration-300 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Table Reservation</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
