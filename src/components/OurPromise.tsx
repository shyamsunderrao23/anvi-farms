'use client';

import React from 'react';

const LaurelWreathSVG: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center shrink-0">
    {/* Golden Laurel Wreath Vector Graphic */}
    <svg className="absolute inset-0 w-full h-full text-[#B98D32]" viewBox="0 0 100 100" fill="currentColor">
      {/* Left Branch */}
      <path d="M 50 90 C 32 90 18 76 15 56 C 14 48 16 40 20 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 24 82 C 18 80 14 72 18 66 C 22 70 26 76 24 82 Z" />
      <path d="M 17 68 C 10 64 8 56 14 52 C 18 56 20 64 17 68 Z" />
      <path d="M 15 52 C 8 46 8 38 15 36 C 18 40 19 48 15 52 Z" />
      <path d="M 19 36 C 14 28 16 20 24 20 C 25 26 23 33 19 36 Z" />
      <path d="M 27 24 C 24 16 28 8 36 10 C 35 16 31 22 27 24 Z" />
      <path d="M 38 16 C 38 8 44 2 50 6 C 47 12 42 16 38 16 Z" />

      {/* Right Branch */}
      <path d="M 50 90 C 68 90 82 76 85 56 C 86 48 84 40 80 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 76 82 C 82 80 86 72 82 66 C 78 70 74 76 76 82 Z" />
      <path d="M 83 68 C 90 64 92 56 86 52 C 82 56 80 64 83 68 Z" />
      <path d="M 85 52 C 92 46 92 38 85 36 C 82 40 81 48 85 52 Z" />
      <path d="M 81 36 C 86 28 84 20 76 20 C 75 26 77 33 81 36 Z" />
      <path d="M 73 24 C 76 16 72 8 64 10 C 65 16 69 22 73 24 Z" />
      <path d="M 62 16 C 62 8 56 2 50 6 C 53 12 58 16 62 16 Z" />
    </svg>
    
    {/* Center Dark Green Icon */}
    <div className="relative z-10 text-[#0A2417] flex items-center justify-center">
      {children}
    </div>
  </div>
);

