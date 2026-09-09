'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="w-full bg-[#310048] text-slate-300 font-sans relative">
      {/* Organic Wave Header Divider with Top Golden Leaf Emblem */}
      <div className="w-full overflow-hidden leading-none bg-[#FAF9F4] relative">
        <svg
          className="relative block w-full h-20 sm:h-28 lg:h-36 text-[#310048]"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,55 C 160,5 340,0 540,35 C 820,75 1160,112 1440,70 L 1440,140 L 0,140 Z"
            fill="currentColor"
          />
        </svg>
        {/* Decorative Golden Emblem Overlay at Top Center */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 sm:top-6 lg:top-8 z-10 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-[#310048] border border-[#C28E2E]/60 flex items-center justify-center text-[#C28E2E] text-xs shadow-md">
            🌱
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
        
        {/* Top Content Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12">
          
          {/* Col 1: Brand Info & Stay Connected */}
          <div className="lg:col-span-3 space-y-6">
            {/* Brand Logo & Name */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#C28E2E]/60 bg-white p-0.5 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Anvi Farms"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-extrabold text-2xl tracking-tight text-white leading-none">
                  Anvi
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C28E2E] font-sans leading-none mt-1">
                  FARMS
                </span>
              </div>
            </div>

            {/* Tagline Paragraph */}
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Rooted in tradition, committed to purity. We bring you the finest A2 cow ghee and natural products, crafted with love using the age-old Bilona method.
            </p>

            {/* 4 Feature Badges (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center gap-2 bg-[#240035] p-2 rounded-xl border border-white/5">
                <div className="w-6 h-6 rounded-full bg-[#310048] border border-[#C28E2E]/50 flex items-center justify-center text-[#C28E2E] text-[10px] shrink-0">
                  🌱
                </div>
                <span className="text-[11px] font-semibold text-white leading-tight">100% Natural</span>
              </div>

              <div className="flex items-center gap-2 bg-[#240035] p-2 rounded-xl border border-white/5">
                <div className="w-6 h-6 rounded-full bg-[#310048] border border-[#C28E2E]/50 flex items-center justify-center text-[#C28E2E] text-[10px] shrink-0">
                  🧈
                </div>
                <span className="text-[11px] font-semibold text-white leading-tight">Bilona Crafted</span>
              </div>

              <div className="flex items-center gap-2 bg-[#240035] p-2 rounded-xl border border-white/5">
                <div className="w-6 h-6 rounded-full bg-[#310048] border border-[#C28E2E]/50 flex items-center justify-center text-[#C28E2E] text-[10px] shrink-0">
                  🧪
                </div>
                <span className="text-[11px] font-semibold text-white leading-tight">No Chemicals</span>
              </div>

              <div className="flex items-center gap-2 bg-[#240035] p-2 rounded-xl border border-white/5">
                <div className="w-6 h-6 rounded-full bg-[#310048] border border-[#C28E2E]/50 flex items-center justify-center text-[#C28E2E] text-[10px] shrink-0">
                  ❤️
                </div>
                <span className="text-[11px] font-semibold text-white leading-tight">Made with Love</span>
              </div>
            </div>

            {/* Stay Connected Subscription Box */}
            <div className="bg-[#240035] border border-[#4A0868] rounded-2xl p-4 space-y-3 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C28E2E]">
                STAY CONNECTED
              </h4>
              <p className="text-[11px] text-slate-300 font-light leading-snug">
                Subscribe to get updates on new products, offers &amp; healthy living tips.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-[#310048] border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#C28E2E]"
                />
                <button
                  type="submit"
                  className="bg-[#C28E2E] hover:bg-[#D4AF37] text-[#310048] font-extrabold text-[10px] uppercase tracking-wider px-3 py-2.5 rounded-xl transition-colors shrink-0 cursor-pointer"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

          {/* Col 2: OUR PRODUCTS */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif font-bold text-white text-xs uppercase tracking-wider">
              OUR PRODUCTS
            </h3>
            <div className="w-8 h-[1px] bg-[#C28E2E]" />
            <ul className="space-y-2 text-xs font-light text-slate-300 pt-1">
              {[
                { label: 'A2 Desi Cow Ghee', href: '/product/a2-desi-cow-ghee' },
                { label: 'Cultured Bilona Ghee', href: '/products' },
                { label: 'Raw Wild Honey', href: '/product/raw-wild-forest-honey' },
                { label: 'Wood Pressed Oils', href: '/products' },
                { label: 'Himalayan Pink Salt', href: '/products' },
                { label: 'Natural Jaggery', href: '/products' },
                { label: 'Organic Spices', href: '/products' },
                { label: 'Gift Packs', href: '/products' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="flex items-center gap-1.5 hover:text-[#C28E2E] transition-colors">
                    <span className="text-[#C28E2E] text-[10px]">🌱</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/products" className="inline-flex items-center gap-1 text-xs font-bold text-[#C28E2E] hover:underline pt-2">
              <span>View All Products</span>
              <span>→</span>
            </Link>
          </div>

          {/* Col 3: LEARN WITH ANVI FARMS */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif font-bold text-white text-xs uppercase tracking-wider">
              LEARN WITH ANVI FARMS
            </h3>
            <div className="w-8 h-[1px] bg-[#C28E2E]" />
            <ul className="space-y-2 text-xs font-light text-slate-300 pt-1">
              {[
                { label: 'Our Story', href: '/about' },
                { label: 'The Bilona Process', href: '/about' },
                { label: 'Why A2 Ghee?', href: '/faqs' },
                { label: 'Health Benefits', href: '/about' },
                { label: 'Blogs & Recipes', href: '/about' },
                { label: 'Desi Cow Breed', href: '/about' },
                { label: 'Lab Test Reports', href: '/faqs' },
                { label: 'FAQs', href: '/faqs' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="flex items-center gap-1.5 hover:text-[#C28E2E] transition-colors">
                    <span className="text-[#C28E2E] text-[10px]">🌱</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/about" className="inline-flex items-center gap-1 text-xs font-bold text-[#C28E2E] hover:underline pt-2">
              <span>Explore More</span>
              <span>→</span>
            </Link>
          </div>

          {/* Col 4: CUSTOMER SUPPORT */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif font-bold text-white text-xs uppercase tracking-wider">
              CUSTOMER SUPPORT
            </h3>
            <div className="w-8 h-[1px] bg-[#C28E2E]" />
            <ul className="space-y-2 text-xs font-light text-slate-300 pt-1">
              {[
                { label: 'My Account', href: '/contact' },
                { label: 'Track Your Order', href: '/contact' },
                { label: 'Shipping Policy', href: '/faqs' },
                { label: 'Return & Refund', href: '/faqs' },
                { label: 'Terms & Conditions', href: '/faqs' },
                { label: 'Privacy Policy', href: '/faqs' },
                { label: 'Cancellation Policy', href: '/faqs' },
                { label: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="flex items-center gap-1.5 hover:text-[#C28E2E] transition-colors">
                    <span className="text-[#C28E2E] text-[10px]">🌱</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-1 text-xs font-bold text-[#C28E2E] hover:underline pt-2">
              <span>Need Help?</span>
              <span>→</span>
            </Link>
          </div>

          {/* Col 5: WHY CHOOSE & GET IN TOUCH */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Why Choose Anvi Farms */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-white text-xs uppercase tracking-wider">
                WHY CHOOSE ANVI FARMS
              </h3>
              <div className="w-8 h-[1px] bg-[#C28E2E]" />
              <ul className="space-y-2 text-xs font-light text-slate-300 pt-1">
                {[
                  'Traditional Bilona Method',
                  'Pure A2 Cow Milk',
                  'Small Batch Preparation',
                  'Rich in Aroma & Nutrition',
                  'Supports Healthy Lifestyle',
                  'Trust of Thousands',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <span className="text-[#C28E2E] text-[10px]">🌱</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Rating block */}
              <div className="pt-2 flex items-center gap-2">
                <div className="flex text-[#C28E2E] text-xs">★★★★★</div>
                <span className="text-xs font-bold text-white">4.9/5</span>
                <span className="text-[11px] text-slate-400 font-light">(10,000+ Happy Families)</span>
              </div>
            </div>

            {/* Get In Touch */}
            <div className="bg-[#240035] border border-[#4A0868] rounded-2xl p-4 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C28E2E]">
                GET IN TOUCH
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-[#C28E2E]">📞</span>
                  <a href="tel:7780505418" className="hover:underline font-semibold text-white">
                    +91 77805 05418
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C28E2E]">✉️</span>
                  <a href="mailto:hello@anvifarms.com" className="hover:underline text-slate-300">
                    hello@anvifarms.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C28E2E]">📍</span>
                  <span>Anvi Farms, Gujarat, India 360xxx</span>
                </div>
              </div>
            </div>

            {/* We Deliver Across India */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                WE DELIVER ACROSS INDIA
              </h4>
              <p className="text-[11px] text-slate-400 font-light">
                Safe, Secure &amp; On-time Delivery
              </p>
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="bg-[#240035] p-2 rounded-xl border border-white/5 flex flex-col items-center">
                  <span className="text-sm">🚚</span>
                  <span className="text-[10px] font-bold text-white mt-1 leading-tight">Fast Delivery</span>
                </div>
                <div className="bg-[#240035] p-2 rounded-xl border border-white/5 flex flex-col items-center">
                  <span className="text-sm">🛡️</span>
                  <span className="text-[10px] font-bold text-white mt-1 leading-tight">Secure Payment</span>
                </div>
                <div className="bg-[#240035] p-2 rounded-xl border border-white/5 flex flex-col items-center">
                  <span className="text-sm">📦</span>
                  <span className="text-[10px] font-bold text-white mt-1 leading-tight">Premium Packaging</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Middle Horizontal Trust Bar */}
        <div className="border-t border-b border-white/10 py-6 my-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            
            <div className="flex flex-col items-center gap-1.5 p-2">
              <div className="w-10 h-10 rounded-full bg-[#240035] border border-[#C28E2E]/60 flex items-center justify-center text-[#C28E2E] text-base">
                🧪
              </div>
              <span className="text-xs font-bold text-white uppercase tracking-wider">100% PURE</span>
              <span className="text-[11px] text-slate-400 font-light">No Additives</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 p-2">
              <div className="w-10 h-10 rounded-full bg-[#240035] border border-[#C28E2E]/60 flex items-center justify-center text-[#C28E2E] text-base">
                🏺
              </div>
              <span className="text-xs font-bold text-white uppercase tracking-wider">BILONA CRAFTED</span>
              <span className="text-[11px] text-slate-400 font-light">Traditional Method</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 p-2">
              <div className="w-10 h-10 rounded-full bg-[#240035] border border-[#C28E2E]/60 flex items-center justify-center text-[#C28E2E] text-base">
                🔬
              </div>
              <span className="text-xs font-bold text-white uppercase tracking-wider">LAB TESTED</span>
              <span className="text-[11px] text-slate-400 font-light">For Purity &amp; Safety</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 p-2">
              <div className="w-10 h-10 rounded-full bg-[#240035] border border-[#C28E2E]/60 flex items-center justify-center text-[#C28E2E] text-base">
                🌱
              </div>
              <span className="text-xs font-bold text-white uppercase tracking-wider">MADE IN SMALL BATCHES</span>
              <span className="text-[11px] text-slate-400 font-light">With Extra Care</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 p-2 col-span-2 sm:col-span-1">
              <div className="w-10 h-10 rounded-full bg-[#240035] border border-[#C28E2E]/60 flex items-center justify-center text-[#C28E2E] text-base">
                🌿
              </div>
              <span className="text-xs font-bold text-white uppercase tracking-wider">CHEMICAL FREE</span>
              <span className="text-[11px] text-slate-400 font-light">Natural &amp; Safe</span>
            </div>

          </div>
        </div>

        {/* Bottom Rights, Payment Badges & Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 text-xs text-slate-400 text-center md:text-left">
          
          {/* Copyright */}
          <p className="order-3 md:order-1 text-[11px] sm:text-xs">© {new Date().getFullYear()} Anvi Farms. All rights reserved.</p>

          {/* Payment Method Badges */}
          <div className="order-1 md:order-2 flex items-center justify-center flex-wrap gap-2 xs:gap-2.5 sm:gap-3">
            {/* VISA */}
            <div className="h-9 sm:h-11 px-3 sm:px-4 bg-[#240035] border border-white/20 rounded-xl flex items-center justify-center shadow-sm hover:border-[#C28E2E] transition-all hover:scale-105">
              <svg className="h-4 sm:h-5.5 w-auto" viewBox="0 0 50 16" fill="none">
                <path d="M19.4 1.2l-3.2 13.6h-2.6l3.2-13.6h2.6zm9.3 8.8c.1-2.4-3.4-2.5-3.3-3.6 0-.8.8-1.2 1.8-1.2 1.4 0 2.6.5 3.3.9l.6-2.5c-.8-.3-2-.6-3.4-.6-3.2 0-5.5 1.7-5.5 4.1 0 3.6 5 3.7 4.9 5.3 0 .6-.7 1.1-2 1.1-1.6 0-2.9-.6-3.7-1.1l-.6 2.6c.9.4 2.5.8 4.1.8 3.5 0 5.8-1.7 5.8-4.2zm6.6 4.8h2.6l2.3-13.6h-2.4c-.6 0-1.1.3-1.3.9l-4.5 10.9-.5-2.6-1.5-6.7c-.2-.7-.7-1-1.3-1H32l-.1.4c1.1.2 2.3.6 3.1 1.1.5.3.7.8.9 1.5l2.4 8.7zM16 1.2L12.5 11l-.4-1.9-1.3-6.6c-.2-.8-.7-1.3-1.5-1.3H4l-.1.4c1.8.4 3.8 1 5 1.7.6.3.8.7.9 1.4l3.1 10.1h2.7l4.3-13.6H16z" fill="#FFFFFF"/>
                <path d="M9.3 1.2L4 1.2" stroke="#F7B600" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Mastercard */}
            <div className="h-9 sm:h-11 px-3 sm:px-4 bg-[#240035] border border-white/20 rounded-xl flex items-center justify-center gap-1.5 xs:gap-2 shadow-sm hover:border-[#C28E2E] transition-all hover:scale-105">
              <svg className="h-5 sm:h-7 w-auto" viewBox="0 0 36 22" fill="none">
                <circle cx="11" cy="11" r="10" fill="#EB001B"/>
                <circle cx="25" cy="11" r="10" fill="#F79E1B" fillOpacity="0.9"/>
                <path d="M18 3.55A9.97 9.97 0 0 0 14.54 11A9.97 9.97 0 0 0 18 18.45A9.97 9.97 0 0 0 21.46 11A9.97 9.97 0 0 0 18 3.55Z" fill="#FF5F00"/>
              </svg>
              <span className="text-xs sm:text-base font-sans font-semibold text-white tracking-tight">mastercard</span>
            </div>

            {/* UPI */}
            <div className="h-9 sm:h-11 px-3 sm:px-4 bg-[#240035] border border-white/20 rounded-xl flex items-center justify-center gap-1.5 xs:gap-2 shadow-sm hover:border-[#C28E2E] transition-all hover:scale-105">
              <span className="text-xs sm:text-base font-black text-white italic tracking-tight font-sans">UPI</span>
              <div className="flex items-center -space-x-0.5">
                <svg className="h-3.5 sm:h-4.5 w-auto" viewBox="0 0 10 12" fill="none">
                  <path d="M1 1L6 6L1 11" stroke="#00A859" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className="h-3.5 sm:h-4.5 w-auto" viewBox="0 0 10 12" fill="none">
                  <path d="M1 1L6 6L1 11" stroke="#F79E1B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* RuPay */}
            <div className="h-9 sm:h-11 px-3 sm:px-4 bg-[#240035] border border-white/20 rounded-xl flex items-center justify-center gap-1 xs:gap-1.5 shadow-sm hover:border-[#C28E2E] transition-all hover:scale-105">
              <span className="text-xs sm:text-base font-black text-white italic tracking-tight font-sans">RuPay</span>
              <div className="flex items-center -space-x-0.5">
                <svg className="h-3.5 sm:h-4.5 w-auto" viewBox="0 0 10 12" fill="none">
                  <path d="M1 1L6 6L1 11" stroke="#F79E1B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className="h-3.5 sm:h-4.5 w-auto" viewBox="0 0 10 12" fill="none">
                  <path d="M1 1L6 6L1 11" stroke="#00A859" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Paytm */}
            <div className="h-9 sm:h-11 px-3 sm:px-4 bg-[#240035] border border-white/20 rounded-xl flex items-center justify-center gap-0.5 shadow-sm hover:border-[#C28E2E] transition-all hover:scale-105">
              <span className="text-xs sm:text-base font-black text-[#00BAF2] tracking-tighter font-sans">pay</span>
              <span className="text-xs sm:text-base font-black text-white tracking-tighter font-sans">tm</span>
            </div>
          </div>

          {/* Social Icons & Back-to-Top */}
          <div className="order-2 md:order-3 flex items-center gap-3 sm:gap-4">
            <span className="text-slate-400 text-[11px] sm:text-xs font-medium">Follow us on</span>
            
            <div className="flex items-center gap-2">
              <a href="#" className="w-8 h-8 rounded-full bg-[#240035] hover:bg-[#4A0868] text-white flex items-center justify-center transition-colors border border-white/10" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a href="#" className="w-8 h-8 rounded-full bg-[#240035] hover:bg-[#4A0868] text-white flex items-center justify-center transition-colors border border-white/10" aria-label="Instagram">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a href="#" className="w-8 h-8 rounded-full bg-[#240035] hover:bg-[#4A0868] text-white flex items-center justify-center transition-colors border border-white/10" aria-label="YouTube">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Scroll-To-Top Button */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#C28E2E] hover:bg-[#D4AF37] text-[#310048] flex items-center justify-center font-extrabold text-sm sm:text-base transition-transform hover:scale-110 shadow-md cursor-pointer ml-1 xs:ml-2"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              ↑
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
