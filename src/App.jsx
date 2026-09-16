import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import StoryCategories from './components/StoryCategories'
import HeroBanner from './components/HeroBanner'
import WhyChooseUs from './components/WhyChooseUs'
import ShopByCategory from './components/ShopByCategory'
import GallerySection from './components/GallerySection'
import CustomerReviews from './components/CustomerReviews'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import ProductsPage from './components/ProductsPage'
import ProductDetailPage from './components/ProductDetailPage'
import { Sparkles, ShieldCheck, Heart, Star, ArrowRight, Truck, Award, Leaf, ChevronDown, Check, X, ShoppingBag } from 'lucide-react'
import desiGheeImg from './assets/images/desi_ghee.jpg'
import honeyImg from './assets/images/honey.jpg'
import spicesImg from './assets/images/spices.jpg'
import amlaprashImg from './assets/images/amlaprash.jpg'
import coldPressedOilImg from './assets/images/cold_pressed_oil.jpg'
import naturalSweetenerImg from './assets/images/natural_sweetener.jpg'
import proteinBarImg from './assets/images/protein_bar.jpg'
import chickenPickleImg from './assets/images/chicken_pickle.jpg'

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

  const featuredProducts = [
    {
      id: 'ghee-1',
      tag: 'BEST SELLER',
      tagBg: 'bg-[#2D0345]',
      title: 'Desi Gir Cow Cultured A2 Ghee',
      subtitle: 'Bilona-made | Certified Vedic A2',
      image: desiGheeImg,
      rating: '4.9',
      reviews: '2.4k+ Reviews',
      variants: [
        { label: '1000 ml (Glass Jar)', price: 3595 },
        { label: '500 ml (Glass Jar)', price: 1850 },
        { label: '250 ml (Glass Jar)', price: 950 }
      ]
    },
    {
      id: 'honey-1',
      tag: 'PURE & RAW',
      tagBg: 'bg-[#D97706]',
      title: 'Raw Wild Forest Honey',
      subtitle: 'Unpasteurized | NMR 100% Pure',
      image: honeyImg,
      rating: '4.9',
      reviews: '1.6k+ Reviews',
      variants: [
        { label: '500 g', price: 650 },
        { label: '1 kg', price: 1200 },
        { label: '250 g', price: 350 }
      ]
    },
    {
      id: 'super-foods-1',
      tag: 'IMMUNITY',
      tagBg: 'bg-[#404D1A]',
      title: 'Amlaprash (Herbal Chyawanprash)',
      subtitle: '40+ herbs | Wild Forest Amla',
      image: amlaprashImg,
      rating: '4.9',
      reviews: '1.8k+ Reviews',
      variants: [
        { label: '300 g', price: 675 },
        { label: '500 g', price: 1050 },
        { label: '1 kg', price: 1950 }
      ]
    },
    {
      id: 'cold-pressed-oils-1',
      tag: 'COLD PRESSED',
      tagBg: 'bg-[#B45309]',
      title: 'Cold Pressed Groundnut Oil',
      subtitle: 'Wood Pressed (Kolhu) | Unrefined',
      image: coldPressedOilImg,
      rating: '4.8',
      reviews: '980+ Reviews',
      variants: [
        { label: '1 Litre (Tin)', price: 440 },
        { label: '5 Litre (Tin)', price: 2100 },
        { label: '500 ml (Bottle)', price: 240 }
      ]
    }
  ]

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

          {/* 4. Featured Farm Staples */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
            <div className="mb-8 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#2D0345] tracking-tight">
                Top Picks from Our Customers
              </h2>
            </div>

            {/* 4 Products Grid Exactly Matching the Two Brothers Reference Image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((p) => {
                const variantIndex = selectedVariants[p.id] || 0
                const currentVariant = p.variants[variantIndex] || p.variants[0]
                const isWishlisted = !!wishlist[p.id]

                return (
                  <div 
                    key={p.id}
                    className={`flex flex-col justify-between group relative ${openDropdownId === p.id ? 'z-30' : 'z-10'}`}
                  >
                    {/* Top Image Container */}
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden mb-3">
                      {/* Top-Right Corner Tab Badge (Text | Heart) */}
                      <div className={`absolute top-0 right-0 z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-bl-xl text-white text-xs font-semibold shadow-xs ${p.tagBg}`}>
                        <span className="leading-none">{p.tag}</span>
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

                      {/* Product Photography */}
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        onClick={() => navigateToProduct(p.id)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                    </div>

                    {/* Open Details (No card box) */}
                    <div className="flex-1 flex flex-col justify-between space-y-3 px-0.5">
                      <div className="space-y-1.5">
                        {/* Title & Price Header */}
                        <div className="flex items-start justify-between gap-2">
                          <h3 
                            onClick={() => navigateToProduct(p.id)}
                            className="font-medium text-sm sm:text-base text-gray-900 leading-snug cursor-pointer hover:text-[#2D0345] transition-colors"
                          >
                            {p.title}
                          </h3>
                          <span className="font-medium text-sm sm:text-base text-gray-900 shrink-0">
                            ₹{currentVariant.price.toLocaleString('en-IN')}
                          </span>
                        </div>

                        {/* Subtitle / Key Claim */}
                        <p className="text-xs text-gray-500 font-medium leading-normal">
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
                            handleAddToCart({
                              id: `${p.id}-${currentVariant.label}`,
                              title: p.title,
                              weight: currentVariant.label,
                              price: currentVariant.price,
                              image: p.image
                            })
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

            {/* View All Button Centered Below the Grid */}
            <div className="mt-10 flex items-center justify-center">
              <button
                type="button"
                onClick={() => navigateToCategory('ghee')}
                className="inline-flex items-center justify-center gap-3 min-w-[220px] px-8 py-3.5 rounded-full bg-[#2D0345] text-white font-bold text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95 group cursor-pointer text-center"
              >
                <span>Explore Farm Categories</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2]" />
              </button>
            </div>
          </section>

          {/* 5. Why Choose Anvi Farms Section */}
          <WhyChooseUs />

          {/* 6. Shop By Our Category Section */}
          <ShopByCategory onNavigateCategory={navigateToCategory} />

          {/* 7. Beyond Our Products Gallery Section */}
          <GallerySection />

          {/* 8. Loved by Our Customers Section */}
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