export const OurPromise: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF9F4] py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto space-y-10 sm:space-y-14">

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          
          {/* Top Golden Leaf Eyebrow */}
          <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0A2417]">
            <svg className="w-4 h-4 fill-[#B98D32]" viewBox="0 0 24 24">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22C6.9 19 8.65 15.3 12.83 13.5C12.5 16 11.5 18.5 9.5 20.5L10.9 21.9C13.5 19.3 14.8 15.9 14.9 12.4C18 10.7 20.5 8 21 3C16 3.5 13.3 6 11.6 9.1C13.5 8.3 15.4 7.9 17 8Z" />
            </svg>
            <span>OUR PROMISE TO YOU</span>
            <svg className="w-4 h-4 fill-[#B98D32] -scale-x-100" viewBox="0 0 24 24">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22C6.9 19 8.65 15.3 12.83 13.5C12.5 16 11.5 18.5 9.5 20.5L10.9 21.9C13.5 19.3 14.8 15.9 14.9 12.4C18 10.7 20.5 8 21 3C16 3.5 13.3 6 11.6 9.1C13.5 8.3 15.4 7.9 17 8Z" />
            </svg>
          </div>

          {/* Main Editorial Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-serif font-extrabold text-[#320047] tracking-tight leading-[1.12]">
            Purity You Can Trust. Goodness You Can Feel.
          </h2>

          {/* Golden Divider Line with Center Leaf */}
          <div className="flex items-center justify-center gap-3 w-full max-w-xs mx-auto py-1">
            <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#B98D32]/60 to-[#B98D32]/80" />
            <svg className="w-4 h-4 fill-[#B98D32]" viewBox="0 0 24 24">
              <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" fillOpacity="0.8"/>
            </svg>
            <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#B98D32]/60 to-[#B98D32]/80" />
          </div>

          {/* Subheading Paragraph */}
          <div className="text-center text-slate-700 text-sm sm:text-base font-normal leading-relaxed max-w-3xl mx-auto space-y-1">
            <p>At Anvi Farms, every product is a promise of purity, tradition and care.</p>
            <p>We follow age-old methods to deliver natural goodness, just the way nature intended.</p>
          </div>

        </div>

        {/* 5 Golden Laurel Wreath Badges Card Container */}
        <div className="bg-[#FAF5EC] border border-[#EBE2D0] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-[#E5D9C3]">
            
            {/* Badge 1: 100% Natural */}
            <div className="flex items-center gap-3.5 lg:px-4 first:lg:pl-0">
              <LaurelWreathSVG>
                <svg className="w-7 h-7 fill-[#0A2417]" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22C6.9 19 8.65 15.3 12.83 13.5C12.5 16 11.5 18.5 9.5 20.5L10.9 21.9C13.5 19.3 14.8 15.9 14.9 12.4C18 10.7 20.5 8 21 3C16 3.5 13.3 6 11.6 9.1C13.5 8.3 15.4 7.9 17 8Z" />
                </svg>
              </LaurelWreathSVG>
              <div className="space-y-0.5">
                <h3 className="font-extrabold text-xs sm:text-[13px] text-[#0A2417] uppercase tracking-wider leading-tight">
                  100% NATURAL
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-600 font-normal leading-snug">
                  Nothing artificial, only pure goodness
                </p>
              </div>
            </div>

            {/* Badge 2: Pure Cow Milk */}
            <div className="flex items-center gap-3.5 lg:px-4 pt-4 sm:pt-0">
              <LaurelWreathSVG>
                <svg className="w-8 h-8 fill-[#0A2417]" viewBox="0 0 24 24">
                  <path d="M19 10c0-1.1-.9-2-2-2h-3c-.55 0-1-.45-1-1V5c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v2c0 .55-.45 1-1 1H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-3h8v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-3h1c1.1 0 2-.9 2-2v-5zm-14 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>
              </LaurelWreathSVG>
              <div className="space-y-0.5">
                <h3 className="font-extrabold text-xs sm:text-[13px] text-[#0A2417] uppercase tracking-wider leading-tight">
                  PURE COW MILK
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-600 font-normal leading-snug">
                  From healthy, grass-fed cows
                </p>
              </div>
            </div>

            {/* Badge 3: Traditional Bilona Method */}
            <div className="flex items-center gap-3.5 lg:px-4 pt-4 sm:pt-0">
              <LaurelWreathSVG>
                <svg className="w-7 h-7 fill-[#0A2417]" viewBox="0 0 24 24">
                  <path d="M12 2v3m-4 0h8M12 5c-3 0-5 2-5 5v1c0 3.5 2.5 6 5 6s5-2.5 5-6v-1c0-3-2-5-5-5zm-4 12h8v2H8v-2z" stroke="#0A2417" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </LaurelWreathSVG>
              <div className="space-y-0.5">
                <h3 className="font-extrabold text-xs sm:text-[13px] text-[#0A2417] uppercase tracking-wider leading-tight">
                  TRADITIONAL BILONA METHOD
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-600 font-normal leading-snug">
                  Hand-churned for rich flavor &amp; nutrition
                </p>
              </div>
            </div>

            {/* Badge 4: No Chemicals No Additives */}
            <div className="flex items-center gap-3.5 lg:px-4 pt-4 sm:pt-0">
              <LaurelWreathSVG>
                <svg className="w-7 h-7 fill-[#0A2417]" viewBox="0 0 24 24">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </LaurelWreathSVG>
              <div className="space-y-0.5">
                <h3 className="font-extrabold text-xs sm:text-[13px] text-[#0A2417] uppercase tracking-wider leading-tight">
                  NO CHEMICALS NO ADDITIVES
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-600 font-normal leading-snug">
                  Just pure, the way it should be
                </p>
              </div>
            </div>

            {/* Badge 5: Made in Small Batches */}
            <div className="flex items-center gap-3.5 lg:px-4 pt-4 sm:pt-0">
              <LaurelWreathSVG>
                <svg className="w-7 h-7 fill-[#0A2417]" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </LaurelWreathSVG>
              <div className="space-y-0.5">
                <h3 className="font-extrabold text-xs sm:text-[13px] text-[#0A2417] uppercase tracking-wider leading-tight">
                  MADE IN SMALL BATCHES
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-600 font-normal leading-snug">
                  Crafted with care, just for you
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
