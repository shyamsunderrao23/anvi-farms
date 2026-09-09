'use client';

import React from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

export const ProductGrid: React.FC = () => {
  const { selectedCategory, setSelectedCategory, searchQuery } = useCart();

  // Filter products by Category & Search Query
  let filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });



  return (
    <section id="products" className="py-12 sm:py-16 bg-[#FAF9F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">



        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-[#E7E0D3] p-8 space-y-4">
            <div className="text-4xl">🔍</div>
            <h3 className="text-lg font-bold text-[#0D2B1D]">No items found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We couldn&apos;t find any items matching your category filter or search term.
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-6 py-2.5 rounded-full bg-[#0D2B1D] text-[#F5EBE0] font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
