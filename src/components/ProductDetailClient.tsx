'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types/product';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { ProductQuickViewModal } from './ProductQuickViewModal';
import { CheckoutModal } from './CheckoutModal';

interface ProductDetailClientProps {
  product: Product;
}

export const ProductDetailClient: React.FC<ProductDetailClientProps> = ({ product }) => {
  const { addToCart, openCart, openQuickView, toggleWishlist, isInWishlist, openCheckout } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [purchaseType, setPurchaseType] = useState<'one-time' | 'subscribe'>('one-time');
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState(false);
  const [relatedAddedAnimation, setRelatedAddedAnimation] = useState<{ [productId: string]: boolean }>({});

  const handleRelatedAddToCart = (relProduct: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = relProduct.variants[0];
    addToCart(relProduct, variant, 1);

    setRelatedAddedAnimation((prev) => ({ ...prev, [relProduct.id]: true }));
    setTimeout(() => {
      setRelatedAddedAnimation((prev) => ({ ...prev, [relProduct.id]: false }));
    }, 1200);
  };

  const handleRelatedBuyNow = (relProduct: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = relProduct.variants[0];
    addToCart(relProduct, variant, 1);
    openCheckout();
  };

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [activeModalIndex, setActiveModalIndex] = useState(0);

  const allGallerySlides = [
    {
      type: 'image',
      src: product.image,
      title: product.name,
      subtitle: 'Main Product',
    },
    {
      type: 'image',
      src: product.category === 'honey' ? '/images/story-honey.jpg' : product.category === 'ghee' ? '/images/story-ghee.jpg' : product.id.includes('ragi') ? '/images/story-ragi.jpg' : '/images/gallery-1.jpg',
      title: 'Digestive & Health Benefit',
      subtitle: '100% Pure & Natural Harvest',
    },
    {
      type: 'info',
      src: '/images/gallery-2.jpg',
      title: 'A feel good choice that supports digestive health.',
      subtitle: '100% Pure & Natural Harvest',
      description: 'Crafted using age-old Vedic methods, pure ingredients, and zero artificial preservatives.',
      stats: [
        { label: 'PURE', value: '100%' },
        { label: 'ADDITIVES', value: '0%' },
        { label: 'TESTED', value: 'FSSAI' },
      ],
    },
    {
      type: 'image',
      src: product.category === 'honey' ? '/images/gallery-3.jpg' : product.category === 'ghee' ? '/images/gallery-2.jpg' : '/images/gallery-5.jpg',
      title: 'Vedic Craftsmanship',
      subtitle: 'Traditional Bilona Process',
    },
    {
      type: 'image',
      src: '/images/story-landscape.jpg',
      title: 'Organic Farm Reserves',
      subtitle: 'Ethically Sourced',
    },
    {
      type: 'image',
      src: product.category === 'honey' ? '/images/gallery-7.jpg' : '/images/gallery-8.jpg',
      title: 'Lab Tested Assurance',
      subtitle: 'Certified Quality',
    },
  ];

  const galleryImages = allGallerySlides;

  const discountedPrice = purchaseType === 'subscribe'
    ? Math.round(selectedVariant.price * 0.9)
    : selectedVariant.price;

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2500);
    openCart();
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF9F4] font-sans antialiased text-[#1C1917] flex flex-col selection:bg-[#C28E2E] selection:text-[#0D2B1D]">
      <Header />

      <main className="flex-1 max-w-[1720px] mx-auto w-full px-4 sm:px-8 lg:px-12 py-8 sm:py-12 space-y-16">

        {/* TOP SPLIT SECTION: Left Media Showcase + Right Sticky Purchase Sidebar (Matching Reference Image 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* LEFT COLUMN: Hero Product Media & Editorial Grid */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Product Image Container */}
            <div className="relative bg-[#FAF5EC] rounded-none border border-[#DFCFA8] shadow-xs overflow-hidden w-full aspect-square">
              
              {/* Product Image */}
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

            </div>

            {/* 2x2 ALTERNATIVE MEDIA & EDITORIAL GRID */}
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                
                {/* Card 1: Main Product Image */}
                <div
                  onClick={() => { setSelectedImage(galleryImages[0].src || product.image); setActiveModalIndex(0); }}
                  className={`relative rounded-none overflow-hidden aspect-square border shadow-xs group cursor-pointer transition-all ${selectedImage === galleryImages[0].src ? 'border-[#0A2417] ring-2 ring-[#0A2417]' : 'border-[#DFCFA8] hover:border-[#0A2417]'}`}
                >
                  <Image
                    src={galleryImages[0].src || product.image}
                    alt={galleryImages[0].title || product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Card 2: Benefit & Stats Graphic Card */}
                <div
                  onClick={() => { if (galleryImages[1].src) setSelectedImage(galleryImages[1].src); setActiveModalIndex(1); }}
                  className={`relative rounded-none overflow-hidden aspect-square border shadow-xs group cursor-pointer transition-all bg-[#FAF5EC] p-3 xs:p-4 sm:p-6 flex flex-col justify-between ${selectedImage === galleryImages[1].src ? 'border-[#0A2417] ring-2 ring-[#0A2417]' : 'border-[#DFCFA8] hover:border-[#0A2417]'}`}
                >
                  <div className="space-y-1 sm:space-y-2">
                    <h4 className="font-serif font-black text-xs xs:text-sm sm:text-lg text-[#0A2417] leading-tight">
                      A feel good choice that supports digestive health.
                    </h4>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs font-extrabold text-[#BE8628]">
                      100% Pure & Natural Harvest
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-1 xs:gap-1.5 pt-1.5 xs:pt-2">
                    <div className="bg-white rounded-none p-1 xs:p-1.5 sm:p-2 text-center border border-[#DFCFA8]">
                      <span className="block font-black text-[11px] xs:text-xs sm:text-sm text-[#0A2417]">100%</span>
                      <span className="block text-[7px] xs:text-[8px] sm:text-[9px] font-bold text-slate-500 uppercase">Pure</span>
                    </div>
                    <div className="bg-white rounded-none p-1 xs:p-1.5 sm:p-2 text-center border border-[#DFCFA8]">
                      <span className="block font-black text-[11px] xs:text-xs sm:text-sm text-[#0A2417]">0%</span>
                      <span className="block text-[7px] xs:text-[8px] sm:text-[9px] font-bold text-slate-500 uppercase">Add</span>
                    </div>
                    <div className="bg-white rounded-none p-1 xs:p-1.5 sm:p-2 text-center border border-[#DFCFA8]">
                      <span className="block font-black text-[11px] xs:text-xs sm:text-sm text-[#0A2417]">FSSAI</span>
                      <span className="block text-[7px] xs:text-[8px] sm:text-[9px] font-bold text-slate-500 uppercase">Test</span>
                    </div>
                  </div>
                </div>

                {/* Card 3: Science & Process Card */}
                <div
                  onClick={() => { if (galleryImages[3].src) setSelectedImage(galleryImages[3].src); setActiveModalIndex(3); }}
                  className={`relative rounded-none overflow-hidden aspect-square border shadow-xs group cursor-pointer transition-all bg-[#0A2417] p-3 xs:p-4 sm:p-6 text-white flex flex-col justify-between ${selectedImage === galleryImages[3].src ? 'border-[#BE8628] ring-2 ring-[#BE8628]' : 'border-[#DFCFA8] hover:border-[#BE8628]'}`}
                >
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-3">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-none bg-[#BE8628]/20 border border-[#BE8628]/40 text-[8px] xs:text-[9px] sm:text-[10px] font-black tracking-wider text-[#BE8628] uppercase">
                      ✨ Science & Tradition
                    </div>
                    <h4 className="font-serif font-black text-xs xs:text-sm sm:text-lg text-[#FAF5EC] leading-tight">
                      Crafted with Vedic Craftsmanship
                    </h4>
                    <p className="text-[9px] xs:text-[10px] sm:text-xs text-slate-200 leading-relaxed font-normal line-clamp-2">
                      {product.process || 'Hand-crafted following age-old traditional methods with zero artificial preservatives.'}
                    </p>
                  </div>

                  <div className="space-y-0.5 xs:space-y-1 pt-1.5 xs:pt-2 border-t border-white/10 text-[9px] xs:text-[10px] sm:text-xs text-slate-200">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-[#BE8628] font-bold">✓</span>
                      <span className="truncate">{product.benefits[0]}</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-[#BE8628] font-bold">✓</span>
                      <span className="truncate">{product.benefits[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Card 4: Farm & Nature Lifestyle Visual */}
                <div
                  onClick={() => { if (galleryImages[4].src) setSelectedImage(galleryImages[4].src); setActiveModalIndex(4); }}
                  className={`relative rounded-none overflow-hidden aspect-square border shadow-xs group cursor-pointer transition-all ${selectedImage === galleryImages[4].src ? 'border-[#0A2417] ring-2 ring-[#0A2417]' : 'border-[#DFCFA8] hover:border-[#0A2417]'}`}
                >
                  <Image
                    src={galleryImages[4].src || '/images/story-landscape.jpg'}
                    alt={galleryImages[4].title || 'Farm Harvest'}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

              </div>

              {/* View All Centered Underlined Link */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setIsGalleryModalOpen(true)}
                  className="text-xs font-black uppercase tracking-[0.25em] text-[#0A2417] underline hover:text-[#BE8628] transition-colors cursor-pointer inline-block pb-1"
                >
                  View all
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Purchase Form Sidebar */}
          <div className="lg:col-span-5 space-y-6 sticky top-28 lg:top-36 self-start">
            
            {/* Header Block */}
            <div className="space-y-3 border-b border-[#DFCFA8] pb-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#C28E2E]">
                {product.category === 'ghee' ? 'Pure A2 Vedic Ghee' : product.category === 'honey' ? 'Raw Wild Nectar' : 'Traditional Produce'}
              </span>

              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0A2417] leading-tight">
                {product.name}
              </h1>

              <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                {product.tagline}
              </p>

              {/* Price & Star Rating Row (Price Left, Rating Opposite Right) */}
              <div className="flex items-center justify-between gap-4 pt-2">
                {/* Price Display */}
                <div className="flex items-baseline gap-2.5">
                  <span className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#0A2417]">₹ {selectedVariant.price}</span>
                  {selectedVariant.originalPrice && (
                    <span className="text-xs sm:text-base text-slate-400 line-through">₹ {selectedVariant.originalPrice}</span>
                  )}
                </div>

                {/* Star Rating (Opposite Right Side) */}
                <div className="flex items-center gap-1.5 text-xs bg-[#FAF5EC] px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-full border border-[#DFCFA8]">
                  <div className="flex text-[#C28E2E] font-bold text-xs sm:text-sm">★★★★★</div>
                  <span className="font-extrabold text-[#0A2417] text-xs">{product.rating}</span>
                  <span className="text-slate-500 text-[10px] xs:text-[11px]">({product.reviewCount})</span>
                </div>
              </div>
            </div>

            {/* Variant Dropdown & Pack Size Pills */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-black uppercase tracking-wider text-[#0A2417]">
                  Pack Size: <span className="font-normal text-slate-600">{selectedVariant.name}</span>
                </label>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  In Stock
                </span>
              </div>

              {/* Pack Size Pills */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {product.variants.map((variant) => {
                  const isSelected = selectedVariant.id === variant.id;
                  return (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 xs:px-5 py-2 xs:py-2.5 rounded-full text-xs font-extrabold transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#310048] text-white border-[#310048] shadow-sm'
                          : 'bg-[#FAF5EC] text-[#310048] border-[#DFCFA8] hover:border-[#310048]'
                      }`}
                    >
                      {variant.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Controller & Add to Cart Button */}
            <div className="pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
              
              {/* Stepper */}
              <div className="flex items-center justify-between xs:justify-start border border-[#DFCFA8] rounded-full bg-[#FAF5EC] p-1 shrink-0">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center font-extrabold text-sm text-[#310048] hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  -
                </button>
                <span className="px-4 font-black text-sm text-[#310048] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center font-extrabold text-sm text-[#310048] hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>

              {/* Add to Cart CTA */}
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3.5 sm:py-4 px-6 rounded-full bg-[#310048] hover:bg-[#4A0868] text-white font-extrabold text-xs uppercase tracking-[0.2em] shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>ADD TO CART</span>
                <span>🛒</span>
              </button>
            </div>

            {addedMessage && (
              <div className="p-3 rounded-xl bg-purple-100 border border-purple-300 text-xs font-bold text-purple-900 text-center animate-fade-in">
                ✓ Added {quantity} x {product.name} ({selectedVariant.name}) to your cart!
              </div>
            )}

            {/* Cross-Sell Variety Pack Box */}
            <div className="bg-[#FAF0DC] p-4 rounded-xl border border-[#DFCFA8] flex flex-col xs:flex-row xs:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#310048] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  🎁
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-[#310048]">Can&apos;t pick just one?</h4>
                  <p className="text-[11px] text-slate-600 font-normal">Explore our organic gift hampers & bundles</p>
                </div>
              </div>
              <Link
                href="/#our-collections"
                className="px-4 py-2 rounded-full bg-white border border-[#310048] text-[#310048] font-extrabold text-[11px] hover:bg-[#310048] hover:text-white transition-all shrink-0 text-center"
              >
                Shop Hampers
              </Link>
            </div>

          </div>

        </div>

        {/* MIDDLE SECTION: FULL-WIDTH WAVY BACKGROUND PRODUCT STORY & NUTRITION (Matching Reference Image 2!) */}
        <section className="relative w-screen left-1/2 -translate-x-1/2 mt-28 sm:mt-36 lg:mt-44 mb-20 py-14 sm:py-20 bg-[#EFE2C6] text-[#1C1917]">
          
          {/* Top Wave Divider (Exact Olipop S-Curve) */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%] pointer-events-none">
            <svg className="relative block w-full h-12 sm:h-20 lg:h-28 text-[#EFE2C6]" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
              <path d="M0,40 C280,10 640,85 1000,75 C1180,70 1340,35 1440,30 L1440,100 L0,100 Z"></path>
            </svg>
          </div>

          {/* Main Container */}
          <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              
              {/* Left Side: Product Title, Story, Storage, Ingredients & Quality Badges */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Title & Subtitle */}
                <div className="space-y-1.5 pb-4 border-b border-[#DFCFA8]/70">
                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-black text-[#0A2417] leading-tight">
                    {product.name}
                  </h2>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BE8628]">
                    <span>Keep in cool dry place</span>
                    <span>❄️</span>
                  </div>
                </div>

                {/* Story Description */}
                <div className="space-y-2">
                  <h4 className="font-black text-xs uppercase tracking-wider text-[#0A2417]">
                    DETAILED PRODUCT STORY
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {product.longDescription || product.description || 'Our A2 Desi Cow Ghee is prepared strictly following the traditional Bilona process: boiled whole A2 milk is set into curd, churned bi-directionally with wooden bilona to yield fresh makhan (butter), and slow-heated on low fire. Contains zero additives, zero preservatives, and zero synthetic hormones.'}
                  </p>
                </div>

                {/* Storage Recommendations */}
                <div className="space-y-1">
                  <h4 className="font-black text-xs uppercase tracking-wider text-[#0A2417]">
                    STORAGE INSTRUCTIONS:
                  </h4>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    Store in a cool, dry place away from direct sunlight and heat. Use a clean, dry spoon for every use. Pure bilona ghee naturally solidifies in cooler temperatures.
                  </p>
                </div>

                {/* Ingredients */}
                <div className="space-y-1">
                  <h4 className="font-black text-xs uppercase tracking-wider text-[#0A2417]">
                    INGREDIENTS:
                  </h4>
                  <p className="text-xs text-slate-800 font-semibold leading-relaxed">
                    {product.category === 'ghee'
                      ? '100% Pure A2 Gir Cow Milk Fat (Hand Churned Vedic Butter).'
                      : product.category === 'honey'
                      ? '100% Pure Raw Wild Forest Honey (Unfiltered, Unheated).'
                      : '100% Cold Pressed Sun-Dried Seeds / Sprouted Grains.'}
                  </p>
                </div>

                {/* 4 Quality Badges */}
                <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
                  <div className="flex flex-col items-center justify-center text-center p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-[#DFCFA8] shadow-2xs space-y-1 sm:space-y-1.5">
                    <span className="text-xl sm:text-2xl">🍃</span>
                    <span className="text-[9px] sm:text-[10px] font-black text-[#0A2417] uppercase tracking-wider leading-tight">REAL INGREDIENTS</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-[#DFCFA8] shadow-2xs space-y-1 sm:space-y-1.5">
                    <span className="text-xl sm:text-2xl">🧈</span>
                    <span className="text-[9px] sm:text-[10px] font-black text-[#0A2417] uppercase tracking-wider leading-tight">DIGESTIVE HEALTH</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-[#DFCFA8] shadow-2xs space-y-1 sm:space-y-1.5">
                    <span className="text-xl sm:text-2xl">🌱</span>
                    <span className="text-[9px] sm:text-[10px] font-black text-[#0A2417] uppercase tracking-wider leading-tight">100% PURE VEG</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-[#DFCFA8] shadow-2xs space-y-1 sm:space-y-1.5">
                    <span className="text-xl sm:text-2xl">🛡️</span>
                    <span className="text-[9px] sm:text-[10px] font-black text-[#0A2417] uppercase tracking-wider leading-tight">LAB CERTIFIED</span>
                  </div>
                </div>

              </div>

              {/* Right Side: Authentic Nutrition Facts Table */}
              <div className="lg:col-span-5 bg-white p-4 xs:p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-[#0A2417] shadow-sm font-sans space-y-3 sm:space-y-4">
                
                <div className="border-b-4 sm:border-b-8 border-[#0A2417] pb-2">
                  <h3 className="text-2xl xs:text-3xl font-black text-[#0A2417] tracking-tight uppercase">
                    NUTRITION FACTS
                  </h3>
                  <p className="text-xs font-semibold text-slate-600">1 serving per container</p>
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#0A2417] pt-1">
                    <span>Serving size</span>
                    <span>1 Tbsp (15 ml)</span>
                  </div>
                </div>

                {/* Calories */}
                <div className="border-b-4 border-[#0A2417] py-2 flex justify-between items-end">
                  <div>
                    <span className="text-[9px] xs:text-[10px] font-extrabold text-slate-500 block uppercase">AMOUNT PER SERVING</span>
                    <span className="text-xl xs:text-2xl font-black text-[#0A2417]">Calories</span>
                  </div>
                  <span className="text-3xl xs:text-4xl font-black text-[#0A2417]">120</span>
                </div>

                {/* Nutrients List */}
                <div className="space-y-1 xs:space-y-1.5 text-xs text-[#0A2417]">
                  <div className="text-right font-extrabold border-b border-slate-300 pb-1 text-[10px] xs:text-[11px]">
                    % Daily Value*
                  </div>

                  <div className="flex justify-between border-b border-slate-200 py-1 font-bold">
                    <span>Total Fat <span className="font-normal text-slate-600">14g</span></span>
                    <span>18%</span>
                  </div>

                  <div className="flex justify-between border-b border-slate-200 py-1 pl-3 xs:pl-4 font-medium text-slate-700">
                    <span>Saturated Fat 9g</span>
                    <span className="font-bold text-[#0A2417]">45%</span>
                  </div>

                  <div className="flex justify-between border-b border-slate-200 py-1 pl-3 xs:pl-4 font-medium text-slate-700">
                    <span>Trans Fat 0g</span>
                    <span className="font-bold text-[#0A2417]">0%</span>
                  </div>

                  <div className="flex justify-between border-b border-slate-200 py-1 font-bold">
                    <span>Cholesterol <span className="font-normal text-slate-600">30mg</span></span>
                    <span>10%</span>
                  </div>

                  <div className="flex justify-between border-b border-slate-200 py-1 font-bold">
                    <span>Sodium <span className="font-normal text-slate-600">0mg</span></span>
                    <span>0%</span>
                  </div>

                  <div className="flex justify-between border-b border-slate-200 py-1 font-bold">
                    <span>Total Carbohydrate <span className="font-normal text-slate-600">0g</span></span>
                    <span>0%</span>
                  </div>

                  <div className="flex justify-between border-b border-slate-200 py-1 font-bold">
                    <span>Protein <span className="font-normal text-slate-600">0g</span></span>
                    <span>0%</span>
                  </div>

                  <div className="flex justify-between border-b border-slate-200 py-1 font-bold pt-2">
                    <span>Omega-3 Fatty Acids</span>
                    <span>450 mg</span>
                  </div>

                  <div className="flex justify-between border-b border-slate-200 py-1 font-bold">
                    <span>Vitamin A</span>
                    <span>12%</span>
                  </div>

                  <div className="flex justify-between py-1 font-bold">
                    <span>Vitamin E</span>
                    <span>8%</span>
                  </div>
                </div>

                <p className="text-[9px] xs:text-[10px] text-slate-500 font-normal border-t border-slate-300 pt-2 leading-tight">
                  *The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet 2,000 calories a day is used for general nutrition advice.
                </p>

              </div>

            </div>
          </div>

          {/* Bottom Wave Divider (Matching Olipop Reference Curve) */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[99%] pointer-events-none z-10">
            <svg className="relative block w-full h-12 sm:h-20 lg:h-28 text-[#EFE2C6]" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
              <path d="M0,0 L1440,0 L1440,30 C1340,35 1180,70 1000,75 C640,85 280,10 0,40 Z"></path>
            </svg>
          </div>

        </section>

        {/* BOTTOM SECTION: Customer Reviews */}
        <section className="space-y-6 sm:space-y-8 pt-4">
          <div className="space-y-1.5 sm:space-y-2">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#C28E2E]">VERIFIED FEEDBACK</span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#0A2417]">Customer Reviews ({product.reviews?.length || 1})</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((rev) => (
                <div key={rev.id} className="p-4 sm:p-6 rounded-2xl bg-[#FAF5EC] border border-[#DFCFA8] space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex text-[#C28E2E] font-bold">★★★★★</div>
                    <span className="text-[10px] font-extrabold text-[#0A2417] bg-[#EAE2CE] px-2.5 py-0.5 rounded-full border border-[#D8CCB0]">
                      ✓ Verified Buyer
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed">&ldquo;{rev.comment}&rdquo;</p>
                  <div className="pt-2 border-t border-[#DFCFA8]/70 flex items-center justify-between text-xs font-bold text-[#0A2417]">
                    <span>{rev.author} ({rev.location})</span>
                    <span className="text-slate-400 text-[10px] font-normal">{rev.date}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF5EC] border border-[#DFCFA8] space-y-3">
                <div className="flex text-[#C28E2E] font-bold text-xs">★★★★★</div>
                <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed">&ldquo;Pure granular aroma and excellent taste! Highly recommended.&rdquo;</p>
                <span className="text-xs font-bold text-[#0A2417] block">Verified Customer</span>
              </div>
            )}
          </div>
        </section>

        {/* RELATED PRODUCTS / EXPLORE MORE */}
        <section className="space-y-8 pt-8">
          <div className="space-y-1.5 sm:space-y-2">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#C28E2E]">EXPLORE MORE</span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-[#0A2417]">More Farm Fresh Essentials</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedProducts.map((rel) => {
              const isWishlisted = isInWishlist(rel.id);
              const isAdded = relatedAddedAnimation[rel.id];

              return (
                <div key={rel.id} className="group flex flex-col justify-between h-full space-y-4">
                  <div className="space-y-3.5">
                    {/* Photo Frame Container with Hover Action Icons */}
                    <Link
                      href={`/product/${rel.id}`}
                      className="relative aspect-[4/5] w-full overflow-hidden bg-white cursor-pointer block"
                    >
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        priority
                      />

                      {/* Top Left Gold NEW Tag */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-[#C28E2E] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 shadow-xs">
                          NEW
                        </span>
                      </div>

                      {/* Center Floating 3 Action Icons (Wishlist | Add to Cart | Quick View) */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                        {/* Wishlist Heart */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleWishlist(rel.id);
                          }}
                          className={`w-11 h-11 rounded-full bg-white text-[#310048] shadow-md flex items-center justify-center transition-transform hover:scale-110 cursor-pointer ${
                            isWishlisted ? 'bg-[#310048] text-white' : 'hover:bg-[#310048] hover:text-white'
                          }`}
                          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                        >
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </button>

                        {/* Add to Cart Bag */}
                        <button
                          onClick={(e) => handleRelatedAddToCart(rel, e)}
                          className={`w-11 h-11 rounded-full bg-white text-[#310048] shadow-md flex items-center justify-center transition-transform hover:scale-110 cursor-pointer ${
                            isAdded ? 'bg-[#C28E2E] text-white' : 'hover:bg-[#310048] hover:text-white'
                          }`}
                          title="Add to Cart"
                        >
                          {isAdded ? (
                            <span className="font-bold text-xs">✓</span>
                          ) : (
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                              <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h6v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" />
                            </svg>
                          )}
                        </button>

                        {/* Quick View Eye */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            openQuickView(rel);
                          }}
                          className="w-11 h-11 rounded-full bg-white text-[#310048] shadow-md flex items-center justify-center transition-transform hover:scale-110 hover:bg-[#310048] hover:text-white cursor-pointer"
                          title="Quick View"
                        >
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                          </svg>
                        </button>
                      </div>
                    </Link>

                    {/* Centered Product Title & Price */}
                    <div className="text-center space-y-1.5 pt-1">
                      <Link href={`/product/${rel.id}`} className="block">
                        <h4 className="font-serif font-extrabold text-lg sm:text-xl text-[#0A2417] group-hover:text-[#C28E2E] transition-colors line-clamp-1 leading-snug">
                          {rel.name}
                        </h4>
                      </Link>

                      <div className="text-center font-extrabold text-[#C28E2E] text-base sm:text-lg">
                        ₹ {rel.variants[0].price}
                      </div>
                    </div>
                  </div>

                  {/* BUY NOW Outlined Button */}
                  <button
                    onClick={(e) => handleRelatedBuyNow(rel, e)}
                    className="w-full py-2.5 sm:py-3 border border-[#320047] text-[#320047] hover:bg-[#320047] hover:text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-1.5 shadow-xs cursor-pointer group/btn"
                  >
                    <span className="text-[#E5B842] group-hover/btn:text-white transition-colors">⚡</span>
                    <span>BUY NOW</span>
                  </button>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* FULLSCREEN MEDIA LIGHTBOX MODAL */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAF9F4] flex flex-col justify-between p-3 xs:p-4 sm:p-8 animate-fadeIn select-none">
          
          {/* Top Bar: Close Button at top right */}
          <div className="w-full flex items-center justify-end z-10 px-2 sm:px-6">
            <button
              onClick={() => setIsGalleryModalOpen(false)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-300 hover:border-[#0A2417] bg-white flex items-center justify-center text-slate-700 hover:text-[#0A2417] transition-all cursor-pointer shadow-xs"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Center Main Media View with Left/Right Arrows */}
          <div className="relative flex-1 w-full flex items-center justify-center py-2 sm:py-4 px-2 sm:px-8">
            
            {/* Left Arrow Button */}
            <button
              onClick={() => setActiveModalIndex((prev) => (prev === 0 ? allGallerySlides.length - 1 : prev - 1))}
              className="absolute left-1 xs:left-2 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full border border-[#0A2417] bg-white/80 backdrop-blur-xs flex items-center justify-center text-[#0A2417] hover:bg-[#0A2417] hover:text-[#FAF9F4] transition-all cursor-pointer hover:scale-105 shadow-md"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Main Slide Card View */}
            <div className="relative w-full max-w-5xl h-[65vh] xs:h-[70vh] sm:h-[76vh] flex items-center justify-center">
              {allGallerySlides[activeModalIndex].type === 'image' ? (
                <Image
                  src={allGallerySlides[activeModalIndex].src}
                  alt={allGallerySlides[activeModalIndex].title || product.name}
                  fill
                  className="object-contain"
                  priority
                />
              ) : (
                <div className="w-full h-full p-4 xs:p-6 sm:p-10 flex flex-col justify-between bg-[#FAF5EC] rounded-2xl border border-[#DFCFA8]">
                  <div className="space-y-2 xs:space-y-4">
                    <span className="text-[10px] xs:text-xs font-black uppercase tracking-widest text-[#BE8628]">
                      {allGallerySlides[activeModalIndex].subtitle}
                    </span>
                    <h3 className="font-serif font-black text-lg xs:text-2xl sm:text-3xl text-[#0A2417] leading-tight">
                      {allGallerySlides[activeModalIndex].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {allGallerySlides[activeModalIndex].description}
                    </p>
                  </div>
                  
                  {allGallerySlides[activeModalIndex].stats && (
                    <div className="grid grid-cols-3 gap-2 xs:gap-3">
                      {allGallerySlides[activeModalIndex].stats.map((s, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-2 xs:p-3 text-center border border-[#DFCFA8] shadow-xs">
                          <span className="block font-black text-base xs:text-xl text-[#0A2417]">{s.value}</span>
                          <span className="block text-[8px] xs:text-[10px] font-bold text-slate-500 uppercase">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={() => setActiveModalIndex((prev) => (prev === allGallerySlides.length - 1 ? 0 : prev + 1))}
              className="absolute right-1 xs:right-2 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full border border-[#0A2417] bg-white/80 backdrop-blur-xs flex items-center justify-center text-[#0A2417] hover:bg-[#0A2417] hover:text-[#FAF9F4] transition-all cursor-pointer hover:scale-105 shadow-md"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

          {/* Bottom Horizontal Thumbnails Carousel Bar */}
          <div className="w-full flex items-center justify-center gap-2 xs:gap-3 overflow-x-auto py-2 px-2 xs:px-4 no-scrollbar z-10">
            {allGallerySlides.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveModalIndex(idx);
                  if (slide.src) setSelectedImage(slide.src);
                }}
                className={`relative w-11 h-11 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-none overflow-hidden transition-all shrink-0 cursor-pointer ${
                  activeModalIndex === idx
                    ? 'border-2 border-[#0A2417] scale-105 shadow-sm'
                    : 'border border-slate-300/60 hover:border-[#0A2417]/60'
                }`}
              >
                {slide.type === 'image' ? (
                  <Image
                    src={slide.src}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#0A2417] text-[#BE8628] flex items-center justify-center font-black text-[9px] xs:text-[10px] p-1 text-center leading-none uppercase">
                    INFO
                  </div>
                )}
              </button>
            ))}
          </div>

        </div>
      )}

      <Footer />

      <CartDrawer />
      <ProductQuickViewModal />
      <CheckoutModal />
    </div>
  );
};
