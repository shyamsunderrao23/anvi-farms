'use client';

import React, { useState } from 'react';

export const OrderTrackingCTA: React.FC = () => {
  const [orderQuery, setOrderQuery] = useState('');
  const [trackingResult, setTrackingResult] = useState<string | null>(null);

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim()) return;

    setTrackingResult(`Searching live dispatch status for "${orderQuery.trim()}"...`);
    setTimeout(() => {
      setTrackingResult(`Order #${orderQuery.trim().toUpperCase()} is in transit! Expected delivery: Tomorrow by 2:00 PM via Express Courier.`);
    }, 800);
  };

  return (
    <section className="w-full bg-[#FAF9F4] py-16 sm:py-24 px-3 xs:px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1720px] mx-auto">
        
        {/* Main Luxury Purple Box Container */}
        <div className="relative bg-[#310048] text-white rounded-[24px] xs:rounded-[32px] sm:rounded-[40px] p-5 xs:p-8 sm:p-14 lg:p-20 overflow-hidden border border-[#C28E2E]/40 shadow-xl">
          
          {/* Subtle Ambient Glow Background Highlights */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C28E2E]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#C28E2E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-10 relative z-10">
            
            {/* Header Block */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] xs:text-xs font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C28E2E] backdrop-blur-md">
                <span>📦</span>
                <span>QUICK ORDER TRACKING</span>
                <span>📦</span>
              </div>

              <div className="text-xl xs:text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.25em] sm:tracking-[0.32em] text-[#FAF5EC] pt-1">
                TRACK YOUR ORDER
              </div>

              <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[60px] font-cursive font-normal text-[#FAF5EC] tracking-normal leading-tight py-1">
                Track Your Farm Fresh Package
              </h2>

              <p className="text-slate-300 text-xs sm:text-base font-normal max-w-2xl mx-auto leading-relaxed pt-1">
                Enter your Order ID or registered Mobile Number below to view live dispatch, shipping, and real-time courier updates on your fresh produce.
              </p>
            </div>

            {/* Interactive Search Tracking Form */}
            <form onSubmit={handleTrackOrder} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 p-1.5 sm:p-2 bg-white/10 rounded-2xl sm:rounded-full border border-white/20 backdrop-blur-md shadow-inner">
                <input
                  type="text"
                  value={orderQuery}
                  onChange={(e) => setOrderQuery(e.target.value)}
                  placeholder="Enter Order ID or Mobile Number..."
                  className="w-full bg-transparent px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-white placeholder-slate-300 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-full bg-gradient-to-r from-[#D4A038] via-[#C28E2E] to-[#B27E1E] text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] hover:brightness-110 transition-all cursor-pointer shrink-0 shadow-md flex items-center justify-center gap-2"
                >
                  <span>TRACK ORDER</span>
                  <span>🚚</span>
                </button>
              </div>
            </form>

            {/* Live Search Status Result Box */}
            {trackingResult && (
              <div className="p-3 sm:p-4 rounded-xl bg-white/10 border border-[#C28E2E]/50 text-xs sm:text-sm font-semibold text-[#FAF5EC] max-w-2xl mx-auto animate-fade-in">
                {trackingResult}
              </div>
            )}

            {/* 3 Guarantee Micro Badges */}
            <div className="pt-4 sm:pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 text-left border-t border-white/10">
              <div className="flex items-center gap-3 bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10">
                <div className="text-xl sm:text-2xl">⚡</div>
                <div>
                  <h4 className="font-extrabold text-[11px] sm:text-xs uppercase tracking-wider text-[#FAF5EC]">
                    Real-Time SMS Updates
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 font-normal">
                    Instant WhatsApp & SMS status at every step
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10">
                <div className="text-xl sm:text-2xl">🚚</div>
                <div>
                  <h4 className="font-extrabold text-[11px] sm:text-xs uppercase tracking-wider text-[#FAF5EC]">
                    Pan-India Express Courier
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 font-normal">
                    Dispatched within 24 hours of fresh harvest
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10">
                <div className="text-xl sm:text-2xl">🛡️</div>
                <div>
                  <h4 className="font-extrabold text-[11px] sm:text-xs uppercase tracking-wider text-[#FAF5EC]">
                    100% Safe Transit
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 font-normal">
                    Leak-proof glass & zero-plastic packaging
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
