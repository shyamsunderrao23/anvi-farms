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
          <section className="w-full py-8 sm:py-10 relative bg-white overflow-hidden">
            {/* Left Top Corner - Small Botanical Leaves (100% Transparent Vector) */}
            <div className="absolute top-0 left-0 w-24 sm:w-32 md:w-40 pointer-events-none z-0">
              <svg viewBox="0 0 160 160" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Branch Stems */}
                <path d="M-5 -5 Q30 35 75 60" stroke="#687B2E" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                <path d="M25 30 Q50 65 70 100" stroke="#687B2E" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
                <path d="M50 48 Q85 65 115 75" stroke="#687B2E" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />

                {/* Main Cluster Leaves */}
                <path d="M5 2 C18 -4 35 2 40 18 C38 32 24 35 12 24 Z" fill="#758A32" opacity="0.9" />
                <path d="M18 20 C32 12 48 20 54 36 C50 48 36 50 24 38 Z" fill="#889E3B" opacity="0.9" />
                <path d="M42 38 C58 28 78 38 82 56 C76 68 60 68 48 54 Z" fill="#758A32" opacity="0.85" />
                <path d="M72 58 C88 50 104 58 108 72 C102 82 88 82 78 70 Z" fill="#9CB249" opacity="0.85" />

                {/* Lower Drooping Leaves */}
                <path d="M22 45 C34 50 40 68 34 82 C24 86 16 75 16 60 Z" fill="#889E3B" opacity="0.85" />
                <path d="M30 75 C42 80 48 98 42 112 C32 116 24 105 24 90 Z" fill="#758A32" opacity="0.8" />
                <path d="M40 105 C50 110 54 125 48 135 C40 138 34 130 34 118 Z" fill="#9CB249" opacity="0.75" />

                {/* Side Small Sprout Leaves */}
                <path d="M78 68 C90 70 98 82 95 94 C86 98 78 92 76 80 Z" fill="#889E3B" opacity="0.8" />
                <path d="M58 88 C70 92 76 104 72 115 C64 118 56 112 56 102 Z" fill="#A8BF53" opacity="0.75" />
                <path d="M8 82 C16 88 20 100 16 110 C10 112 4 106 5 95 Z" fill="#A8BF53" opacity="0.7" />
              </svg>
            </div>

            {/* Right Top Corner - Golden Sun, Cloud & Birds (100% Transparent Vector) */}
            <div className="absolute top-0 right-0 w-28 sm:w-36 md:w-48 pointer-events-none z-0">
              <svg viewBox="0 0 240 140" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Golden Circular Sun */}
                <circle cx="150" cy="42" r="22" fill="#EFA11D" />

                {/* Soft Organic Watercolor Cloud Layers */}
                <path 
                  d="M10 92 C30 82 50 82 65 88 C72 76 90 70 106 76 C115 62 135 56 150 64 C162 58 180 62 188 74 C198 70 215 76 218 88 C226 95 238 102 230 112 C200 110 160 100 130 94 C90 88 50 88 10 92 Z" 
                  fill="#F8F3DC" 
                  opacity="0.95"
                />
                <path 
                  d="M30 98 C60 90 90 92 120 95 C150 98 180 105 210 116 C190 120 170 116 150 112 C100 102 60 100 30 98 Z" 
                  fill="#F2ECCE" 
                  opacity="0.75"
                />

                {/* Flying Bird 1 (Upper) */}
                <path 
                  d="M118 48 C123 44 128 44 133 49 C138 43 145 44 150 51 C144 48 138 49 133 53 C129 49 123 47 118 48 Z" 
                  fill="#1A1816" 
                />

                {/* Flying Bird 2 (Lower) */}
                <path 
                  d="M98 62 C103 58 108 58 113 63 C117 57 124 58 128 65 C122 62 117 63 113 67 C109 63 103 61 98 62 Z" 
                  fill="#1A1816" 
                />
              </svg>
            </div>

            {/* Left Middle Edge - Floating Botanical Sprig */}
            <div className="absolute top-1/3 left-0 w-16 sm:w-24 md:w-32 pointer-events-none z-0 opacity-75">
              <svg viewBox="0 0 140 160" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-5 80 Q40 70 85 40" stroke="#687B2E" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
                <path d="M15 72 C28 60 48 64 50 78 C44 88 30 88 18 80 Z" fill="#758A32" opacity="0.85" />
                <path d="M38 58 C52 46 70 52 74 65 C66 76 52 74 40 64 Z" fill="#889E3B" opacity="0.85" />
                <path d="M62 44 C76 32 94 38 98 52 C90 62 76 60 64 50 Z" fill="#9CB249" opacity="0.8" />
                <path d="M25 90 C36 98 40 112 34 122 C26 124 20 115 18 102 Z" fill="#889E3B" opacity="0.75" />
              </svg>
            </div>

            {/* Right Middle Edge - Floating Botanical Sprig */}
            <div className="absolute top-2/3 right-0 w-16 sm:w-24 md:w-32 pointer-events-none z-0 opacity-75">
              <svg viewBox="0 0 140 160" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M145 80 Q100 70 55 40" stroke="#687B2E" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
                <path d="M125 72 C112 60 92 64 90 78 C96 88 110 88 122 80 Z" fill="#758A32" opacity="0.85" />
                <path d="M102 58 C88 46 70 52 66 65 C74 76 88 74 100 64 Z" fill="#889E3B" opacity="0.85" />
                <path d="M78 44 C64 32 46 38 42 52 C50 62 64 60 76 50 Z" fill="#9CB249" opacity="0.8" />
                <path d="M115 90 C104 98 100 112 106 122 C114 124 120 115 122 102 Z" fill="#889E3B" opacity="0.75" />
              </svg>
            </div>

            {/* Left Bottom Edge - Organic Leaf Cluster */}
            <div className="absolute bottom-1 left-0 w-20 sm:w-28 md:w-36 pointer-events-none z-0 opacity-80">
              <svg viewBox="0 0 150 150" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-5 155 Q35 120 70 85" stroke="#687B2E" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
                <path d="M10 140 C22 125 40 128 44 142 C38 152 24 152 14 144 Z" fill="#758A32" opacity="0.85" />
                <path d="M30 115 C44 100 62 104 65 118 C58 128 44 128 32 120 Z" fill="#889E3B" opacity="0.85" />
                <path d="M52 92 C65 78 82 82 85 96 C78 105 65 104 54 96 Z" fill="#9CB249" opacity="0.8" />
                <path d="M18 105 C28 95 42 98 44 110 C38 118 28 118 20 112 Z" fill="#A8BF53" opacity="0.75" />
              </svg>
            </div>

            {/* Bottom Right - Grazing Desi Gir Cow on Pasture Grass */}
            <div className="absolute bottom-2 right-2 sm:right-6 w-36 sm:w-48 md:w-56 pointer-events-none z-0 opacity-85">
              <svg viewBox="0 0 200 130" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Pasture Grass Blades Base */}
                <path d="M10 120 Q50 115 100 118 Q150 115 190 120" stroke="#758A32" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M25 120 L30 106 L36 120 M42 120 L48 102 L54 120 M145 120 L150 104 L156 120 M165 120 L170 108 L176 120" stroke="#889E3B" strokeWidth="2" strokeLinecap="round" />
                
                {/* Cow Back Legs */}
                <rect x="75" y="75" width="8" height="38" rx="4" fill="#E8DEC8" />
                <rect x="75" y="108" width="8" height="6" rx="2" fill="#5A4738" />
                <rect x="90" y="72" width="8" height="40" rx="4" fill="#DDD0B8" />
                <rect x="90" y="107" width="8" height="6" rx="2" fill="#5A4738" />

                {/* Cow Front Legs */}
                <rect x="140" y="74" width="8" height="39" rx="4" fill="#E8DEC8" />
                <rect x="140" y="108" width="8" height="6" rx="2" fill="#5A4738" />
                <rect x="154" y="72" width="8" height="41" rx="4" fill="#DDD0B8" />
                <rect x="154" y="108" width="8" height="6" rx="2" fill="#5A4738" />

                {/* Main Torso */}
                <ellipse cx="118" cy="68" rx="46" ry="26" fill="#F4EFE6" />
                
                {/* Gir Cow Hump (Kakud) */}
                <path d="M136 46 C140 32 154 32 156 46 Z" fill="#E8DEC8" />

                {/* Cow Neck & Grazing Head */}
                <path d="M148 52 C158 50 170 58 178 72 C184 82 178 96 166 94 C156 92 148 76 144 60 Z" fill="#F4EFE6" />
                
                {/* Dewlap (Skin fold) */}
                <path d="M152 64 Q158 84 148 90" stroke="#E0D2BC" strokeWidth="3" strokeLinecap="round" fill="none" />

                {/* Muzzle */}
                <ellipse cx="174" cy="88" rx="8" ry="6" fill="#5A4738" opacity="0.6" />

                {/* Horns (Curved Gir horns) */}
                <path d="M166 52 C170 38 184 40 182 48" stroke="#4A3828" strokeWidth="3" strokeLinecap="round" fill="none" />
                
                {/* Ear (Long pendulous Gir ear) */}
                <path d="M162 58 C158 68 156 76 158 80 C162 78 164 68 164 60 Z" fill="#E0D2BC" />

                {/* Tail with tuft */}
                <path d="M74 62 C66 74 68 92 70 100" stroke="#DDD0B8" strokeWidth="2.5" fill="none" />
                <ellipse cx="70" cy="102" rx="3.5" ry="6" fill="#4A3828" />
              </svg>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="mb-8 pt-1 text-center">
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
