'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleOrderClick = () => {
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <section className="relative w-full h-[560px] xs:h-[600px] sm:h-[640px] lg:h-[680px] overflow-hidden bg-[#18110a]">
      {/* Banner Carousel Controls - Navigation Arrows (Hidden on Mobile, Visible on Desktop/Tablet) */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white items-center justify-center backdrop-blur-md transition-all hover:scale-110 cursor-pointer shadow-xl group"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white items-center justify-center backdrop-blur-md transition-all hover:scale-110 cursor-pointer shadow-xl group"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-3 xs:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
        <button
          onClick={() => setCurrentSlide(0)}
          aria-label="Slide 1 - Pure Cow Ghee"
          className={`transition-all duration-300 cursor-pointer ${
            currentSlide === 0
              ? 'w-8 h-2.5 bg-[#E5B842] rounded-full shadow-md'
              : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/90 rounded-full'
          }`}
        />
        <button
          onClick={() => setCurrentSlide(1)}
          aria-label="Slide 2 - Multifloral Honey"
          className={`transition-all duration-300 cursor-pointer ${
            currentSlide === 1
              ? 'w-8 h-2.5 bg-[#E5B842] rounded-full shadow-md'
              : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/90 rounded-full'
          }`}
        />
      </div>

      {/* SLIDE 1: PURE COW GHEE */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
          currentSlide === 0 ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        {/* Background Banner Image - Centered on Mobile */}
        <Image
          src="/images/home-banner-image.png"
          alt="Pure Cow Ghee, Tradition in Every Spoon"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[82%_center] xs:object-[80%_center] sm:object-[center_40%]"
        />

        {/* Single Black Shade Overlay for Mobile Only (Hidden on Desktop & Laptop) */}
        <div className="absolute inset-0 bg-black/50 sm:hidden pointer-events-none" />

        {/* Left Content Container with Balanced Spacing & Vertical Distribution */}
        <div className="relative z-10 w-full h-full px-4 sm:px-8 lg:px-10 flex flex-col justify-center py-5 xs:py-7 sm:py-0">
          <div className="max-w-2xl text-left space-y-3.5 xs:space-y-4.5 sm:space-y-5 lg:space-y-6">
            {/* Main Editorial Headline - Scaled up on mobile */}
            <h1 className="tracking-tight leading-none">
              <span className="font-serif text-[34px] xs:text-[42px] sm:text-5xl lg:text-[70px] font-extrabold text-white block leading-[1.12] drop-shadow-md">
                Pure Cow Ghee,
              </span>
              <span className="font-cursive text-[45px] xs:text-[55px] sm:text-6xl lg:text-[80px] text-[#F7CA4F] block mt-1.5 xs:mt-2.5 sm:mt-3 font-normal leading-[1.08] drop-shadow-lg">
                Tradition in Every Spoon
              </span>
            </h1>

            {/* Descriptive Narrative - Scaled up on mobile */}
            <p className="text-slate-100 text-[14px] xs:text-[16px] sm:text-base lg:text-[17px] font-normal leading-[1.58] sm:leading-relaxed max-w-lg drop-shadow-sm line-clamp-3 sm:line-clamp-none">
              Crafted from pure cow milk using the traditional Bilona method, our ghee brings rich aroma, authentic taste, and timeless goodness to every spoon.
            </p>

            {/* 4 Feature Badges Responsive Grid - Scaled up icons and labels */}
            <div className="grid grid-cols-4 gap-2 xs:gap-3 sm:flex sm:items-center sm:gap-4 lg:gap-5 pt-1.5 xs:pt-2 sm:pt-2">
              {/* 1. 100% Natural */}
              <div className="flex flex-col items-center text-center gap-1.5 sm:gap-2 flex-1 max-w-[85px] xs:max-w-[92px] sm:max-w-[90px]">
                <div className="w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 rounded-full border-2 border-[#E5B842] flex items-center justify-center bg-[#1D200E]/95 shadow-lg shrink-0">
                  <svg className="w-6 h-6 xs:w-6.5 xs:h-6.5 sm:w-7 sm:h-7 text-[#E5B842] fill-current" viewBox="0 0 24 24">
                    <path d="M7 16c-2.2-1.8-2.6-4.8-1.5-7.2 2.2.2 4.2 1.5 5.2 3.3.8 1.5.8 3.2.1 4.2-.9-.3-2.6-.4-3.8-.3z" />
                    <path d="M19 5.5c-4.2-.8-8 1.2-9.8 4.8-.7 1.3-.9 2.8-.7 4.2-1.7 1.7-2.4 3.9-2.4 4.2.3 0 2.4-.3 4.2-2 1.3.2 2.8 0 4.1-.7 3.5-1.9 5.4-5.8 4.6-10.5z" />
                  </svg>
                </div>
                <span className="text-[10.5px] xs:text-[12px] sm:text-xs font-bold text-white leading-tight mt-0.5">
                  100%<br />Natural
                </span>
              </div>

              <div className="hidden sm:block h-12 w-[1px] bg-[#D4AF37]/45 shrink-0 self-start mt-1" />

              {/* 2. No Chemicals */}
              <div className="flex flex-col items-center text-center gap-1.5 sm:gap-2 flex-1 max-w-[85px] xs:max-w-[92px] sm:max-w-[90px]">
                <div className="w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 rounded-full border-2 border-[#E5B842] flex items-center justify-center bg-[#1D200E]/95 shadow-lg shrink-0">
                  <svg className="w-6 h-6 xs:w-6.5 xs:h-6.5 sm:w-7 sm:h-7 text-[#E5B842]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 3h6" />
                    <path d="M10 3v4.5l-4.5 9a1.5 1.5 0 001.3 2h10.4a1.5 1.5 0 001.3-2L14 7.5V3" />
                    <circle cx="12" cy="14" r="1.5" fill="currentColor" />
                    <line x1="19" y1="4" x2="5" y2="20" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-[10.5px] xs:text-[12px] sm:text-xs font-bold text-white leading-tight mt-0.5">
                  No<br />Chemicals
                </span>
              </div>

              <div className="hidden sm:block h-12 w-[1px] bg-[#D4AF37]/45 shrink-0 self-start mt-1" />

              {/* 3. No Additives */}
              <div className="flex flex-col items-center text-center gap-1.5 sm:gap-2 flex-1 max-w-[85px] xs:max-w-[92px] sm:max-w-[90px]">
                <div className="w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 rounded-full border-2 border-[#E5B842] flex items-center justify-center bg-[#1D200E]/95 shadow-lg shrink-0">
                  <svg className="w-6 h-6 xs:w-6.5 xs:h-6.5 sm:w-7 sm:h-7 text-[#E5B842]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4l4 4" />
                    <path d="M14.5 5.5l4 4" />
                    <path d="M13 7l4 4-6.5 6.5-3.5.5.5-3.5L13 7z" fill="currentColor" fillOpacity="0.3" />
                    <path d="M6 18l-1.5 1.5" />
                    <line x1="19" y1="5" x2="5" y2="19" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-[10.5px] xs:text-[12px] sm:text-xs font-bold text-white leading-tight mt-0.5">
                  No<br />Additives
                </span>
              </div>

              <div className="hidden sm:block h-12 w-[1px] bg-[#D4AF37]/45 shrink-0 self-start mt-1" />

              {/* 4. Handmade in Small Batches */}
              <div className="flex flex-col items-center text-center gap-1.5 sm:gap-2 flex-1 max-w-[85px] xs:max-w-[92px] sm:max-w-[105px]">
                <div className="w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 rounded-full border-2 border-[#E5B842] flex items-center justify-center bg-[#1D200E]/95 shadow-lg shrink-0">
                  <svg className="w-6 h-6 xs:w-6.5 xs:h-6.5 sm:w-7 sm:h-7 text-[#E5B842]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.5 3c-.4.8-.4 1.6 0 2.4s.4 1.6 0 2.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                    <path d="M12 2.5c-.4 1-.4 1.8 0 2.8s.4 1.8 0 2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                    <path d="M15.5 3c-.4.8-.4 1.6 0 2.4s.4 1.6 0 2.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                    <rect x="3.5" y="9.5" width="17" height="2" rx="1" />
                    <path d="M4.5 11.5c0 5 3.3 8 7.5 8s7.5-3 7.5-8h-15z" />
                  </svg>
                </div>
                <span className="text-[10.5px] xs:text-[12px] sm:text-xs font-bold text-white leading-tight mt-0.5">
                  Handmade<br />Small Batch
                </span>
              </div>
            </div>

            {/* Bottom Action Row: ORDER NOW + Rating */}
            <div className="flex items-center gap-3.5 xs:gap-5 sm:gap-5 pt-2 xs:pt-3 sm:pt-3">
              <button
                onClick={handleOrderClick}
                className="px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-3.5 bg-[#0A2417] hover:bg-[#143E2B] text-white text-xs xs:text-sm font-black tracking-wider uppercase rounded-xl border-2 border-[#E5B842] flex items-center gap-2 transition-all hover:scale-105 cursor-pointer shadow-xl shrink-0"
              >
                <span>ORDER NOW</span>
                <span className="text-sm font-bold">→</span>
              </button>

              <div className="h-8 w-[1px] bg-[#D4AF37]/45 block" />

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#E5B842] text-sm">★</span>
                  <span className="text-white font-extrabold text-xs xs:text-sm sm:text-base">4.9/5 Rated</span>
                </div>
                <span className="text-[10.5px] xs:text-[11.5px] sm:text-xs text-slate-200 font-light whitespace-nowrap">
                  (Trusted By 10,000+ Families)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dotted Arrow and "Goodness Straight From Our Farms" Circle Badge */}
        <div className="hidden md:flex flex-col items-center absolute left-[43%] sm:left-[44%] lg:left-[46%] xl:left-[47%] top-[9%] sm:top-[11%] lg:top-[18%] z-20 pointer-events-none select-none">
          <div className="relative w-28 h-20 -mb-2 ml-10">
            <svg className="w-full h-full text-white drop-shadow-md overflow-visible" viewBox="0 0 120 75" fill="none">
              <path
                d="M 18 68 C 22 42 36 16 56 20 C 74 24 76 52 50 50 C 32 48 38 20 66 18 C 88 16 100 22 112 21"
                stroke="white"
                strokeWidth="2.2"
                strokeDasharray="4.5 4.5"
                strokeLinecap="round"
              />
              <path
                d="M 104 14 L 115 21 L 105 28"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative w-36 h-36 lg:w-40 lg:h-40 rounded-full border-2 border-[#243B17] bg-[#142311]/95 backdrop-blur-xs flex flex-col items-center justify-center p-3 text-center shadow-2xl">
            <div className="absolute inset-1.5 rounded-full border border-dashed border-[#8EB33B]/70 pointer-events-none" />
            <svg className="w-7 h-7 text-[#8EB33B] -mt-1" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 11c-2.8-3.8-7.2-4.8-10.5-3.8 1.1 3.3 3.9 6.5 7.8 7.6 1.1.3 2.2.2 2.7-.6z" />
              <path d="M16 11c2.8-3.8 7.2-4.8 10.5-3.8-1.1 3.3-3.9 6.5-7.8 7.6-1.1.3-2.2.2-2.7-.6z" />
              <path d="M16 12v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>

            <span className="text-white font-extrabold text-[12px] lg:text-[13px] tracking-wider uppercase leading-tight mt-0.5">
              GOODNESS
            </span>
            <span className="text-white font-bold text-[9px] lg:text-[10px] tracking-wide uppercase leading-tight">
              STRAIGHT FROM
            </span>
            <span className="text-[#F2C94C] font-extrabold text-[12px] lg:text-[13px] tracking-wider uppercase leading-tight mt-0.5">
              OUR FARMS
            </span>

            <div className="flex items-center justify-center gap-1.5 w-full mt-1.5">
              <span className="h-[1px] w-4 bg-[#E5B842]/70" />
              <svg className="w-2.5 h-2.5 text-[#F2C94C] fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="h-[1px] w-4 bg-[#E5B842]/70" />
            </div>
          </div>
        </div>

        {/* Right Side Bottle Feature Callouts */}
        <div className="hidden lg:flex flex-col items-center gap-4 xl:gap-5 absolute right-[3%] xl:right-[6%] top-[8%] sm:top-[10%] lg:top-[11%] z-20 pointer-events-none select-none text-center">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-24 h-16 translate-y-2 -ml-14 pointer-events-none select-none">
              <svg className="w-full h-full text-white overflow-visible" viewBox="0 0 85 60" fill="none">
                <path
                  d="M 6 14 C 20 10, 38 16, 48 24 C 56 30, 58 46, 44 46 C 34 46, 36 32, 48 28 C 58 24, 68 38, 76 52"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="3.5 3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 68 51 L 77 53 L 75 44"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-white font-extrabold text-xs lg:text-[13px] tracking-widest uppercase leading-tight translate-x-8 lg:translate-x-10 mt-1">
              TRADITIONAL BILONA<br />CRAFTED
            </span>
          </div>

          <div className="flex flex-col items-center text-center mt-3 sm:mt-4">
            <div className="relative w-24 h-16 translate-y-2 -ml-2 pointer-events-none select-none">
              <svg className="w-full h-full text-white overflow-visible" viewBox="0 0 85 60" fill="none">
                <path
                  d="M 6 14 C 20 10, 38 16, 48 24 C 56 30, 58 46, 44 46 C 34 46, 36 32, 48 28 C 58 24, 68 38, 76 52"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="3.5 3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 68 51 L 77 53 L 75 44"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-white font-extrabold text-xs lg:text-[13px] tracking-widest uppercase leading-tight translate-x-8 lg:translate-x-9 mt-1">
              PURE & NATURAL
            </span>
          </div>

          <div className="flex flex-col items-center text-center mt-3 sm:mt-4">
            <div className="relative w-24 h-16 translate-y-2 -ml-2 pointer-events-none select-none">
              <svg className="w-full h-full text-white overflow-visible" viewBox="0 0 85 60" fill="none">
                <path
                  d="M 6 14 C 20 10, 38 16, 48 24 C 56 30, 58 46, 44 46 C 34 46, 36 32, 48 28 C 58 24, 68 38, 76 52"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="3.5 3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 68 51 L 77 53 L 75 44"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-white font-extrabold text-xs lg:text-[13px] tracking-widest uppercase leading-tight translate-x-8 lg:translate-x-9 mt-1">
              RICH IN AROMA
            </span>
          </div>
        </div>
      </div>

      {/* SLIDE 2: RAW & UNPROCESSED MULTIFLORAL HONEY */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
          currentSlide === 1 ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        {/* Background Banner Image - Centered on Mobile */}
        <Image
          src="/images/honey-banner-image.png"
          alt="Raw & Unprocessed Multifloral Honey"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[82%_center] xs:object-[80%_center] sm:object-[center_40%]"
        />

        {/* Single Black Shade Overlay for Mobile Only (Hidden on Desktop & Laptop) */}
        <div className="absolute inset-0 bg-black/50 sm:hidden pointer-events-none" />

        {/* Left Content Container with Balanced Spacing & Vertical Distribution */}
        <div className="relative z-10 w-full h-full px-4 sm:px-8 lg:px-10 flex flex-col justify-center py-5 xs:py-7 sm:py-0">
          <div className="max-w-2xl text-left space-y-3.5 xs:space-y-4.5 sm:space-y-5 lg:space-y-6">
            {/* Main Editorial Headline - Scaled up on mobile */}
            <h1 className="tracking-tight leading-none">
              <span className="font-serif text-[34px] xs:text-[42px] sm:text-5xl lg:text-[70px] font-extrabold text-white block leading-[1.12] drop-shadow-md">
                Raw & Unprocessed,
              </span>
              <span className="font-cursive text-[45px] xs:text-[55px] sm:text-6xl lg:text-[80px] text-[#F7CA4F] block mt-1.5 xs:mt-2.5 sm:mt-3 font-normal leading-[1.08] drop-shadow-lg">
                Multifloral Honey
              </span>
            </h1>

            {/* Descriptive Narrative - Scaled up on mobile */}
            <p className="text-slate-100 text-[14px] xs:text-[16px] sm:text-base lg:text-[17px] font-normal leading-[1.58] sm:leading-relaxed max-w-lg drop-shadow-sm line-clamp-3 sm:line-clamp-none">
              Harvested directly from wild forest blooms, our pure multifloral honey is 100% raw, unfiltered, and unprocessed—delivering nature&apos;s authentic sweetness.
            </p>

            {/* 4 Feature Badges Responsive Grid - Scaled up icons and labels */}
            <div className="grid grid-cols-4 gap-2 xs:gap-3 sm:flex sm:items-center sm:gap-4 lg:gap-5 pt-1.5 xs:pt-2 sm:pt-2">
              {/* 1. 100% Natural */}
              <div className="flex flex-col items-center text-center gap-1.5 sm:gap-2 flex-1 max-w-[85px] xs:max-w-[92px] sm:max-w-[90px]">
                <div className="w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 rounded-full border-2 border-[#E5B842] flex items-center justify-center bg-[#1D200E]/95 shadow-lg shrink-0">
                  <svg className="w-6 h-6 xs:w-6.5 xs:h-6.5 sm:w-7 sm:h-7 text-[#E5B842] fill-current" viewBox="0 0 24 24">
                    <path d="M7 16c-2.2-1.8-2.6-4.8-1.5-7.2 2.2.2 4.2 1.5 5.2 3.3.8 1.5.8 3.2.1 4.2-.9-.3-2.6-.4-3.8-.3z" />
                    <path d="M19 5.5c-4.2-.8-8 1.2-9.8 4.8-.7 1.3-.9 2.8-.7 4.2-1.7 1.7-2.4 3.9-2.4 4.2.3 0 2.4-.3 4.2-2 1.3.2 2.8 0 4.1-.7 3.5-1.9 5.4-5.8 4.6-10.5z" />
                  </svg>
                </div>
                <span className="text-[10.5px] xs:text-[12px] sm:text-xs font-bold text-white leading-tight mt-0.5">
                  100%<br />Natural
                </span>
              </div>

              <div className="hidden sm:block h-12 w-[1px] bg-[#D4AF37]/45 shrink-0 self-start mt-1" />

              {/* 2. No Added Sugar */}
              <div className="flex flex-col items-center text-center gap-1.5 sm:gap-2 flex-1 max-w-[85px] xs:max-w-[92px] sm:max-w-[90px]">
                <div className="w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 rounded-full border-2 border-[#E5B842] flex items-center justify-center bg-[#1D200E]/95 shadow-lg shrink-0">
                  <svg className="w-6 h-6 xs:w-6.5 xs:h-6.5 sm:w-7 sm:h-7 text-[#E5B842]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l7 4v8l-7 4-7-4V6l7-4z" />
                    <path d="M12 6l3.5 2v4L12 14l-3.5-2V8L12 6z" fill="currentColor" fillOpacity="0.3" />
                    <line x1="19" y1="4" x2="5" y2="20" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-[10.5px] xs:text-[12px] sm:text-xs font-bold text-white leading-tight mt-0.5">
                  No Added<br />Sugar
                </span>
              </div>

              <div className="hidden sm:block h-12 w-[1px] bg-[#D4AF37]/45 shrink-0 self-start mt-1" />

              {/* 3. No Chemicals */}
              <div className="flex flex-col items-center text-center gap-1.5 sm:gap-2 flex-1 max-w-[85px] xs:max-w-[92px] sm:max-w-[90px]">
                <div className="w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 rounded-full border-2 border-[#E5B842] flex items-center justify-center bg-[#1D200E]/95 shadow-lg shrink-0">
                  <svg className="w-6 h-6 xs:w-6.5 xs:h-6.5 sm:w-7 sm:h-7 text-[#E5B842]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 3h6" />
                    <path d="M10 3v4.5l-4.5 9a1.5 1.5 0 001.3 2h10.4a1.5 1.5 0 001.3-2L14 7.5V3" />
                    <circle cx="12" cy="14" r="1.5" fill="currentColor" />
                    <line x1="19" y1="4" x2="5" y2="20" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-[10.5px] xs:text-[12px] sm:text-xs font-bold text-white leading-tight mt-0.5">
                  No<br />Chemicals
                </span>
              </div>

              <div className="hidden sm:block h-12 w-[1px] bg-[#D4AF37]/45 shrink-0 self-start mt-1" />

              {/* 4. No Preservatives */}
              <div className="flex flex-col items-center text-center gap-1.5 sm:gap-2 flex-1 max-w-[85px] xs:max-w-[92px] sm:max-w-[105px]">
                <div className="w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 rounded-full border-2 border-[#E5B842] flex items-center justify-center bg-[#1D200E]/95 shadow-lg shrink-0">
                  <svg className="w-6 h-6 xs:w-6.5 xs:h-6.5 sm:w-7 sm:h-7 text-[#E5B842]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="currentColor" fillOpacity="0.3" />
                    <line x1="19" y1="4" x2="5" y2="20" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-[10.5px] xs:text-[12px] sm:text-xs font-bold text-white leading-tight mt-0.5">
                  No<br />Additives
                </span>
              </div>
            </div>

            {/* Bottom Action Row: ORDER NOW + Rating */}
            <div className="flex items-center gap-3.5 xs:gap-5 sm:gap-5 pt-2 xs:pt-3 sm:pt-3">
              <button
                onClick={handleOrderClick}
                className="px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-3.5 bg-[#0A2417] hover:bg-[#143E2B] text-white text-xs xs:text-sm font-black tracking-wider uppercase rounded-xl border-2 border-[#E5B842] flex items-center gap-2 transition-all hover:scale-105 cursor-pointer shadow-xl shrink-0"
              >
                <span>ORDER NOW</span>
                <span className="text-sm font-bold">→</span>
              </button>

              <div className="h-8 w-[1px] bg-[#D4AF37]/45 block" />

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#E5B842] text-sm">★</span>
                  <span className="text-white font-extrabold text-xs xs:text-sm sm:text-base">4.9/5 Rated</span>
                </div>
                <span className="text-[10.5px] xs:text-[11.5px] sm:text-xs text-slate-200 font-light whitespace-nowrap">
                  (Trusted By 10,000+ Families)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Goodness Straight From Our Farms Circle Badge */}
        <div className="hidden md:flex flex-col items-center absolute left-[43%] sm:left-[44%] lg:left-[46%] xl:left-[47%] top-[9%] sm:top-[11%] lg:top-[18%] z-20 pointer-events-none select-none">
          <div className="relative w-36 h-36 lg:w-40 lg:h-40 rounded-full border-2 border-[#243B17] bg-[#142311]/95 backdrop-blur-xs flex flex-col items-center justify-center p-3 text-center shadow-2xl">
            <div className="absolute inset-1.5 rounded-full border border-dashed border-[#8EB33B]/70 pointer-events-none" />
            <svg className="w-7 h-7 text-[#8EB33B] -mt-1" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 11c-2.8-3.8-7.2-4.8-10.5-3.8 1.1 3.3 3.9 6.5 7.8 7.6 1.1.3 2.2.2 2.7-.6z" />
              <path d="M16 11c2.8-3.8 7.2-4.8 10.5-3.8-1.1 3.3-3.9 6.5-7.8 7.6-1.1.3-2.2.2-2.7-.6z" />
              <path d="M16 12v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>

            <span className="text-white font-extrabold text-[12px] lg:text-[13px] tracking-wider uppercase leading-tight mt-0.5">
              GOODNESS
            </span>
            <span className="text-white font-bold text-[9px] lg:text-[10px] tracking-wide uppercase leading-tight">
              STRAIGHT FROM
            </span>
            <span className="text-[#F2C94C] font-extrabold text-[12px] lg:text-[13px] tracking-wider uppercase leading-tight mt-0.5">
              OUR FARMS
            </span>

            <div className="flex items-center justify-center gap-1.5 w-full mt-1.5">
              <span className="h-[1px] w-4 bg-[#E5B842]/70" />
              <svg className="w-2.5 h-2.5 text-[#F2C94C] fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="h-[1px] w-4 bg-[#E5B842]/70" />
            </div>
          </div>
        </div>

        {/* Note: Right side swirling loop arrows are intentionally omitted for Banner 2 per user requirement */}
      </div>
    </section>
  );
};

