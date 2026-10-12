import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Tag, CheckCircle } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', address: '' });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, ci) => acc + ci.item.price * ci.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const deliveryFee = subtotal > 0 ? 3.99 : 0;
  const tax = (subtotal - discountAmount) * 0.08;
  const total = Math.max(0, subtotal - discountAmount + deliveryFee + tax);

  const applyPromo = () => {
    setPromoError('');
    setPromoSuccess('');
    if (promoCode.trim().toUpperCase() === 'FOODCASTLE10') {
      setDiscountPercent(10);
      setPromoSuccess('10% Royal Discount Applied!');
    } else if (promoCode.trim().toUpperCase() === 'CHEFGOLD') {
      setDiscountPercent(15);
      setPromoSuccess('15% Chef Special Discount Applied!');
    } else {
      setPromoError('Invalid code. Try FOODCASTLE10');
    }
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    setOrderPlaced(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0B0B0B] border-l border-[#D4AF37]/40 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#111111]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#F5C542]" />
              <h2 className="font-cinzel text-lg font-bold text-white">Your Royal Order</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-[#A0A0A0] hover:text-white rounded-lg hover:bg-[#222222]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {orderPlaced ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-950 border border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-white">Order Received!</h3>
                <p className="text-xs text-[#D0D0D0]">
                  Thank you <strong className="text-[#F5C542]">{customerInfo.name}</strong>! Your delicious order is being handcrafted fresh by Executive Chef Eleanor.
                </p>
                <div className="p-4 rounded-xl bg-[#111111] border border-[#D4AF37]/30 text-left text-xs space-y-1">
                  <p className="font-bold text-white">Estimated Delivery Time: 25-35 Minutes</p>
                  <p className="text-[#A0A0A0]">Address: {customerInfo.address}</p>
                  <p className="text-[#A0A0A0]">Total Amount: ${total.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => {
                    onClearCart();
                    setOrderPlaced(false);
                    onClose();
                  }}
                  className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black gold-metallic-bg cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-12 h-12 text-[#D4AF37]/40 mx-auto" />
                <p className="font-cinzel text-base text-white">Your cart is currently empty</p>
                <p className="text-xs text-[#A0A0A0]">Explore our menu and add delicious dishes to your order.</p>
              </div>
            ) : (
              <>
                {/* Item List */}
                <div className="space-y-4">
                  {cartItems.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-[#111111] border border-[#D4AF37]/20 flex items-center gap-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover bg-black"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-cinzel text-xs font-bold text-white truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-[#F5C542] font-semibold mt-0.5">
                          ${item.price.toFixed(2)}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-5 h-5 rounded bg-black text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center hover:bg-[#222]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-white w-4 text-center">
                            {quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-5 h-5 rounded bg-black text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center hover:bg-[#222]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-2 text-[#777777] hover:text-red-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Promo Code Input */}
                <div className="p-3 rounded-xl bg-[#111111] border border-[#D4AF37]/20 space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo Code (FOODCASTLE10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 bg-black text-white text-xs px-3 py-2 rounded-lg border border-[#D4AF37]/30 focus:outline-none uppercase"
                    />
                    <button
                      type="button"
                      onClick={applyPromo}
                      className="px-3 py-2 rounded-lg bg-[#D4AF37] text-black text-xs font-bold cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  {promoSuccess && <p className="text-[11px] text-emerald-400">{promoSuccess}</p>}
                  {promoError && <p className="text-[11px] text-red-400">{promoError}</p>}
                </div>

                {/* Order Details Form */}
                <form id="checkoutForm" onSubmit={handleCheckout} className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase text-[#F5C542]">Delivery Details</h4>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full bg-[#111111] text-white text-xs p-2.5 rounded-lg border border-[#D4AF37]/30 focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full bg-[#111111] text-white text-xs p-2.5 rounded-lg border border-[#D4AF37]/30 focus:outline-none"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Delivery Address *"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    className="w-full bg-[#111111] text-white text-xs p-2.5 rounded-lg border border-[#D4AF37]/30 focus:outline-none"
                  />
                </form>
              </>
            )}
          </div>

          {/* Footer Calculations & CTA */}
          {cartItems.length > 0 && !orderPlaced && (
            <div className="p-6 border-t border-[#D4AF37]/20 bg-[#111111] space-y-3">
              <div className="space-y-1.5 text-xs text-[#A0A0A0]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="text-white">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (8%)</span>
                  <span className="text-white">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-[#222]">
                  <span>Total Amount</span>
                  <span className="text-[#F5C542] font-cinzel text-lg">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                form="checkoutForm"
                type="submit"
                className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black gold-metallic-bg hover:gold-metallic-hover shadow-xl gold-glow cursor-pointer transition-all duration-300"
              >
                Place Order Now • ${total.toFixed(2)}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
