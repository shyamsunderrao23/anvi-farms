'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { Product, ProductVariant, Review } from '../types/product';

export const ProductQuickViewModal: React.FC = () => {
  const { quickViewProduct, closeQuickView, addToCart } = useCart();
  
  if (!quickViewProduct) return null;

  return <QuickViewDialog product={quickViewProduct} onClose={closeQuickView} onAddToCart={addToCart} />;
};

const QuickViewDialog: React.FC<{
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, variant: ProductVariant, quantity: number) => void;
}> = ({ product, onClose, onAddToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'process' | 'reviews'>('benefits');
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, selectedVariant, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Anvi Farms! I am interested in purchasing:\n*Product:* ${product.name}\n*Size:* ${selectedVariant.name}\n*Price:* ₹${selectedVariant.price}\n*Quantity:* ${quantity}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Dialog container */}
      <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden z-10 border border-amber-900/10 max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm transition-colors"
        >
          ✕
        </button>

        {/* Left Column: Product Image Showcase */}
        <div className="md:w-1/2 relative bg-slate-100 min-h-[320px] md:min-h-[480px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#310048] text-amber-300 font-extrabold text-xs uppercase tracking-wider shadow-md">
              {product.badge}
            </span>
          )}
          {product.labTested && (
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#310048]/90 backdrop-blur-md border border-[#C28E2E]/40 text-white text-xs space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-amber-300">
                <span>✓</span> FSSAI Lab Tested Pure
              </div>
              <p className="text-[11px] text-slate-300">
                Cert No: <span className="font-mono">{product.labCertificateNo}</span>
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Detailed Options & Buying Info */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
          
          <div className="space-y-4">
            
            {/* Header Title & Rating */}
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-500 font-bold mb-1">
                <span>★</span>
                <span>{product.rating}</span>
                <span className="text-slate-400 font-normal">({product.reviewCount} verified reviews)</span>
              </div>
              <h2 className="text-2xl font-bold font-serif text-slate-900 leading-tight">
                {product.name}
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-light">{product.tagline}</p>
            </div>

            {/* Pack Size Variant Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">Choose Quantity / Pack Size:</label>
              <div className="grid grid-cols-3 gap-2">
                {product.variants.map((v: ProductVariant) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`py-2.5 px-3 rounded-2xl text-xs font-bold transition-all border cursor-pointer ${
                      selectedVariant.id === v.id
                        ? 'bg-[#310048] text-amber-200 border-[#310048] shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-[#310048]'
                    }`}
                  >
                    <div>{v.name}</div>
                    <div className="text-[11px] font-extrabold mt-0.5">₹{v.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Price Banner */}
            <div className="flex items-center justify-between bg-amber-500/10 p-4 rounded-2xl border border-amber-500/20">
              <div>
                <span className="text-xs text-slate-500 block">Total Price:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[#310048] font-serif">
                    ₹{selectedVariant.price * quantity}
                  </span>
                  {selectedVariant.originalPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      ₹{selectedVariant.originalPrice * quantity}
                    </span>
                  )}
                </div>
              </div>

              {/* Quantity Counter Stepper */}
              <div className="flex items-center bg-white border border-slate-300 rounded-full px-2 py-1 shadow-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-full text-slate-600 hover:bg-slate-100 font-bold text-sm"
                >
                  -
                </button>
                <span className="w-8 text-center font-bold text-sm text-slate-800">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded-full text-slate-600 hover:bg-slate-100 font-bold text-sm"
                >
                  +
                </button>
              </div>
            </div>

            {/* Tabs for Benefits, Process, Reviews */}
            <div className="space-y-3 pt-2">
              <div className="flex border-b border-slate-200 gap-4 text-xs font-bold">
                <button
                  onClick={() => setActiveTab('benefits')}
                  className={`pb-2 transition-colors cursor-pointer ${
                    activeTab === 'benefits'
                      ? 'border-b-2 border-[#310048] text-[#310048]'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  Key Benefits
                </button>
                <button
                  onClick={() => setActiveTab('process')}
                  className={`pb-2 transition-colors cursor-pointer ${
                    activeTab === 'process'
                      ? 'border-b-2 border-[#310048] text-[#310048]'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  Traditional Process
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-2 transition-colors cursor-pointer ${
                    activeTab === 'reviews'
                      ? 'border-b-2 border-[#310048] text-[#310048]'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  Customer Reviews ({product.reviews.length})
                </button>
              </div>

              <div className="text-xs text-slate-600 leading-relaxed min-h-[90px]">
                {activeTab === 'benefits' && (
                  <ul className="space-y-1.5 list-disc list-inside text-slate-700">
                    {product.benefits.map((b: string, idx: number) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                )}
                {activeTab === 'process' && (
                  <p className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    {product.longDescription}
                  </p>
                )}
                {activeTab === 'reviews' && (
                  <div className="space-y-3 max-h-32 overflow-y-auto pr-1">
                    {product.reviews.map((r: Review) => (
                      <div key={r.id} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                        <div className="flex items-center justify-between font-bold text-slate-800">
                          <span>{r.author} <span className="text-[10px] text-emerald-600 font-normal">({r.location})</span></span>
                          <span className="text-amber-500">★ {r.rating}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 italic">&ldquo;{r.comment}&rdquo;</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
            <button
              onClick={handleAddToCart}
              className={`py-3.5 px-4 rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer ${
                isAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#310048] hover:bg-[#4A0868] text-white'
              }`}
            >
              {isAdded ? '✓ Added to Cart!' : '+ Add to Cart'}
            </button>

            <a
              href={`https://wa.me/917780505418?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-.981z" />
              </svg>
              WhatsApp Buy
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
