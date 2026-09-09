'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';

interface ReelItem {
  id: number;
  src: string;
  link: string;
  title: string;
}

const REELS_DATA: ReelItem[] = [
  { id: 1, src: '/images/anvi-reel-1.mp4', link: 'https://www.instagram.com/reel/Dc0M7ISiNO8/', title: 'Organic Cow Ghee' },
  { id: 2, src: '/images/anvi-reel-2.mp4', link: 'https://www.instagram.com/reel/Dbhrh7XiyeC/', title: 'Pure Farm Freshness' },
  { id: 3, src: '/images/anvi-reel-3.mp4', link: 'https://www.instagram.com/anvi_farms/', title: 'Organic Farm Life' },
  { id: 4, src: '/images/anvi-reel-4.mp4', link: 'https://www.instagram.com/anvi_farms/', title: 'Cold Pressed Oils' },
  { id: 5, src: '/images/anvi-reel-5.mp4', link: 'https://www.instagram.com/anvi_farms/', title: 'Natural Honey & Ghee' },
  { id: 6, src: '/images/anvi-reel-6.mp4', link: 'https://www.instagram.com/anvi_farms/', title: 'Traditional Farming' },
  { id: 7, src: '/images/anvi-reel-7.mp4', link: 'https://www.instagram.com/anvi_farms/', title: 'Fresh Produce Journey' },
  { id: 8, src: '/images/anvi-reel-8.mp4', link: 'https://www.instagram.com/anvi_farms/', title: 'Farm Fresh Goodness' },
  { id: 9, src: '/images/anvi-reel-9.mp4', link: 'https://www.instagram.com/anvi_farms/', title: 'Sustainable Harvest' },
];

export const InstagramFeed: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [mutedStates, setMutedStates] = useState<boolean[]>(REELS_DATA.map(() => true));
  const [isHovered, setIsHovered] = useState(false);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Update items per view based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, REELS_DATA.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  }, [maxIndex]);

  // Auto carousel effect
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  const toggleMute = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !video.muted;
      setMutedStates((prev) => {
        const updated = [...prev];
        updated[index] = video.muted;
        return updated;
      });
    }
  };

  return (
    <section className="w-full bg-[#FAF9F4] py-16 sm:py-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1720px] mx-auto space-y-12 sm:space-y-16">

        {/* Section Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3 px-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DFCFA8] text-[10px] xs:text-xs font-bold uppercase tracking-[0.2em] text-[#0A2417] shadow-2xs">
            <span>📸</span>
            <span>OUR INSTAGRAM REELS</span>
            <span>📸</span>
          </div>

          <div className="text-xl xs:text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.25em] sm:tracking-[0.32em] text-[#0A2417] pt-1">
            @ANVI_FARMS
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[60px] font-cursive font-normal text-[#320047] tracking-normal leading-tight py-1">
            Follow Our Organic Farm Journey
          </h2>
        </div>

        {/* 4 Reels Per Row Carousel Container */}
        <div 
          className="relative max-w-[1600px] mx-auto px-10 xs:px-12 sm:px-14"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Reels"
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 xs:w-10 xs:h-10 sm:w-13 sm:h-13 rounded-full bg-[#310048] text-[#C28E2E] border-2 border-[#DFCFA8] flex items-center justify-center text-lg xs:text-xl sm:text-2xl font-bold hover:bg-[#4A0868] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shadow-xl"
          >
            ‹
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Reels"
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 xs:w-10 xs:h-10 sm:w-13 sm:h-13 rounded-full bg-[#310048] text-[#C28E2E] border-2 border-[#DFCFA8] flex items-center justify-center text-lg xs:text-xl sm:text-2xl font-bold hover:bg-[#4A0868] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shadow-xl"
          >
            ›
          </button>

          {/* Carousel Track Overflow Area */}
          <div className="overflow-hidden py-4">
            <div 
              className="flex transition-transform duration-500 ease-out gap-4 sm:gap-6"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% + ${itemsPerView === 1 ? 16 : 24}px) / ${itemsPerView}))`,
              }}
            >
              {REELS_DATA.map((reel, index) => (
                <div 
                  className="flex-shrink-0"
                  key={reel.id}
                  style={{ width: `calc((100% - ${(itemsPerView - 1) * 24}px) / ${itemsPerView})` }}
                >
                  <div className="w-full h-[400px] xs:h-[460px] sm:h-[540px] bg-black rounded-2xl sm:rounded-3xl border-2 border-[#DFCFA8] overflow-hidden relative group transition-all duration-300">
                    <video
                      ref={(el) => { videoRefs.current[index] = el; }}
                      src={reel.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                    />

                    {/* Sound Toggle Button (Top Left) */}
                    <button
                      onClick={() => toggleMute(index)}
                      className="absolute top-3 left-3 xs:top-4 xs:left-4 z-20 flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3.5 py-1 xs:py-1.5 rounded-full bg-[#310048]/90 hover:bg-[#310048] text-white border border-[#C28E2E] text-[10px] xs:text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow-lg transition-all duration-300 transform active:scale-95 cursor-pointer"
                    >
                      {mutedStates[index] ? (
                        <>
                          <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-white fill-current shrink-0" viewBox="0 0 24 24">
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                          </svg>
                          <span>MUTED</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-[#C28E2E] fill-current shrink-0" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                          </svg>
                          <span>SOUND</span>
                        </>
                      )}
                    </button>

                    {/* Direct Instagram Link Overlay */}
                    <a
                      href={reel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 xs:top-4 xs:right-4 z-20 flex items-center gap-1 px-2.5 xs:px-3 py-1 rounded-full bg-black/60 hover:bg-black/80 text-white text-[9px] xs:text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/20 transition-all duration-300"
                    >
                      <span>IG ↗</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Progress Dots (3 Dots) */}
          <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
            {[0, Math.floor(maxIndex / 2), maxIndex].map((targetIdx, dotIdx) => {
              const activeDot = currentIndex <= 1 ? 0 : currentIndex >= maxIndex - 1 ? 2 : 1;
              const isActive = activeDot === dotIdx;
              return (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(targetIdx)}
                  aria-label={`Go to section ${dotIdx + 1}`}
                  className={`h-2 xs:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'w-6 xs:w-8 bg-[#310048] border border-[#C28E2E]' 
                      : 'w-2 xs:w-2.5 bg-[#DFCFA8] hover:bg-[#310048]/50'
                  }`}
                />
              );
            })}
          </div>

        </div>

        {/* Bottom Follow Instagram Button */}
        <div className="text-center pt-2">
          <a
            href="https://www.instagram.com/anvi_farms/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 xs:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#310048] text-white border border-[#C28E2E] font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] shadow-md hover:bg-[#4A0868] hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <span>📸 FOLLOW @ANVI_FARMS ON INSTAGRAM</span>
            <span className="text-[#C28E2E] text-sm">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
