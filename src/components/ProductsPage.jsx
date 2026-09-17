import React, { useState, useEffect } from 'react'
import { 
  Heart, 
  Star, 
  ChevronDown, 
  Check, 
  ArrowLeft, 
  SlidersHorizontal, 
  Sparkles, 
  ShieldCheck, 
  Leaf, 
  Award, 
  Truck,
  Eye,
  X,
  ShoppingBag
} from 'lucide-react'
import { CATEGORIES, ALL_PRODUCTS } from '../data/products'

export default function ProductsPage({ 
  initialCategory = 'ghee', 
  onBackToHome, 
  onAddToCart,
  wishlist = {},
  onToggleWishlist,
  onSelectProduct
}) {
  // If initialCategory is 'all' or empty, default to 'ghee'
  const resolvedCategory = (initialCategory === 'all' || !initialCategory) ? 'ghee' : initialCategory
  const [selectedCategory, setSelectedCategory] = useState(resolvedCategory)
  const [sortBy, setSortBy] = useState('featured')
  const [selectedVariants, setSelectedVariants] = useState({})
  const [openDropdownId, setOpenDropdownId] = useState(null)
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [filterQuery, setFilterQuery] = useState('')

  // Sync when initialCategory prop changes
  useEffect(() => {
    if (initialCategory) {
      const cat = initialCategory === 'all' ? 'ghee' : initialCategory
      setSelectedCategory(cat)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [initialCategory])

  // Close dropdown on click outside
  useEffect(() => {
    const handleDocClick = (e) => {
      if (!e.target.closest('.variant-dropdown-container')) {
        setOpenDropdownId(null)
      }
    }
    document.addEventListener('click', handleDocClick)
    return () => document.removeEventListener('click', handleDocClick)
  }, [])

  // Filter products by selected category
  let filtered = ALL_PRODUCTS.filter((p) => p.categoryId === selectedCategory)

  // Sub-filter by text search if any
  if (filterQuery.trim()) {
    const q = filterQuery.toLowerCase()
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    )
  }

  // Sorting logic
  const sortedProducts = [...filtered].sort((a, b) => {
    const aPrice = a.variants[0]?.price || 0
    const bPrice = b.variants[0]?.price || 0
    if (sortBy === 'price-asc') return aPrice - bPrice
    if (sortBy === 'price-desc') return bPrice - aPrice
    if (sortBy === 'rating') return parseFloat(b.rating) - parseFloat(a.rating)
    if (sortBy === 'bestseller') {
      if (a.tag === 'BEST SELLER') return -1
      if (b.tag === 'BEST SELLER') return 1
    }
    return 0
  })

  // Get current active category info
  const activeCategoryInfo = CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0]

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      {/* 1. Category Hero Banner (Full-Width, Pure Image) */}
      <section className="w-full bg-[#f7f5ef] overflow-hidden border-b border-gray-200/80">
        <div className="relative w-full aspect-[21/9] sm:aspect-[3/1] md:aspect-[3.2/1] min-h-[200px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[400px] max-h-[450px] overflow-hidden">
          <img 
            src={activeCategoryInfo.banner || activeCategoryInfo.image} 
            alt={activeCategoryInfo.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* 3. Sort & Search Controls Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
          <div className="text-xs sm:text-sm font-semibold text-gray-600">
            Showing <strong className="text-gray-900">{sortedProducts.length}</strong> farm-fresh {sortedProducts.length === 1 ? 'item' : 'items'} in{' '}
            <span className="text-[#2D0345] font-bold">
              {activeCategoryInfo.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Filter Input */}
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder={`Search in ${activeCategoryInfo.title}...`}
              className="text-xs px-3.5 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:border-[#2D0345] w-48 sm:w-56"
            />

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-gray-500 font-medium hidden sm:inline">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs font-bold text-gray-800 bg-gray-50 border border-gray-300 rounded-lg px-2.5 py-2 focus:outline-none focus:border-[#2D0345] cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="bestseller">Best Sellers</option>
                <option value="rating">Highest Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {sortedProducts.length === 0 ? (
          <div className="text-center py-16 sm:py-24 space-y-4">
            <div className="w-16 h-16 bg-purple-50 text-[#2D0345] rounded-full flex items-center justify-center mx-auto text-2xl">
              🔍
            </div>
            <h3 className="text-lg font-bold text-gray-900">No products found</h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              We couldn't find any products matching your search in {activeCategoryInfo.title}.
            </p>
            <button
              type="button"
              onClick={() => setFilterQuery('')}
              className="bg-[#2D0345] text-white text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-[#3d085c] transition-colors cursor-pointer"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8">
            {sortedProducts.map((p) => {
              const variantIndex = selectedVariants[p.id] || 0
              const currentVariant = p.variants[variantIndex] || p.variants[0]
              const isWishlisted = !!wishlist[p.id]

              return (
                <div 
                  key={p.id}
                  className={`flex flex-col justify-between group relative ${openDropdownId === p.id ? 'z-30' : 'z-10'}`}
                >
                  {/* Top Image Container */}
                  <div className="relative aspect-square sm:h-80 md:h-88 lg:h-96 w-full overflow-hidden mb-3.5 bg-gray-50">
                    {/* Top-Right Corner Tab Badge (Text | Heart) */}
                    <div className={`absolute top-0 right-0 z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-bl-xl text-white text-xs font-semibold shadow-xs ${p.tagBg || 'bg-[#2D0345]'}`}>
                      <span className="leading-none">{p.tag}</span>
                      <span className="text-white/70 font-normal">|</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          if (onToggleWishlist) {
                            onToggleWishlist(p.id, p.title, p.image)
                          }
                        }}
                        className="cursor-pointer hover:scale-110 transition-transform flex items-center justify-center"
                        title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                      >
                        <Heart className={`w-4 h-4 transition-colors ${isWishlisted ? "fill-rose-500 text-rose-500" : "fill-none text-white stroke-[2]"}`} />
                      </button>
                    </div>

                    {/* Quick View Button on Hover */}
                    <button
                      type="button"
                      onClick={() => setQuickViewProduct(p)}
                      className="absolute bottom-2 left-2 z-10 bg-white/90 backdrop-blur-xs hover:bg-white text-[#2D0345] text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Quick View</span>
                    </button>

                    {/* Product Photography */}
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      onClick={() => onSelectProduct ? onSelectProduct(p.id) : setQuickViewProduct(p)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>

                  {/* Open Details (No card box) */}
                  <div className="flex-1 flex flex-col justify-between space-y-3 px-0.5">
                    <div className="space-y-1.5">
                      {/* Title & Price Header */}
                      <div className="flex items-start justify-between gap-2">
                        <h3 
                          onClick={() => onSelectProduct ? onSelectProduct(p.id) : setQuickViewProduct(p)}
                          className="font-medium text-sm sm:text-base text-gray-900 leading-snug cursor-pointer hover:text-[#2D0345] transition-colors"
                        >
                          {p.title}
                        </h3>
                        <div className="text-right shrink-0">
                          <span className="font-medium text-sm sm:text-base text-gray-900 block">
                            ₹{currentVariant.price.toLocaleString('en-IN')}
                          </span>
                          {currentVariant.originalPrice && (
                            <span className="text-[11px] text-gray-400 line-through">
                              ₹{currentVariant.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Subtitle / Key Claim */}
                      <p className="text-xs text-gray-500 font-medium leading-normal line-clamp-2">
                        {p.subtitle}
                      </p>

                      {/* Rating & Reviews */}
                      <div className="flex items-center gap-1 text-xs text-gray-800 font-semibold pt-0.5">
                        <div className="flex items-center gap-0.5 text-amber-400">
                          <Star className="w-3 h-3 fill-amber-400 stroke-none" />
                          <Star className="w-3 h-3 fill-amber-400 stroke-none" />
                          <Star className="w-3 h-3 fill-amber-400 stroke-none" />
                          <Star className="w-3 h-3 fill-amber-400 stroke-none" />
                          <Star className="w-3 h-3 fill-amber-400 stroke-none" />
                        </div>
                        <span className="ml-1 font-bold text-gray-900">{p.rating}</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-600">{p.reviews}</span>
                      </div>
                    </div>

                    {/* Actions: Custom Variant Selector + Full Width ADD TO CART */}
                    <div className="space-y-2.5 pt-1">
                      {/* Custom Smooth Animated Variant Dropdown */}
                      <div className="variant-dropdown-container relative">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setOpenDropdownId(openDropdownId === p.id ? null : p.id)
                          }}
                          className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold text-gray-800 bg-white border border-gray-300 rounded-none shadow-2xs hover:border-gray-400 focus:outline-none transition-colors cursor-pointer"
                        >
                          <span className="truncate">{currentVariant.label}</span>
                          <ChevronDown 
                            className={`w-4 h-4 text-gray-600 shrink-0 ml-1.5 transition-transform duration-200 ${
                              openDropdownId === p.id ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>

                        {/* Animated Dropdown Menu */}
                        {openDropdownId === p.id && (
                          <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 shadow-xl rounded-none py-1 z-40 animate-in fade-in zoom-in-95 duration-150">
                            {p.variants.map((variant, vIdx) => {
                              const isSelected = vIdx === variantIndex
                              return (
                                <button
                                  key={vIdx}
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setSelectedVariants((prev) => ({
                                      ...prev,
                                      [p.id]: vIdx
                                    }))
                                    setOpenDropdownId(null)
                                  }}
                                  className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left cursor-pointer transition-colors ${
                                    isSelected 
                                      ? 'bg-purple-50 text-[#2D0345] font-bold' 
                                      : 'text-gray-700 hover:bg-gray-50'
                                  }`}
                                >
                                  <span className="truncate">{variant.label}</span>
                                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                                    <span className="font-bold">
                                      ₹{variant.price.toLocaleString('en-IN')}
                                    </span>
                                    {isSelected && <Check className="w-3.5 h-3.5 text-[#2D0345]" />}
                                  </div>
                                </button>
                              )
                            })}
                          </div>
                        )}
                      </div>

                      {/* ADD TO CART Button */}
                      <button
                        type="button"
                        onClick={() => {
                          if (onAddToCart) {
                            onAddToCart({
                              id: `${p.id}-${currentVariant.label}`,
                              title: p.title,
                              name: p.title,
                              weight: currentVariant.label,
                              price: currentVariant.price,
                              originalPrice: currentVariant.originalPrice,
                              image: p.image,
                              category: p.categoryName
                            })
                          }
                        }}
                        className="w-full py-3 px-4 bg-[#2D0345] hover:bg-[#3d085c] active:bg-[#200231] text-white text-xs sm:text-sm font-black tracking-wider uppercase rounded-none transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>ADD TO CART</span>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </section>

      {/* 5. Quality Standards & Assurance Banner */}
      <section className="bg-[#FAF7F2] border-t border-b border-amber-200/50 py-10 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white text-[#2D0345] flex items-center justify-center shrink-0 shadow-xs border border-amber-100">
                <Leaf className="w-6 h-6 text-[#404D1A]" />
              </div>
              <div>
                <h4 className="text-xs font-black text-gray-900 uppercase tracking-wide">100% Regenerative</h4>
                <p className="text-xs text-gray-600 mt-0.5">Grown with Jeevamrutha & zero synthetic inputs</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white text-[#2D0345] flex items-center justify-center shrink-0 shadow-xs border border-amber-100">
                <Award className="w-6 h-6 text-[#2D0345]" />
              </div>
              <div>
                <h4 className="text-xs font-black text-gray-900 uppercase tracking-wide">Vedic Bilona Churn</h4>
                <p className="text-xs text-gray-600 mt-0.5">Slow wood churned at Brahmamuhurta in clay pots</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white text-[#2D0345] flex items-center justify-center shrink-0 shadow-xs border border-amber-100">
                <ShieldCheck className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h4 className="text-xs font-black text-gray-900 uppercase tracking-wide">Certified Lab Tested</h4>
                <p className="text-xs text-gray-600 mt-0.5">NMR verified pure with zero adulterants</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white text-[#2D0345] flex items-center justify-center shrink-0 shadow-xs border border-amber-100">
                <Truck className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-xs font-black text-gray-900 uppercase tracking-wide">Express Farm Delivery</h4>
                <p className="text-xs text-gray-600 mt-0.5">Free express shipping on all orders above ₹999</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Quick View Product Modal */}
      {quickViewProduct && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setQuickViewProduct(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full p-6 relative overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden bg-gray-50 h-64 sm:h-80">
                <img 
                  src={quickViewProduct.image} 
                  alt={quickViewProduct.title}
                  className="w-full h-full object-cover" 
                />
                <span className={`absolute top-2 left-2 text-white text-[11px] font-bold px-2.5 py-1 rounded-md ${quickViewProduct.tagBg || 'bg-[#2D0345]'}`}>
                  {quickViewProduct.tag}
                </span>
              </div>

              {/* Product Info */}
              <div className="space-y-3.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#2D0345]">
                  {quickViewProduct.categoryName}
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                  {quickViewProduct.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                  </div>
                  <span className="font-bold text-gray-900">{quickViewProduct.rating}</span>
                  <span className="text-gray-400">•</span>
                  <span>{quickViewProduct.reviews}</span>
                </div>

                <div className="text-xl font-black text-gray-900">
                  ₹{quickViewProduct.variants[selectedVariants[quickViewProduct.id] || 0]?.price.toLocaleString('en-IN')}
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {quickViewProduct.description}
                </p>

                {/* Variant Options Pills */}
                <div className="space-y-1.5 pt-2">
                  <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wide">
                    Select Packaging Size:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.variants.map((v, idx) => {
                      const isSelected = (selectedVariants[quickViewProduct.id] || 0) === idx
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setSelectedVariants((prev) => ({
                              ...prev,
                              [quickViewProduct.id]: idx
                            }))
                          }}
                          className={`text-xs px-3 py-1.5 rounded-lg border font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#2D0345] bg-purple-50 text-[#2D0345] font-bold'
                              : 'border-gray-200 text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          {v.label} (₹{v.price})
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Actions: Add to Cart and View Full Details */}
                <div className="space-y-2 mt-3">
                  <button
                    type="button"
                    onClick={() => {
                      const v = quickViewProduct.variants[selectedVariants[quickViewProduct.id] || 0]
                      if (onAddToCart) {
                        onAddToCart({
                          id: `${quickViewProduct.id}-${v.label}`,
                          title: quickViewProduct.title,
                          name: quickViewProduct.title,
                          weight: v.label,
                          price: v.price,
                          originalPrice: v.originalPrice,
                          image: quickViewProduct.image,
                          category: quickViewProduct.categoryName
                        })
                      }
                      setQuickViewProduct(null)
                    }}
                    className="w-full py-3 bg-[#2D0345] hover:bg-[#3d085c] text-white text-xs sm:text-sm font-black tracking-wider uppercase rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO CART</span>
                  </button>

                  {onSelectProduct && (
                    <button
                      type="button"
                      onClick={() => {
                        const targetId = quickViewProduct.id
                        setQuickViewProduct(null)
                        onSelectProduct(targetId)
                      }}
                      className="w-full py-2.5 bg-gray-50 hover:bg-gray-100 text-[#2D0345] border border-gray-200 text-xs font-bold rounded-xl transition-colors cursor-pointer text-center"
                    >
                      View Complete Product Page & Certificate →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
