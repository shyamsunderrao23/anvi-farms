'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Product } from '../types/product';

export const FarmFavorites: React.FC = () => {
  const { addToCart, openQuickView, toggleWishlist, isInWishlist, openCheckout } = useCart();
  const [addedAnimation, setAddedAnimation] = useState<{ [productId: string]: boolean }>({});

  const favoriteItems = [
    {
      id: 'a2-desi-cow-ghee',
      badge: 'BESTSELLER',
      priceFormatted: '₹ 650',
    },
    {
      id: 'vedic-buffalo-ghee',
      badge: 'TOP RATED',
      priceFormatted: '₹ 850',
    },
    {
      id: 'raw-wild-forest-honey',
      badge: 'BESTSELLER',
      priceFormatted: '₹ 380',
    },
    {
      id: 'sprouted-ragi-malt',
      badge: 'MOST BOOKED',
      priceFormatted: '₹ 290',
    },
  ];

  const featuredProducts = favoriteItems
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      return product ? { ...product, customMeta: item } : null;
    })
    .filter((p): p is Product & { customMeta: (typeof favoriteItems)[0] } => p !== null);

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
    <section className="w-full bg-[#FAF9F4] py-16 sm:py-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1720px] mx-auto space-y-12 sm:space-y-16">

        {/* Section Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.32em] text-[#0A2417]">
            MOST BOOKED PRODUCTS
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-cursive font-normal text-[#320047] tracking-normal leading-tight py-1">
            Favourites from Our Farm
          </h2>
        </div>

        {/* Exactly 4 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 max-w-[1500px] mx-auto">
          {featuredProducts.map((product) => {
            const isWishlisted = isInWishlist(product.id);
            const isAdded = addedAnimation[product.id];
            const meta = product.customMeta;

            return (
              <div key={product.id} className="group flex flex-col justify-between h-full space-y-4">
                
                <div className="space-y-4">
                  {/* Photo Frame Container with Hover Action Icons */}
                  <Link
                    href={`/product/${product.id}`}
                    className="relative aspect-[4/5] w-full overflow-hidden bg-white cursor-pointer block"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      priority
                    />

                    {/* Top Left Gold NEW Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-[#C28E2E] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 shadow-xs">
                        {meta.badge}
                      </span>
                    </div>

                    {/* Center Floating 3 Action Icons (Wishlist | Add to Cart | Quick View) */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                      
                      {/* Wishlist Heart */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleWishlist(product.id);
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
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleAddToCart(product, e);
                        }}
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
                          openQuickView(product);
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

                  {/* Centered Text Info with Fixed Min-Height Alignment */}
                  <div className="text-center space-y-1.5 pt-1">
                    <Link
                      href={`/product/${product.id}`}
                      className="font-serif font-bold text-lg text-[#1C1917] cursor-pointer hover:text-[#310048] transition-colors min-h-[56px] flex items-center justify-center leading-snug px-1 block"
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
