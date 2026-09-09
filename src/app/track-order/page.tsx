'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartProvider } from '../../context/CartContext';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CartDrawer } from '../../components/CartDrawer';
import { WishlistDrawer } from '../../components/WishlistDrawer';
import { CelebrationModal } from '../../components/CelebrationModal';
import { ProductQuickViewModal } from '../../components/ProductQuickViewModal';
import { CheckoutModal } from '../../components/CheckoutModal';

interface TrackingStatus {
  orderId: string;
  customerName: string;
  phone: string;
  email: string;
  status: 'Placed' | 'Packed' | 'In Transit' | 'Out for Delivery' | 'Delivered';
  estimatedDelivery: string;
  courierName: string;
  awbNumber: string;
  currentLocation: string;
  shippingAddress: string;
  placedDate: string;
  items: {
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
  totalAmount: number;
}

const DEMO_ORDER: TrackingStatus = {
  orderId: 'ANVI-84920',
  customerName: 'Rajesh Sharma',
  phone: '7780505418',
  email: 'rajesh.sharma@example.com',
  status: 'In Transit',
  estimatedDelivery: 'Sunday, Sep 06, 2026',
  courierName: 'BlueDart Express',
  awbNumber: 'BD-849201948IN',
  currentLocation: 'Departed Central Logistics Hub, Hyderabad',
  shippingAddress: 'Flat 402, Green Acres Apartments, Road No. 36, Jubilee Hills, Hyderabad, Telangana - 500033',
  placedDate: 'Sep 02, 2026 at 10:15 AM',
  items: [
    {
      name: 'A2 Desi Cow Bilona Ghee (1 Litre Glass Jar)',
      quantity: 2,
      price: 1450,
      image: '/images/a2-ghee.jpg',
    },
    {
      name: 'Raw Wild Forest Honey (500g Glass Jar)',
      quantity: 1,
      price: 550,
      image: '/images/wild-honey.jpg',
    },
  ],
  totalAmount: 3450,
};

export default function TrackOrderPage() {
  const [inputOrderId, setInputOrderId] = useState('');
  const [inputContact, setInputContact] = useState('');
  const [trackingData, setTrackingData] = useState<TrackingStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputOrderId.trim()) return;

    setIsLoading(true);
    setHasSearched(true);

