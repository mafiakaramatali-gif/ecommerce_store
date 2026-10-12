import React from 'react';
import { Utensils, Sparkles, ChefHat, Heart, Award, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0B0B0B] relative overflow-hidden border-t border-b border-[#D4AF37]/20">
      {/* Decorative Gold Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#D4AF37]/40 text-xs font-semibold text-[#F5C542] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#F5C542]" />
            <span>Our Royal Story</span>
            <Sparkles className="w-3.5 h-3.5 text-[#F5C542]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            About <span className="gold-gradient-text">Food Castle</span>
          </h2>

          <div className="flex items-center justify-center gap-3 py-1">
            <div className="h-[1px] w-12 bg-[#D4AF37]" />
            <Utensils className="w-4 h-4 text-[#F5C542]" />
            <div className="h-[1px] w-12 bg-[#D4AF37]" />
          </div>

          <p className="text-base sm:text-lg text-[#D0D0D0] leading-relaxed font-sans">
            Food Castle Restaurant brings together delicious food, quality ingredients, beautiful presentation, and a warm dining experience. Our goal is simple — serve great food and create great memories.
          </p>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#111111] border border-[#D4AF37]/30 hover:border-[#F5C542] rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:gold-glow group">
            <div className="w-14 h-14 rounded-xl bg-black border border-[#D4AF37]/40 flex items-center justify-center text-[#F5C542] mb-5 group-hover:scale-110 group-hover:border-[#F5C542] transition-all">
              <Utensils className="w-7 h-7" />
            </div>
            <h3 className="font-cinzel text-lg font-bold text-white mb-2 group-hover:text-[#F5C542] transition-colors">
              Premium Food
            </h3>
            <p className="text-xs text-[#A0A0A0] leading-relaxed">
              Curated recipes crafted to perfection with signature gold-standard flavor pairings.
            </p>
          </div>

          <div className="bg-[#111111] border border-[#D4AF37]/30 hover:border-[#F5C542] rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:gold-glow group">
            <div className="w-14 h-14 rounded-xl bg-black border border-[#D4AF37]/40 flex items-center justify-center text-[#F5C542] mb-5 group-hover:scale-110 group-hover:border-[#F5C542] transition-all">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="font-cinzel text-lg font-bold text-white mb-2 group-hover:text-[#F5C542] transition-colors">
              Quality Ingredients
            </h3>
            <p className="text-xs text-[#A0A0A0] leading-relaxed">
              Freshly harvested produce, imported cheeses, and prime cuts delivered fresh every morning.
            </p>
          </div>

          <div className="bg-[#111111] border border-[#D4AF37]/30 hover:border-[#F5C542] rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:gold-glow group">
            <div className="w-14 h-14 rounded-xl bg-black border border-[#D4AF37]/40 flex items-center justify-center text-[#F5C542] mb-5 group-hover:scale-110 group-hover:border-[#F5C542] transition-all">
              <ChefHat className="w-7 h-7" />
            </div>
            <h3 className="font-cinzel text-lg font-bold text-white mb-2 group-hover:text-[#F5C542] transition-colors">
              Professional Chefs
            </h3>
            <p className="text-xs text-[#A0A0A0] leading-relaxed">
              Award-winning culinary experts with deep passion for gastronomy and flawless presentation.
            </p>
          </div>

          <div className="bg-[#111111] border border-[#D4AF37]/30 hover:border-[#F5C542] rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:gold-glow group">
            <div className="w-14 h-14 rounded-xl bg-black border border-[#D4AF37]/40 flex items-center justify-center text-[#F5C542] mb-5 group-hover:scale-110 group-hover:border-[#F5C542] transition-all">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="font-cinzel text-lg font-bold text-white mb-2 group-hover:text-[#F5C542] transition-colors">
              Fresh & Delicious
            </h3>
            <p className="text-xs text-[#A0A0A0] leading-relaxed">
              Hot, fresh, and aromatic meals prepared strictly on order to ensure absolute satisfaction.
            </p>
          </div>

        </div>

        {/* Philosophy Card Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#111111] via-[#1A1810] to-[#111111] border border-[#D4AF37]/50 rounded-2xl p-8 lg:p-10 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <Award className="w-10 h-10 text-[#F5C542] mx-auto" />
            <h3 className="font-playfair text-2xl sm:text-3xl font-semibold italic text-white">
              "Every plate served at Food Castle is a piece of art."
            </h3>
            <p className="text-xs sm:text-sm text-[#D0D0D0]">
              From our signature burgers and wood-fired pizzas to prime tenderloin steaks, we prepare every dish with heart, soul, and uncompromising quality.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
