import React, { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import banner1Img from '../assets/images/banner1.jpg'
import banner2Img from '../assets/images/banner2.jpg'
import banner3Img from '../assets/images/banner3.jpg'

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const slides = [
    {
      id: 'banner-1',
      image: banner1Img,
      alt: 'Anvi Farms Farm Fresh Organic Banner 1',
      href: '#ghee'
    },
    {
      id: 'banner-2',
      image: banner2Img,
      alt: 'Anvi Farms Farm Fresh Organic Banner 2',
      href: '#honey'
    },
    {
      id: 'banner-3',
      image: banner3Img,
      alt: 'Anvi Farms Farm Fresh Organic Banner 3',
      href: '#products'
    }
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide])

  return (
    <section 
      className="relative w-full overflow-hidden select-none group bg-[#f7f5ef]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Banner Carousel Container */}
      <div className="relative w-full aspect-[21/9] sm:aspect-[2.6/1] md:aspect-[2.75/1] max-h-[520px] overflow-hidden">
        {slides.map((slide, idx) => (
          <a
            key={slide.id}
            href={slide.href}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out cursor-pointer block ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.alt} 
              className="w-full h-full object-cover object-center"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </a>
        ))}

        {/* Previous Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            prevSlide()
          }}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/25 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-xs transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            nextSlide()
          }}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/25 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-xs transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicators / Dots */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-xs">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setCurrentSlide(idx)
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx 
                  ? 'w-6 h-2 bg-amber-400' 
                  : 'w-2 h-2 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
