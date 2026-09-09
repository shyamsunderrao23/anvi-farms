'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product, ProductVariant } from '../types/product';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, openQuickView } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const discountAmount = selectedVariant.originalPrice
    ? selectedVariant.originalPrice - selectedVariant.price
    : 0;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-[#E7E0D3] hover:border-[#310048] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
      <div>
        {/* Image Frame */}
        <div className="relative w-full h-64 bg-[#F7F4EE] overflow-hidden cursor-pointer" onClick={() => openQuickView(product)}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 380px"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Top Left Badge */}
          {product.badge && (
            <span className="absolute top-3.5 left-3.5 px-3.5 py-1 rounded-full bg-[#310048] text-[#F5EBE0] font-extrabold text-[10px] uppercase tracking-widest shadow-md">
              {product.badge}
            </span>
          )}

          {/* Top Right Lab Certified Badge */}
          {product.labTested && (
            <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#310048]/90 backdrop-blur-md text-[#E2C07D] font-bold text-[10px] flex items-center gap-1 shadow-md border border-[#C28E2E]/40">
              <span>✓</span> Lab Certified Pure
            </span>
          )}

          {/* Hover Quick View Trigger */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              openQuickView(product);
            }}
            className="absolute bottom-3.5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-[#310048] font-bold text-xs shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 cursor-pointer"
          >
            🔍 Quick View
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold uppercase tracking-widest text-[#C28E2E]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-[#C28E2E] font-bold">
              <span>★</span>
              <span>{product.rating}</span>
              <span className="text-slate-400 font-normal">({product.reviewCount})</span>
            </div>
          </div>

          {/* Title & Tagline */}
          <div onClick={() => openQuickView(product)} className="cursor-pointer">
            <h3 className="font-bold text-xl text-slate-900 font-serif group-hover:text-[#C28E2E] transition-colors leading-tight">
              {product.name}
            </h3>
            <p className="text-xs text-slate-500 line-clamp-1 mt-1 font-light">
              {product.tagline}
            </p>
          </div>

          {/* Pack Size Variant Selector Pills */}
          <div className="space-y-1.5 pt-1">
            <label className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">Select Size:</label>
            <div className="grid grid-cols-3 gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                    selectedVariant.id === variant.id
                      ? 'bg-[#310048] text-[#F5EBE0] border-[#310048] shadow-sm'
                      : 'bg-[#F7F4EE] text-[#1C1917] border-[#E7E0D3] hover:border-slate-400'
                  }`}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0 space-y-3">
        <div className="flex items-baseline justify-between border-t border-[#E7E0D3] pt-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-[#310048] font-serif">₹{selectedVariant.price}</span>
              {selectedVariant.originalPrice && (
                <span className="text-xs text-slate-400 line-through">₹{selectedVariant.originalPrice}</span>
              )}
            </div>
            {discountAmount > 0 && (
              <span className="text-[10px] text-emerald-700 font-bold">Save ₹{discountAmount}</span>
            )}
          </div>
          <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            In Stock
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className={`w-full py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer ${
            isAdded
              ? 'bg-emerald-700 text-white'
              : 'bg-[#310048] hover:bg-[#4A0868] text-[#F5EBE0] shadow-[#310048]/10 hover:-translate-y-0.5'
          }`}
        >
          {isAdded ? '✓ Added to Cart!' : '+ Add to Cart'}
        </button>
      </div>
    </div>
  );
};
