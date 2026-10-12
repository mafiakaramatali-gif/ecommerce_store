import React, { useState } from 'react';
import { Award, Sparkles, Utensils, Star, CheckCircle, Flame, Camera } from 'lucide-react';
import { chefImg, chefCookingImg } from '../data/restaurantData';

interface ChefSectionProps {
  onOpenReservation: () => void;
}

export const ChefSection: React.FC<ChefSectionProps> = ({ onOpenReservation }) => {
  const [activePhoto, setActivePhoto] = useState<'cooking' | 'portrait'>('cooking');

  return (
    <section id="chef" className="py-20 md:py-28 bg-[#0B0B0B] relative overflow-hidden border-t border-b border-[#D4AF37]/20">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#D4AF37]/40 text-xs font-semibold text-[#F5C542] uppercase tracking-widest">
            <Award className="w-4 h-4 text-[#F5C542]" />
            <span>Master Of Culinary Art</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            Our <span className="gold-gradient-text">Executive Chef</span>
          </h2>

          <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </div>

        {/* Chef Main Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Framed Chef Image with View Switcher (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            <div className="relative group max-w-md w-full">
              {/* Outer Glowing Border Effect */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D4AF37] via-[#F5C542] to-[#B8860B] rounded-3xl blur-md opacity-80 group-hover:opacity-100 transition duration-500" />

              <div className="relative bg-[#111111] border-2 border-[#D4AF37] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={activePhoto === 'cooking' ? chefCookingImg : chefImg}
                  alt="Food Castle Executive Chef Cooking"
                  referrerPolicy="no-referrer"
                  className="w-full h-[480px] sm:h-[540px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6 text-center space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#F5C542] flex items-center justify-center gap-1.5">
                    {activePhoto === 'cooking' ? (
                      <>
                        <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        Live In The Kitchen
                      </>
                    ) : (
                      'Head Culinary Designer'
                    )}
                  </span>
                  <h3 className="font-cinzel text-xl font-extrabold text-white">
                    Chef Eleanor Vance
                  </h3>
                  <div className="flex items-center justify-center gap-1 text-[#F5C542] pt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F5C542]" />
                    ))}
                    <span className="text-xs font-bold text-white ml-2">15+ Years Experience</span>
                  </div>
                </div>
              </div>

              {/* Decorative Gold Corner Badge */}
              <div className="absolute -top-4 -left-4 bg-[#050505] border-2 border-[#D4AF37] p-2.5 sm:p-3 rounded-2xl shadow-xl flex items-center gap-2">
                <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-[#F5C542]" />
                <span className="text-[11px] sm:text-xs font-bold text-white tracking-wider">Michelin Standard</span>
              </div>
            </div>

            {/* Photo Mode Switcher Tabs */}
            <div className="mt-4 flex items-center gap-2 bg-[#111111] p-1.5 rounded-full border border-[#D4AF37]/30">
              <button
                type="button"
                onClick={() => setActivePhoto('cooking')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activePhoto === 'cooking'
                    ? 'bg-[#D4AF37] text-black shadow-md'
                    : 'text-[#D0D0D0] hover:text-white'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Cooking In Action</span>
              </button>
              <button
                type="button"
                onClick={() => setActivePhoto('portrait')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activePhoto === 'portrait'
                    ? 'bg-[#D4AF37] text-black shadow-md'
                    : 'text-[#D0D0D0] hover:text-white'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Chef Portrait</span>
              </button>
            </div>

          </div>

          {/* Right Column: Profile Story & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Quote Banner */}
            <div className="p-6 rounded-2xl bg-[#111111] border-l-4 border-[#D4AF37] shadow-xl space-y-2 relative">
              <span className="font-playfair text-4xl text-[#D4AF37]/40 leading-none absolute top-2 right-4">
                “
              </span>
              <p className="font-playfair text-xl sm:text-2xl italic font-semibold text-[#F5C542]">
                "Passion, creativity, and great taste come together in every dish."
              </p>
              <p className="text-xs text-[#A0A0A0] uppercase tracking-wider font-semibold">
                — Chef Eleanor Vance
              </p>
            </div>

            {/* Chef Description */}
            <div className="space-y-4 text-sm sm:text-base text-[#D0D0D0] leading-relaxed font-sans">
              <p>
                At Food Castle Restaurant, every recipe is a testament to culinary dedication. Chef Eleanor combines classical European culinary techniques with vibrant modern flavors to create dishes that delight both the eyes and the palate.
              </p>
              <p>
                From hand-selected organic produce to custom spice blends and gold-dusted artisan presentations, her philosophy centers around zero compromise on quality and an obsession with guest happiness.
              </p>
            </div>

            {/* Chef Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#111111] border border-[#D4AF37]/30">
                <CheckCircle className="w-5 h-5 text-[#F5C542] shrink-0" />
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white uppercase">Farm-To-Table Sourcing</h4>
                  <p className="text-[11px] text-[#A0A0A0]">100% Organic produce & meats</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#111111] border border-[#D4AF37]/30">
                <CheckCircle className="w-5 h-5 text-[#F5C542] shrink-0" />
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white uppercase">Master Sauces & Glazes</h4>
                  <p className="text-[11px] text-[#A0A0A0]">House-crafted gold signature reductions</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#111111] border border-[#D4AF37]/30">
                <CheckCircle className="w-5 h-5 text-[#F5C542] shrink-0" />
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white uppercase">Artisan Wood-Fired Oven</h4>
                  <p className="text-[11px] text-[#A0A0A0]">Slow cooked at 900°F for crisp perfection</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#111111] border border-[#D4AF37]/30">
                <CheckCircle className="w-5 h-5 text-[#F5C542] shrink-0" />
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white uppercase">Gold Standard Hygiene</h4>
                  <p className="text-[11px] text-[#A0A0A0]">Strict 5-star kitchen sanitation protocol</p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black gold-metallic-bg hover:gold-metallic-hover shadow-xl gold-glow cursor-pointer transition-all duration-300"
              >
                <Utensils className="w-4 h-4" />
                <span>Reserve Chef's Table</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
