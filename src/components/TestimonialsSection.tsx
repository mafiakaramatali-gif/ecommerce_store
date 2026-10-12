import React from 'react';
import { TESTIMONIALS } from '../data/restaurantData';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F5C542]">
            Guest Impressions
          </p>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            What Our Guests <span className="gold-gradient-text">Say</span>
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#111111] border border-[#D4AF37]/30 hover:border-[#F5C542] rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:gold-glow flex flex-col justify-between relative group"
            >
              {/* Top Quote Icon */}
              <Quote className="w-8 h-8 text-[#D4AF37]/30 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* Gold Stars */}
                <div className="flex text-[#F5C542] gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F5C542]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#D0D0D0] italic leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              {/* User Avatar & Info */}
              <div className="mt-8 pt-4 border-t border-[#D4AF37]/20 flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]"
                />
                <div>
                  <h3 className="font-cinzel text-sm font-bold text-white group-hover:text-[#F5C542] transition-colors">
                    {review.name}
                  </h3>
                  <p className="text-[11px] text-[#A0A0A0]">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
