import React, { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react'
import desiGheeImg from '../assets/images/desi_ghee.jpg'
import honeyImg from '../assets/images/honey.jpg'
import spicesImg from '../assets/images/spices.jpg'
import amlaprashImg from '../assets/images/amlaprash.jpg'
import coldPressedOilImg from '../assets/images/cold_pressed_oil.jpg'
import naturalSweetenerImg from '../assets/images/natural_sweetener.jpg'

export default function CustomerReviews() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Reviews grouped into slides of 3 reviews each
  const reviewSlides = [
    // Slide 1 (3 reviews)
    [
      {
        id: 1,
        name: 'Dr. Vikram Mehra',
        location: 'Bengaluru, Karnataka',
        rating: 5,
        product: 'Desi Gir Cow Cultured Ghee',
        productImg: desiGheeImg,
        headline: 'Takes me back to my village childhood!',
        review: 'The granular texture and divine aroma of this Vedic Bilona Ghee is unmistakable. Having researched A2 milk benefits as a physician, I can confidently say Anvi Farms delivers authentic gold.',
        verified: true,
        date: '2 days ago'
      },
      {
        id: 2,
        name: 'Pooja Sundaram',
        location: 'Chennai, Tamil Nadu',
        rating: 5,
        product: 'Raw Wild Forest Honey',
        productImg: honeyImg,
        headline: 'Zero adulteration — real pollen & enzyme taste',
        review: 'We tested it with the warm water test and NMR lab standards — completely pure! It has a rich multi-flora floral aftertaste. My kids take a spoonful every morning before school.',
        verified: true,
        date: '4 days ago'
      },
      {
        id: 3,
        name: 'Rajesh & Shreya Patel',
        location: 'Mumbai, Maharashtra',
        rating: 5,
        product: 'Lakadong High Curcumin Turmeric',
        productImg: spicesImg,
        headline: 'Incredible deep golden color & potency',
        review: 'You only need a tiny pinch because the natural curcumin content is so high. Golden milk latte made with this turmeric and their raw honey has solved my chronic joint stiffness.',
        verified: true,
        date: '1 week ago'
      }
    ],
    // Slide 2 (3 reviews)
    [
      {
        id: 4,
        name: 'Ananya Sharma',
        location: 'Delhi NCR',
        rating: 5,
        product: 'Amlaprash Chyawanprash',
        productImg: amlaprashImg,
        headline: 'Natural immunity booster with zero refined sugar',
        review: 'Unlike commercial brands filled with glucose syrup, Anvi Farms Amlaprash is sweetened naturally with desi khand and packed with wild forest amla. The whole family loves it.',
        verified: true,
        date: '2 weeks ago'
      },
      {
        id: 5,
        name: 'Siddharth Verma',
        location: 'Hyderabad, Telangana',
        rating: 5,
        product: 'Wood Pressed Kachi Ghani Oil',
        productImg: coldPressedOilImg,
        headline: 'True artisanal wood pressed aroma',
        review: 'The wood pressing keeps the oil unheated and fresh. You can smell the real crushed seeds when heating the pan. Cooking with this oil makes every meal lighter and wholesome.',
        verified: true,
        date: '3 weeks ago'
      },
      {
        id: 6,
        name: 'Deepika Iyer',
        location: 'Pune, Maharashtra',
        rating: 5,
        product: 'Organic Desi Khand & Jaggery',
        productImg: naturalSweetenerImg,
        headline: 'Replaced all white sugar in our home',
        review: 'Clean, unbleached, and naturally mineral-rich. It dissolves beautifully in our morning chai and baking recipes without any chemical aftertaste. Truly pure produce!',
        verified: true,
        date: '1 month ago'
      }
    ]
  ]

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviewSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPaused, reviewSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviewSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviewSlides.length) % reviewSlides.length)
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
      {/* Section Header */}
      <div className="mb-8 sm:mb-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#2D0345] tracking-tight">
          Loved by Our Customers
        </h2>
        {/* Star Rating Overview */}
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="flex items-center gap-0.5 text-amber-400">
            <Star className="w-4 h-4 fill-amber-400 stroke-none" />
            <Star className="w-4 h-4 fill-amber-400 stroke-none" />
            <Star className="w-4 h-4 fill-amber-400 stroke-none" />
            <Star className="w-4 h-4 fill-amber-400 stroke-none" />
            <Star className="w-4 h-4 fill-amber-400 stroke-none" />
          </div>
          <span className="text-xs sm:text-sm font-bold text-gray-800">4.9 / 5</span>
          <span className="text-gray-300">|</span>
          <span className="text-xs sm:text-sm text-gray-500 font-medium">Over 10,000+ Happy Families</span>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides Track */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {reviewSlides.map((slideReviews, slideIndex) => (
              <div 
                key={slideIndex} 
                className="w-full shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {slideReviews.map((review) => (
                  <div
                    key={review.id}
                    className="flex flex-col justify-between bg-white rounded-2xl p-6 border border-gray-100 shadow-2xs hover:shadow-lg hover:border-[#2D0345]/20 transition-all duration-300"
                  >
                    <div className="space-y-3">
                      {/* Top Row: Stars + Date */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                          ))}
                        </div>
                        <span className="text-[11px] text-gray-400 font-medium">{review.date}</span>
                      </div>

                      {/* Product Purchased Tag */}
                      <div className="flex items-center gap-2.5 p-2 rounded-lg bg-gray-50/80 border border-gray-100">
                        <img 
                          src={review.productImg} 
                          alt={review.product} 
                          className="w-8 h-8 rounded-md object-cover shrink-0 border border-gray-200"
                        />
                        <span className="text-xs font-semibold text-gray-800 truncate">
                          {review.product}
                        </span>
                      </div>

                      {/* Review Headline */}
                      <h4 className="font-bold text-sm text-gray-900 leading-snug">
                        "{review.headline}"
                      </h4>

                      {/* Review Body */}
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {review.review}
                      </p>
                    </div>

                    {/* Reviewer Details */}
                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-gray-900">{review.name}</p>
                        <p className="text-[11px] text-gray-400">{review.location}</p>
                      </div>
                      {review.verified && (
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-[#404D1A] bg-[#404D1A]/10 px-2.5 py-1 rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#404D1A]" />
                          <span>Verified</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md text-gray-700 hover:text-[#2D0345] hover:border-[#2D0345] flex items-center justify-center transition-all active:scale-95 cursor-pointer"
          aria-label="Previous reviews slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md text-gray-700 hover:text-[#2D0345] hover:border-[#2D0345] flex items-center justify-center transition-all active:scale-95 cursor-pointer"
          aria-label="Next reviews slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {reviewSlides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentSlide === idx 
                ? 'w-7 h-2 bg-[#2D0345]' 
                : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
