import React, { useState, useEffect } from 'react'
import { 
  Heart, 
  Star, 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  Users, 
  PackageCheck, 
  Copy, 
  Check, 
  ShoppingBag, 
  Zap, 
  Share2, 
  ZoomIn, 
  X, 
  Minus, 
  Plus, 
  Award, 
  Leaf, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Info,
  CheckCircle2,
  ArrowLeft,
  Eye
} from 'lucide-react'
import { ALL_PRODUCTS, CATEGORIES } from '../data/products'

// Gallery image imports for rich product showcases
import desiGheeImg from '../assets/images/desi_ghee.jpg'
import buffaloGheeImg from '../assets/images/buffalo_ghee.jpg'
import girCowsImg from '../assets/images/gallery_gir_cows.jpg'
import bilonaChurnImg from '../assets/images/gallery_bilona_churn.jpg'
import cowGheeBgImg from '../assets/images/banner_cow_ghee_bg.jpg'
import traditionalKitchenImg from '../assets/images/traditional_kitchen_bg.jpg'
import honeyImg from '../assets/images/honey.jpg'
import beekeepingImg from '../assets/images/gallery_beekeeping.jpg'
import amlaprashImg from '../assets/images/amlaprash.jpg'
import coldPressedOilImg from '../assets/images/cold_pressed_oil.jpg'
import spicesImg from '../assets/images/spices.jpg'
import naturalSweetenerImg from '../assets/images/natural_sweetener.jpg'
import proteinBarImg from '../assets/images/protein_bar.jpg'
import chickenPickleImg from '../assets/images/chicken_pickle.jpg'

