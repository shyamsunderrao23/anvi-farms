'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export const CelebrationModal: React.FC = () => {
  const { isCelebrationOpen, celebrationMessage, closeCelebration } = useCart();

  // Auto-dismiss celebration modal after 3.5s
  useEffect(() => {
    if (isCelebrationOpen) {
      const timer = setTimeout(() => {
        closeCelebration();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [isCelebrationOpen, closeCelebration]);

  if (!isCelebrationOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-sans">
      {/* Smooth Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity duration-300 animate-fadeIn cursor-pointer"
        onClick={closeCelebration}
      />

      {/* Modal Card */}
      <div className="relative bg-[#FAF5EC] border-2 border-[#C28E2E] rounded-3xl p-6 sm:p-10 max-w-md w-full text-center shadow-2xl z-10 space-y-6 animate-scaleUp overflow-hidden">
        
        {/* Top Floating Close Button */}
        <button
          onClick={closeCelebration}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-700 font-bold text-sm flex items-center justify-center shadow-sm transition-all cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Animated Celebration SVG */}
        <div className="relative w-full h-44 sm:h-52 flex items-center justify-center">
          <Image
            src="/images/Celebrations Begin.svg"
            alt="Celebrations Begin"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="space-y-2 relative z-10">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#310048] text-[#C28E2E] text-[10px] font-extrabold uppercase tracking-[0.2em] border border-[#C28E2E]">
            🌿 ANVI FARMS HARVEST CELEBRATION
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#320047] leading-tight">
            {celebrationMessage}
          </h3>

          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
            Pure, Vedic, hand-churned organic goodness is being prepared for your family!
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={closeCelebration}
            className="w-full py-3.5 rounded-full bg-[#310048] hover:bg-[#4A0868] text-white font-extrabold text-xs uppercase tracking-[0.2em] border border-[#C28E2E] shadow-md transition-all cursor-pointer hover:scale-102"
          >
            CONTINUE SHOPPING 🛒
          </button>
        </div>

      </div>
    </div>
  );
};
