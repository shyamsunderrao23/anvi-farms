'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartProvider, useCart } from '../../context/CartContext';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CartDrawer } from '../../components/CartDrawer';
import { WishlistDrawer } from '../../components/WishlistDrawer';
import { CelebrationModal } from '../../components/CelebrationModal';
import { ProductQuickViewModal } from '../../components/ProductQuickViewModal';
import { CheckoutModal } from '../../components/CheckoutModal';
import { PRODUCTS } from '../../data/products';
import { Product, ProductVariant } from '../../types/product';

function WishlistContent() {
  const { wishlist, toggleWishlist, addToCart, openQuickView } = useCart();
  const [selectedVariants, setSelectedVariants] = useState<{ [productId: string]: ProductVariant }>({});

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const handleVariantChange = (productId: string, variant: ProductVariant) => {
    setSelectedVariants((prev) => ({ ...prev, [productId]: variant }));
  };

  const handleAddAllToCart = () => {
    wishlistProducts.forEach((product) => {
      const variant = selectedVariants[product.id] || product.variants[0];
      addToCart(product, variant, 1);
    });
  };

  return (
    <main className="flex-1 py-12 sm:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1550px] mx-auto space-y-10 sm:space-y-14">

        {/* Section Header Block */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DFCFA8] text-xs font-bold uppercase tracking-[0.2em] text-[#0A2417]">
            <span>❤️</span>
            <span>YOUR SAVED FAVOURITES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#320047] tracking-tight">
            My Wishlist ({wishlistProducts.length})
          </h1>
          <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto font-medium">
            Your curated collection of pure Vedic A2 ghee, raw forest honey, and cold pressed oils.
          </p>

          {wishlistProducts.length > 0 && (
            <div className="pt-2">
              <button
                onClick={handleAddAllToCart}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#310048] hover:bg-[#4A0868] text-white font-extrabold text-xs uppercase tracking-[0.15em] border border-[#C28E2E] shadow-md transition-all hover:scale-105 cursor-pointer"
              >
                <span>🛒 ADD ALL ITEMS TO CART</span>
              </button>
            </div>
          )}
        </div>

        {/* Wishlist Items Grid */}
        {wishlistProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {wishlistProducts.map((product) => {
              const currentVariant = selectedVariants[product.id] || product.variants[0];

              return (
                <div
                  key={product.id}
                  className="bg-[#FAF5EC] rounded-3xl border-2 border-[#DFCFA8] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
                >
                  {/* Remove from Wishlist Heart Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-red-500 flex items-center justify-center shadow-md transition-all cursor-pointer"
                    title="Remove from Wishlist"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>

                  {/* Product Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-20 bg-[#310048] text-[#C28E2E] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-[#C28E2E]">
                      {product.badge}
                    </div>
                  )}

                  {/* Image Container */}
                  <div
                    onClick={() => openQuickView(product)}
                    className="relative h-64 w-full bg-white overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-[#310048]/90 text-white text-xs font-bold px-4 py-2 rounded-full border border-[#C28E2E]">
                        Quick Preview 👁️
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                        <span className="uppercase tracking-wider text-[#310048] font-bold">{product.category}</span>
                        <div className="flex items-center gap-1 text-[#C28E2E] font-bold">
                          <span>★</span>
                          <span>{product.rating}</span>
                          <span className="text-slate-400 font-normal">({product.reviewCount})</span>
                        </div>
                      </div>

                      <h3
                        onClick={() => openQuickView(product)}
                        className="font-serif font-extrabold text-base text-[#1C1917] hover:text-[#C28E2E] transition-colors line-clamp-2 cursor-pointer"
                      >
                        {product.name}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-2 font-normal">
                        {product.description}
                      </p>
                    </div>

                    {/* Variant Selector & Price */}
                    <div className="space-y-3 pt-2 border-t border-[#DFCFA8]/50">
                      {/* Pack Variant Dropdown */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-700">Select Pack:</span>
                        <select
                          value={currentVariant.id}
                          onChange={(e) => {
                            const found = product.variants.find((v) => v.id === e.target.value);
                            if (found) handleVariantChange(product.id, found);
                          }}
                          className="text-xs font-bold text-[#310048] bg-white border border-[#DFCFA8] rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#310048] cursor-pointer"
                        >
                          {product.variants.map((v) => (
                            <option key={v.id} value={v.id}>
                              {v.name} — ₹{v.price}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Price Display */}
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-extrabold text-[#310048] font-serif">
                          ₹{currentVariant.price}
                        </span>
                        {currentVariant.originalPrice && (
                          <span className="text-xs text-slate-400 line-through">
                            ₹{currentVariant.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={() => addToCart(product, currentVariant, 1)}
                        className="w-full py-3 rounded-full bg-[#310048] hover:bg-[#4A0868] text-white font-extrabold text-xs uppercase tracking-[0.15em] border border-[#C28E2E] shadow-sm transition-all hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>🛒 ADD TO CART</span>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Wishlist View */
          <div className="bg-white rounded-3xl p-12 sm:p-20 text-center space-y-6 max-w-xl mx-auto border-2 border-[#DFCFA8] shadow-lg">
            <div className="w-20 h-20 rounded-full bg-[#FAF5EC] border-2 border-[#DFCFA8] flex items-center justify-center text-4xl mx-auto">
              🤍
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#310048]">
                Your Wishlist is Empty
              </h2>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                You haven&apos;t saved any products to your wishlist yet. Explore our pure A2 Desi Ghee, Raw Forest Honey, and Cold Pressed Oils to save your favourites!
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#310048] hover:bg-[#4A0868] text-white font-extrabold text-xs uppercase tracking-[0.2em] border border-[#C28E2E] shadow-md transition-all hover:scale-105 cursor-pointer"
              >
                <span>EXPLORE PRODUCTS →</span>
              </Link>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}

export default function WishlistPage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FAF9F4] font-sans antialiased text-[#1C1917] flex flex-col">
        <Header />
        <WishlistContent />
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