    setTimeout(() => {
      // Return demo tracking info or generated tracking data for user ID
      const queryId = inputOrderId.trim().toUpperCase();
      setTrackingData({
        ...DEMO_ORDER,
        orderId: queryId.startsWith('ANVI-') ? queryId : `ANVI-${queryId}`,
      });
      setIsLoading(false);
    }, 600);
  };

  const handleTryDemo = () => {
    setInputOrderId('ANVI-84920');
    setInputContact('7780505418');
    setIsLoading(true);
    setHasSearched(true);
    setTimeout(() => {
      setTrackingData(DEMO_ORDER);
      setIsLoading(false);
    }, 400);
  };

  const steps = [
    { label: 'Order Placed', date: 'Sep 02, 10:15 AM', isDone: true },
    { label: 'Farm Packed & Sealed', date: 'Sep 03, 02:30 PM', isDone: true },
    { label: 'In Transit', date: 'Sep 04, 08:45 AM', isDone: true, isActive: true },
    { label: 'Out for Delivery', date: 'Expected Sep 06', isDone: false },
    { label: 'Delivered', date: 'Expected Sep 06', isDone: false },
  ];

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FAF9F4] font-sans antialiased text-[#1C1917] flex flex-col">
        <Header />

        <main className="flex-1 py-12 sm:py-20 px-4 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-10">

            {/* Page Header */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DFCFA8] text-xs font-bold uppercase tracking-[0.2em] text-[#0A2417]">
                <span>🚚</span>
                <span>REAL-TIME SHIPMENT TRACKING</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#320047] tracking-tight">
                Track Your Order
              </h1>
              <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto font-medium">
                Enter your Order ID and Mobile / Email below to trace your farm-fresh package live.
              </p>
            </div>

            {/* Search Lookup Form Card */}
            <div className="bg-[#FAF5EC] rounded-3xl p-6 sm:p-10 border-2 border-[#DFCFA8] shadow-lg space-y-6">
              <form onSubmit={handleTrackSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-xs font-extrabold text-[#0A2417] uppercase tracking-wider">
                      Order ID <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ANVI-84920"
                      value={inputOrderId}
                      onChange={(e) => setInputOrderId(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFCFA8] text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#0A2417] text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-extrabold text-[#0A2417] uppercase tracking-wider">
                      Mobile Number / Email <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 7780505418"
                      value={inputContact}
                      onChange={(e) => setInputContact(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFCFA8] text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#0A2417] text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="button"
                    onClick={handleTryDemo}
                    className="text-xs font-bold text-[#0A2417] underline hover:text-[#C28E2E] transition-colors cursor-pointer"
                  >
                    ⚡ Click to try sample demo order (ANVI-84920)
                  </button>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#310048] hover:bg-[#4A0868] text-white font-extrabold text-xs uppercase tracking-[0.2em] border border-[#C28E2E] shadow-md transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isLoading ? 'Tracking Order...' : 'TRACK SHIPMENT →'}
                  </button>
                </div>
              </form>
            </div>

            {/* Tracking Result View */}
            {hasSearched && trackingData && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#DFCFA8] shadow-xl space-y-8 animate-fadeIn">

                {/* Status Top Banner */}
                <div className="p-6 rounded-2xl bg-[#310048] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#C28E2E]/50">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#C28E2E] text-xs font-bold uppercase tracking-wider">
                      <span>🚚 SHIPMENT STATUS</span>
                      <span>•</span>
                      <span>{trackingData.status}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold font-serif">
                      Order #{trackingData.orderId}
                    </h2>
                    <p className="text-xs text-slate-300">
                      Placed on {trackingData.placedDate}
                    </p>
                  </div>

                  <div className="sm:text-right bg-white/10 px-4 py-2.5 rounded-xl backdrop-blur-md border border-white/20">
                    <div className="text-[11px] uppercase tracking-wider text-slate-300 font-bold">
                      Estimated Delivery
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-[#C28E2E]">
                      {trackingData.estimatedDelivery}
                    </div>
                  </div>
                </div>

                {/* Tracking Stepper Timeline */}
                <div className="space-y-4">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#310048]">
                    Live Shipment Timeline
                  </h3>

                  <div className="relative grid grid-cols-1 sm:grid-cols-5 gap-4 pt-2">
                    {steps.map((step, idx) => (
                      <div key={idx} className="relative flex sm:flex-col items-center gap-3 sm:text-center group">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 z-10 ${
                            step.isActive
                              ? 'bg-[#C28E2E] text-[#310048] ring-4 ring-[#C28E2E]/30 animate-pulse'
                              : step.isDone
                              ? 'bg-[#310048] text-white'
                              : 'bg-slate-100 text-slate-400 border border-slate-300'
                          }`}
                        >
                          {step.isDone ? '✓' : idx + 1}
                        </div>
                        <div>
                          <div className={`text-xs font-extrabold ${step.isActive ? 'text-[#C28E2E]' : 'text-slate-900'}`}>
                            {step.label}
                          </div>
                          <div className="text-[10px] text-slate-500 font-medium">
                            {step.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Logistics & Address Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-2xl bg-[#FAF5EC] border border-[#DFCFA8]">
                  <div className="space-y-2">
                    <div className="text-xs font-extrabold text-[#310048] uppercase tracking-wider flex items-center gap-1.5">
                      <span>📦 Courier Partner:</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      {trackingData.courierName}
                    </div>
                    <div className="text-xs text-slate-600 font-mono">
                      AWB: {trackingData.awbNumber}
                    </div>
                    <div className="text-xs text-[#310048] font-semibold pt-1">
                      📍 {trackingData.currentLocation}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-extrabold text-[#310048] uppercase tracking-wider">
                      🏡 Shipping Address:
                    </div>
                    <div className="text-xs text-slate-700 leading-relaxed font-medium">
                      <strong className="block text-slate-900 text-sm font-bold pb-0.5">{trackingData.customerName}</strong>
                      {trackingData.shippingAddress}
                    </div>
                  </div>
                </div>

                {/* Ordered Products Items List */}
                <div className="space-y-4">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#310048]">
                    Order Items ({trackingData.items.length})
                  </h3>

                  <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
                    {trackingData.items.map((item, idx) => (
                      <div key={idx} className="p-4 flex items-center justify-between gap-4 bg-slate-50/50">
                        <div className="flex items-center gap-3">
                          <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white border border-slate-200 shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-500 font-medium">
                              Qty: {item.quantity} × ₹{item.price}
                            </div>
                          </div>
                        </div>

                        <div className="text-sm font-extrabold text-[#310048]">
                          ₹{item.quantity * item.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Support CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                  <div className="text-xs text-slate-600 font-medium text-center sm:text-left">
                    Need instant help with your delivery or address change?
                  </div>

                  <a
                    href={`https://wa.me/917780505418?text=Hi%20Anvi%20Farms,%20I%20need%20help%20tracking%20my%20order%20${trackingData.orderId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#310048] text-white font-bold text-xs border border-[#C28E2E] shadow-sm hover:bg-[#4A0868] transition-all cursor-pointer shrink-0"
                  >
                    <span>💬 WhatsApp Order Support</span>
                  </a>
                </div>

              </div>
            )}

          </div>
        </main>

        <Footer />
        <CartDrawer />
        <WishlistDrawer />
        <CelebrationModal />
        <ProductQuickViewModal />
        <CheckoutModal />
      </div>
    </CartProvider>
  );
}
