import React, { useState, useEffect, useRef } from 'react'
import { 
  TrendingUp, 
  Flame, 
  X, 
  Heart, 
  Star, 
  ChevronDown, 
  Search, 
  Check 
} from 'lucide-react'

import desiGheeImg from '../assets/images/desi_ghee.jpg'
import honeyImg from '../assets/images/honey.jpg'
import spicesImg from '../assets/images/spices.jpg'
import amlaprashImg from '../assets/images/amlaprash.jpg'
import coldPressedOilImg from '../assets/images/cold_pressed_oil.jpg'
import naturalSweetenerImg from '../assets/images/natural_sweetener.jpg'
import proteinBarImg from '../assets/images/protein_bar.jpg'
import chickenPickleImg from '../assets/images/chicken_pickle.jpg'

export default function SearchDropdown({ 
  isOpen, 
  onClose, 
  searchQuery, 
  setSearchQuery, 
  onAddToCart,
  onSelectTag
}) {
  const [wishlist, setWishlist] = useState({})
  const [addedItems, setAddedItems] = useState({})
  const dropdownRef = useRef(null)

  const trendingTags = [
    'Ghee',
    'Honey',
    'Spices',
    'Super Foods',
    'Cold Pressed Oils',
    'Natural Sweeteners',
    'Protein Bars',
    'Non-Veg Pickles'
  ]

  const initialProducts = [
    {
      id: 'desi-ghee',
      category: 'Ghee',
      name: 'Desi Gir Cow Cultured A2 Ghee',
      subtitle: 'Bilona-made | Certified Vedic A2',
      image: desiGheeImg,
      tag: 'BEST SELLER',
      tagColor: 'bg-[#2D0345] text-white',
      rating: '4.9',
      reviewCount: '2.4k Reviews',
      variants: [
        { label: '1000 ml (Glass Jar)', price: 3595 },
        { label: '500 ml (Glass Jar)', price: 1850 },
        { label: '250 ml (Glass Jar)', price: 950 }
      ],
      selectedVariant: 0
    },
    {
      id: 'wild-honey',
      category: 'Honey',
      name: 'Raw Wild Forest Honey',
      subtitle: 'Unpasteurized | NMR 100% Pure',
      image: honeyImg,
      tag: 'PURE & RAW',
      tagColor: 'bg-[#D97706] text-white',
      rating: '4.9',
      reviewCount: '1.6k Reviews',
      variants: [
        { label: '500 g', price: 650 },
        { label: '1 kg', price: 1200 },
        { label: '250 g', price: 350 }
      ],
      selectedVariant: 0
    },
    {
      id: 'amlaprash',
      category: 'Super Foods',
      name: 'Amlaprash (Herbal Chyawanprash)',
      subtitle: '40+ herbs | Wild Forest Amla',
      image: amlaprashImg,
      tag: 'IMMUNITY',
      tagColor: 'bg-[#404D1A] text-white',
      rating: '4.9',
      reviewCount: '1.8k Reviews',
      variants: [
        { label: '300 g', price: 675 },
        { label: '500 g', price: 1050 },
        { label: '1 kg', price: 1950 }
      ],
      selectedVariant: 0
    },
    {
      id: 'wood-pressed-oil',
      category: 'Cold Pressed Oils',
      name: 'Cold Pressed Groundnut Oil',
      subtitle: 'Wood Pressed (Kolhu) | Unrefined',
      image: coldPressedOilImg,
      tag: 'COLD PRESSED',
      tagColor: 'bg-[#B45309] text-white',
      rating: '4.8',
      reviewCount: '980 Reviews',
      variants: [
        { label: '1 Litre (Tin)', price: 440 },
        { label: '5 Litre (Tin)', price: 2100 },
        { label: '500 ml (Bottle)', price: 240 }
      ],
      selectedVariant: 0
    }
  ]

  const [products, setProducts] = useState(initialProducts)

  // Handle ESC key and click-outside to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleClickOutside = (e) => {
      // Don't close if clicking inside any search dropdown or search inputs
      if (
        e.target.closest('.search-dropdown-container') || 
        e.target.closest('.search-input-container') ||
        e.target.closest('input[type="text"]') ||
        e.target.closest('button[aria-label="Search"]')
      ) {
        return
      }
      onClose()
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  // Handle Variant Change
  const handleVariantChange = (productId, variantIndex) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, selectedVariant: variantIndex } : item
      )
    )
  }

  // Handle Wishlist Toggle
  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // Handle Add to Cart
  const handleAddToCart = (product) => {
    const selected = product.variants[product.selectedVariant]
    setAddedItems((prev) => ({ ...prev, [product.id]: true }))
    if (onAddToCart) {
      onAddToCart({
        id: `${product.id}-${selected.label}`,
        name: product.name,
        variant: selected.label,
        price: selected.price
      })
    }
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }))
    }, 1800)
  }

  if (!isOpen) return null

  // Filter products if search query is entered
  const filteredProducts = searchQuery.trim()
    ? products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.category && p.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products

  return (
    <div 
      ref={dropdownRef}
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
      className="search-dropdown-container absolute top-full left-1/2 -translate-x-1/2 w-[94vw] sm:w-[125%] md:w-[135%] lg:w-[140%] max-w-[900px] min-w-[320px] mt-2 bg-white shadow-2xl rounded-xl border border-gray-200 z-50 max-h-[78vh] overflow-y-auto no-scrollbar animate-in fade-in slide-in-from-top-2 duration-150 p-4 sm:p-5"
    >
      {/* Header Row: Trending Title & Close */}
      <div className="flex items-center justify-between pb-2.5 border-b border-gray-100">
        <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm sm:text-base">
          <TrendingUp className="w-4 h-4 text-emerald-700" />
          <span>Trending Searches</span>
        </div>
        <button
          onClick={onClose}
          type="button"
          className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer"
        >
          <span>Close</span>
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Trending Searches Tags */}
      <div className="flex items-center gap-2 flex-wrap pt-3 pb-4">
        {trendingTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => {
              setSearchQuery(tag)
              if (onSelectTag) onSelectTag(tag)
            }}
            className={`px-3.5 py-1.5 rounded-lg border text-xs sm:text-sm font-semibold transition-all shadow-xs active:scale-95 cursor-pointer ${
              searchQuery.toLowerCase() === tag.toLowerCase()
                ? 'bg-emerald-800 text-white border-emerald-800'
                : 'border-gray-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-900 text-gray-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Top Products Section */}
      <div className="pt-2.5 border-t border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm sm:text-base">
            <Flame className="w-4 h-4 text-emerald-700" />
            <span>{searchQuery.trim() ? `Results for "${searchQuery}"` : 'Top Picks from Our Customers'}</span>
          </div>
          {searchQuery.trim() && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-xs font-bold text-emerald-700 hover:underline cursor-pointer"
            >
              Show all products
            </button>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="py-8 text-center text-gray-500">
            <Search className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <p className="text-xs sm:text-sm font-semibold text-gray-700">No products found for "{searchQuery}"</p>
            <p className="text-xs text-gray-500 mt-0.5">Try searching for Ghee, Honey, Spices, Cold Pressed Oils, or Protein Bars</p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-2.5 px-3 py-1 rounded-md bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-1">
            {filteredProducts.map((product) => {
              const currentVariant = product.variants[product.selectedVariant]
              const isWishlisted = !!wishlist[product.id]
              const isAdded = !!addedItems[product.id]

              return (
                <div 
                  key={product.id}
                  className="w-full flex flex-col justify-between group"
                >
                  {/* Product Image Box */}
                  <div 
                    onClick={() => {
                      const idMap = {
                        'desi-ghee': 'ghee-1',
                        'wild-honey': 'honey-1',
                        'amlaprash': 'super-foods-1',
                        'wood-pressed-oil': 'cold-pressed-oils-1',
                        'spices': 'spices-1',
                        'desi-khand': 'natural-sweeteners-1',
                        'protein-bar': 'protein-bars-1',
                        'chicken-pickle': 'non-veg-pickles-1'
                      }
                      const targetId = idMap[product.id] || product.id || 'ghee-1'
                      onClose()
                      window.location.hash = `#product/${targetId}`
                    }}
                    className="relative w-full aspect-square bg-[#f8f7f4] rounded-none overflow-hidden mb-2.5 flex items-center justify-center border border-gray-100/80 cursor-pointer"
                  >
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : product.fallbackType === 'honey' ? (
                      <div className="w-full h-full bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 flex flex-col items-center justify-center p-2 text-center">
                        <div className="w-11 h-11 rounded-full bg-amber-400/40 flex items-center justify-center shadow-inner mb-1 border border-amber-300/60">
                          <span className="text-2xl">🍯</span>
                        </div>
                        <span className="text-[11px] font-bold text-amber-950 leading-tight">Wild Raw Honey</span>
                        <span className="text-[9px] text-amber-800 font-semibold mt-0.5">100% Pure & NMR Tested</span>
                      </div>
                    ) : product.fallbackType === 'oil' ? (
                      <div className="w-full h-full bg-gradient-to-br from-yellow-50 via-amber-100 to-yellow-200 flex flex-col items-center justify-center p-2 text-center">
                        <div className="w-11 h-11 rounded-full bg-yellow-400/40 flex items-center justify-center shadow-inner mb-1 border border-yellow-300/60">
                          <span className="text-2xl">🫒</span>
                        </div>
                        <span className="text-[11px] font-bold text-yellow-950 leading-tight">Wood Pressed Oil</span>
                        <span className="text-[9px] text-yellow-800 font-semibold mt-0.5">Kolhu Churned</span>
                      </div>
                    ) : product.fallbackType === 'spices' ? (
                      <div className="w-full h-full bg-gradient-to-br from-orange-50 via-amber-100 to-orange-200 flex flex-col items-center justify-center p-2 text-center">
                        <div className="w-11 h-11 rounded-full bg-orange-400/40 flex items-center justify-center shadow-inner mb-1 border border-orange-300/60">
                          <span className="text-2xl">🌿</span>
                        </div>
                        <span className="text-[11px] font-bold text-orange-950 leading-tight">Pure Spices</span>
                        <span className="text-[9px] text-orange-800 font-semibold mt-0.5">High Curcumin</span>
                      </div>
                    ) : product.fallbackType === 'sweetener' ? (
                      <div className="w-full h-full bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 flex flex-col items-center justify-center p-2 text-center">
                        <div className="w-11 h-11 rounded-full bg-amber-300/40 flex items-center justify-center shadow-inner mb-1 border border-amber-200/60">
                          <span className="text-2xl">✨</span>
                        </div>
                        <span className="text-[11px] font-bold text-amber-950 leading-tight">Desi Khand</span>
                        <span className="text-[9px] text-amber-800 font-semibold mt-0.5">Sulphur-Free</span>
                      </div>
                    ) : product.fallbackType === 'protein' ? (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center p-2 text-center">
                        <div className="w-11 h-11 rounded-full bg-indigo-300/40 flex items-center justify-center shadow-inner mb-1 border border-indigo-200/60">
                          <span className="text-2xl">⚡</span>
                        </div>
                        <span className="text-[11px] font-bold text-indigo-950 leading-tight">Ayurvedic Protein</span>
                        <span className="text-[9px] text-indigo-800 font-semibold mt-0.5">10g Clean Fuel</span>
                      </div>
                    ) : product.fallbackType === 'pickle' ? (
                      <div className="w-full h-full bg-gradient-to-br from-red-50 via-rose-100 to-red-200 flex flex-col items-center justify-center p-2 text-center">
                        <div className="w-11 h-11 rounded-full bg-red-400/30 flex items-center justify-center shadow-inner mb-1 border border-red-300/60">
                          <span className="text-2xl">🌶️</span>
                        </div>
                        <span className="text-[11px] font-bold text-red-950 leading-tight">Non-Veg Pickle</span>
                        <span className="text-[9px] text-red-800 font-semibold mt-0.5">Traditional Masala</span>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-stone-800 via-stone-900 to-black text-white flex flex-col items-center justify-center p-2 text-center">
                        <div className="w-11 h-11 rounded-full bg-stone-700/60 flex items-center justify-center shadow-inner mb-1">
                          <span className="text-2xl">🌾</span>
                        </div>
                        <span className="text-[11px] font-bold text-stone-100 leading-tight">Farm Organic</span>
                        <span className="text-[9px] text-amber-400 font-semibold mt-0.5">100% Pure</span>
                      </div>
                    )}

                    {/* Top-Right Corner Tab Badge (Text | Heart) Matching Image 2 */}
                    {product.tag ? (
                      <div className={`absolute top-0 right-0 z-10 inline-flex items-center gap-2 px-3 py-1 rounded-bl-xl text-white text-[11px] font-bold shadow-xs ${product.tagColor || 'bg-[#2D0345]'}`}>
                        <span className="leading-none tracking-wider">{product.tag}</span>
                        <span className="text-white/60 font-normal">|</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleWishlist(product.id)
                          }}
                          className="cursor-pointer hover:scale-110 transition-transform flex items-center justify-center"
                          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                          aria-label="Wishlist"
                        >
                          <Heart 
                            className={`w-3.5 h-3.5 transition-colors ${
                              isWishlisted ? 'fill-rose-500 text-rose-500' : 'fill-none text-white stroke-[2]'
                            }`} 
                          />
                        </button>
                      </div>
                    ) : (
                      <div className="absolute top-0 right-0 z-10 inline-flex items-center px-2.5 py-1.5 rounded-bl-xl bg-black/60 text-white shadow-xs">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleWishlist(product.id)
                          }}
                          className="cursor-pointer hover:scale-110 transition-transform flex items-center justify-center"
                          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                          aria-label="Wishlist"
                        >
                          <Heart 
                            className={`w-3.5 h-3.5 transition-colors ${
                              isWishlisted ? 'fill-rose-500 text-rose-500' : 'fill-none text-white stroke-[2]'
                            }`} 
                          />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Product Content Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 
                        onClick={() => {
                          const idMap = {
                            'desi-ghee': 'ghee-1',
                            'wild-honey': 'honey-1',
                            'amlaprash': 'super-foods-1',
                            'wood-pressed-oil': 'cold-pressed-oils-1',
                            'spices': 'spices-1',
                            'desi-khand': 'natural-sweeteners-1',
                            'protein-bar': 'protein-bars-1',
                            'chicken-pickle': 'non-veg-pickles-1'
                          }
                          const targetId = idMap[product.id] || product.id || 'ghee-1'
                          onClose()
                          window.location.hash = `#product/${targetId}`
                        }}
                        className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-2 leading-snug group-hover:text-emerald-800 transition-colors cursor-pointer"
                      >
                        {product.name}
                      </h4>

                      {/* Price */}
                      <div className="mt-1 flex items-baseline gap-1">
                        <span className="text-base sm:text-lg font-black text-gray-900">
                          ₹{currentVariant.price.toLocaleString('en-IN')}
                        </span>
                      </div>

                      {/* Subtitle / Attributes */}
                      <p className="text-[11px] sm:text-xs text-gray-500 font-medium line-clamp-1 mt-0.5">
                        {product.subtitle}
                      </p>

                      {/* Star Rating */}
                      <div className="mt-1.5 flex items-center gap-1.5 text-amber-500 text-xs">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400 stroke-none" />
                          ))}
                        </div>
                        <span className="font-bold text-gray-900 text-xs">{product.rating}</span>
                      </div>
                    </div>

                    {/* Variant Dropdown Selector */}
                    <div className="mt-2.5 space-y-2">
                      <div className="relative">
                        <select
                          value={product.selectedVariant}
                          onChange={(e) => handleVariantChange(product.id, Number(e.target.value))}
                          className="w-full appearance-none bg-white border border-gray-300 hover:border-gray-400 rounded-none py-1.5 sm:py-2 pl-2.5 sm:pl-3 pr-7 sm:pr-8 text-[11px] sm:text-xs font-semibold text-gray-800 focus:outline-none focus:border-emerald-700 cursor-pointer shadow-2xs"
                        >
                          {product.variants.map((v, idx) => (
                            <option key={idx} value={idx}>
                              {v.label} - ₹{v.price.toLocaleString('en-IN')}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-500 absolute right-2 sm:right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>

                      {/* ADD TO CART Button */}
                      <button
                        type="button"
                        onClick={() => handleAddToCart(product)}
                        className={`w-full py-2 sm:py-2.5 px-3 rounded-none text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs active:scale-95 ${
                          isAdded
                            ? 'bg-emerald-800 text-white'
                            : 'bg-[#146b3a] hover:bg-[#0f542d] text-white'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                            <span>ADDED!</span>
                          </>
                        ) : (
                          <span>ADD TO CART</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}




