'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { ProductVariant } from '../types/product';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    isWishlistOpen,
    closeWishlist,
    toggleWishlist,
    addToCart,
    openQuickView,
  } = useCart();

  const [selectedVariants, setSelectedVariants] = useState<{ [productId: string]: ProductVariant }>({});

  // Smooth opening and closing animation states
  const [renderDrawer, setRenderDrawer] = useState(isWishlistOpen);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isWishlistOpen) {
      setRenderDrawer(true);
      const timer = setTimeout(() => setVisible(true), 15);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
      const timer = setTimeout(() => setRenderDrawer(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isWishlistOpen]);

  if (!renderDrawer) return null;

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const handleVariantChange = (productId: string, variant: ProductVariant) => {
    setSelectedVariants((prev) => ({ ...prev, [productId]: variant }));
  };

  const handleAddAllToCart = () => {
    wishlistProducts.forEach((product) => {
      const variant = selectedVariants[product.id] || product.variants[0];
      addToCart(product, variant, 1);
    });
    closeWishlist();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Smooth Fade Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out cursor-pointer ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeWishlist}
      />

      {/* Smooth Slide-Over Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10 pointer-events-none">
        <div
          className={`w-screen max-w-full sm:max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#DFCFA8] transform transition-transform duration-300 ease-in-out pointer-events-auto ${
            visible ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          
          {/* Header */}
          <div className="p-6 bg-[#310048] text-white flex items-center justify-between border-b border-[#C28E2E]/30">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C28E2E] text-[#310048] flex items-center justify-center font-extrabold text-sm shadow-sm">
                ❤️
              </div>
              <div>
                <h2 className="font-bold font-serif text-lg text-[#C28E2E]">Saved Wishlist</h2>
                <p className="text-[11px] text-slate-200">{wishlistProducts.length} item(s) saved</p>
              </div>
            </div>
            <button
              onClick={closeWishlist}
              className="text-[#C28E2E] hover:text-white font-bold text-xl p-1.5 transition-colors cursor-pointer"
              aria-label="Close Wishlist"
            >
              ✕
            </button>
          </div>

          {/* Subheader Information */}
          <div className="bg-[#FAF5EC] px-6 py-3 border-b border-[#DFCFA8]/50 flex items-center justify-between">
            <span className="text-xs font-extrabold text-[#310048] uppercase tracking-wider">
              Your Favourite Farm Items
            </span>
            {wishlistProducts.length > 0 && (
              <button
                onClick={handleAddAllToCart}
                className="text-[11px] font-bold text-[#C28E2E] hover:underline cursor-pointer"
              >
                + Add All to Cart
              </button>
            )}
          </div>

          {/* Wishlist Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistProducts.length > 0 ? (
              wishlistProducts.map((product) => {
                const currentVariant = selectedVariants[product.id] || product.variants[0];

                return (
                  <div
                    key={product.id}
                    className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 hover:border-[#DFCFA8] transition-all space-y-3"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        onClick={() => {
                          closeWishlist();
                          openQuickView(product);
                        }}
                        className="relative w-16 h-16 rounded-xl overflow-hidden bg-white shrink-0 border border-slate-200 cursor-pointer"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4
                          onClick={() => {
                            closeWishlist();
                            openQuickView(product);
                          }}
                          className="font-bold text-xs text-slate-900 truncate font-serif hover:text-[#C28E2E] cursor-pointer"
                        >
                          {product.name}
                        </h4>
                        <div className="text-[11px] text-[#310048] font-bold mt-0.5">
                          ₹{currentVariant.price}
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
                        title="Remove from Wishlist"
                      >
                        🗑️
                      </button>
                    </div>

                    {/* Variant Selector & Add to Cart */}
                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-200/60">
                      <select
                        value={currentVariant.id}
                        onChange={(e) => {
                          const found = product.variants.find((v) => v.id === e.target.value);
                          if (found) handleVariantChange(product.id, found);
                        }}
                        className="text-[11px] font-bold text-[#310048] bg-white border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:border-[#310048] cursor-pointer"
                      >
                        {product.variants.map((v) => (
                          <option key={v.id} value={v.id}>
                            {v.name} (₹{v.price})
                          </option>
                        ))}
                      </select>

                      <button
                        onClick={() => {
                          addToCart(product, currentVariant, 1);
                          closeWishlist();
                        }}
                        className="px-4 py-1.5 rounded-xl bg-[#310048] hover:bg-[#4A0868] text-white font-extrabold text-[11px] uppercase tracking-wider border border-[#C28E2E] transition-all cursor-pointer"
                      >
                        + Add to Cart
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-16 space-y-4">
                <div className="text-5xl">🤍</div>
                <h3 className="font-bold text-slate-800 text-base font-serif">Your Wishlist is Empty</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Explore our pure A2 Ghee, Raw Forest Honey, and Cold Pressed Oils to save your favourites!
                </p>
                <button
                  onClick={closeWishlist}
                  className="px-6 py-2.5 rounded-full bg-[#310048] hover:bg-[#4A0868] text-[#C28E2E] font-bold text-xs border border-[#C28E2E] transition-all cursor-pointer shadow-md"
                >
                  Explore Products
                </button>
              </div>
            )}
          </div>

          {/* Footer Action */}
          {wishlistProducts.length > 0 && (
            <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-3">
              <button
                onClick={handleAddAllToCart}
                className="w-full py-3.5 rounded-2xl bg-[#310048] hover:bg-[#4A0868] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md border border-[#C28E2E] cursor-pointer"
              >
                🛒 Add All Items ({wishlistProducts.length}) to Cart
              </button>
              
              <Link
                href="/wishlist"
                onClick={closeWishlist}
                className="block text-center text-xs font-bold text-[#310048] hover:text-[#C28E2E] hover:underline cursor-pointer"
              >
                View Full Wishlist Page →
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
