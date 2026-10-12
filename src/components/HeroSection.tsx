import React from 'react';
import { Utensils, ShoppingBag, Star, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { chefImg } from '../data/restaurantData';

interface HeroSectionProps {
  onExploreMenu: () => void;
  onOrderNow: () => void;
  onOpenReservation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMenu,
  onOrderNow,
  onOpenReservation,
}) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center bg-[#050505] overflow-hidden">
      {/* Background ambient gold lighting glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#F5C542]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Elegant background pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column (7 cols on lg) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Signature Accent Bar & Eyebrow */}
            <div className="flex flex-col items-center lg:items-start gap-3">
              <div className="w-16 h-[2px] bg-[#D4AF37]" />
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-[#D4AF37]/40 shadow-inner">
                <Star className="w-3.5 h-3.5 text-[#F5C542] fill-[#F5C542]" />
                <span className="text-xs font-semibold tracking-[0.2em] text-[#F5C542] uppercase">
                  5-Star Fine Dining & Fast Gourmet
                </span>
              </div>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                WELCOME TO <br />
                <span className="gold-gradient-text drop-shadow-lg italic font-playfair font-normal">
                  FOOD CASTLE
                </span>
              </h1>
              
              <p className="font-playfair text-2xl sm:text-3xl italic text-[#F5C542] tracking-wide font-medium">
                "Good Food, Good Mood"
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#D0D0D0] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-normal">
              Experience delicious flavors, premium quality ingredients, and unforgettable dining at <strong className="text-white font-semibold">Food Castle Restaurant</strong>. Where passion and perfection meet in every bite.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-black gold-metallic-bg hover:gold-metallic-hover shadow-xl gold-glow transition-all duration-300 cursor-pointer active:scale-95"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOrderNow}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-[#F5C542] bg-[#111111] border-2 border-[#D4AF37]/60 hover:border-[#F5C542] hover:bg-[#1A1A1A] transition-all duration-300 cursor-pointer shadow-lg"
              >
                <ShoppingBag className="w-4 h-4 text-[#F5C542]" />
                <span>Order Now</span>
              </button>
            </div>

            {/* Quick Feature Highlights under Hero */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-[#D4AF37]/20 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#111111] border border-[#D4AF37]/30 text-[#F5C542]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white">100% Fresh</p>
                  <p className="text-[10px] text-[#A0A0A0]">Organic Ingredients</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#111111] border border-[#D4AF37]/30 text-[#F5C542]">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white">Master Chef</p>
                  <p className="text-[10px] text-[#A0A0A0]">Artisan Culinary</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#111111] border border-[#D4AF37]/30 text-[#F5C542]">
                  <Star className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white">4.9 / 5.0</p>
                  <p className="text-[10px] text-[#A0A0A0]">Over 10k Reviews</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Chef Image Column (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Outer Frame Glow Container */}
            <div className="relative group w-full max-w-md">
              
              {/* Back Gold Border Accent Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#D4AF37] via-[#F5C542] to-[#B8860B] rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>

              {/* Main Framed Chef Image Box */}
              <div className="relative rounded-2xl overflow-hidden bg-[#111111] border-2 border-[#D4AF37] shadow-2xl">
                <img
                  src={chefImg}
                  alt="Food Castle Executive Chef"
                  referrerPolicy="no-referrer"
                  className="w-full h-[450px] sm:h-[520px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient vignette overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                {/* Floating Chef Info Badge at bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#050505]/90 backdrop-blur-md border border-[#D4AF37]/50 text-left space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F5C542]">
                      Executive Chef
                    </span>
                    <div className="flex text-[#F5C542]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#F5C542]" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-base font-cinzel font-bold text-white">
                    Master Culinary Specialist
                  </h3>
                  <p className="text-xs text-[#D0D0D0] italic">
                    "Cooking with passion, served with perfection."
                  </p>
                </div>
              </div>

              {/* Decorative Corner Gold Badges */}
              <div className="absolute -top-4 -right-4 bg-black border-2 border-[#D4AF37] p-3 rounded-xl shadow-xl flex items-center gap-2">
                <Award className="w-6 h-6 text-[#F5C542]" />
                <div className="text-left">
                  <p className="text-[10px] font-extrabold uppercase text-[#F5C542]">Top Rated</p>
                  <p className="text-xs font-bold text-white">Chef Choice</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
