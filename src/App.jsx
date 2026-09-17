import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import StoryCategories from './components/StoryCategories'
import HeroBanner from './components/HeroBanner'
import WhyChooseUs from './components/WhyChooseUs'
import GallerySection from './components/GallerySection'
import CustomerReviews from './components/CustomerReviews'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import ProductsPage from './components/ProductsPage'
import ProductDetailPage from './components/ProductDetailPage'
import { ALL_PRODUCTS, CATEGORIES } from './data/products'
import shopProductsBg from './assets/images/shop_products_bg.png'
import { Sparkles, ShieldCheck, Heart, Star, ArrowRight, Truck, Award, Leaf, ChevronDown, Check, X, ShoppingBag, Eye } from 'lucide-react'

export default function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [currentView, setCurrentView] = useState('home') // 'home' | 'category' | 'product'
  const [activeCategory, setActiveCategory] = useState('ghee')
  const [selectedProductId, setSelectedProductId] = useState('ghee-1')

  // Listen for hash changes (e.g. #category/ghee, #product/ghee-1, #products, #cart, etc.)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash === '#cart') {
        setIsCartOpen(true)
        return
      }
      if (hash.startsWith('#product/')) {
        const prodId = hash.replace('#product/', '')
        setSelectedProductId(prodId || 'ghee-1')
        setCurrentView('product')
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      if (hash.startsWith('#category/')) {
        const catId = hash.replace('#category/', '')
        setActiveCategory(catId)
        setCurrentView('category')
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      if (hash === '#products' || hash === '#all-products') {
        setActiveCategory('ghee')
        setCurrentView('category')
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      // Check direct category hashes like #ghee, #honey, #spices
      const directCategories = ['ghee', 'honey', 'spices', 'super-foods', 'cold-pressed-oils', 'natural-sweeteners', 'protein-bars', 'non-veg-pickles']
      const cleanHash = hash.replace('#', '')
      if (directCategories.includes(cleanHash)) {
        setActiveCategory(cleanHash)
        setCurrentView('category')
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      if (hash === '#home' || hash === '' || hash === '#') {
        setCurrentView('home')
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const navigateToCategory = (categoryId) => {
    const target = (categoryId === 'all' || !categoryId) ? 'ghee' : categoryId
    setActiveCategory(target)
    setCurrentView('category')
    window.location.hash = `#category/${target}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToProduct = (productId) => {
    const targetId = productId || 'ghee-1'
    setSelectedProductId(targetId)
    setCurrentView('product')
    window.location.hash = `#product/${targetId}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToHome = () => {
    setCurrentView('home')
    window.location.hash = ''
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const [toasts, setToasts] = useState([])

  const showToast = ({ title, message, image, type = 'cart' }) => {
    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { id, title, message, image, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3500)
  }

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [
        ...prev,
        {
          id: product.id || Date.now(),
          name: product.title || product.name,
          title: product.title || product.name,
          weight: product.weight || product.selectedVariant || 'Standard Pack',
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.image,
          quantity: 1
        }
      ]
    })
    showToast({
      type: 'cart',
      title: 'Added to Cart',
      message: `${product.title || product.name} ${product.weight ? `(${product.weight})` : ''} • ₹${product.price?.toLocaleString('en-IN')}`,
      image: product.image
    })
  }

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id)
      return
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    )
  }

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const [selectedVariants, setSelectedVariants] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0
  })
  const [openDropdownId, setOpenDropdownId] = useState(null)
  const [wishlist, setWishlist] = useState({})

  // Close dropdown on outside click
  useEffect(() => {
    const handleDocClick = (e) => {
      if (!e.target.closest('.variant-dropdown-container')) {
        setOpenDropdownId(null)
      }
    }
    document.addEventListener('click', handleDocClick)
    return () => document.removeEventListener('click', handleDocClick)
  }, [])

  const toggleWishlist = (id, productTitle, productImage) => {
    const isCurrentlyWishlisted = !!wishlist[id]
    const isNowWishlisted = !isCurrentlyWishlisted

    setWishlist((prev) => ({ ...prev, [id]: isNowWishlisted }))

    if (isNowWishlisted) {
      showToast({
        type: 'wishlist',
        title: 'Added to Wishlist',
        message: `${productTitle || 'Item'} saved to your favorites ❤️`,
        image: productImage
      })
    } else {
      showToast({
        type: 'wishlist-remove',
        title: 'Removed from Wishlist',
        message: `${productTitle || 'Item'} removed from favorites`,
        image: productImage
      })
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      {/* 1. Header (Top announcement + Main nav + Subnav) */}
      <Header 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)}
        onAddToCart={handleAddToCart}
        onNavigateCategory={navigateToCategory}
        onNavigateHome={navigateToHome}
      />

      {/* Main Content: Product Details Page, Category Products Page or Homepage */}
      {currentView === 'product' ? (
        <ProductDetailPage 
          productId={selectedProductId}
          onBack={() => navigateToCategory(activeCategory)}
          onNavigateHome={navigateToHome}
          onNavigateCategory={navigateToCategory}
          onAddToCart={handleAddToCart}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          onSelectProduct={navigateToProduct}
        />
      ) : currentView === 'category' ? (
        <ProductsPage 
          initialCategory={activeCategory}
          onBackToHome={navigateToHome}
          onAddToCart={handleAddToCart}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          onSelectProduct={navigateToProduct}
        />
      ) : (
        <>
          {/* 2. Story Highlights (Circular category icons) */}
          <StoryCategories onNavigateCategory={navigateToCategory} />

          {/* 3. Hero Banner (Rotating banner) */}
          <HeroBanner />

          {/* 4. Shop Our Products - Full Catalog */}
          <section className="w-full py-10 sm:py-12 relative bg-white overflow-hidden">
            {/* Left Top Corner - Small Botanical Watercolor Leaves */}
            <div className="absolute top-0 left-0 w-32 sm:w-44 md:w-56 h-32 sm:h-44 md:h-56 pointer-events-none z-0">
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7F9634" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#404D1A" stopOpacity="0.95" />
                  </linearGradient>
                  <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9DBA44" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#5B6F23" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="leafGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#BACF63" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#7F9634" stopOpacity="0.85" />
                  </linearGradient>
                </defs>
                {/* Main organic curved stem */}
                <path d="M-10 -10 C20 40 50 70 110 100" stroke="#5B6F23" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
                <path d="M40 55 C65 85 95 110 135 125" stroke="#5B6F23" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
                <path d="M-5 25 C15 65 35 110 50 155" stroke="#5B6F23" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
                
                {/* Leaf 1 (Top left) */}
                <path d="M5 5 C25 -5 55 5 65 25 C65 45 40 50 15 35 Z" fill="url(#leafGrad1)" />
                <path d="M5 5 Q35 20 65 25" stroke="#3A4616" strokeWidth="1" opacity="0.4" />
                
                {/* Leaf 2 (Upper mid) */}
                <path d="M25 35 C50 25 80 40 90 65 C85 85 60 85 35 65 Z" fill="url(#leafGrad2)" />
                <path d="M25 35 Q60 55 90 65" stroke="#3A4616" strokeWidth="1" opacity="0.4" />

                {/* Leaf 3 (Branch tip) */}
                <path d="M60 70 C85 60 120 75 130 98 C120 115 95 115 70 95 Z" fill="url(#leafGrad1)" />
                <path d="M60 70 Q95 85 130 98" stroke="#3A4616" strokeWidth="1" opacity="0.4" />

                {/* Leaf 4 (Sub branch) */}
                <path d="M85 105 C110 100 145 115 155 135 C140 150 115 145 95 125 Z" fill="url(#leafGrad3)" />

                {/* Small floating leaves */}
                <path d="M20 95 C35 90 50 100 55 115 C48 125 35 125 22 110 Z" fill="url(#leafGrad2)" />
                <path d="M5 130 C18 125 30 135 32 148 C25 155 15 152 6 142 Z" fill="url(#leafGrad3)" />
                <path d="M70 140 C80 135 92 142 95 152 C88 160 78 158 70 150 Z" fill="url(#leafGrad2)" opacity="0.8" />
              </svg>
            </div>

            {/* Right Top Corner - Warm Sun with Soaring Birds/Crows */}
            <div className="absolute top-0 right-0 w-36 sm:w-48 md:w-60 h-32 sm:h-44 md:h-52 pointer-events-none z-0">
              <svg viewBox="0 0 220 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="sunGlow" cx="65%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="#FDE68A" />
                    <stop offset="50%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#D97706" />
                  </radialGradient>
                  <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFDF7" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0.75" />
                  </linearGradient>
                </defs>

                {/* Sun Circle */}
                <circle cx="170" cy="50" r="32" fill="url(#sunGlow)" opacity="0.9" />

                {/* Soft Watercolor Clouds under/over sun */}
                <path d="M120 75 C120 65 130 58 140 60 C145 52 158 50 168 56 C176 50 190 52 195 62 C205 60 215 68 215 78 C215 88 205 92 195 92 L130 92 C122 92 120 84 120 75 Z" fill="url(#cloudGrad)" />
                <path d="M100 88 C100 80 110 74 120 76 C126 70 138 68 148 74 C155 70 166 72 170 80 C178 78 188 84 188 94 C188 102 178 106 170 106 L110 106 C102 106 100 98 100 88 Z" fill="url(#cloudGrad)" opacity="0.6" />

                {/* Soaring Bird 1 (Crow Large) */}
                <path d="M75 52 Q84 43 92 48 Q100 43 108 52 Q100 48 92 53 Q84 48 75 52 Z" fill="#2E3C14" />

                {/* Soaring Bird 2 (Crow Medium) */}
                <path d="M50 68 Q57 60 64 64 Q71 60 78 68 Q71 65 64 69 Q57 65 50 68 Z" fill="#2E3C14" opacity="0.9" />

                {/* Soaring Bird 3 (Crow Small/Distant) */}
                <path d="M35 44 Q40 37 45 40 Q50 37 55 44 Q50 41 45 45 Q40 41 35 44 Z" fill="#2E3C14" opacity="0.75" />
              </svg>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="mb-8 pt-2 sm:pt-3 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-black text-[#2D0345] tracking-tight">
                  Shop Our Products
                </h2>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8">
              {ALL_PRODUCTS.map((p) => {
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
                        <span className="leading-none">{p.tag || 'NATURAL'}</span>
                        <span className="text-white/70 font-normal">|</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleWishlist(p.id, p.title, p.image)
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
                        onClick={() => navigateToProduct(p.id)}
                        className="absolute bottom-2 left-2 z-10 bg-white/90 backdrop-blur-xs hover:bg-white text-[#2D0345] text-[11px] font-bold px-2.5 py-1 rounded-none shadow-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Quick View</span>
                      </button>

                      {/* Product Photography */}
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        onClick={() => navigateToProduct(p.id)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between space-y-3 px-0.5">
                      <div className="space-y-1.5">
                        {/* Title & Price Header */}
                        <div className="flex items-start justify-between gap-2">
                          <h3 
                            onClick={() => navigateToProduct(p.id)}
                            className="font-medium text-sm sm:text-base text-gray-900 leading-snug cursor-pointer hover:text-[#2D0345] transition-colors line-clamp-2"
                          >
                            {p.title}
                          </h3>
                          <div className="text-right shrink-0">
                            <span className="font-medium text-sm sm:text-base text-gray-900 block">
                              ₹{currentVariant.price.toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>

                        {/* Subtitle / Key Claim */}
                        <p className="text-xs text-gray-500 font-normal leading-normal line-clamp-2">
                          {p.subtitle}
                        </p>

                        {/* Rating & Reviews */}
                        <div className="flex items-center gap-1 text-xs text-gray-800 font-medium pt-0.5">
                          <div className="flex items-center gap-0.5 text-amber-400">
                            <Star className="w-3 h-3 fill-amber-400 stroke-none" />
                            <Star className="w-3 h-3 fill-amber-400 stroke-none" />
                            <Star className="w-3 h-3 fill-amber-400 stroke-none" />
                            <Star className="w-3 h-3 fill-amber-400 stroke-none" />
                            <Star className="w-3 h-3 fill-amber-400 stroke-none" />
                          </div>
                          <span className="ml-1 font-medium text-gray-900">{p.rating}</span>
                          <span className="text-gray-400">|</span>
                          <span className="text-gray-600 font-normal">{p.reviews}</span>
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
                            className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-medium text-gray-800 bg-white border border-gray-300 rounded-none shadow-2xs hover:border-gray-400 focus:outline-none transition-colors cursor-pointer"
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
                                        ? 'bg-purple-50 text-[#2D0345] font-medium' 
                                        : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                                  >
                                    <span className="truncate">{variant.label}</span>
                                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                                      <span className="font-medium">
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
                            handleAddToCart({
                              id: `${p.id}-${currentVariant.label}`,
                              title: p.title,
                              weight: currentVariant.label,
                              price: currentVariant.price,
                              originalPrice: currentVariant.originalPrice,
                              image: p.image,
                              category: p.categoryName
                            })
                          }}
                          className="w-full py-3 px-4 bg-[#2D0345] hover:bg-[#3d085c] active:bg-[#200231] text-white text-xs sm:text-sm font-medium tracking-wider uppercase rounded-none transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
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
            </div>
          </section>

          {/* 5. Why Choose Anvi Farms Section */}
          <WhyChooseUs />

          {/* 6. Beyond Our Products Gallery Section */}
          <GallerySection />

          {/* 7. Loved by Our Customers Section */}
          <CustomerReviews />
        </>
      )}

      {/* Floating Right-Side Toast Notifications */}
      <div className="fixed top-20 sm:top-24 right-4 sm:right-6 z-50 flex flex-col gap-2.5 max-w-sm w-[calc(100vw-2rem)] sm:w-84 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto bg-white/95 backdrop-blur-md border border-gray-100 shadow-2xl rounded-2xl p-3.5 flex items-center gap-3 animate-slide-in-right transition-all"
          >
            {toast.image ? (
              <img 
                src={toast.image} 
                alt={toast.title} 
                className="w-11 h-11 object-cover rounded-xl shrink-0 border border-gray-100" 
              />
            ) : (
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                toast.type === 'wishlist' ? 'bg-rose-50 text-rose-500' : 'bg-[#404D1A]/10 text-[#404D1A]'
              }`}>
                {toast.type === 'wishlist' ? (
                  <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
                ) : (
                  <ShoppingBag className="w-5 h-5 text-[#404D1A]" />
                )}
              </div>
            )}

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                {toast.type === 'wishlist' ? (
                  <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 shrink-0" />
                ) : toast.type === 'wishlist-remove' ? (
                  <Heart className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                ) : (
                  <span className="inline-block w-2 h-2 rounded-full bg-[#404D1A] shrink-0"></span>
                )}
                <p className="text-xs font-bold text-gray-900 truncate">
                  {toast.title}
                </p>
              </div>
              <p className="text-[11px] text-gray-500 truncate mt-0.5">
                {toast.message}
              </p>
            </div>

            {toast.type === 'cart' && (
              <button
                type="button"
                onClick={() => {
                  setIsCartOpen(true)
                  removeToast(toast.id)
                }}
                className="text-xs font-bold text-[#2D0345] hover:text-[#430666] underline decoration-2 shrink-0 cursor-pointer px-1"
              >
                View
              </button>
            )}

            <button
              type="button"
              onClick={() => removeToast(toast.id)}
              className="text-gray-400 hover:text-gray-600 p-1 shrink-0 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Cart Slide-out Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => {
          setIsCartOpen(false)
          if (window.location.hash === '#cart') {
            history.replaceState(null, '', window.location.pathname)
          }
        }}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* 9. Comprehensive Pastoral Footer */}
      <Footer 
        onNavigateCategory={navigateToCategory} 
        onNavigateHome={navigateToHome} 
      />
    </div>
  )
}
