import React from 'react';
import { Leaf, ChefHat, Sparkles, Utensils, Shield, HeartHandshake } from 'lucide-react';
import { SPECIAL_FEATURES } from '../data/restaurantData';

export const SpecialFeaturesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf':
        return <Leaf className="w-8 h-8 text-[#F5C542]" />;
      case 'ChefHat':
        return <ChefHat className="w-8 h-8 text-[#F5C542]" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-[#F5C542]" />;
      default:
        return <Utensils className="w-8 h-8 text-[#F5C542]" />;
    }
  };

  return (
    <section className="py-20 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            Excellence In Every Aspect
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
            Special <span className="gold-gradient-text">Features</span>
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPECIAL_FEATURES.map((feature, idx) => {
            const tagNumbers = ['01. Quality', '02. Expertise', '03. Atmosphere', '04. Speed'];
            return (
              <div
                key={feature.id}
                className="bg-[#111111] border border-[#D4AF37]/30 hover:border-[#F5C542] rounded-xl p-8 text-left transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:gold-glow group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-4">
                    {tagNumbers[idx % tagNumbers.length]}
                  </span>

                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-xl bg-[#080808] border border-[#D4AF37]/50 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-[#F5C542] transition-all shadow-inner">
                    {getIcon(feature.iconName)}
                  </div>

                  {/* Heading */}
                  <h3 className="font-cinzel text-xl font-bold text-white mb-2 group-hover:text-[#F5C542] transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#D0D0D0] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Gold Line */}
                <div className="mt-6 pt-4 border-t border-[#D4AF37]/10 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#D4AF37] opacity-80 group-hover:opacity-100">
                    Food Castle Standard
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
