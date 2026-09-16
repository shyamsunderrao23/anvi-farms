import React, { useState } from 'react'
import { X } from 'lucide-react'
import girCowsImg from '../assets/images/gallery_gir_cows.jpg'
import bilonaChurnImg from '../assets/images/gallery_bilona_churn.jpg'
import beekeepingImg from '../assets/images/gallery_beekeeping.jpg'
import traditionalKitchenImg from '../assets/images/traditional_kitchen_bg.jpg'
import buffaloGheeBgImg from '../assets/images/banner_buffalo_ghee_bg.jpg'
import forestHoneyBgImg from '../assets/images/banner_honey_bg.jpg'

export default function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const galleryItems = [
    // Row 1 (3 images)
    {
      id: 1,
      image: girCowsImg,
      alt: 'Free Grazing Indigenous Gir Cows'
    },
    {
      id: 2,
      image: bilonaChurnImg,
      alt: 'Vedic Bilona Churning in Clay Pot'
    },
    {
      id: 3,
      image: beekeepingImg,
      alt: 'Sustainable Wild Forest Beekeeping'
    },
    // Row 2 (3 images)
    {
      id: 4,
      image: traditionalKitchenImg,
      alt: 'Generational Farm Kitchen'
    },
    {
      id: 5,
      image: buffaloGheeBgImg,
      alt: 'Pasture Dairy Harmony'
    },
    {
      id: 6,
      image: forestHoneyBgImg,
      alt: 'Bio-Diverse Flora'
    }
  ]

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
      {/* Section Header */}
      <div className="mb-6 sm:mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#2D0345] tracking-tight">
          Beyond Our Products
        </h2>
      </div>

      {/* 6 Images Gallery Grid: 3 per row with tighter gap and increased height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedPhoto(item)}
            className="group cursor-pointer flex flex-col"
          >
            {/* Image Container with Increased Height and Straight Edges */}
            <div className="relative h-72 sm:h-84 md:h-[380px] w-full overflow-hidden bg-gray-100">
              {/* Image with smooth hover zoom */}
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Full view image */}
            <div className="relative max-h-[80vh] overflow-hidden flex items-center justify-center">
              <img 
                src={selectedPhoto.image} 
                alt={selectedPhoto.alt} 
                className="w-full h-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
