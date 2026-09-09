'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '../context/CartContext';
import { CategoryId } from '../types/product';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const {
    cartCount,
    wishlistCount,
    openCart,
    openWishlist,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
  } = useCart();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hideTopHeader, setHideTopHeader] = useState(false);

  // Smooth opening and closing animation states for Mobile Side Drawer
  const [renderMobileMenu, setRenderMobileMenu] = useState(isMobileMenuOpen);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setRenderMobileMenu(true);
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => setMobileMenuVisible(true), 20);
      return () => clearTimeout(timer);
    } else {
      setMobileMenuVisible(false);
      document.body.style.overflow = '';
      const timer = setTimeout(() => setRenderMobileMenu(false), 320);
      return () => clearTimeout(timer);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 15) {
        // Always show top bar at the very top of page
        setHideTopHeader(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 40) {
        // Scrolling down: smoothly hide the top header
        setHideTopHeader(true);
      } else if (currentScrollY < lastScrollY - 10) {
        // Scrolling up: smoothly reveal top header
        setHideTopHeader(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories: { id: CategoryId; name: string; href: string; isNew?: boolean; isOffer?: boolean }[] = [
    { id: 'all', name: 'Home', href: '/' },
    { id: 'all', name: 'About Anvi Farms', href: '/about' },
    { id: 'all', name: 'Products', href: '/products' },
    { id: 'all', name: 'FAQs', href: '/faqs' },
    { id: 'all', name: 'Contact Us', href: '/contact' },
    { id: 'all', name: 'New Arrivals', href: '/products', isNew: true },
    { id: 'all', name: 'Offers', href: '/products', isOffer: true },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F4] shadow-md border-b border-slate-200/80 w-full font-sans">

      {/* Edge-to-Edge Top Dark Green Announcement Bar (Hidden for now as requested) */}
      <div
        className="hidden"
      >
        <div className="w-full flex flex-wrap items-center justify-between gap-2">

          <div className="flex items-center gap-4 text-[11px] sm:text-xs font-semibold">
            <div className="flex items-center gap-1.5 text-[#C28E2E]">
              <span>🌱</span>
              <span>The Purest Vedic Harvest</span>
            </div>
            <span className="text-white/20 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 text-slate-200 font-medium">
              <span>🚚</span>
              <span>Free Express Shipping on Orders Over ₹999</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-200">
            <svg className="w-3.5 h-3.5 fill-[#C28E2E]" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-.981z" />
            </svg>
            <span>Direct WhatsApp Order:</span>
            <a
              href="https://wa.me/917780505418?text=Hi%20Anvi%20Farms,%20I%20want%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C28E2E] hover:underline tracking-wider cursor-pointer"
            >
              +91 7780505418
            </a>
          </div>

        </div>
      </div>

      {/* Edge-to-Edge Main Navigation Body Row */}
      <div className="bg-[#FAF9F4] w-full">
        <div className="w-full px-4 sm:px-8 lg:px-10 py-3 flex items-center justify-between gap-6">

          {/* Left Corner Logo & Brand Name */}
          <Link href="/" onClick={() => setSelectedCategory('all')} className="flex items-center gap-3 shrink-0 group cursor-pointer">
            <div className="relative w-13 h-13 rounded-full overflow-hidden border border-[#C28E2E]/40 group-hover:border-[#0A2417] transition-colors shadow-sm bg-white p-0.5">
              <Image
                src="/logo.png"
                alt="Anvi Farms Logo"
                fill
                sizes="52px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif font-extrabold text-2xl sm:text-3.5xl tracking-tight text-[#320047] leading-none">
                Anvi
              </span>
              <span className="text-xs sm:text-sm font-normal uppercase tracking-[0.25em] text-[#3F4F10] font-sans leading-none">
                FARMS
              </span>
            </div>
          </Link>

          {/* Streamlined Search Bar with Embedded Logo */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-2xl items-center gap-3 bg-white border border-[#320047] rounded-full pl-2.5 pr-2 py-1.5 shadow-sm outline-none focus-within:outline-none transition-all cursor-text"
          >
            {/* Embedded Circular Brand Logo in Search Bar */}
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#320047]/30 bg-white shrink-0 p-0.5">
              <Image
                src="/logo.png"
                alt="Anvi Farms"
                fill
                sizes="32px"
                className="object-contain"
              />
            </div>

            <input
              type="text"
              placeholder="Search for pure & natural products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-sm bg-transparent text-slate-800 focus:outline-none outline-none focus:ring-0 placeholder-slate-400 font-normal cursor-text"
            />

            {/* Clear 'X' Button */}
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer shrink-0"
                aria-label="Clear search"
                title="Clear search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}

            <button
              type="submit"
              className="w-9 h-9 rounded-full bg-[#310048] hover:bg-[#4A0868] text-white flex items-center justify-center transition-colors shadow-sm shrink-0 cursor-pointer"
              aria-label="Search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          {/* Right Corner User Actions */}
          <div className="flex items-center gap-3.5 xs:gap-4 sm:gap-6 shrink-0">

            {/* User Profile Icon - Desktop */}
            <button
              className="hidden lg:flex flex-col items-center text-slate-700 hover:text-[#310048] transition-colors cursor-pointer group"
              aria-label="User Account"
            >
              <svg className="w-5 h-5 text-slate-600 group-hover:text-[#310048]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-[10px] font-bold mt-0.5">Login / Signup</span>
            </button>

            {/* User Profile Icon - Responsive (Mobile Only) */}
            <button
              className="flex md:hidden flex-col items-center text-slate-800 hover:text-[#310048] transition-colors cursor-pointer group"
              aria-label="Login / Signup"
            >
              <svg className="w-6 h-6 text-[#310048]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-[10px] font-bold mt-0.5">Login</span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={openWishlist}
              className="hidden lg:flex flex-col items-center text-slate-700 hover:text-[#310048] transition-colors relative cursor-pointer group"
              aria-label="Wishlist"
            >
              <div className="relative">
                <svg className="w-5 h-5 text-slate-600 group-hover:text-[#310048]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#C28E2E] text-[#310048] font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-bold mt-0.5">Wishlist</span>
            </button>

            {/* My Cart Button */}
            <button
              onClick={openCart}
              className="flex flex-col items-center text-slate-800 hover:text-[#310048] relative group cursor-pointer"
              aria-label="Open Cart"
            >
              <div className="relative">
                <svg className="w-6 h-6 text-[#310048]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#C28E2E] text-[#310048] font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-bold mt-0.5">My Cart</span>
            </button>

            {/* Quick Order Button with Updated WhatsApp Chat Bubble Icon */}
            <a
              href="https://wa.me/917780505418?text=Hi%20Anvi%20Farms,%20I%20want%20to%20place%20a%20Quick%20Order"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#310048] hover:bg-[#4A0868] text-white font-bold text-xs border border-[#C28E2E] shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current text-[#C28E2E]" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.04 2 11c0 2.22.81 4.26 2.18 5.86L3 21l4.29-1.37C8.75 20.4 10.33 20.8 12 20.8c5.52 0 10-4.04 10-9s-4.48-9.8-10-9.8zm0 16.8c-1.47 0-2.88-.38-4.12-1.07l-.3-.17-2.54.81.82-2.47-.19-.31C4.94 14.34 4.3 12.72 4.3 11c0-4.25 3.45-7.7 7.7-7.7s7.7 3.45 7.7 7.7-3.45 7.7-7.7 7.7z" />
              </svg>
              <span>Quick Order</span>
            </a>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-800 hover:text-[#0A2417] cursor-pointer"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

          </div>
        </div>

        {/* Bottom Centered Category Bar with Smooth Responsive Horizontal Scroll (Hidden on Mobile, Visible on Desktop/Tablet) */}
        <div className="hidden md:block border-t border-slate-200/80 bg-[#FAF9F4] w-full">
          <div className="w-full px-4 sm:px-8 lg:px-12 py-3 flex items-center justify-start md:justify-center overflow-x-auto text-sm sm:text-base lg:text-[17px] font-extrabold gap-5 sm:gap-8 lg:gap-14 no-scrollbar">

            {categories.map((cat, idx) => {
              if (cat.isOffer || cat.isNew) return null;
              const isActive = pathname === cat.href;
              return (
                <Link
                  key={`${cat.id}-${idx}`}
                  href={cat.href}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`pb-1 transition-all whitespace-nowrap relative shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-[#310048] font-black border-b-2 border-[#C28E2E]'
                      : 'text-slate-800 hover:text-[#310048] font-bold'
                  }`}
                >
                  {cat.name}
                </Link>
              );
            })}

            {/* New Arrivals Badge */}
            <Link
              href="/#products"
              onClick={() => setSelectedCategory('ghee')}
              className="flex items-center gap-1.5 text-slate-800 font-bold hover:text-[#310048] whitespace-nowrap shrink-0 pb-1 cursor-pointer"
            >
              <span>New Arrivals</span>
              <span className="bg-[#BE8628] text-white text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                NEW
              </span>
            </Link>

            <span className="text-slate-300 hidden sm:inline font-normal">|</span>

            {/* Offers Link */}
            <Link
              href="/#products"
              onClick={() => setSelectedCategory('all')}
              className="flex items-center gap-1.5 text-slate-800 font-bold hover:text-[#310048] whitespace-nowrap shrink-0 pb-1 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#310048] -rotate-12" viewBox="0 0 24 24">
                <path d="M12.586 2.586A2 2 0 0011.172 2H4a2 2 0 00-2 2v7.172a2 2 0 00.586 1.414l8.707 8.707a2 2 0 002.828 0l7.172-7.172a2 2 0 000-2.828l-8.707-8.707zM6 8a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
              <span>Offers</span>
            </Link>

            <span className="text-slate-300 hidden sm:inline font-normal">|</span>

            {/* Track Your Order Link */}
            <Link
              href="/track-order"
              className={`flex items-center gap-1.5 text-slate-800 font-bold hover:text-[#310048] whitespace-nowrap shrink-0 pb-1 cursor-pointer ${
                pathname === '/track-order' ? 'text-[#310048] font-black border-b-2 border-[#C28E2E]' : ''
              }`}
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#310048] stroke-current shrink-0" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1e1 1h4l3 3v4a1 1 0 01-1 1h-1m-4-1a1 1 0 01-1 1H9" />
              </svg>
              <span>Track Your Order</span>
            </Link>

          </div>
        </div>

        {/* Mobile Slide-Over Side Drawer with Smooth Transitions */}
        {renderMobileMenu && (
          <div className="fixed inset-0 z-50 overflow-hidden md:hidden">
            {/* Smooth Fade Backdrop Overlay */}
            <div
              onClick={() => setIsMobileMenuOpen(false)}
              className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out cursor-pointer ${
                mobileMenuVisible ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden="true"
            />

            {/* Side Drawer Container - Sliding from Left */}
            <div className="fixed inset-y-0 left-0 max-w-full flex pr-10 pointer-events-none">
              <div
                className={`w-screen max-w-[320px] xs:max-w-[340px] bg-[#FAF9F4] shadow-2xl flex flex-col justify-between border-r border-[#DFCFA8] transform transition-transform duration-300 ease-out pointer-events-auto ${
                  mobileMenuVisible ? 'translate-x-0' : '-translate-x-full'
                }`}
              >
                {/* Top Drawer Header */}
                <div className="p-4 xs:p-5 border-b border-[#DFCFA8]/80 flex items-center justify-between bg-white">
                  <Link
                    href="/"
                    onClick={() => {
                      setSelectedCategory('all');
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2.5"
                  >
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C28E2E]/50 bg-white p-0.5 shrink-0">
                      <Image src="/logo.png" alt="Anvi Farms" fill sizes="40px" className="object-contain" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-serif font-extrabold text-xl text-[#320047] leading-none">Anvi</span>
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#3F4F10] leading-none mt-0.5">FARMS</span>
                    </div>
                  </Link>

                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Scrollable Drawer Content */}
                <div className="flex-1 overflow-y-auto p-4 xs:p-5 space-y-5 no-scrollbar">
                  {/* Live Search Input */}
                  <form onSubmit={(e) => { handleSearchSubmit(e); setIsMobileMenuOpen(false); }} className="relative flex items-center bg-white border border-[#310048]/40 rounded-full px-3.5 py-2 shadow-2xs">
                    <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-2 pr-2 text-xs bg-transparent focus:outline-none text-slate-900 placeholder-slate-400"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
                      >
                        ✕
                      </button>
                    )}
                  </form>

                  {/* Navigation Links */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C28E2E] px-2 mb-2">
                      EXPLORE
                    </div>

                    {[
                      { id: 'all', name: 'Home', href: '/', icon: '🏠' },
                      { id: 'all', name: 'About Anvi Farms', href: '/about', icon: '🌿' },
                      { id: 'all', name: 'All Products', href: '/products', icon: '🧈' },
                      { id: 'ghee', name: 'New Arrivals', href: '/products', icon: '✨', isNew: true },
                      { id: 'all', name: 'Offers & Combos', href: '/products', icon: '🎁', isOffer: true },
                      { id: 'all', name: 'FAQs', href: '/faqs', icon: '❓' },
                      { id: 'all', name: 'Contact Us', href: '/contact', icon: '📞' },
                    ].map((item, idx) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => {
                            setSelectedCategory(item.id as CategoryId);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#310048] text-white shadow-sm'
                              : 'text-slate-800 hover:bg-white hover:text-[#310048]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span>{item.icon}</span>
                            <span>{item.name}</span>
                          </div>
                          {item.isNew && (
                            <span className="bg-[#BE8628] text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                              NEW
                            </span>
                          )}
                          {item.isOffer && (
                            <span className="bg-emerald-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                              OFFERS
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>

                  {/* User Quick Actions (Track Order & Wishlist) */}
                  <div className="space-y-1 pt-2 border-t border-[#DFCFA8]/60">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C28E2E] px-2 mb-2">
                      ACCOUNT & SERVICES
                    </div>

                    <Link
                      href="/track-order"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-800 hover:bg-white hover:text-[#310048] transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <span>🚚</span>
                        <span>Track Your Order</span>
                      </div>
                      <span className="text-slate-400 text-xs">→</span>
                    </Link>

                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        openWishlist();
                      }}
                      className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-800 hover:bg-white hover:text-[#310048] transition-all cursor-pointer text-left"
                    >
                      <div className="flex items-center gap-2.5">
                        <span>❤️</span>
                        <span>My Wishlist</span>
                      </div>
                      {wishlistCount > 0 ? (
                        <span className="bg-[#C28E2E] text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                          {wishlistCount}
                        </span>
                      ) : (
                        <span className="text-slate-400 text-xs">→</span>
                      )}
                    </button>
                  </div>
                </div>

                {/* Bottom WhatsApp CTA & Contact Info */}
                <div className="p-4 border-t border-[#DFCFA8]/80 bg-white space-y-2.5">
                  <a
                    href="https://wa.me/917780505418?text=Hi%20Anvi%20Farms,%20I%20want%20to%20place%20an%20order"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-[#310048] hover:bg-[#4A0868] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#C28E2E] shadow-sm transition-all cursor-pointer"
                  >
                    <span>💬 WhatsApp Quick Order</span>
                  </a>
                  <p className="text-[10px] text-center text-slate-500 font-medium">
                    Customer Support: +91 77805 05418
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
