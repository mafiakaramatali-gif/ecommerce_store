import React from 'react';
import { WHY_CHOOSE_US } from '../data/restaurantData';
import { ShieldCheck, Award, Sparkles, Clock, DollarSign, HeartHandshake } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#F5C542]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#F5C542]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#F5C542]" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#F5C542]" />;
      case 'DollarSign':
        return <DollarSign className="w-6 h-6 text-[#F5C542]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#F5C542]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#F5C542]" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#0B0B0B] relative border-t border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F5C542]">
            Unrivaled Hospitality
          </p>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            Why Choose <span className="gold-gradient-text">Food Castle?</span>
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
          <p className="text-sm text-[#D0D0D0]">
            We don't just serve meals; we craft royal dining experiences that keep our guests coming back time and time again.
          </p>
        </div>

        {/* 6 Feature Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-[#D4AF37]/30 hover:border-[#F5C542] rounded-2xl p-7 transition-all duration-300 hover:shadow-2xl hover:gold-glow group flex items-start gap-5"
            >
              <div className="w-14 h-14 rounded-xl bg-black border border-[#D4AF37]/50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#F5C542] transition-all shadow-inner">
                {getIcon(item.icon)}
              </div>

              <div className="space-y-2">
                <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-[#F5C542] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
