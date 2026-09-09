'use client';

import React, { useState, useEffect, useCallback } from 'react';

export const CustomerReviews: React.FC = () => {
  const reviews = [
    {
      name: 'Dr. Rajesh Sharma',
      location: 'Hyderabad, Telangana',
      rating: 5,
      product: 'A2 Desi Cow Bilona Ghee',
      comment: 'The aroma takes me right back to our ancestral village. Pure granular texture and genuine Vedic bilona taste. Truly outstanding quality!',
    },
    {
      name: 'Ananya Reddy',
      location: 'Bengaluru, Karnataka',
      rating: 5,
      product: 'Raw Wild Forest Honey',
      comment: 'Best raw honey I have tried in India. Thick, fragrant, and 100% natural. My kids love it every morning on warm toasts and warm milk!',
    },
    {
      name: 'Kavitha V.',
      location: 'Chennai, Tamil Nadu',
      rating: 5,
      product: 'Wood Pressed Groundnut Oil',
      comment: 'Food tastes so much lighter and authentic compared to refined market oils. We have completely switched our home kitchen to Anvi Farms!',
    },
    {
      name: 'Meenakshi Iyer',
      location: 'Visakhapatnam, AP',
      rating: 5,
      product: 'Sprouted Ragi & Almond Malt',
      comment: 'So fragrant and wholesome! My toddlers love this ragi malt porridge every single morning. Excellent natural nourishment.',
    },
    {
      name: 'Sridevi N.',
      location: 'Vijayawada, AP',
      rating: 5,
      product: 'Cold Pressed Sesame Oil',
      comment: 'Pure cold-pressed aroma and traditional taste. Excellent for daily cooking and traditional remedies. Highly recommended!',
    },
    {
      name: 'Vikram Verma',
      location: 'Hyderabad, Telangana',
      rating: 5,
      product: 'A2 Buffalo Bilona Ghee',
      comment: 'Rich texture, traditional wooden bilona aroma, and pure quality. The best buffalo ghee we have ever purchased online.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  return (
    <section className="w-full bg-[#FAF9F4] py-16 sm:py-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1720px] mx-auto space-y-12 sm:space-y-16">

        {/* Section Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3 px-2">
          <div className="text-xl xs:text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.25em] sm:tracking-[0.32em] text-[#0A2417]">
            CUSTOMER REVIEWS
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[60px] font-cursive font-normal text-[#320047] tracking-normal leading-tight py-1">
            Loved by 10,000+ Health Conscious Families
          </h2>
        </div>

        {/* 2 Reviews Per Slide Auto Carousel Container */}
        <div 
          className="relative max-w-[1550px] mx-auto px-10 xs:px-12 sm:px-14"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Reviews"
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 xs:w-10 xs:h-10 sm:w-13 sm:h-13 rounded-full bg-[#310048] text-[#C28E2E] border-2 border-[#DFCFA8] flex items-center justify-center text-lg xs:text-xl sm:text-2xl font-bold hover:bg-[#4A0868] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shadow-xl"
          >
            ‹
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Reviews"
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 xs:w-10 xs:h-10 sm:w-13 sm:h-13 rounded-full bg-[#310048] text-[#C28E2E] border-2 border-[#DFCFA8] flex items-center justify-center text-lg xs:text-xl sm:text-2xl font-bold hover:bg-[#4A0868] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shadow-xl"
          >
            ›
          </button>

          {/* Carousel Track Overflow Area */}
          <div className="overflow-hidden py-4">
            <div 
              className="flex transition-transform duration-500 ease-out gap-4 sm:gap-8"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% + ${itemsPerView === 1 ? 16 : 32}px) / ${itemsPerView}))`,
              }}
            >
              {reviews.map((r, idx) => (
                <div 
                  key={idx}
                  className="flex-shrink-0"
                  style={{ width: `calc((100% - ${(itemsPerView - 1) * 32}px) / ${itemsPerView})` }}
                >
                  <div className="p-5 xs:p-7 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-[#FAF5EC] border-2 border-[#DFCFA8] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 sm:space-y-8 h-full min-h-[260px] sm:min-h-[340px]">
                    <div className="space-y-4 sm:space-y-5">
                      {/* Rating Stars & Verified Badge */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex text-[#C28E2E] text-sm xs:text-base sm:text-lg tracking-widest font-bold">
                          ★★★★★
                        </div>
                        <span className="text-[10px] xs:text-xs font-extrabold text-[#0A2417] bg-[#EAE2CE] px-2.5 xs:px-3.5 py-1 xs:py-1.5 rounded-full border border-[#D8CCB0] shrink-0">
                          ✓ Verified Buyer
                        </span>
                      </div>

                      {/* Review Text */}
                      <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-slate-900 leading-relaxed font-serif italic font-medium">
                        &ldquo;{r.comment}&rdquo;
                      </p>
                    </div>

                    {/* Author & Product Info */}
                    <div className="pt-4 sm:pt-6 border-t border-[#E8DCC4] flex flex-col xs:flex-row xs:items-center justify-between gap-3 sm:gap-4">
                      <div>
                        <div className="font-extrabold text-sm xs:text-base sm:text-lg text-[#0A2417] font-serif">
                          {r.name}
                        </div>
                        <div className="text-slate-600 text-xs sm:text-sm font-medium pt-0.5">
                          {r.location}
                        </div>
                      </div>

                      <span className="text-[10px] xs:text-xs font-extrabold text-[#0A2417] bg-[#FAF0DC] px-2.5 xs:px-3.5 py-1 xs:py-1.5 rounded-lg border border-[#DFCFA8] self-start xs:self-auto shrink-0 text-left xs:text-right">
                        {r.product}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Progress Dots */}
          <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 xs:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx 
                    ? 'w-6 xs:w-8 bg-[#0A2417] border border-[#C28E2E]' 
                    : 'w-2 xs:w-2.5 bg-[#DFCFA8] hover:bg-[#0A2417]/50'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
