import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { Maximize2, Sparkles, Eye } from 'lucide-react';

interface GallerySectionProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectImage }) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Dishes', 'Interior', 'Chef'];

  const filteredGallery = GALLERY_ITEMS.filter(
    (item) => activeTab === 'All' || item.category === activeTab
  );

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F5C542]">
            Visual Feasts
          </p>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            Food & Ambience <span className="gold-gradient-text">Gallery</span>
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
          <p className="text-sm text-[#D0D0D0]">
            Take a visual tour through our luxury culinary creations, vibrant chef kitchen moments, and royal dining hall.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === cat
                  ? 'text-black gold-metallic-bg shadow-md gold-glow'
                  : 'text-[#D0D0D0] bg-[#111111] border border-[#D4AF37]/30 hover:border-[#F5C542] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#111111] border border-[#D4AF37]/30 hover:border-[#F5C542] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 border border-[#D4AF37] flex items-center justify-center text-[#F5C542] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5C542] bg-black/80 px-2.5 py-1 rounded border border-[#D4AF37]/40 inline-block">
                  {item.category}
                </span>
                <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-[#F5C542] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#D0D0D0] line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
