'use client';

import React from 'react';
import { CartProvider } from '../context/CartContext';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { OurCollections } from '../components/OurCollections';
import { FarmFavorites } from '../components/FarmFavorites';
import { OurStory } from '../components/OurStory';
import { OurGallery } from '../components/OurGallery';
import { InstagramFeed } from '../components/InstagramFeed';
import { CustomerReviews } from '../components/CustomerReviews';
import { OrderTrackingCTA } from '../components/OrderTrackingCTA';
import { OurPromise } from '../components/OurPromise';
import { Footer } from '../components/Footer';
import { CartDrawer } from '../components/CartDrawer';
import { WishlistDrawer } from '../components/WishlistDrawer';
import { CelebrationModal } from '../components/CelebrationModal';
import { ProductQuickViewModal } from '../components/ProductQuickViewModal';
import { CheckoutModal } from '../components/CheckoutModal';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F4] font-sans antialiased text-[#1C1917] selection:bg-[#C28E2E] selection:text-[#0D2B1D] flex flex-col">
      {/* Main Sticky Header */}
      <Header />

      {/* Main Editorial Sections */}
      <main className="flex-1">
        <Hero />
        {/* <OurPromise /> */}
        <OurCollections />
        <FarmFavorites />
        <OurStory />
        <OurGallery />
        <InstagramFeed />
        <CustomerReviews />
        <OrderTrackingCTA />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Overlays */}
      <CartDrawer />
      <WishlistDrawer />
      <CelebrationModal />
      <ProductQuickViewModal />
      <CheckoutModal />
    </div>
  );
}
