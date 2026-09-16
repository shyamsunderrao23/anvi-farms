import React, { useState, useEffect, useRef } from 'react'
import logoImg from '../assets/images/logo.png'
import SearchDropdown from './SearchDropdown'
import { 
  Search, 
  User, 
  Heart, 
  ShoppingBag, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Zap, 
  Gift, 
  Menu, 
  X, 
  Sparkles, 
  Flame, 
  BookOpen, 
  PhoneCall 
} from 'lucide-react'

// Category Images
import desiGheeImg from '../assets/images/desi_ghee.jpg'
import honeyImg from '../assets/images/honey.jpg'
import spicesImg from '../assets/images/spices.jpg'
import amlaprashImg from '../assets/images/amlaprash.jpg'
import coldPressedOilImg from '../assets/images/cold_pressed_oil.jpg'
import naturalSweetenerImg from '../assets/images/natural_sweetener.jpg'
import proteinBarImg from '../assets/images/protein_bar.jpg'
import chickenPickleImg from '../assets/images/chicken_pickle.jpg'

// Farm Life Gallery Images
import girCowsImg from '../assets/images/gallery_gir_cows.jpg'
import bilonaChurnImg from '../assets/images/gallery_bilona_churn.jpg'
import beekeepingImg from '../assets/images/gallery_beekeeping.jpg'
import farmSoilImg from '../assets/images/traditional_kitchen_bg.jpg'

// Custom SVGs for authentic Indian Farm staples
function GheePotIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Lid & spoon */}
      <path d="M9 3h6" />
      <path d="M12 2v3" />
      <path d="M15 2l3 5" />
      {/* Pot neck & body */}
      <path d="M7 6h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
      <path d="M6 9c-2 3-1 9 6 9s8-6 6-9" />
      <path d="M9 18h6" />
    </svg>
  )
}

function HoneyJarIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Jar Lid */}
      <path d="M7 3h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      {/* Jar Neck & Body */}
      <path d="M6 6h12l1 7c0 4.5-3 7-7 7s-7-2.5-7-7l1-7Z" />
      {/* Honeycomb / Dipper Accent */}
      <path d="M12 10l2 1.2v2.4l-2 1.2-2-1.2v-2.4Z" />
      <path d="M12 1v2" />
    </svg>
  )
}

function DiyaFestivalIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      {/* Flame */}
      <path d="M12 2c-.8 2.2-2 3.8-2 5.5a2 2 0 0 0 4 0c0-1.7-1.2-3.3-2-5.5Z" fill="#F59E0B" />
      {/* Diya Base */}
      <path d="M4 12c0 4.4 3.6 8 8 8s8-3.6 8-8H4Z" fill="#EA580C" />
      <path d="M3 12h18v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1Z" fill="#C2410C" />
      <path d="M9 20h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1Z" fill="#9A3412" />
    </svg>
  )
}

function FarmSproutIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 20h10" />
      <path d="M12 20v-8" />
      <path d="M12 12a5 5 0 0 0 5-5c0-3-2-3-5-3-3 0-5 0-5 3a5 5 0 0 0 5 5Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M12 12c-4 0-6-3-6-6 3 0 6 2 6 6Z" />
    </svg>
  )
}

