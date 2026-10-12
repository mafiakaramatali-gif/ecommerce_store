import React, { useState } from 'react';
import { MenuItem, CartItem, GalleryItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SpecialFeaturesSection } from './components/SpecialFeaturesSection';
import { MenuSection } from './components/MenuSection';
import { ChefSection } from './components/ChefSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ReservationModal } from './components/ReservationModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  // Cart operations
  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);

  const scrollToMenu = () => {
    const menuElem = document.getElementById('menu');
    if (menuElem) {
      menuElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#D0D0D0] font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onExploreMenu={scrollToMenu}
          onOrderNow={() => setIsCartOpen(true)}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* 2. About Food Castle */}
        <AboutSection />

        {/* 3. Special Features */}
        <SpecialFeaturesSection />

        {/* 4. Menu Section */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* 5. Chef Section */}
        <ChefSection onOpenReservation={() => setIsReservationOpen(true)} />

        {/* 6. Gallery Section */}
        <GallerySection onSelectImage={(item) => setSelectedGalleryItem(item)} />

        {/* 7. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 8. Testimonials */}
        <TestimonialsSection />

        {/* 9. Call to Action */}
        <CtaSection
          onOrderNow={() => setIsCartOpen(true)}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* 10. Contact & Reservation */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <ImageLightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </div>
  );
}