export default function ProductDetailPage({
  productId = 'ghee-1',
  onBack,
  onNavigateHome,
  onNavigateCategory,
  onAddToCart,
  wishlist = {},
  onToggleWishlist,
  onSelectProduct
}) {
  // Find product by id or fallback to ghee-1
  const product = ALL_PRODUCTS.find((p) => p.id === productId) || ALL_PRODUCTS[0]
  
  // Find category info
  const categoryInfo = CATEGORIES.find((c) => c.id === product.categoryId) || CATEGORIES[0]

  // Selected variant state (defaults to index 0)
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0)
  const currentVariant = product.variants[selectedVariantIndex] || product.variants[0]

  // Related products variant and dropdown states
  const [selectedRelatedVariants, setSelectedRelatedVariants] = useState({})
  const [openRelatedDropdownId, setOpenRelatedDropdownId] = useState(null)

  // Quantity state
  const [quantity, setQuantity] = useState(1)

  // Active gallery image index
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Zoom modal state
  const [isZoomOpen, setIsZoomOpen] = useState(false)

  // Coupon copy state
  const [couponCopied, setCouponCopied] = useState(false)

  // Accordion active sections
  const [openAccordions, setOpenAccordions] = useState({
    process: true,
    nutrition: false,
    benefits: false,
    storage: false,
    faqs: false
  })

  // Review Filter state
  const [selectedReviewStar, setSelectedReviewStar] = useState('all')

  // Reset states when product changes
  useEffect(() => {
    setSelectedVariantIndex(0)
    setSelectedRelatedVariants({})
    setOpenRelatedDropdownId(null)
    setQuantity(1)
    setActiveImageIndex(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [productId])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.related-variant-dropdown')) {
        setOpenRelatedDropdownId(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleCopyCoupon = (code) => {
    navigator.clipboard.writeText(code)
    setCouponCopied(true)
    setTimeout(() => setCouponCopied(false), 2500)
  }

  const isWishlisted = !!wishlist[product.id]

  // Construct gallery images based on category / product
  const getGalleryImages = () => {
    if (product.categoryId === 'ghee') {
      return [
        { src: product.image, label: 'Main Jar View' },
        { src: cowGheeBgImg, label: 'Vedic Danedar Texture' },
        { src: bilonaChurnImg, label: 'Hand Bilona Churning' },
        { src: girCowsImg, label: 'Free Grazing Gir Cows' },
        { src: traditionalKitchenImg, label: 'Ancestral Clay Pot Fire' }
      ]
    }
    if (product.categoryId === 'honey') {
      return [
        { src: product.image, label: 'Raw Honey Jar' },
        { src: beekeepingImg, label: 'Wild Forest Apiaries' },
        { src: product.image, label: 'NMR Lab Certified' },
        { src: traditionalKitchenImg, label: 'Unheated Direct Pour' }
      ]
    }
    return [
      { src: product.image, label: 'Product Front' },
      { src: categoryInfo.banner || product.image, label: 'Farm Origin' },
      { src: traditionalKitchenImg, label: 'Authentic Preparation' }
    ]
  }

  const galleryImages = getGalleryImages()
  const activeImage = galleryImages[activeImageIndex]?.src || product.image

  // Dynamic USP badges for the product
  const getUSPBadges = () => {
    if (product.categoryId === 'ghee') {
      return [
        {
          title: 'BILONA CHURNED',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-[#1E5631]">
              <path d="M12 2v6" />
              <path d="M7 8h10a2 2 0 0 1 2 2v3a6 6 0 0 1-6 6H11a6 6 0 0 1-6-6v-3a2 2 0 0 1 2-2z" />
              <path d="M8 21h8" />
            </svg>
          )
        },
        {
          title: 'GIR COW GHEE',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-[#1E5631]">
              <path d="M4 10c0-2.5 2-4.5 4.5-4.5h7c2.5 0 4.5 2 4.5 4.5v5a2 2 0 0 1-2 2h-1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3h-4v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3H5a2 2 0 0 1-2-2v-5z" />
              <path d="M7 6V4a2 2 0 0 1 2-2h1" />
              <path d="M17 6V4a2 2 0 0 0-2-2h-1" />
            </svg>
          )
        },
        {
          title: 'LACTOSE-FREE',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-[#1E5631]">
              <path d="M8 2h8v3H8z" />
              <path d="M9 5v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5" />
              <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" />
            </svg>
          )
        },
        {
          title: "MADE OF 'MAKKHAN'",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-[#1E5631]">
              <path d="M5 11h14v2a7 7 0 0 1-7 7 7 7 0 0 1-7-7v-2z" />
              <path d="M7 11V8a5 5 0 0 1 10 0v3" />
            </svg>
          )
        }
      ]
    }
    if (product.categoryId === 'honey') {
      return [
        {
          title: '100% NMR TESTED',
          icon: <ShieldCheck className="w-6 h-6 text-[#1E5631]" />
        },
        {
          title: 'RAW & UNHEATED',
          icon: <Leaf className="w-6 h-6 text-[#1E5631]" />
        },
        {
          title: 'WILD FOREST',
          icon: <Sparkles className="w-6 h-6 text-[#1E5631]" />
        },
        {
          title: 'ZERO ADDED SUGAR',
          icon: <Award className="w-6 h-6 text-[#1E5631]" />
        }
      ]
    }
    return [
      {
        title: '100% NATURAL',
        icon: <Leaf className="w-6 h-6 text-[#1E5631]" />
      },
      {
        title: 'FARM FRESH',
        icon: <Award className="w-6 h-6 text-[#1E5631]" />
      },
      {
        title: 'ZERO CHEMICALS',
        icon: <ShieldCheck className="w-6 h-6 text-[#1E5631]" />
      },
      {
        title: 'TRADITIONAL RECIPE',
        icon: <Sparkles className="w-6 h-6 text-[#1E5631]" />
      }
    ]
  }

  const uspBadges = getUSPBadges()

  // Calculate unit rate e.g. Rs 3.37 / ml
  const calculateUnitRate = (variant) => {
    const label = variant.label.toLowerCase()
    let quantityNum = 1
    let unit = 'ml'
    if (label.includes('1000 ml') || label.includes('1 litre') || label.includes('1 l') || label.includes('1 kg')) {
      quantityNum = 1000
      unit = label.includes('kg') ? 'g' : 'ml'
    } else if (label.includes('500 ml') || label.includes('500 g') || label.includes('500g')) {
      quantityNum = 500
      unit = label.includes('g') ? 'g' : 'ml'
    } else if (label.includes('250 ml') || label.includes('250 g') || label.includes('250g')) {
      quantityNum = 250
      unit = label.includes('g') ? 'g' : 'ml'
    } else if (label.includes('300 g')) {
      quantityNum = 300
      unit = 'g'
    } else if (label.includes('5 litre') || label.includes('5 l')) {
      quantityNum = 5000
      unit = 'ml'
    }
    const rate = (variant.price / quantityNum).toFixed(2)
    return `(Rs.${rate}/${unit})`
  }

  // Related products from same or popular categories
  const relatedProducts = ALL_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddCurrentToCart = () => {
    if (onAddToCart) {
      for (let i = 0; i < quantity; i++) {
        onAddToCart({
          id: `${product.id}-${currentVariant.label}`,
          title: product.title,
          name: product.title,
          weight: currentVariant.label,
          price: currentVariant.price,
          originalPrice: currentVariant.originalPrice,
          image: product.image,
          category: product.categoryName
        })
      }
    }
  }

  const handleBuyNow = () => {
    handleAddCurrentToCart()
    window.location.hash = '#cart'
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans pb-16">
      {/* 1. Top Breadcrumb Bar */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500 font-normal overflow-hidden truncate">
            <button 
              type="button"
              onClick={onNavigateHome}
              className="hover:text-[#2D0345] hover:underline cursor-pointer transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <button 
              type="button"
              onClick={() => onNavigateCategory && onNavigateCategory(product.categoryId)}
              className="hover:text-[#2D0345] hover:underline cursor-pointer transition-colors truncate"
            >
              {categoryInfo.title}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="text-gray-900 font-medium truncate">
              {product.title}
            </span>
          </div>

          <button
            type="button"
            onClick={onBack || onNavigateHome}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2D0345] hover:text-[#400563] cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back to products</span>
          </button>
        </div>
      </div>

      {/* 2. Main Product Details Showcase (Two Columns) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ================= LEFT COLUMN: Media Showcase & Thumbnails ================= */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* Big Main Showcase Box - Edge-to-edge Full Cover, No Border Radius */}
            <div className="relative w-full aspect-square overflow-hidden bg-gray-50 group">
              
              {/* Floating BESTSELLER Tag Ribbon on Top Left Corner */}
              <div className="absolute top-0 left-0 z-20">
                <div className="bg-[#D97706] text-white text-[11px] sm:text-xs font-medium tracking-wider uppercase px-3.5 py-1.5 rounded-br-lg shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  <span>{product.tag || 'BESTSELLER'}</span>
                </div>
              </div>

              {/* Floating Action Buttons on Top Right (Wishlist & Zoom) */}
              <div className="absolute top-3 right-3 z-20 flex flex-col gap-2">
                {/* Wishlist Button */}
                <button
                  type="button"
                  onClick={() => onToggleWishlist && onToggleWishlist(product.id, product.title, product.image)}
                  className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs text-gray-700 hover:text-rose-500 shadow-md flex items-center justify-center hover:scale-110 transition-all cursor-pointer"
                  title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart className={`w-4 h-4 transition-colors ${isWishlisted ? "fill-rose-500 text-rose-500" : "text-gray-700 stroke-[2.2]"}`} />
                </button>

                {/* Zoom / Fullscreen Button */}
                <button
                  type="button"
                  onClick={() => setIsZoomOpen(true)}
                  className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs text-gray-700 hover:text-[#2D0345] shadow-md flex items-center justify-center hover:scale-110 transition-all cursor-pointer"
                  title="View full resolution"
                >
                  <ZoomIn className="w-4 h-4 text-gray-700 stroke-[2.2]" />
                </button>
              </div>

              {/* Main Full-Cover Product Image (Edge to Edge) */}
              <img 
                src={activeImage} 
                alt={product.title}
                className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105 cursor-pointer"
                onClick={() => setIsZoomOpen(true)}
              />
            </div>

            {/* Thumbnail Navigation Strip Below Main Showcase */}
            <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-200">
              {galleryImages.map((img, idx) => {
                const isActive = idx === activeImageIndex
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 p-0.5 rounded-lg transition-all cursor-pointer bg-white ${
                      isActive 
                        ? 'border-2 border-gray-900 shadow-2xs' 
                        : 'border-2 border-transparent hover:border-gray-200 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={img.src} 
                      alt={img.label} 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </button>
                )
              })}
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Product Information & Purchase Area ================= */}
          <div className="lg:col-span-6 flex flex-col space-y-5">
            
            {/* 1. Header: Title, Subtitle, Ratings */}
            <div>
              {/* Product Title */}
              <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 tracking-tight leading-snug">
                {product.title}
              </h1>

              {/* Subtitle */}
              <p className="text-sm font-normal text-gray-600 mt-1">
                {product.subtitle || 'Bilona-made | Certified Vedic A2'}
              </p>

              {/* Rating & Reviews Row */}
              <div className="flex items-center gap-2 mt-2.5">
                <div className="flex items-center gap-0.5 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500 stroke-none" />
                  <Star className="w-4 h-4 fill-amber-500 stroke-none" />
                  <Star className="w-4 h-4 fill-amber-500 stroke-none" />
                  <Star className="w-4 h-4 fill-amber-500 stroke-none" />
                  <Star className="w-4 h-4 fill-amber-500 stroke-none" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-900">
                  {product.rating || '4.89'}
                </span>
                <span className="text-gray-300">|</span>
                <a href="#reviews-section" className="text-xs sm:text-sm font-normal text-gray-600 hover:text-[#2D0345] underline">
                  {product.reviews || '2,438 Reviews'}
                </a>
              </div>
            </div>

            {/* 2. Price Display */}
            <div className="pt-1">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-medium text-gray-900">
                  ₹{currentVariant.price?.toLocaleString('en-IN')}
                </span>
                {currentVariant.originalPrice && (
                  <span className="text-base text-gray-400 line-through">
                    ₹{currentVariant.originalPrice?.toLocaleString('en-IN')}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-0.5 font-normal">
                MRP (Incl. of all taxes)
              </p>
            </div>

            {/* 3. Short Description Blurb */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {product.description || "Cultured Ghee made from Desi Gir Cow's Milk using bilona method. Free from harmful weedicide banned in 20+ countries."}
            </p>

            {/* 5. 4 Circular USPs / Feature Badges */}
            <div className="grid grid-cols-4 gap-2 py-2 border-y border-gray-100">
              {uspBadges.map((badge, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border-2 border-[#1E5631] bg-white flex items-center justify-center mb-1.5 shadow-2xs group-hover:scale-105 transition-transform">
                    {badge.icon}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-medium text-[#1E5631] uppercase tracking-tight leading-tight">
                    {badge.title}
                  </span>
                </div>
              ))}
            </div>

            {/* 6. Variant Selection Grid (Boxes Matching Reference) */}
            <div className="space-y-2 pt-1">
              <label className="text-xs font-medium text-gray-700 uppercase tracking-wider block">
                Select Pack Size / Quantity:
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {product.variants.map((v, idx) => {
                  const isSelected = idx === selectedVariantIndex
                  const isFeaturedBestSeller = idx === 0

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`relative p-3 rounded-none text-center border-2 transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                        isSelected 
                          ? 'bg-[#EBF7EE] border-[#1E5631] shadow-xs' 
                          : 'bg-white border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {/* Bestseller Tab on top of Box 1 */}
                      {isFeaturedBestSeller && (
                        <span className="absolute -top-2.5 bg-[#1E5631] text-white text-[9px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-none shadow-2xs">
                          BESTSELLER
                        </span>
                      )}

                      <span className="text-xs font-medium text-gray-900 leading-tight">
                        {v.label}
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        ₹{v.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-gray-500 font-normal">
                        {calculateUnitRate(v)}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 7. Quantity Selector & CTA Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                {/* Quantity Controls */}
                <div className="flex items-center border border-gray-300 rounded-none bg-white px-2 py-1.5 shrink-0 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-100 rounded-none cursor-pointer transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-9 text-center font-medium text-sm text-gray-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-100 rounded-none cursor-pointer transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* ADD TO CART Button */}
                <button
                  type="button"
                  onClick={handleAddCurrentToCart}
                  className="flex-1 py-3.5 px-5 bg-[#2D0345] hover:bg-[#3f0660] active:bg-[#200231] text-white text-xs sm:text-sm font-medium tracking-wider uppercase rounded-none transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO CART • ₹{(currentVariant.price * quantity).toLocaleString('en-IN')}</span>
                </button>
              </div>

              {/* BUY NOW Button */}
              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full py-3 px-4 bg-[#1E5631] hover:bg-[#164325] text-white text-xs sm:text-sm font-medium tracking-wider uppercase rounded-none transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>BUY NOW (EXPRESS CHECKOUT)</span>
              </button>
            </div>

            {/* 4 Trust Badges Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-800 mb-1.5">
                  <Truck className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="text-[11px] font-medium text-gray-900 uppercase tracking-tight">Farm-to-Door Delivery</span>
                <span className="text-[10px] text-gray-500 font-normal leading-tight mt-0.5">Freshly packed & shipped to your home</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-800 mb-1.5">
                  <CreditCard className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="text-[11px] font-medium text-gray-900 uppercase tracking-tight">Secure Checkout</span>
                <span className="text-[10px] text-gray-500 font-normal leading-tight mt-0.5">Safe & trusted payments</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-800 mb-1.5">
                  <Leaf className="w-5 h-5 stroke-[1.8] text-[#1E5631]" />
                </div>
                <span className="text-[11px] font-medium text-gray-900 uppercase tracking-tight">Direct from Farmers</span>
                <span className="text-[10px] text-gray-500 font-normal leading-tight mt-0.5">Supporting local farm families</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-800 mb-1.5">
                  <PackageCheck className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="text-[11px] font-medium text-gray-900 uppercase tracking-tight">Safe Packaging</span>
                <span className="text-[10px] text-gray-500 font-normal leading-tight mt-0.5">Packed fresh with care</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Deep Dive Information Tabs / Accordions */}
      <section className="bg-[#FAF8F5] border-t border-b border-gray-200/70 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-medium text-[#1E5631] uppercase tracking-wider">
              Authentic Farm Origins
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mt-1">
              Know Everything About Your Food
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 font-normal">
              Transparent, pesticide-free, and crafted strictly with ancestral traditions.
            </p>
          </div>

          <div className="space-y-4">
            
            {/* Accordion 1: Vedic Bilona Process */}
            <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-2xs">
              <button
                type="button"
                onClick={() => toggleAccordion('process')}
                className="w-full px-6 py-4.5 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#1E5631] flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-medium text-gray-900">
                      The Vedic Method & Traditional Craftsmanship
                    </h3>
                    <p className="text-xs text-gray-500 font-normal">From indigenous grass-fed herds to wooden churning</p>
                  </div>
                </div>
                {openAccordions.process ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </button>

              {openAccordions.process && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-gray-600 space-y-3 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-100">
                      <div className="font-medium text-[#1E5631] mb-1">1. Whole Milk Curd Ferment</div>
                      <p className="text-xs text-gray-600 font-normal">Fresh A2 Gir cow milk is boiled in clay pots and cultured into whole curd overnight at ambient farm temperature.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-100">
                      <div className="font-medium text-[#1E5631] mb-1">2. Wooden Bilona Churn</div>
                      <p className="text-xs text-gray-600 font-normal">Bidirectional slow hand churning during Brahmamuhurta extracts pure 'Makkhan' retaining live natural aromas.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-100">
                      <div className="font-medium text-[#1E5631] mb-1">3. Low-Heat Fire Clarification</div>
                      <p className="text-xs text-gray-600 font-normal">Slow cooked on cow dung / dry wood fire until Danedar golden pearls form with rich authentic aroma.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: Lab Purity & Certification */}
            <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-2xs">
              <button
                type="button"
                onClick={() => toggleAccordion('nutrition')}
                className="w-full px-6 py-4.5 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#1E5631] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-medium text-gray-900">
                      Lab Reports, NMR Purity & Glyphosate Tests
                    </h3>
                    <p className="text-xs text-gray-500 font-normal">Every single batch is independently tested & certified</p>
                  </div>
                </div>
                {openAccordions.nutrition ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </button>

              {openAccordions.nutrition && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-gray-600 space-y-4 border-t border-gray-100">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center">
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200/60">
                      <div className="text-xs text-gray-500 font-normal">Glyphosate</div>
                      <div className="text-sm font-medium text-emerald-700 mt-0.5">0.00% (Nil)</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200/60">
                      <div className="text-xs text-gray-500 font-normal">Beta-Casein</div>
                      <div className="text-sm font-medium text-emerald-700 mt-0.5">100% Pure A2</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200/60">
                      <div className="text-xs text-gray-500 font-normal">Preservatives</div>
                      <div className="text-sm font-medium text-emerald-700 mt-0.5">Zero (0)</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-200/60">
                      <div className="text-xs text-gray-500 font-normal">Smoke Point</div>
                      <div className="text-sm font-medium text-emerald-700 mt-0.5">250°C (High)</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 3: Health Benefits & Usage */}
            <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-2xs">
              <button
                type="button"
                onClick={() => toggleAccordion('benefits')}
                className="w-full px-6 py-4.5 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#2D0345] flex items-center justify-center">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-medium text-gray-900">
                      Ayurvedic Health Benefits & Usage Rituals
                    </h3>
                    <p className="text-xs text-gray-500 font-normal">How to consume for optimal vitality & gut health</p>
                  </div>
                </div>
                {openAccordions.benefits ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </button>

              {openAccordions.benefits && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-gray-600 space-y-3 border-t border-gray-100">
                  <ul className="space-y-2 pt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1E5631] shrink-0 mt-0.5" />
                      <span><span className="font-medium text-gray-900">Nourishes Agni & Gut Flora:</span> Contains naturally occurring butyric acid that repairs the intestinal lining.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1E5631] shrink-0 mt-0.5" />
                      <span><span className="font-medium text-gray-900">Brain Function (Medhya Rasayana):</span> Omega-3 & CLA promote clarity, memory retention, and joint lubrication.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1E5631] shrink-0 mt-0.5" />
                      <span><span className="font-medium text-gray-900">Daily Ritual:</span> Take 1 teaspoon in warm water every morning on empty stomach, or drizzle over hot rotis, dal, and khichdi.</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 4: Storage & Packaging */}
            <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-2xs">
              <button
                type="button"
                onClick={() => toggleAccordion('storage')}
                className="w-full px-6 py-4.5 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center">
                    <PackageCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-medium text-gray-900">
                      Storage & Shelf Life
                    </h3>
                    <p className="text-xs text-gray-500 font-normal">Plastic-free packaging & care tips</p>
                  </div>
                </div>
                {openAccordions.storage ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </button>

              {openAccordions.storage && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-gray-600 space-y-2 border-t border-gray-100 font-normal">
                  <p>• Store in a cool, dry place away from direct sunlight. No refrigeration required.</p>
                  <p>• Always use a clean and dry spoon. Best before 12 months from the date of packing.</p>
                  <p>• Packaged in 100% recyclable, lead-free UV protective glass jars.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Customer Reviews Section */}
      <section id="reviews-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="border-b border-gray-200 pb-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-medium text-[#2D0345] uppercase tracking-wider">
                Customer Testimonials
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mt-1">
                Verified Reviews & Ratings
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 font-normal">
                Real feedback from over 2,400+ satisfied farm families.
              </p>
            </div>

            {/* Rating Summary Card */}
            <div className="flex items-center gap-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4">
              <div className="text-center pr-4 border-r border-amber-200">
                <div className="text-3xl font-medium text-gray-900">4.9</div>
                <div className="flex text-amber-500 mt-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-500 stroke-none" />
                  <Star className="w-3.5 h-3.5 fill-amber-500 stroke-none" />
                  <Star className="w-3.5 h-3.5 fill-amber-500 stroke-none" />
                  <Star className="w-3.5 h-3.5 fill-amber-500 stroke-none" />
                  <Star className="w-3.5 h-3.5 fill-amber-500 stroke-none" />
                </div>
                <div className="text-[10px] text-gray-500 font-normal mt-1">2,438 Total</div>
              </div>

              <div className="text-xs space-y-1 text-gray-600 font-normal">
                <div>96% 5-Star ratings</div>
                <div>100% Verified purchases</div>
                <div>0 Synthetic complaints</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex text-amber-400">
                <Star className="w-4 h-4 fill-amber-400 stroke-none" />
                <Star className="w-4 h-4 fill-amber-400 stroke-none" />
                <Star className="w-4 h-4 fill-amber-400 stroke-none" />
                <Star className="w-4 h-4 fill-amber-400 stroke-none" />
                <Star className="w-4 h-4 fill-amber-400 stroke-none" />
              </div>
              <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                ✓ Verified Buyer
              </span>
            </div>
            <h4 className="text-sm font-medium text-gray-900">"Reminds me of my grandmother's village ghee"</h4>
            <p className="text-xs text-gray-600 leading-relaxed font-normal">
              The Danedar granular texture and aromatic smell is unmatched. You can immediately feel the lightness on digestion. Will never buy commercial ghee again!
            </p>
            <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-normal">
              <span>Dr. Rajesh Sharma, Mumbai</span>
              <span>2 weeks ago</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex text-amber-400">
                <Star className="w-4 h-4 fill-amber-400 stroke-none" />
                <Star className="w-4 h-4 fill-amber-400 stroke-none" />
                <Star className="w-4 h-4 fill-amber-400 stroke-none" />
                <Star className="w-4 h-4 fill-amber-400 stroke-none" />
                <Star className="w-4 h-4 fill-amber-400 stroke-none" />
              </div>
              <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                ✓ Verified Buyer
              </span>
            </div>
            <h4 className="text-sm font-medium text-gray-900">"Zero lactose issues for my sensitive gut"</h4>
            <p className="text-xs text-gray-600 leading-relaxed font-normal">
              I am lactose intolerant and usually have trouble with dairy, but because this is cultured whole curd bilona ghee, I have zero bloating. Super grateful!
            </p>
            <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-normal">
              <span>Pooja Venkat, Bengaluru</span>
              <span>1 month ago</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex text-amber-400">
                <Star className="w-4 h-4 fill-amber-400 stroke-none" />
                <Star className="w-4 h-4 fill-amber-400 stroke-none" />
                <Star className="w-4 h-4 fill-amber-400 stroke-none" />
                <Star className="w-4 h-4 fill-amber-400 stroke-none" />
                <Star className="w-4 h-4 fill-amber-400 stroke-none" />
              </div>
              <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                ✓ Verified Buyer
              </span>
            </div>
            <h4 className="text-sm font-medium text-gray-900">"Worth every single rupee"</h4>
            <p className="text-xs text-gray-600 leading-relaxed font-normal">
              The quality speaks for itself. The glass jar packaging arrived safely without any leakages. 10/10 recommendation for pure Vedic ghee!
            </p>
            <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-normal">
              <span>Anand Kulkarni, Pune</span>
              <span>1 month ago</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Recommended Products Section */}
      <section className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-medium text-[#2D0345] uppercase tracking-wider">
                Handpicked Staples
              </span>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mt-0.5">
                Recommended Products
              </h3>
              <p className="text-xs text-gray-500 mt-0.5 font-normal">Explore more organic staples from our harvest</p>
            </div>
            <button
              type="button"
              onClick={() => onNavigateCategory && onNavigateCategory(product.categoryId)}
              className="text-xs font-medium text-[#2D0345] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View all</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {relatedProducts.map((p) => {
              const variantIndex = selectedRelatedVariants[p.id] || 0
              const curVariant = p.variants[variantIndex] || p.variants[0]
              const isItemWishlisted = !!wishlist[p.id]

              return (
                <div
                  key={p.id}
                  className={`flex flex-col justify-between group relative ${openRelatedDropdownId === p.id ? 'z-30' : 'z-10'}`}
                >
                  {/* Top Image Container */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden mb-3 bg-gray-50">
                    {/* Top-Right Corner Tab Badge (Text | Heart) */}
                    <div className={`absolute top-0 right-0 z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-bl-xl text-white text-xs font-semibold shadow-xs ${p.tagBg || 'bg-[#2D0345]'}`}>
                      <span className="leading-none">{p.tag || 'RECOMMENDED'}</span>
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
                        title={isItemWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                      >
                        <Heart className={`w-4 h-4 transition-colors ${isItemWishlisted ? "fill-rose-500 text-rose-500" : "fill-none text-white stroke-[2]"}`} />
                      </button>
                    </div>

                    {/* Quick View Button on Hover */}
                    <button
                      type="button"
                      onClick={() => onSelectProduct && onSelectProduct(p.id)}
                      className="absolute bottom-2 left-2 z-10 bg-white/90 backdrop-blur-xs hover:bg-white text-[#2D0345] text-[11px] font-medium px-2.5 py-1 rounded-none shadow-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>

                    {/* Product Photography */}
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      onClick={() => onSelectProduct && onSelectProduct(p.id)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between space-y-3 px-0.5">
                    <div className="space-y-1.5">
                      {/* Title & Price Header */}
                      <div className="flex items-start justify-between gap-2">
                        <h4 
                          onClick={() => onSelectProduct && onSelectProduct(p.id)}
                          className="font-medium text-sm sm:text-base text-gray-900 leading-snug cursor-pointer hover:text-[#2D0345] transition-colors line-clamp-2"
                        >
                          {p.title}
                        </h4>
                        <div className="text-right shrink-0">
                          <span className="font-medium text-sm sm:text-base text-gray-900 block">
                            ₹{curVariant.price.toLocaleString('en-IN')}
                          </span>
                          {curVariant.originalPrice && (
                            <span className="text-[11px] text-gray-400 line-through">
                              ₹{curVariant.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Subtitle */}
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

                    {/* Actions: Variant Selector + Full Width ADD TO CART */}
                    <div className="space-y-2.5 pt-1">
                      {/* Custom Variant Dropdown */}
                      <div className="related-variant-dropdown relative">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setOpenRelatedDropdownId(openRelatedDropdownId === p.id ? null : p.id)
                          }}
                          className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-medium text-gray-800 bg-white border border-gray-300 rounded-none shadow-2xs hover:border-gray-400 focus:outline-none transition-colors cursor-pointer"
                        >
                          <span className="truncate">{curVariant.label}</span>
                          <ChevronDown 
                            className={`w-4 h-4 text-gray-600 shrink-0 ml-1.5 transition-transform duration-200 ${
                              openRelatedDropdownId === p.id ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>

                        {/* Animated Dropdown Menu */}
                        {openRelatedDropdownId === p.id && (
                          <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 shadow-xl rounded-none py-1 z-40 animate-in fade-in zoom-in-95 duration-150">
                            {p.variants.map((variant, vIdx) => {
                              const isSelected = vIdx === variantIndex
                              return (
                                <button
                                  key={vIdx}
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setSelectedRelatedVariants((prev) => ({
                                      ...prev,
                                      [p.id]: vIdx
                                    }))
                                    setOpenRelatedDropdownId(null)
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
                                  </div>
                                </button>
                              )
                            })}
                          </div>
                        )}
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          if (onAddToCart) {
                            onAddToCart({
                              id: `${p.id}-${curVariant.label}`,
                              title: p.title,
                              name: p.title,
                              weight: curVariant.label,
                              price: curVariant.price,
                              originalPrice: curVariant.originalPrice,
                              image: p.image,
                              category: p.categoryName
                            })
                          }
                        }}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#2D0345] hover:bg-[#3d085c] active:bg-[#200231] text-white text-xs font-medium tracking-wider uppercase rounded-none transition-all shadow-sm hover:shadow-md cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
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

      {/* 6. Fullscreen Zoom Image Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden p-6 shadow-2xl flex flex-col items-center">
            <button
              type="button"
              onClick={() => setIsZoomOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-full h-full flex items-center justify-center overflow-auto max-h-[75vh]">
              <img 
                src={activeImage} 
                alt={product.title} 
                className="max-h-[70vh] max-w-full object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
              <p className="text-xs text-gray-500 font-normal">100% Raw Authentic High Resolution Harvest Photography</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
