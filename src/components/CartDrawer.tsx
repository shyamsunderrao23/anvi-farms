'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discount,
    promoCode,
    applyPromoCode,
    total,
    freeShippingThreshold,
    openCheckout,
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);

  // Smooth opening and closing animation states
  const [renderCart, setRenderCart] = useState(isCartOpen);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      setRenderCart(true);
      const timer = setTimeout(() => setVisible(true), 15);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
      const timer = setTimeout(() => setRenderCart(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isCartOpen]);

  if (!renderCart) return null;

  const freeShippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const success = applyPromoCode(inputCode);
    if (success) {
      setPromoMessage({ text: '10% Discount applied successfully!', isError: false });
    } else {
      setPromoMessage({ text: 'Invalid promo code. Try "ANVI10"', isError: true });
    }
  };

  // Build WhatsApp pre-filled order string targeting 7780505418
  const whatsappItemsList = cart
    .map((item, i) => `${i + 1}. ${item.product.name} (${item.selectedVariant.name}) x ${item.quantity} = ₹${item.selectedVariant.price * item.quantity}`)
    .join('\n');

  const whatsappMessage = encodeURIComponent(
    `Hi Anvi Farms! I would like to place an order:\n\n*Cart Items:*\n${whatsappItemsList}\n\n*Subtotal:* ₹${subtotal}\n${discount > 0 ? `*Discount (10%):* -₹${discount}\n` : ''}*Total Amount:* ₹${total}\n\nPlease confirm availability and payment options!`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Smooth Fade Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out cursor-pointer ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeCart}
      />

      {/* Smooth Slide-Over Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10 pointer-events-none">
        <div
          className={`w-screen max-w-full sm:max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#DFCFA8] transform transition-transform duration-300 ease-in-out pointer-events-auto ${
            visible ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          
          {/* Header */}
          <div className="p-6 bg-[#310048] text-white flex items-center justify-between border-b border-[#C28E2E]/30">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C28E2E] text-[#310048] flex items-center justify-center font-extrabold text-sm shadow-sm">
                🛍️
              </div>
              <div>
                <h2 className="font-bold font-serif text-lg text-[#C28E2E]">Your Fresh Cart</h2>
                <p className="text-[11px] text-slate-200">{cart.length} item(s) selected</p>
              </div>
            </div>
            <button
              onClick={closeCart}
              className="text-[#C28E2E] hover:text-white font-bold text-xl p-1.5 transition-colors cursor-pointer"
              aria-label="Close Cart"
            >
              ✕
            </button>
          </div>



          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedVariant.id}`}
                  className="flex items-center gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-200/80 hover:border-[#DFCFA8] transition-all"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white shrink-0 border border-slate-200">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs text-slate-900 truncate font-serif">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Pack: <span className="text-[#310048] font-bold">{item.selectedVariant.name}</span>
                    </p>
                    <div className="text-xs font-extrabold text-slate-900 mt-1">
                      ₹{item.selectedVariant.price * item.quantity}
                    </div>
                  </div>

                  {/* Quantity Stepper & Remove */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeFromCart(item.product.id, item.selectedVariant.id)}
                      className="text-xs text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                      title="Remove item"
                    >
                      🗑️
                    </button>
                    <div className="flex items-center bg-white border border-slate-300 rounded-lg text-xs">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedVariant.id, -1)}
                        className="px-2 py-0.5 hover:bg-slate-100 font-bold cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-2 font-bold text-slate-800">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedVariant.id, 1)}
                        className="px-2 py-0.5 hover:bg-slate-100 font-bold cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 space-y-4">
                <div className="text-5xl">🍯</div>
                <h3 className="font-bold text-slate-800 text-base font-serif">Your cart is empty</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Explore our pure A2 Ghee, Raw Forest Honey, and Cold Pressed Oils to add healthy goodness!
                </p>
                <button
                  onClick={closeCart}
                  className="px-6 py-2.5 rounded-full bg-[#310048] hover:bg-[#4A0868] text-[#C28E2E] font-bold text-xs border border-[#C28E2E] transition-all cursor-pointer shadow-md"
                >
                  Start Shopping
                </button>
              </div>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
              
              {/* Promo Code Input Box */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (e.g. ANVI10)"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  className="flex-1 text-xs px-3.5 py-2 border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-[#310048]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#310048] hover:bg-[#4A0868] text-[#C28E2E] text-xs font-bold rounded-xl border border-[#C28E2E] transition-all cursor-pointer shrink-0"
                >
                  Apply
                </button>
              </form>
              {promoMessage && (
                <div className={`text-[11px] font-bold ${promoMessage.isError ? 'text-red-500' : 'text-emerald-600'}`}>
                  {promoMessage.text}
                </div>
              )}

              {/* Price Calculation Rows */}
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-slate-900">₹{subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>Discount ({promoCode})</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span className="font-bold text-slate-900">
                    {subtotal >= freeShippingThreshold ? (
                      <span className="text-emerald-600">FREE</span>
                    ) : (
                      '₹60'
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total Amount</span>
                  <span className="text-[#310048] font-serif">
                    ₹{subtotal >= freeShippingThreshold ? total : total + 60}
                  </span>
                </div>
              </div>

              {/* Checkout Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={openCheckout}
                  className="w-full py-3.5 rounded-2xl bg-[#310048] hover:bg-[#4A0868] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md border border-[#C28E2E] cursor-pointer"
                >
                  Proceed to Checkout
                </button>

                <a
                  href={`https://wa.me/917780505418?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-.981z" />
                  </svg>
                  Quick Order via WhatsApp
                </a>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
