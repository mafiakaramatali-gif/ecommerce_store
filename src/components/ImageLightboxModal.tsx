import React from 'react';
import { GalleryItem } from '../types';
import { X, Sparkles } from 'lucide-react';

interface ImageLightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative max-w-4xl w-full bg-[#0B0B0B] border-2 border-[#D4AF37] rounded-2xl overflow-hidden shadow-2xl z-10 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 border border-[#D4AF37] flex items-center justify-center text-[#F5C542] hover:bg-[#D4AF37] hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative max-h-[75vh] w-full bg-black flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[75vh] w-auto object-contain"
          />
        </div>

        <div className="p-6 bg-[#111111] border-t border-[#D4AF37]/30 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase text-[#F5C542] tracking-widest block">
              {item.category}
            </span>
            <h3 className="font-cinzel text-xl font-bold text-white mt-0.5">
              {item.title}
            </h3>
            <p className="text-xs text-[#A0A0A0] mt-1">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
