import React from 'react'
import desiGheeImg from '../assets/images/desi_ghee.jpg'
import honeyImg from '../assets/images/honey.jpg'
import spicesImg from '../assets/images/spices.jpg'
import amlaprashImg from '../assets/images/amlaprash.jpg'
import coldPressedOilImg from '../assets/images/cold_pressed_oil.jpg'
import naturalSweetenerImg from '../assets/images/natural_sweetener.jpg'
import proteinBarImg from '../assets/images/protein_bar.jpg'
import chickenPickleImg from '../assets/images/chicken_pickle.jpg'

export default function StoryCategories({ onSelectCategory, onNavigateCategory }) {
  const products = [
    {
      id: 'ghee',
      label: 'Ghee',
      image: desiGheeImg
    },
    {
      id: 'honey',
      label: 'Honey',
      image: honeyImg
    },
    {
      id: 'spices',
      label: 'Spices',
      image: spicesImg
    },
    {
      id: 'super-foods',
      label: 'Super Foods',
      image: amlaprashImg
    },
    {
      id: 'cold-pressed-oils',
      label: 'Cold Pressed Oils',
      image: coldPressedOilImg
    },
    {
      id: 'natural-sweeteners',
      label: 'Sweeteners',
      image: naturalSweetenerImg
    },
    {
      id: 'protein-bars',
      label: 'Protein Bars',
      image: proteinBarImg
    },
    {
      id: 'non-veg-pickles',
      label: 'Non-Veg Pickles',
      image: chickenPickleImg
    }
  ]

  return (
    <div className="bg-white border-b border-gray-200/80 py-5 sm:py-7 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Horizontal flex / scroll for circular product stories with increased size */}
        <div className="flex items-center justify-start lg:justify-center gap-6 sm:gap-8 md:gap-9 overflow-x-auto no-scrollbar py-1">
          {products.map((item) => (
            <a
              key={item.id}
              href={`#category/${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                if (onNavigateCategory) {
                  onNavigateCategory(item.id)
                } else if (onSelectCategory) {
                  onSelectCategory(item.id)
                }
              }}
              className="flex flex-col items-center cursor-pointer shrink-0"
            >
              {/* Circular Product Story Frame */}
              <div className="relative p-[2.5px] rounded-full bg-gradient-to-tr from-amber-400 via-[#2D0345] to-amber-300">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 lg:w-28 lg:h-28 rounded-full bg-white p-[2px] overflow-hidden flex items-center justify-center shadow-xs">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Product Label */}
              <span className="mt-2.5 text-xs sm:text-sm font-bold text-gray-800 tracking-tight text-center max-w-[85px] sm:max-w-[105px] leading-tight">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
