'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Product } from '../types/product';

export const OurCollections: React.FC = () => {
  const { addToCart, openQuickView, toggleWishlist, isInWishlist, openCheckout } = useCart();
  const [addedAnimation, setAddedAnimation] = useState<{ [productId: string]: boolean }>({});

  const collectionItems = [
    {
      id: 'a2-desi-cow-ghee',
      badge: 'NEW',
      priceFormatted: '₹ 650',
    },
    {
      id: 'vedic-buffalo-ghee',
      badge: 'NEW',
      priceFormatted: '₹ 850',
    },
    {
      id: 'raw-wild-forest-honey',
      badge: 'NEW',
      priceFormatted: '₹ 380',
    },
    {
      id: 'sprouted-ragi-malt',
      badge: 'NEW',
      priceFormatted: '₹ 290',
    },
  ];

  const featuredProducts = collectionItems
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      return product ? { ...product, customMeta: item } : null;
    })
    .filter((p): p is Product & { customMeta: (typeof collectionItems)[0] } => p !== null);

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const variant = product.variants[0];
    addToCart(product, variant, 1);

    setAddedAnimation((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedAnimation((prev) => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  const handleBuyNow = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const variant = product.variants[0];
    addToCart(product, variant, 1);
    openCheckout();
  };

  return (
    <section id="products" className="w-full bg-[#FAF9F4] py-16 sm:py-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1720px] mx-auto space-y-12 sm:space-y-16">

        {/* Section Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.32em] text-[#0A2417]">
            OUR COLLECTIONS
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-cursive font-normal text-[#320047] tracking-normal leading-tight py-1">
            Crafted by Tradition, Loved by Families
          </h2>
        </div>

        {/* Product List matching exact user reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-4">
          {featuredProducts.map((product) => {
            const isWishlisted = isInWishlist(product.id);
            const isAdded = addedAnimation[product.id];
            const meta = product.customMeta;

            return (
              <div key={product.id} className="group flex flex-col justify-between h-full space-y-4">
                
                <div className="space-y-4">
                  {/* Photo Container */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-white group cursor-pointer block">
                    <Link href={`/product/${product.id}`} className="block w-full h-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        priority
                      />

                      {/* Top Left Gold NEW Tag */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-[#C28E2E] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 shadow-xs">
                          {meta.badge}
                        </span>
                      </div>
                    </Link>

                    {/* Center Floating 3 Action Icons (Wishlist | Add to Cart | Quick View) */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4 pointer-events-none">
                      
                      {/* Wishlist Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(product.id);
                        }}
                        className={`pointer-events-auto w-11 h-11 rounded-full bg-white text-[#310048] shadow-md flex items-center justify-center transition-transform hover:scale-110 cursor-pointer ${
                          isWishlisted ? 'bg-[#310048] text-white' : 'hover:bg-[#310048] hover:text-white'
                        }`}
                        aria-label="Wishlist"
                      >
                        <svg className="w-5 h-5" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>

                      {/* Add to Cart with Tick Confirmation */}
                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        className={`pointer-events-auto w-11 h-11 rounded-full bg-white text-[#310048] shadow-md flex items-center justify-center transition-transform hover:scale-110 cursor-pointer ${
                          isAdded ? 'bg-[#C28E2E] text-white' : 'hover:bg-[#310048] hover:text-white'
                        }`}
                        aria-label="Add to cart"
                      >
                        {isAdded ? (
                          <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        )}
                      </button>

                      {/* Quick View Button (Eye Icon) */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openQuickView(product);
                        }}
                        className="pointer-events-auto w-11 h-11 rounded-full bg-white text-[#310048] shadow-md flex items-center justify-center transition-transform hover:scale-110 hover:bg-[#310048] hover:text-white cursor-pointer"
                        aria-label="Quick View"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Centered Text Info */}
                  <div className="text-center space-y-1.5 pt-1">
                    <Link
                      href={`/product/${product.id}`}
                      className="font-serif font-bold text-lg text-[#0A2417] cursor-pointer hover:text-[#310048] transition-colors min-h-[56px] flex items-center justify-center leading-snug px-1 block"
                    >
                      {product.name}
                    </Link>
                    <div className="font-extrabold text-[#C28E2E] text-base">
                      {meta.priceFormatted}
                    </div>
                  </div>
                </div>

                {/* Full-width Outline BUY NOW Button aligned at bottom */}
                <button
                  onClick={(e) => handleBuyNow(product, e)}
                  className="w-full py-2.5 border border-[#310048] text-[#310048] hover:bg-[#310048] hover:border-[#310048] hover:text-white font-extrabold text-xs uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs mt-auto"
                >
                  <span>⚡</span>
                  <span>BUY NOW</span>
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
