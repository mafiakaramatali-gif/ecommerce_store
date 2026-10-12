import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Calendar, Phone } from 'lucide-react';
import { logoImg } from '../data/restaurantData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Chef', href: '#chef' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-md py-3 border-b border-[#D4AF37]/30 shadow-2xl shadow-black'
          : 'bg-gradient-to-b from-[#050505] to-transparent py-5 border-b border-[#D4AF37]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative p-0.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5C542] to-[#B8860B] group-hover:scale-105 transition-transform duration-300">
              <img
                src={logoImg}
                alt="Food Castle Restaurant Logo"
                className="h-12 w-12 sm:h-14 sm:w-14 object-cover rounded-[10px] bg-black"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#F5C542] transition-colors">
                FOOD CASTLE
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
                Restaurant
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#D0D0D0] hover:text-[#F5C542] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenReservation}
              className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#D4AF37] border border-[#D4AF37]/50 hover:border-[#F5C542] hover:bg-[#D4AF37]/10 px-4 py-2.5 rounded-lg transition-all duration-300 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#F5C542]" />
              Book Table
            </button>

            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-black gold-metallic-bg hover:gold-metallic-hover px-5 py-2.5 rounded-lg transition-all duration-300 shadow-lg gold-glow cursor-pointer active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 text-black" />
              <span>Order Now</span>
              {cartCount > 0 && (
                <span className="ml-1 bg-black text-[#F5C542] text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border border-[#D4AF37]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#D4AF37] hover:text-[#F5C542] bg-[#111111] border border-[#D4AF37]/30 rounded-lg cursor-pointer"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#F5C542] text-black text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#D4AF37] hover:text-white bg-[#111111] border border-[#D4AF37]/30 rounded-lg cursor-pointer focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#D4AF37]/40 px-4 pt-4 pb-6 space-y-3 shadow-2xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#222222]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#D0D0D0] hover:text-[#F5C542] hover:bg-[#111111] rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#D4AF37] border border-[#D4AF37]/60 py-3 rounded-lg bg-[#111111]"
            >
              <Calendar className="w-4 h-4 text-[#F5C542]" />
              Book A Table
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold text-black gold-metallic-bg py-3 rounded-lg shadow-md"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Online Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
