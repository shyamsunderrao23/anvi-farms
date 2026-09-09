'use client';

import React from 'react';
import Image from 'next/image';

export const OurGallery: React.FC = () => {
  const galleryItems = [
    {
      id: 1,
      image: '/images/gallery-1.jpg',
      alt: 'Happy customer enjoying organic farm snack bar',
      overlayText: null,
    },
    {
      id: 2,
      image: '/images/gallery-2.jpg',
      alt: 'Fresh organic forest berries and raw honeycombs',
      overlayText: '#anvifarms #pureorganic #vedicbilona #sustainable',
    },
    {
      id: 3,
      image: '/images/gallery-3.jpg',
      alt: 'Customer smiling at organic farm market',
      overlayText: null,
    },
    {
      id: 4,
      image: '/images/gallery-4.jpg',
      alt: 'Anvi Farms eco-friendly luxury packaging boxes',
      overlayText: null,
    },
    {
      id: 5,
      image: '/images/gallery-5.jpg',
      alt: 'Organic sprouted ragi millet bars on parchment paper',
      overlayText: null,
    },
    {
      id: 6,
      image: '/images/gallery-6.jpg',
      alt: 'Happy woman enjoying wholesome organic snack',
      overlayText: null,
    },
    {
      id: 7,
      image: '/images/gallery-7.jpg',
      alt: 'Glass jar of toasted sprouted millet granola',
      overlayText: null,
    },
    {
      id: 8,
      image: '/images/gallery-8.jpg',
      alt: 'Hands holding fresh organic produce',
      hasChatButton: true,
    },
  ];

  return (
    <section className="w-full bg-[#FAF9F4] py-16 sm:py-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1720px] mx-auto space-y-12 sm:space-y-16">

        {/* Section Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.32em] text-[#0A2417]">
            OUR GALLERY
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-cursive font-normal text-[#320047] tracking-normal leading-tight py-1">
            Moments from Our Organic Farm & Happy Families
          </h2>
        </div>

        {/* 8-Card 2x4 Grid matching exact reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square w-full overflow-hidden bg-white shadow-2xs cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Card 2 Hashtag Overlay */}
              {item.overlayText && (
                <div className="absolute inset-0 bg-black/40 opacity-80 group-hover:opacity-95 transition-opacity flex items-center justify-center p-6 text-center">
                  <p className="text-white font-mono text-xs sm:text-sm leading-relaxed font-medium tracking-wide">
                    {item.overlayText}
                  </p>
                </div>
              )}

              {/* Card 8 Chat Button Overlay matching reference image */}
              {item.hasChatButton && (
                <div className="absolute bottom-6 right-6 z-20">
                  <button className="bg-black hover:bg-neutral-900 text-white px-5 py-2.5 font-sans font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center gap-2 cursor-pointer border border-white/20">
                    <span>Let&apos;s Chat!</span>
                  </button>
                </div>
              )}

              {/* Hover Darken Overlay */}
              {!item.overlayText && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
