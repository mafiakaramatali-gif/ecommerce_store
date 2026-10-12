import React from 'react';
import { logoImg } from '../data/restaurantData';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t-2 border-[#D4AF37] text-[#D0D0D0] relative pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#D4AF37]/20">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-0.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F5C542]">
                <img
                  src={logoImg}
                  alt="Food Castle Restaurant"
                  className="h-12 w-12 object-cover rounded-[10px] bg-black"
                />
              </div>
              <div>
                <span className="font-cinzel text-xl font-extrabold text-white tracking-wider block">
                  FOOD CASTLE
                </span>
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                  Restaurant
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A0A0A0] leading-relaxed max-w-sm">
              Experience the pinnacle of culinary artistry, rich flavors, and unforgettable dining moments in our royal black and gold setting.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#instagram" className="w-9 h-9 rounded-lg bg-[#111111] border border-[#D4AF37]/30 flex items-center justify-center text-[#F5C542] hover:bg-[#D4AF37] hover:text-black transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#facebook" className="w-9 h-9 rounded-lg bg-[#111111] border border-[#D4AF37]/30 flex items-center justify-center text-[#F5C542] hover:bg-[#D4AF37] hover:text-black transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-9 h-9 rounded-lg bg-[#111111] border border-[#D4AF37]/30 flex items-center justify-center text-[#F5C542] hover:bg-[#D4AF37] hover:text-black transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#youtube" className="w-9 h-9 rounded-lg bg-[#111111] border border-[#D4AF37]/30 flex items-center justify-center text-[#F5C542] hover:bg-[#D4AF37] hover:text-black transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h3 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider text-[#F5C542]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-[#F5C542] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#F5C542] transition-colors">About Food Castle</a></li>
              <li><a href="#menu" className="hover:text-[#F5C542] transition-colors">Our Menu</a></li>
              <li><a href="#gallery" className="hover:text-[#F5C542] transition-colors">Photo Gallery</a></li>
              <li><a href="#chef" className="hover:text-[#F5C542] transition-colors">Executive Chef</a></li>
              <li><a href="#contact" className="hover:text-[#F5C542] transition-colors">Contact & Reserve</a></li>
            </ul>
          </div>

          {/* Col 4: Menu Highlights */}
          <div className="space-y-3">
            <h3 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider text-[#F5C542]">
              Popular Categories
            </h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#menu" className="hover:text-[#F5C542] transition-colors">Gourmet Burgers</a></li>
              <li><a href="#menu" className="hover:text-[#F5C542] transition-colors">Wood-Fired Pizza</a></li>
              <li><a href="#menu" className="hover:text-[#F5C542] transition-colors">Prime Filet Mignon</a></li>
              <li><a href="#menu" className="hover:text-[#F5C542] transition-colors">Fast Food Specials</a></li>
              <li><a href="#menu" className="hover:text-[#F5C542] transition-colors">Royal Gold Desserts</a></li>
              <li><a href="#menu" className="hover:text-[#F5C542] transition-colors">Signature Drinks</a></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="space-y-3">
            <h3 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider text-[#F5C542]">
              Visit Us
            </h3>
            <div className="space-y-2 text-xs text-[#A0A0A0]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>124 Royal Castle Blvd, City Center, NY</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>+1 (800) 555-CASTLE</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>info@foodcastlerestaurant.com</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#777777] gap-4">
          <p>© 2026 Food Castle Restaurant. All Rights Reserved. Good Food, Good Mood.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#D4AF37] hover:text-[#F5C542] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <div className="w-7 h-7 rounded-full bg-[#111111] border border-[#D4AF37]/50 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
