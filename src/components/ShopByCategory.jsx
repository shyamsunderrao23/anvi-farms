import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import desiGheeImg from '../assets/images/desi_ghee.jpg'
import honeyImg from '../assets/images/honey.jpg'
import spicesImg from '../assets/images/spices.jpg'
import amlaprashImg from '../assets/images/amlaprash.jpg'
import coldPressedOilImg from '../assets/images/cold_pressed_oil.jpg'
import naturalSweetenerImg from '../assets/images/natural_sweetener.jpg'
import proteinBarImg from '../assets/images/protein_bar.jpg'
import chickenPickleImg from '../assets/images/chicken_pickle.jpg'

export default function ShopByCategory({ onNavigateCategory }) {
  const categories = [
    {
      id: 'ghee',
      title: 'Ghee',
      subtitle: 'Cultured A2 & Buffalo Bilona',
      count: '4 Products',
      badgeBg: 'bg-[#2D0345]',
      image: desiGheeImg,
      link: '#category/ghee'
    },
    {
      id: 'honey',
      title: 'Honey',
      subtitle: '100% Raw Wild Forest & NMR Tested',
      count: '4 Products',
      badgeBg: 'bg-[#2D0345]',
      image: honeyImg,
      link: '#category/honey'
    },
    {
      id: 'spices',
      title: 'Spices',
      subtitle: 'High Curcumin Lakadong & Single Origin',
      count: '6 Products',
      badgeBg: 'bg-[#2D0345]',
      image: spicesImg,
      link: '#category/spices'
    },
    {
      id: 'super-foods',
      title: 'Super Foods',
      subtitle: 'Amlaprash Chyawanprash & Herbs',
      count: '5 Products',
      badgeBg: 'bg-[#2D0345]',
      image: amlaprashImg,
      link: '#category/super-foods'
    },
    {
      id: 'cold-pressed-oils',
      title: 'Cold Pressed Oils',
      subtitle: 'Wood Pressed Kachi Ghani Oils',
      count: '4 Products',
      badgeBg: 'bg-[#2D0345]',
      image: coldPressedOilImg,
      link: '#category/cold-pressed-oils'
    },
    {
      id: 'natural-sweeteners',
      title: 'Natural Sweeteners',
      subtitle: 'Organic Desi Khand & Jaggery',
      count: '3 Products',
      badgeBg: 'bg-[#2D0345]',
      image: naturalSweetenerImg,
      link: '#category/natural-sweeteners'
    },
    {
      id: 'protein-bars',
      title: 'Protein Bars',
      subtitle: 'Cold Processed Seeds & Clean Energy',
      count: '4 Products',
      badgeBg: 'bg-[#2D0345]',
      image: proteinBarImg,
      link: '#category/protein-bars'
    },
    {
      id: 'non-veg-pickles',
      title: 'Non-Veg Pickles',
      subtitle: 'Artisanal Gongura Country Chicken',
      count: '2 Products',
      badgeBg: 'bg-[#2D0345]',
      image: chickenPickleImg,
      link: '#category/non-veg-pickles'
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
      {/* Section Heading */}
      <div className="mb-8 sm:mb-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#2D0345] tracking-tight">
          Shop By Our Category
        </h2>
      </div>

      {/* 8 Categories Grid in Order */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={cat.link}
            onClick={(e) => {
              if (onNavigateCategory) {
                e.preventDefault()
                onNavigateCategory(cat.id)
              }
            }}
            className="flex flex-col justify-between group cursor-pointer"
          >
            {/* Top Image Container (Same as Top Picks) */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden mb-3">
              {/* Top-Right Corner Tab Badge */}
              <div className={`absolute top-0 right-0 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-bl-xl text-white text-xs font-semibold shadow-xs ${cat.badgeBg || 'bg-[#2D0345]'}`}>
                <span>{cat.count}</span>
              </div>

              {/* Category Photography */}
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Open Details (No card box) */}
            <div className="flex-1 flex flex-col justify-between space-y-1.5 px-0.5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium text-sm sm:text-base text-gray-900 group-hover:text-[#2D0345] transition-colors leading-snug">
                  {cat.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#2D0345] group-hover:translate-x-1 transition-transform shrink-0">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                </span>
              </div>

              <p className="text-xs text-gray-500 font-medium leading-normal">
                {cat.subtitle}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