export default function Header({ 
  onOpenCart, 
  cartCount = 0,
  onAddToCart,
  onNavigateCategory,
  onNavigateHome
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll listener for subtle header elevation shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categories = [
    { 
      id: 'ghee',
      name: 'Ghee', 
      href: '#category/ghee', 
      subtitle: 'Cultured A2 & Buffalo Bilona', 
      count: '4 Products', 
      image: desiGheeImg 
    },
    { 
      id: 'honey',
      name: 'Honey', 
      href: '#category/honey', 
      subtitle: '100% Raw Wild Forest', 
      count: '4 Products', 
      image: honeyImg 
    },
    { 
      id: 'spices',
      name: 'Spices', 
      href: '#category/spices', 
      subtitle: 'High Curcumin Lakadong', 
      count: '6 Products', 
      image: spicesImg 
    },
    { 
      id: 'super-foods',
      name: 'Super Foods', 
      href: '#category/super-foods', 
      subtitle: 'Amlaprash & Chyawanprash', 
      count: '5 Products', 
      image: amlaprashImg 
    },
    { 
      id: 'cold-pressed-oils',
      name: 'Cold Pressed Oils', 
      href: '#category/cold-pressed-oils', 
      subtitle: 'Wood Pressed Kachi Ghani', 
      count: '4 Products', 
      image: coldPressedOilImg 
    },
    { 
      id: 'natural-sweeteners',
      name: 'Natural Sweeteners', 
      href: '#category/natural-sweeteners', 
      subtitle: 'Organic Khand & Jaggery', 
      count: '3 Products', 
      image: naturalSweetenerImg 
    },
    { 
      id: 'protein-bars',
      name: 'Protein Bars', 
      href: '#category/protein-bars', 
      subtitle: 'Cold Processed Clean Energy', 
      count: '4 Products', 
      image: proteinBarImg 
    },
    { 
      id: 'non-veg-pickles',
      name: 'Non-Veg Pickles', 
      href: '#category/non-veg-pickles', 
      subtitle: 'Artisanal Country Chicken', 
      count: '2 Products', 
      image: chickenPickleImg 
    },
  ]

  const anviFarmLifeItems = [
    { 
      name: 'Our Story', 
      href: '#story', 
      subtitle: 'Generational roots, Vedic values & pure farming', 
      badge: 'Heritage', 
      image: farmSoilImg 
    },
    { 
      name: 'Our Process', 
      href: '#process', 
      subtitle: 'Clay pot Vedic Bilona & wood pressed zero chemicals', 
      badge: 'Vedic Method', 
      image: bilonaChurnImg 
    },
    { 
      name: 'Farmer Stories', 
      href: '#farmer-stories', 
      subtitle: 'Meet our indigenous Gir cow goshala caretakers', 
      badge: 'Community', 
      image: girCowsImg 
    },
    { 
      name: 'Quality Promise', 
      href: '#quality-promise', 
      subtitle: '100% Lab tested, NMR verified & Glyphosate free', 
      badge: '100% Pure', 
      image: beekeepingImg 
    },
  ]

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT BAR (Scrolls out of view smoothly with the page, 0 blink) */}
      <div className="w-full bg-[#2D0345] text-white text-[11px] sm:text-xs select-none overflow-hidden relative border-b border-[#3d085c] py-2 px-2 sm:px-4 z-40">
        <div className="flex items-center overflow-hidden w-full">
          {/* Continuous News Marquee Ribbon (Duplicated for seamless loop) */}
          <div className="animate-news-ticker flex items-center whitespace-nowrap gap-8 sm:gap-12">
            {/* Set 1 */}
            <div className="flex items-center gap-8 sm:gap-12 shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-black uppercase tracking-wider text-amber-300">
                  PERMANENT PRICE DROP!
                </span>
                <span className="text-amber-400">💥</span>
                <span>
                  Collective Membership now <strong className="text-white font-bold">₹149</strong> for 3 months + <span className="underline decoration-amber-400 decoration-2 underline-offset-2 font-semibold">15% off every order</span>
                </span>
                <span className="text-slate-400">|</span>
                <a href="#join" className="underline font-bold text-amber-300 hover:text-amber-200 transition-colors">
                  Join now!
                </a>
              </div>

              <span className="text-amber-400/60 font-bold">•</span>

              <div className="flex items-center gap-2">
                <span>🎉</span>
                <span className="font-bold text-white">Big Savings Alert!</span>
                <span>Get 10% OFF on orders above ₹3000 | Use code:</span>
                <span className="bg-white/15 px-2 py-0.5 rounded font-mono font-bold text-amber-300 tracking-wider border border-white/20">
                  ANVI10
                </span>
              </div>

              <span className="text-amber-400/60 font-bold">•</span>

              <div className="flex items-center gap-2">
                <span>🌿</span>
                <span className="font-bold text-amber-300">Pure Vedic A2 Gir Cow Bilona Ghee & Wood Pressed Oils</span>
                <span className="text-slate-400">|</span>
                <span>Free Express Delivery on orders above ₹999</span>
              </div>

              <span className="text-amber-400/60 font-bold">•</span>

              <div className="flex items-center gap-2">
                <span>🚚</span>
                <span className="font-bold text-white">Direct From Our Regenerative Soil to Your Kitchen</span>
                <span className="text-slate-400">|</span>
                <span className="text-amber-300 font-semibold">100% Lab Tested & Pesticide-Free</span>
              </div>

              <span className="text-amber-400/60 font-bold">•</span>
            </div>

            {/* Set 2 (Identical for seamless infinite ticker) */}
            <div className="flex items-center gap-8 sm:gap-12 shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-black uppercase tracking-wider text-amber-300">
                  PERMANENT PRICE DROP!
                </span>
                <span className="text-amber-400">💥</span>
                <span>
                  Collective Membership now <strong className="text-white font-bold">₹149</strong> for 3 months + <span className="underline decoration-amber-400 decoration-2 underline-offset-2 font-semibold">15% off every order</span>
                </span>
                <span className="text-slate-400">|</span>
                <a href="#join" className="underline font-bold text-amber-300 hover:text-amber-200 transition-colors">
                  Join now!
                </a>
              </div>

              <span className="text-amber-400/60 font-bold">•</span>

              <div className="flex items-center gap-2">
                <span>🎉</span>
                <span className="font-bold text-white">Big Savings Alert!</span>
                <span>Get 10% OFF on orders above ₹3000 | Use code:</span>
                <span className="bg-white/15 px-2 py-0.5 rounded font-mono font-bold text-amber-300 tracking-wider border border-white/20">
                  ANVI10
                </span>
              </div>

              <span className="text-amber-400/60 font-bold">•</span>

              <div className="flex items-center gap-2">
                <span>🌿</span>
                <span className="font-bold text-amber-300">Pure Vedic A2 Gir Cow Bilona Ghee & Wood Pressed Oils</span>
                <span className="text-slate-400">|</span>
                <span>Free Express Delivery on orders above ₹999</span>
              </div>

              <span className="text-amber-400/60 font-bold">•</span>

              <div className="flex items-center gap-2">
                <span>🚚</span>
                <span className="font-bold text-white">Direct From Our Regenerative Soil to Your Kitchen</span>
                <span className="text-slate-400">|</span>
                <span className="text-amber-300 font-semibold">100% Lab Tested & Pesticide-Free</span>
              </div>

              <span className="text-amber-400/60 font-bold">•</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN STICKY HEADER & NAV (Permanently sticky at top-0, no shadow) */}
      <header className="w-full font-sans bg-white sticky top-0 z-50">
        {/* Main Logo & Search Bar */}
        <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-4 sm:gap-6 min-h-[72px] md:min-h-[82px]">
          {/* Left: Brand Logo on Left + Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Mobile menu trigger button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 -ml-2 text-gray-700 hover:text-[#2D0345]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo (Transparent background) */}
            <a 
              href="#home" 
              onClick={(e) => {
                if (onNavigateHome) {
                  e.preventDefault()
                  onNavigateHome()
                }
              }}
              className="inline-block group focus:outline-none py-1 cursor-pointer"
            >
              <img
                src={logoImg}
                alt="Anvi Farms"
                className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Center: Search Bar with Increased Length */}
          <div className="hidden md:flex flex-1 items-center justify-center px-6 lg:px-10">
            <div className="search-input-container relative w-full max-w-xl lg:max-w-2xl">
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setIsSearchOpen(true)}
                onClick={() => setIsSearchOpen(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  if (!isSearchOpen) setIsSearchOpen(true)
                }}
                placeholder="Search for Ghee, Honey, Spices, Cold Pressed Oils, Super Foods..."
                className="w-full pl-5 pr-11 py-2.5 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg placeholder-gray-400 text-gray-800 focus:outline-none focus:border-[#2D0345] focus:bg-white focus:ring-2 focus:ring-[#2D0345]/20 transition-all shadow-xs"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSearchQuery('')
                  }}
                  className="absolute right-9 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              ) : null}
              <button 
                type="button" 
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#2D0345] transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* SEARCH DROPDOWN (Matches exact length of the search bar & opens right below it) */}
              <SearchDropdown 
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onAddToCart={(product) => {
                  if (onAddToCart) onAddToCart(product)
                }}
              />
            </div>
          </div>

          {/* Right: Action Icons (Account, Wishlist, Cart) */}
          <div className="flex items-center justify-end gap-3 sm:gap-4 shrink-0">
              {/* User Profile */}
              <a 
                href="#profile" 
                className="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:text-[#2D0345] transition-colors rounded-full hover:bg-gray-50 group"
                title="Account"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.8" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-6 h-6 group-hover:scale-105 transition-transform"
                >
                  <circle cx="12" cy="7" r="4" />
                  <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
              </a>

              {/* Wishlist */}
              <a 
                href="#wishlist" 
                className="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:text-[#2D0345] transition-colors rounded-full hover:bg-gray-50 group"
                title="Wishlist"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.8" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-6 h-6 group-hover:scale-105 group-hover:text-rose-600 transition-all"
                >
                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
                <span className="absolute top-1 right-1 bg-[#2D0345] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white">
                  0
                </span>
              </a>

              {/* Cart Bag */}
              <button 
                type="button"
                onClick={() => {
                  if (onOpenCart) onOpenCart()
                }}
                className="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:text-[#2D0345] transition-colors rounded-full hover:bg-gray-50 group cursor-pointer"
                title="Shopping Bag"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.8" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-6 h-6 group-hover:scale-105 transition-transform"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span className="absolute top-1 right-1 bg-[#2D0345] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>

        {/* Mobile Search Bar below header on small screens */}
        <div className="md:hidden px-4 pb-3">
          <div className="search-input-container relative w-full">
            <input
              type="text"
              value={searchQuery}
              onFocus={() => setIsSearchOpen(true)}
              onClick={() => setIsSearchOpen(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                if (!isSearchOpen) setIsSearchOpen(true)
              }}
              placeholder="Search for Ghee, Honey, Spices, Oils..."
              className="w-full pl-4 pr-10 py-2 text-xs bg-white border border-gray-300 rounded-md placeholder-gray-400 text-gray-800 focus:outline-none focus:border-[#2D0345] focus:bg-white transition-all"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setSearchQuery('')
                }}
                className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            ) : null}
            <button 
              type="button" 
              onClick={() => setIsSearchOpen(true)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Mobile search dropdown */}
            <SearchDropdown 
              isOpen={isSearchOpen}
              onClose={() => setIsSearchOpen(false)}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onAddToCart={(product) => {
                if (onAddToCart) onAddToCart(product)
              }}
            />
          </div>
        </div>
      </div>

      {/* 3. NAVIGATION SUB-HEADER BAR */}
      <nav className="border-b border-gray-100 hidden md:block bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex items-center justify-center gap-7 lg:gap-9 text-[13px] font-bold tracking-wider">
            {/* GHEE */}
            <li>
              <a 
                href="#category/ghee" 
                onClick={(e) => {
                  if (onNavigateCategory) {
                    e.preventDefault()
                    onNavigateCategory('ghee')
                  }
                }}
                className="flex items-center gap-1.5 py-3 text-black hover:text-[#2D0345] transition-colors group cursor-pointer"
              >
                <GheePotIcon className="w-5 h-5 text-[#2D0345] group-hover:scale-110 transition-transform" />
                <span>GHEE</span>
              </a>
            </li>

            {/* HONEY */}
            <li>
              <a 
                href="#category/honey" 
                onClick={(e) => {
                  if (onNavigateCategory) {
                    e.preventDefault()
                    onNavigateCategory('honey')
                  }
                }}
                className="flex items-center gap-1.5 py-3 text-black hover:text-[#2D0345] transition-colors group cursor-pointer"
              >
                <HoneyJarIcon className="w-5 h-5 text-[#2D0345] group-hover:scale-110 transition-transform" />
                <span>HONEY</span>
              </a>
            </li>

            {/* SHOP BY CATEGORY (Dropdown) */}
            <li 
              className="relative"
              onMouseEnter={() => setActiveDropdown('categories')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                type="button"
                className="flex items-center gap-1 py-3 text-black hover:text-[#2D0345] transition-colors cursor-pointer group"
              >
                <span>SHOP BY CATEGORY</span>
                <ChevronDown className={`w-3.5 h-3.5 text-black transition-transform duration-200 ${activeDropdown === 'categories' ? 'rotate-180 text-[#2D0345]' : 'group-hover:text-[#2D0345]'}`} />
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === 'categories' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 w-[530px] sm:w-[560px] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-3.5 overflow-hidden ring-1 ring-black/5">
                    {/* Header bar inside dropdown */}
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100 px-1">
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#2D0345]">
                        Explore Our Collections
                      </span>
                      <span className="text-[11px] font-semibold text-gray-400">
                        8 Farm Fresh Categories
                      </span>
                    </div>

                    {/* Grid of 2 columns with 8 cards */}
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((cat, idx) => (
                        <a
                          key={idx}
                          href={cat.href}
                          onClick={(e) => {
                            setActiveDropdown(null)
                            if (onNavigateCategory) {
                              e.preventDefault()
                              onNavigateCategory(cat.id)
                            }
                          }}
                          className="group flex items-center gap-3 p-1.5 rounded-none hover:bg-purple-50/70 border border-transparent hover:border-purple-100/80 transition-all duration-200 cursor-pointer"
                        >
                          {/* Image Thumbnail */}
                          <div className="relative w-14 h-14 rounded-none overflow-hidden shrink-0 bg-gray-50 border border-gray-200/60 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                            <img
                              src={cat.image}
                              alt={cat.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Text & Count */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <h4 className="text-[13px] font-bold text-gray-900 group-hover:text-[#2D0345] transition-colors truncate">
                                {cat.name}
                              </h4>
                              <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#2D0345] group-hover:translate-x-0.5 transition-all shrink-0" />
                            </div>
                            <p className="text-[10px] text-gray-500 truncate mt-0.5 font-normal">
                              {cat.subtitle}
                            </p>
                            <span className="inline-block text-[9px] font-bold text-[#2D0345] bg-purple-100/80 px-1.5 py-0.5 rounded-none mt-1">
                              {cat.count}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>

                    {/* Bottom Footer banner in dropdown */}
                    <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between px-2 bg-[#FAF7F2] -mx-3.5 -mb-3.5 p-2.5 rounded-b-2xl">
                      <div className="flex items-center gap-2 text-[11px] text-gray-600 font-medium">
                        <span className="text-[#404D1A] font-bold">🌿 100% Vedic & Natural</span>
                        <span className="text-gray-300">•</span>
                        <span>Direct from Goshala</span>
                      </div>
                      <a 
                        href="#category/ghee" 
                        onClick={(e) => {
                          setActiveDropdown(null)
                          if (onNavigateCategory) {
                            e.preventDefault()
                            onNavigateCategory('ghee')
                          }
                        }}
                        className="text-[11px] font-bold text-[#2D0345] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        Explore Categories
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* BLOGS */}
            <li>
              <a 
                href="#blogs" 
                className="flex items-center gap-1.5 py-3 text-black hover:text-[#2D0345] transition-colors group"
              >
                <BookOpen className="w-4 h-4 text-[#2D0345] group-hover:scale-110 transition-transform" />
                <span>BLOGS</span>
              </a>
            </li>

            {/* ANVI FARMS (Dropdown) */}
            <li 
              className="relative"
              onMouseEnter={() => setActiveDropdown('farmlife')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                type="button"
                className="flex items-center gap-1.5 py-3 text-black hover:text-[#2D0345] transition-colors cursor-pointer group"
              >
                <span>ANVI FARMS</span>
                <FarmSproutIcon className="w-4 h-4 text-[#2D0345] group-hover:scale-110 transition-transform" />
                <ChevronDown className={`w-3.5 h-3.5 text-black transition-transform duration-200 ${activeDropdown === 'farmlife' ? 'rotate-180 text-[#2D0345]' : 'group-hover:text-[#2D0345]'}`} />
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === 'farmlife' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 w-[530px] sm:w-[560px] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-3.5 overflow-hidden ring-1 ring-black/5">
                    {/* Header bar inside dropdown */}
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100 px-1">
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#2D0345]">
                        About Anvi Farms
                      </span>
                      <span className="text-[11px] font-semibold text-gray-400">
                        Vedic Heritage & Standards
                      </span>
                    </div>

                    {/* Grid of 2 columns with 4 cards */}
                    <div className="grid grid-cols-2 gap-2">
                      {anviFarmLifeItems.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-center gap-3 p-1.5 rounded-none hover:bg-purple-50/70 border border-transparent hover:border-purple-100/80 transition-all duration-200"
                        >
                          {/* Image Thumbnail */}
                          <div className="relative w-14 h-14 rounded-none overflow-hidden shrink-0 bg-gray-50 border border-gray-200/60 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Text & Badge */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <h4 className="text-[13px] font-bold text-gray-900 group-hover:text-[#2D0345] transition-colors truncate">
                                {item.name}
                              </h4>
                              <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#2D0345] group-hover:translate-x-0.5 transition-all shrink-0" />
                            </div>
                            <p className="text-[10px] text-gray-500 truncate mt-0.5 font-normal">
                              {item.subtitle}
                            </p>
                            <span className="inline-block text-[9px] font-bold text-[#404D1A] bg-[#404D1A]/10 px-1.5 py-0.5 rounded-none mt-1">
                              {item.badge}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>

                    {/* Bottom Footer banner in dropdown */}
                    <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between px-2 bg-[#FAF7F2] -mx-3.5 -mb-3.5 p-2.5 rounded-b-2xl">
                      <div className="flex items-center gap-2 text-[11px] text-gray-600 font-medium">
                        <span className="text-[#404D1A] font-bold">🌾 Zero Chemicals</span>
                        <span className="text-gray-300">•</span>
                        <span>Ancestral Heritage</span>
                      </div>
                      <a 
                        href="#about" 
                        onClick={() => setActiveDropdown(null)}
                        className="text-[11px] font-bold text-[#2D0345] hover:underline flex items-center gap-1"
                      >
                        Discover Our Story
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* CONTACT US */}
            <li>
              <a 
                href="#contact" 
                className="flex items-center gap-1.5 py-3 text-black hover:text-[#2D0345] transition-colors group"
              >
                <PhoneCall className="w-4 h-4 text-[#2D0345] group-hover:scale-110 transition-transform" />
                <span>CONTACT US</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-3 animate-in slide-in-from-top duration-200">
          <a 
            href="#category/ghee" 
            onClick={(e) => {
              setMobileMenuOpen(false)
              if (onNavigateCategory) {
                e.preventDefault()
                onNavigateCategory('ghee')
              }
            }}
            className="flex items-center gap-2 text-sm font-bold text-black py-1.5 hover:text-[#2D0345]"
          >
            <GheePotIcon className="w-4 h-4 text-[#2D0345]" />
            <span>Ghee</span>
          </a>
          <a 
            href="#category/honey" 
            onClick={(e) => {
              setMobileMenuOpen(false)
              if (onNavigateCategory) {
                e.preventDefault()
                onNavigateCategory('honey')
              }
            }}
            className="flex items-center gap-2 text-sm font-bold text-black py-1.5 hover:text-[#2D0345]"
          >
            <HoneyJarIcon className="w-4 h-4 text-[#2D0345]" />
            <span>Honey</span>
          </a>
          <div className="py-1">
            <div className="text-xs font-extrabold text-black uppercase tracking-wider mb-2">Categories</div>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat, idx) => (
                <a 
                  key={idx} 
                  href={cat.href} 
                  onClick={(e) => {
                    setMobileMenuOpen(false)
                    if (onNavigateCategory) {
                      e.preventDefault()
                      onNavigateCategory(cat.id)
                    }
                  }}
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-purple-50 text-xs text-black font-semibold hover:text-[#2D0345] transition-colors"
                >
                  <img src={cat.image} alt={cat.name} className="w-7 h-7 rounded-md object-cover border border-gray-200" />
                  <span className="truncate">{cat.name}</span>
                </a>
              ))}
            </div>
          </div>
          <a href="#blogs" className="flex items-center gap-2 text-sm font-bold text-black py-1.5 hover:text-[#2D0345]">
            <BookOpen className="w-4 h-4 text-[#2D0345]" />
            <span>Blogs</span>
          </a>
          <div className="py-1">
            <div className="text-xs font-extrabold text-black uppercase tracking-wider mb-2">Anvi Farms</div>
            <div className="grid grid-cols-2 gap-2">
              {anviFarmLifeItems.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-purple-50 text-xs text-black font-semibold hover:text-[#2D0345] transition-colors"
                >
                  <img src={item.image} alt={item.name} className="w-7 h-7 rounded-md object-cover border border-gray-200" />
                  <span className="truncate">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
          <a href="#contact" className="flex items-center gap-2 text-sm font-bold text-black py-1.5 hover:text-[#2D0345]">
            <PhoneCall className="w-4 h-4 text-[#2D0345]" />
            <span>Contact Us</span>
          </a>
        </div>
      )}
      </header>
    </>
  )
}
