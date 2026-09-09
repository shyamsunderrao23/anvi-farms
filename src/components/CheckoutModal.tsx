'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    closeCheckout,
    cart,
    subtotal,
    total,
    freeShippingThreshold,
    clearCart,
  } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'cod', // 'cod' | 'upi' | 'whatsapp'
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isCheckoutOpen) return null;

  const finalTotal = subtotal >= freeShippingThreshold ? total : total + 60;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = 'ANVI-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setOrderPlaced(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Anvi Farms! New Order Inquiry:\n*Order ID:* ${orderId || 'NEW'}\n*Customer:* ${formData.name} (${formData.phone})\n*Address:* ${formData.address}, ${formData.city} - ${formData.pincode}\n*Payment Method:* ${formData.paymentMethod.toUpperCase()}\n*Total Amount:* ₹${finalTotal}\n\n*Items:*\n` +
      cart.map((item) => `- ${item.product.name} (${item.selectedVariant.name}) x ${item.quantity}`).join('\n')
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        onClick={closeCheckout}
      />

      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden z-10 border border-amber-900/10 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-[#310048] text-white flex items-center justify-between border-b border-amber-500/20">
          <div>
            <h2 className="font-bold font-serif text-xl text-amber-200">
              {orderPlaced ? '🎉 Order Placed Successfully!' : 'Secure Order Checkout'}
            </h2>
            <p className="text-xs text-amber-100/70">
              {orderPlaced ? `Order Reference ID: ${orderId}` : 'Direct Farm Shipping & Delivery'}
            </p>
          </div>
          <button
            onClick={() => {
              if (orderPlaced) clearCart();
              closeCheckout();
            }}
            className="text-amber-200 hover:text-white font-bold text-lg p-2 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {orderPlaced ? (
          /* Order Confirmation Screen */
          <div className="p-8 text-center space-y-6 overflow-y-auto">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-black">
              ✓
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-serif text-slate-900">Thank you, {formData.name}!</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Your order <strong className="text-[#310048]">{orderId}</strong> has been received. Our team will prepare and dispatch your farm-fresh produce shortly.
              </p>
            </div>

            {/* Delivery Details Summary Card */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="font-bold text-slate-800 border-b pb-1">Delivery Address</div>
              <p className="text-slate-600">{formData.address}, {formData.city} - {formData.pincode}</p>
              <p className="text-slate-600 font-semibold">Contact: {formData.phone}</p>
              <div className="pt-2 flex justify-between font-bold text-slate-900 border-t">
                <span>Total Paid / Due:</span>
                <span className="text-emerald-700">₹{finalTotal} ({formData.paymentMethod.toUpperCase()})</span>
              </div>
            </div>

            <div className="space-y-3 pt-2 max-w-md mx-auto">
              <a
                href={`https://wa.me/917780505418?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-.981z" />
                </svg>
                Track / Confirm via WhatsApp (7780505418)
              </a>

              <button
                onClick={() => {
                  clearCart();
                  closeCheckout();
                }}
                className="w-full py-3 rounded-2xl bg-slate-900 text-slate-200 font-bold text-xs hover:bg-slate-800 cursor-pointer"
              >
                Return to Store
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Input Form */
          <form onSubmit={handleSubmitOrder} className="p-6 sm:p-8 space-y-6 overflow-y-auto">
            
            {/* Customer Contact & Address */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#310048]">1. Shipping Details</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-[#310048]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Mobile Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-[#310048]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Complete Delivery Address *</label>
                <textarea
                  name="address"
                  required
                  rows={2}
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House/Flat No., Building, Street Name, Area"
                  className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-[#310048]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">City / Town *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Hyderabad"
                    className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-[#310048]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Pincode *</label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="e.g. 500001"
                    className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-[#310048]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#310048]">2. Payment Method</h3>
              
              <div className="space-y-2">
                {[
                  { id: 'cod', label: 'Cash on Delivery (COD)', desc: 'Pay with cash upon delivery' },
                  { id: 'upi', label: 'UPI / GPay / PhonePe / Cards', desc: 'Instant UPI ID & QR Code payment' },
                  { id: 'whatsapp', label: 'Direct WhatsApp Confirmation', desc: 'Confirm order & details via WhatsApp chat' },
                ].map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                      formData.paymentMethod === method.id
                        ? 'bg-purple-500/10 border-[#310048] shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={formData.paymentMethod === method.id}
                      onChange={handleChange}
                      className="mt-1 accent-[#310048]"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{method.label}</div>
                      <div className="text-[11px] text-slate-500">{method.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Order Summary & Submit Button */}
            <div className="pt-4 border-t border-slate-200 space-y-4">
              <div className="flex items-baseline justify-between text-sm">
                <span className="font-bold text-slate-700">Total Payable Amount:</span>
                <span className="text-2xl font-black text-[#310048] font-serif">₹{finalTotal}</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#310048] hover:bg-[#4A0868] text-white font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#310048]/20 cursor-pointer"
              >
                Place Order Now (₹{finalTotal})
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
