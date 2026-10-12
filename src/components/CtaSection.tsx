import React from 'react';
import { ShoppingBag, Calendar, Sparkles, Utensils } from 'lucide-react';

interface CtaSectionProps {
  onOrderNow: () => void;
  onOpenReservation: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOrderNow, onOpenReservation }) => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-r from-[#050505] via-[#111111] to-[#050505] border-t border-b border-[#D4AF37]/40 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#D4AF37] text-xs font-bold text-[#F5C542] uppercase tracking-widest shadow-lg">
          <Sparkles className="w-4 h-4 text-[#F5C542]" />
          <span>A Royal Invitation</span>
        </div>

        <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white leading-tight">
          Ready for a <span className="gold-gradient-text">Delicious Experience?</span>
        </h2>

        <p className="text-base sm:text-lg text-[#D0D0D0] max-w-2xl mx-auto leading-relaxed">
          Visit Food Castle Restaurant and enjoy food that makes every moment special. Whether dining in or ordering at home, culinary excellence awaits.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOrderNow}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-black gold-metallic-bg hover:gold-metallic-hover shadow-2xl gold-glow transition-all duration-300 cursor-pointer active:scale-95"
          >
            <ShoppingBag className="w-4 h-4 text-black" />
            <span>Order Online Now</span>
          </button>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-[#F5C542] bg-black border-2 border-[#D4AF37] hover:border-[#F5C542] hover:bg-[#111111] transition-all duration-300 cursor-pointer shadow-lg"
          >
            <Calendar className="w-4 h-4 text-[#F5C542]" />
            <span>Reserve A Table</span>
          </button>
        </div>

      </div>
    </section>
  );
};
