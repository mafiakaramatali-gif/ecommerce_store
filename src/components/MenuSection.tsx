import React, { useState } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/restaurantData';
import { Star, Flame, Award, Plus, Search, ShoppingBag, Clock, Check } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedItemIds, setAddedItemIds] = useState<{ [key: string]: boolean }>({});

  const categories = ['All', 'Burgers', 'Pizza', 'Main Course', 'Fast Food', 'Drinks', 'Desserts'];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrderClick = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F5C542]">
            Culinary Masterpieces
          </p>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
            Our Royal <span className="gold-gradient-text">Menu</span>
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
          <p className="text-sm sm:text-base text-[#D0D0D0]">
            Explore our mouth-watering collection of handcrafted dishes, prepared fresh using finest ingredients.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-6 mb-12">
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
            <input
              type="text"
              placeholder="Search burgers, pizzas, steaks, desserts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111111] text-white text-sm pl-12 pr-4 py-3.5 rounded-xl border border-[#D4AF37]/40 focus:border-[#F5C542] focus:outline-none focus:ring-1 focus:ring-[#F5C542] transition-colors placeholder-[#777777]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#A0A0A0] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Categories Tab Pill Bar */}
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-black gold-metallic-bg shadow-lg gold-glow font-bold'
                      : 'text-[#D0D0D0] bg-[#111111] border border-[#D4AF37]/30 hover:border-[#F5C542] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#111111] rounded-2xl border border-[#D4AF37]/20">
            <p className="text-lg font-cinzel text-white">No culinary items found matching "{searchQuery}"</p>
            <p className="text-xs text-[#A0A0A0] mt-2">Try clearing your search query or selecting another category.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 rounded-lg bg-[#D4AF37] text-black text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => {
              const isJustAdded = addedItemIds[item.id];
              return (
                <div
                  key={item.id}
                  className="bg-[#111111] border border-[#D4AF37]/30 hover:border-[#F5C542] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:gold-glow group"
                >
                  <div>
                    {/* Food Image Box */}
                    <div className="relative h-56 w-full overflow-hidden bg-black">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/40" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {item.isChefSpecial && (
                          <span className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider bg-black/90 text-[#F5C542] px-2.5 py-1 rounded-full border border-[#D4AF37]">
                            <Award className="w-3 h-3 text-[#F5C542]" /> Chef's Special
                          </span>
                        )}
                        {item.isSpicy && (
                          <span className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider bg-red-950/90 text-red-400 px-2.5 py-1 rounded-full border border-red-500/50">
                            <Flame className="w-3 h-3 text-red-500" /> Spicy
                          </span>
                        )}
                        {item.isVeg && (
                          <span className="text-[10px] font-extrabold uppercase tracking-wider bg-emerald-950/90 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/50">
                            Vegetarian
                          </span>
                        )}
                      </div>

                      {/* Rating Badge */}
                      <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#D4AF37]/40 flex items-center gap-1 text-xs font-bold text-[#F5C542]">
                        <Star className="w-3.5 h-3.5 fill-[#F5C542]" />
                        <span>{item.rating}</span>
                      </div>

                      {/* Prep Time */}
                      <div className="absolute bottom-3 right-3 bg-black/80 text-[10px] text-[#A0A0A0] px-2 py-0.5 rounded flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#D4AF37]" />
                        <span>{item.prepTime}</span>
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-[#F5C542] transition-colors leading-snug">
                          {item.name}
                        </h3>
                      </div>

                      <p className="text-xs text-[#A0A0A0] line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom / Price & Order CTA */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#D4AF37]/10 mt-auto">
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[#A0A0A0] block">Price</span>
                      <span className="font-cinzel text-xl font-extrabold text-[#F5C542]">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => handleOrderClick(item)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer active:scale-95 ${
                        isJustAdded
                          ? 'bg-emerald-600 text-white shadow-lg'
                          : 'text-black gold-metallic-bg hover:gold-metallic-hover shadow-md hover:shadow-lg'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Order Now</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
