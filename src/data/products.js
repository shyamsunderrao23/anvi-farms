import desiGheeImg from '../assets/images/desi_ghee.jpg'
import buffaloGheeImg from '../assets/images/buffalo_ghee.jpg'
import honeyImg from '../assets/images/honey.jpg'
import spicesImg from '../assets/images/spices.jpg'
import amlaprashImg from '../assets/images/amlaprash.jpg'
import khapliAttaImg from '../assets/images/khapli_atta.jpg'
import coldPressedOilImg from '../assets/images/cold_pressed_oil.jpg'
import naturalSweetenerImg from '../assets/images/natural_sweetener.jpg'
import proteinBarImg from '../assets/images/protein_bar.jpg'
import chickenPickleImg from '../assets/images/chicken_pickle.jpg'

// Banner imports
import banner1Img from '../assets/images/banner1.jpg'
import banner2Img from '../assets/images/banner2.jpg'
import banner3Img from '../assets/images/banner3.jpg'
import spicesBanner from '../assets/images/spices.png'
import superfoodsBanner from '../assets/images/super-food.png'
import naturalBanner from '../assets/images/natural-banner.jpg'
import proteinBarsBanner from '../assets/images/protein-bars.jpg'
import nonVegPicklesBanner from '../assets/images/non-veg-pickels.jpg'

export const CATEGORIES = [
  {
    id: 'ghee',
    title: 'Ghee',
    subtitle: 'Cultured A2 Gir Cow & Buffalo Bilona Ghee',
    description: 'Slow-churned in clay pots during Brahmamuhurta using Vedic curd fermentation. 100% pure A2 beta-casein, grain-textured (Danedar), and free from preservatives.',
    badge: 'Vedic Bilona',
    image: desiGheeImg,
    banner: banner1Img,
    highlights: ['Vedic Bilona Method', '100% A2 Gir Cow Milk', 'Zero Preservatives', 'Clay Pot Churned'],
    productCount: 2
  },
  {
    id: 'honey',
    title: 'Honey',
    subtitle: '100% Raw Wild Forest & Single-Origin Honey',
    description: 'Direct from wild bee apiaries in pristine reserve forests. Completely raw, unheated, unpasteurized, NMR tested for zero adulteration and rich in active pollen enzymes.',
    badge: 'Raw & NMR Tested',
    image: honeyImg,
    banner: banner2Img,
    highlights: ['100% NMR Tested Pure', 'Unheated & Raw', 'Wild Forest Sourced', 'Active Natural Pollen'],
    productCount: 2
  },
  {
    id: 'spices',
    title: 'Spices',
    subtitle: 'Stone-Ground Mountain Spices & High Curcumin Haldi',
    description: 'Grown sustainably in pristine hills, harvested at peak potency, and stone-ground at low temperatures to preserve volatile aromatic oils.',
    badge: 'Stone Ground',
    image: spicesImg,
    banner: spicesBanner,
    highlights: ['High Potency', 'Single-Origin Harvest', 'Stone Ground Low Heat', 'Zero Chemical Colors'],
    productCount: 3
  },
  {
    id: 'super-foods',
    title: 'Super Foods',
    subtitle: 'Sprouted Ragi, Moringa, Jowar & Ancient Millet Mixes',
    description: 'Nutrient-dense ancestral superfoods prepared with traditional sprouting, sun-drying, and slow roasting techniques for maximum bioavailability.',
    badge: 'Ancestral Health',
    image: amlaprashImg,
    banner: superfoodsBanner,
    highlights: ['Traditional Sprouting', 'Zero Additives', 'Mineral & Fiber Rich', 'Ancient Supergrains'],
    productCount: 5
  },
  {
    id: 'cold-pressed-oils',
    title: 'Cold Pressed Oils',
    subtitle: 'Wood Pressed (Marachekku/Kolhu) Kachi Ghani Oils',
    description: 'Slow-pressed in traditional wooden churns without heat or chemical solvents. Retains natural vitamin E, heart-healthy antioxidants, and deep authentic flavor.',
    badge: 'Wood Pressed',
    image: coldPressedOilImg,
    banner: banner3Img,
    highlights: ['Traditional Wood Churned', 'Cold Extracted (No Heat)', 'Zero Chemical Solvents', 'Rich in Vitamin E'],
    productCount: 5
  },
  {
    id: 'natural-sweeteners',
    title: 'Sweeteners',
    subtitle: 'Chemical-Free Native Jaggery & Palm Jaggery',
    description: 'Made from native heirloom sugarcane and palmyra palms using age-old boiling and clarifying methods with zero sulfur, bleach, or synthetic refining agents.',
    badge: 'Zero Sulphur',
    image: naturalSweetenerImg,
    banner: naturalBanner,
    highlights: ['100% Sulphur-Free', 'Heirloom Native Cane', 'Natural Minerals Intact', 'Unrefined & Pure'],
    productCount: 2
  },
  {
    id: 'protein-bars',
    title: 'Protein Bars',
    subtitle: 'Sprouted Ragi & Peanut Energy Bars Bound with Forest Honey',
    description: 'Wholesome artisanal energy bars crafted with cold-processed nuts, seeds, raw forest honey, and ancient grains. Zero isolate powders or artificial binding agents.',
    badge: 'Clean Nutrition',
    image: proteinBarImg,
    banner: proteinBarsBanner,
    highlights: ['Clean Whole Foods', 'Raw Forest Honey Bound', 'Zero Whey Isolates', 'High Fibre & Seeds'],
    productCount: 2
  },
  {
    id: 'non-veg-pickles',
    title: 'Non-Veg Pickles',
    subtitle: 'Country Chicken & Coastal Prawn Pickles with Cold-Pressed Oil',
    description: 'Made with tender meat, sun-dried mountain spices, and cold-pressed sesame oil. Prepared in small batches with ancestral home kitchen traditions.',
    badge: 'Artisanal Batch',
    image: chickenPickleImg,
    banner: nonVegPicklesBanner,
    highlights: ['Free Range Meat', 'Cold-Pressed Sesame Oil', 'Sun-Dried Spices', 'Grandmother Recipe'],
    productCount: 3
  }
]

export const ALL_PRODUCTS = [
  // ================= 1. GHEE =================
  {
    id: 'ghee-1',
    categoryId: 'ghee',
    categoryName: 'Ghee',
    tag: 'BEST SELLER',
    tagBg: 'bg-[#2D0345]',
    title: 'Bilona Cow Ghee',
    subtitle: 'Vedic Desi Gir Cow | Cultured Whole Curd | Bilona Churned',
    description: 'Handcrafted from grass-fed indigenous Gir cows. Cultured into whole curd overnight and churned in wooden Bilona at Brahmamuhurta. Danedar golden texture with rich authentic aroma.',
    image: desiGheeImg,
    rating: '4.9',
    reviews: '2.4k+ Reviews',
    badge: 'Vedic A2',
    variants: [
      { label: '1000 ml (Glass Jar)', price: 3595, originalPrice: 3999 },
      { label: '500 ml (Glass Jar)', price: 1850, originalPrice: 2100 },
      { label: '250 ml (Glass Jar)', price: 950, originalPrice: 1100 }
    ]
  },
  {
    id: 'ghee-2',
    categoryId: 'ghee',
    categoryName: 'Ghee',
    tag: 'TRADITIONAL',
    tagBg: 'bg-[#404D1A]',
    title: 'Bilona Buffalo Ghee',
    subtitle: 'Grass-Fed Murrah Buffalo | Traditional Vedic Bilona Churn',
    description: 'Rich, aromatic granular white ghee prepared through traditional curd churning of pasture-grazed Murrah buffalos. High smoke point and deep Ayurvedic nourishment.',
    image: buffaloGheeImg,
    rating: '4.8',
    reviews: '1.2k+ Reviews',
    badge: 'Grass-Fed',
    variants: [
      { label: '1000 ml (Glass Jar)', price: 1950, originalPrice: 2200 },
      { label: '500 ml (Glass Jar)', price: 1050, originalPrice: 1200 }
    ]
  },

  // ================= 2. HONEY =================
  {
    id: 'honey-1',
    categoryId: 'honey',
    categoryName: 'Honey',
    tag: 'PURE & RAW',
    tagBg: 'bg-[#D97706]',
    title: 'Multi Floral Honey',
    subtitle: 'Wild Forest Blossoms | 100% NMR Tested | Raw & Unheated',
    description: 'Harvested ethically by tribal foragers from diverse blooming reserve forest flowers. Packed with active bee pollen, natural propolis, and live digestive enzymes without micro-filtration.',
    image: honeyImg,
    rating: '4.9',
    reviews: '1.6k+ Reviews',
    badge: 'NMR Tested',
    variants: [
      { label: '500 g (Glass Jar)', price: 650, originalPrice: 750 },
      { label: '1 kg (Glass Jar)', price: 1200, originalPrice: 1400 },
      { label: '250 g (Glass Jar)', price: 350, originalPrice: 400 }
    ]
  },
  {
    id: 'honey-2',
    categoryId: 'honey',
    categoryName: 'Honey',
    tag: 'SINGLE ORIGIN',
    tagBg: 'bg-[#2D0345]',
    title: 'Ajwain Honey',
    subtitle: 'Single Floral Carom Nectar | Soothing & Gut Friendly',
    description: 'Monofloral raw honey collected during the winter ajwain flower blossom season. Known for its distinct herbal undertones and potent digestive soothing properties.',
    image: honeyImg,
    rating: '4.8',
    reviews: '890+ Reviews',
    badge: 'Single Floral',
    variants: [
      { label: '500 g (Glass Jar)', price: 690, originalPrice: 800 },
      { label: '1 kg (Glass Jar)', price: 1290, originalPrice: 1500 }
    ]
  },

  // ================= 3. SPICES =================
  {
    id: 'spices-1',
    categoryId: 'spices',
    categoryName: 'Spices',
    tag: 'STONE GROUND',
    tagBg: 'bg-[#B91C1C]',
    title: 'Regular Chilli Powder',
    subtitle: 'Sun-Dried Guntur Chillies | Medium Pungency | Rich Red',
    description: 'Authentic farm-fresh red chillies sun-dried on cotton mats and stone-ground at low RPM to retain natural essential oils and vibrant color without synthetic dyes.',
    image: spicesImg,
    rating: '4.8',
    reviews: '920+ Reviews',
    badge: 'Single Origin',
    variants: [
      { label: '500 g (Pouch)', price: 320, originalPrice: 380 },
      { label: '1 kg (Pouch)', price: 600, originalPrice: 720 },
      { label: '250 g (Pouch)', price: 175, originalPrice: 200 }
    ]
  },
  {
    id: 'spices-2',
    categoryId: 'spices',
    categoryName: 'Spices',
    tag: 'SPECIAL BLEND',
    tagBg: 'bg-[#991B1B]',
    title: 'Pickle Chilli Powder',
    subtitle: 'Coarse Ground Teja Chilli | High Heat & Aromatic Oil Retention',
    description: 'Crafted specially for traditional South Indian and home pickles. Coarsely ground selected high-pungency chillies that impart long-lasting flavor and natural preservation.',
    image: spicesImg,
    rating: '4.9',
    reviews: '640+ Reviews',
    badge: 'Pickle Grade',
    variants: [
      { label: '500 g (Pouch)', price: 360, originalPrice: 420 },
      { label: '1 kg (Pouch)', price: 680, originalPrice: 800 },
      { label: '250 g (Pouch)', price: 195, originalPrice: 230 }
    ]
  },
  {
    id: 'spices-3',
    categoryId: 'spices',
    categoryName: 'Spices',
    tag: 'HIGH CURCUMIN',
    tagBg: 'bg-[#D97706]',
    title: 'Turmeric Powder',
    subtitle: 'Lakadong Native Haldi | 7-9% Active Curcumin | Stone Ground',
    description: 'Wild-cultivated heirloom Lakadong turmeric rhizomes with exceptionally high natural curcumin potency. Unadulterated, unpolished, and deeply fragrant.',
    image: spicesImg,
    rating: '4.9',
    reviews: '1.4k+ Reviews',
    badge: '7%+ Curcumin',
    variants: [
      { label: '500 g (Pouch)', price: 390, originalPrice: 460 },
      { label: '1 kg (Pouch)', price: 750, originalPrice: 890 },
      { label: '250 g (Pouch)', price: 210, originalPrice: 250 }
    ]
  },

  // ================= 4. SUPER FOODS =================
  {
    id: 'superfoods-1',
    categoryId: 'super-foods',
    categoryName: 'Super Foods',
    tag: 'CALCIUM RICH',
    tagBg: 'bg-[#404D1A]',
    title: 'Sprouted Ragi Powder',
    subtitle: 'Malted Finger Millet | Enhanced Bioavailable Iron & Calcium',
    description: 'Traditional native ragi soaked, sprouted to activate enzymes, sun-dried, and gently roasted before milling. Highly digestible ideal for toddlers, mothers, and daily porridge.',
    image: khapliAttaImg,
    rating: '4.9',
    reviews: '1.5k+ Reviews',
    badge: 'Sprouted Grain',
    variants: [
      { label: '500 g (Pouch)', price: 290, originalPrice: 350 },
      { label: '1 kg (Pouch)', price: 540, originalPrice: 650 }
    ]
  },
  {
    id: 'superfoods-2',
    categoryId: 'super-foods',
    categoryName: 'Super Foods',
    tag: 'KIDS NUTRITION',
    tagBg: 'bg-[#D97706]',
    title: 'Sprouted Ragi Powder (Badam Flavor)',
    subtitle: 'Malted Ragi with Real Crushed Almonds, Cardamom & Saffron',
    description: 'Nutritious sprouted ragi enriched with stone-crushed California almonds, royal cardamom, and natural jaggery touch. Delicious wholesome health drink mix.',
    image: amlaprashImg,
    rating: '4.9',
    reviews: '1.1k+ Reviews',
    badge: 'With Badam',
    variants: [
      { label: '500 g (Jar)', price: 350, originalPrice: 420 },
      { label: '1 kg (Jar)', price: 660, originalPrice: 790 }
    ]
  },
  {
    id: 'superfoods-3',
    categoryId: 'super-foods',
    categoryName: 'Super Foods',
    tag: 'ORGANIC GREEN',
    tagBg: 'bg-[#1E5631]',
    title: 'Moringa Powder',
    subtitle: 'Shade-Dried Organic Drumstick Leaves | 90+ Nutrients',
    description: 'Fresh organic moringa oleifera leaves harvested at dawn, shade-dried to preserve live chlorophyll, and pulverized into ultra-fine energizing green powder.',
    image: amlaprashImg,
    rating: '4.8',
    reviews: '780+ Reviews',
    badge: '100% Leaf',
    variants: [
      { label: '250 g (Jar)', price: 320, originalPrice: 390 },
      { label: '500 g (Jar)', price: 590, originalPrice: 720 }
    ]
  },
  {
    id: 'superfoods-4',
    categoryId: 'super-foods',
    categoryName: 'Super Foods',
    tag: 'ANCIENT GRAIN',
    tagBg: 'bg-[#92400E]',
    title: 'Jowar Mix',
    subtitle: 'Sprouted Sorghum Porridge & Bhakri Flour | High Dietary Fibre',
    description: 'Native white jowar sprouted and slow-roasted with roasted grams and cumin. Gluten-free, gentle on digestion, and regulates sustained energy throughout the day.',
    image: khapliAttaImg,
    rating: '4.8',
    reviews: '620+ Reviews',
    badge: 'Gluten-Free',
    variants: [
      { label: '500 g (Pouch)', price: 260, originalPrice: 320 },
      { label: '1 kg (Pouch)', price: 490, originalPrice: 590 }
    ]
  },
  {
    id: 'superfoods-5',
    categoryId: 'super-foods',
    categoryName: 'Super Foods',
    tag: 'MULTI MILLET',
    tagBg: 'bg-[#2D0345]',
    title: 'Millet Mix',
    subtitle: '5 Ancient Siridhanya Millets + Sprouted Pulses Health Blend',
    description: 'Wholesome ancestral health blend of Foxtail, Little, Kodo, Barnyard, and Browntop millets with roasted lentils. Perfect nutrient-dense daily breakfast porridge.',
    image: khapliAttaImg,
    rating: '4.9',
    reviews: '850+ Reviews',
    badge: '5 Millets',
    variants: [
      { label: '500 g (Pouch)', price: 280, originalPrice: 340 },
      { label: '1 kg (Pouch)', price: 520, originalPrice: 630 }
    ]
  },

  // ================= 5. COLD PRESSED OILS =================
  {
    id: 'oils-1',
    categoryId: 'cold-pressed-oils',
    categoryName: 'Cold Pressed Oils',
    tag: 'WOOD PRESSED',
    tagBg: 'bg-[#1E5631]',
    title: 'Coconut Oil',
    subtitle: 'Wood Pressed (Mara Chekku) | Pure Raw Copra | Unrefined',
    description: 'Extracted from sun-dried sulfur-free copra using traditional wooden vaagai churns. Crystal clear with fragrant tropical aroma, rich in medium-chain triglycerides (MCTs).',
    image: coldPressedOilImg,
    rating: '4.9',
    reviews: '1.8k+ Reviews',
    badge: 'Raw Copra',
    variants: [
      { label: '1 Litre (Bottle)', price: 490, originalPrice: 560 },
      { label: '5 Litre (Can)', price: 2350, originalPrice: 2650 },
      { label: '500 ml (Bottle)', price: 260, originalPrice: 300 }
    ]
  },
  {
    id: 'oils-2',
    categoryId: 'cold-pressed-oils',
    categoryName: 'Cold Pressed Oils',
    tag: 'KOLHU PRESSED',
    tagBg: 'bg-[#B45309]',
    title: 'Groundnut Oil',
    subtitle: 'Wood Pressed Peanut Oil | Native Seeds | High Smoke Point',
    description: 'Extracted from native Saurashtra red-skin peanuts without high heat. Retains nutty aroma, essential phytosterols, and natural vitamin E for healthy everyday cooking.',
    image: coldPressedOilImg,
    rating: '4.8',
    reviews: '1.4k+ Reviews',
    badge: 'Native Peanut',
    variants: [
      { label: '1 Litre (Bottle)', price: 440, originalPrice: 510 },
      { label: '5 Litre (Can)', price: 2100, originalPrice: 2450 },
      { label: '500 ml (Bottle)', price: 240, originalPrice: 280 }
    ]
  },
  {
    id: 'oils-3',
    categoryId: 'cold-pressed-oils',
    categoryName: 'Cold Pressed Oils',
    tag: 'COLD EXTRACTED',
    tagBg: 'bg-[#D97706]',
    title: 'Sunflower Oil',
    subtitle: 'Cold-Pressed Whole Sunflower Seeds | Light & Heart-Friendly',
    description: 'Gently cold-pressed from chemical-free sunflower seeds. Light texture, neutral natural taste, and rich in polyunsaturated healthy fatty acids.',
    image: coldPressedOilImg,
    rating: '4.8',
    reviews: '810+ Reviews',
    badge: 'Zero Chemical',
    variants: [
      { label: '1 Litre (Bottle)', price: 420, originalPrice: 490 },
      { label: '5 Litre (Can)', price: 1990, originalPrice: 2350 },
      { label: '500 ml (Bottle)', price: 230, originalPrice: 270 }
    ]
  },
  {
    id: 'oils-4',
    categoryId: 'cold-pressed-oils',
    categoryName: 'Cold Pressed Oils',
    tag: 'KACHI GHANI',
    tagBg: 'bg-[#991B1B]',
    title: 'Mustard Oil',
    subtitle: 'Traditional Wooden Churned Black Mustard | Pungent & Pure',
    description: 'Slow-crushed from black mustard seeds in traditional wooden kolhu. Retains potent natural pungency, antimicrobial properties, and authentic North Indian culinary warmth.',
    image: coldPressedOilImg,
    rating: '4.9',
    reviews: '1.2k+ Reviews',
    badge: 'Pungent Pure',
    variants: [
      { label: '1 Litre (Bottle)', price: 390, originalPrice: 460 },
      { label: '5 Litre (Can)', price: 1850, originalPrice: 2180 },
      { label: '500 ml (Bottle)', price: 215, originalPrice: 250 }
    ]
  },
  {
    id: 'oils-5',
    categoryId: 'cold-pressed-oils',
    categoryName: 'Cold Pressed Oils',
    tag: 'AUTHENTIC GINGELLY',
    tagBg: 'bg-[#2D0345]',
    title: 'Sesame Oil',
    subtitle: 'Wood Pressed Black Til with Palm Jaggery | Traditional Gingelly',
    description: 'Authentic gingelly oil extracted with black sesame seeds and palm jaggery in wooden chekku. Renowned for Ayurvedic oil pulling, deep body massage, and South Indian cooking.',
    image: coldPressedOilImg,
    rating: '4.9',
    reviews: '970+ Reviews',
    badge: 'With Palm Jaggery',
    variants: [
      { label: '1 Litre (Bottle)', price: 560, originalPrice: 650 },
      { label: '500 ml (Bottle)', price: 295, originalPrice: 345 }
    ]
  },

  // ================= 6. SWEETENERS =================
  {
    id: 'sweeteners-1',
    categoryId: 'natural-sweeteners',
    categoryName: 'Sweeteners',
    tag: 'CHEMICAL FREE',
    tagBg: 'bg-[#D97706]',
    title: 'Jaggery',
    subtitle: 'Native Heirloom Sugarcane | Zero Sulphur | Iron Rich Gur',
    description: 'Prepared using ancestral boiling in open iron vats clarified naturally with okra plant extracts. Never bleached, mineral-rich alternative to refined white sugar.',
    image: naturalSweetenerImg,
    rating: '4.9',
    reviews: '1.6k+ Reviews',
    badge: 'Zero Sulphur',
    variants: [
      { label: '1 kg (Pack)', price: 240, originalPrice: 290 },
      { label: '500 g (Pack)', price: 130, originalPrice: 160 }
    ]
  },
  {
    id: 'sweeteners-2',
    categoryId: 'natural-sweeteners',
    categoryName: 'Sweeteners',
    tag: 'KARUPATTI',
    tagBg: 'bg-[#2D0345]',
    title: 'Palm Jaggery',
    subtitle: 'Traditional Native Palmyra Tree Sap | Low Glycemic & Iron Rich',
    description: 'Extracted from unfermented sweet sap of native palmyra trees (Neera). Rich in magnesium, potassium, and calcium with deep smoky caramel notes.',
    image: naturalSweetenerImg,
    rating: '4.9',
    reviews: '950+ Reviews',
    badge: '100% Native Sap',
    variants: [
      { label: '1 kg (Block)', price: 390, originalPrice: 470 },
      { label: '500 g (Block)', price: 210, originalPrice: 255 }
    ]
  },

  // ================= 7. PROTEIN BARS =================
  {
    id: 'protein-1',
    categoryId: 'protein-bars',
    categoryName: 'Protein Bars',
    tag: 'CLEAN NUTRITION',
    tagBg: 'bg-[#404D1A]',
    title: 'Sprouted Ragi Protein Bar',
    subtitle: 'Sprouted Ragi, Seeds, Almonds & Raw Honey | 10g Protein',
    description: 'Cold-crafted with malted ragi, pumpkin seeds, chia seeds, almonds, and bound with wild forest honey. Zero refined sugars, preservatives, or synthetic isolates.',
    image: proteinBarImg,
    rating: '4.8',
    reviews: '820+ Reviews',
    badge: 'Zero Isolates',
    variants: [
      { label: 'Box of 6 Bars (300g)', price: 540, originalPrice: 630 },
      { label: 'Box of 12 Bars (600g)', price: 990, originalPrice: 1200 }
    ]
  },
  {
    id: 'protein-2',
    categoryId: 'protein-bars',
    categoryName: 'Protein Bars',
    tag: 'HIGH PROTEIN',
    tagBg: 'bg-[#D97706]',
    title: 'Peanut Protein Bar',
    subtitle: 'Roasted Saurashtra Peanuts & Dates with Cocoa | 12g Protein',
    description: 'Delicious energy bar loaded with crunchy roasted peanuts, Arabian dates, flax seeds, and raw honey. Clean fuel for workouts and busy active mornings.',
    image: proteinBarImg,
    rating: '4.9',
    reviews: '1.3k+ Reviews',
    badge: '12g Plant Protein',
    variants: [
      { label: 'Box of 6 Bars (300g)', price: 480, originalPrice: 560 },
      { label: 'Box of 12 Bars (600g)', price: 890, originalPrice: 1080 }
    ]
  },

  // ================= 8. NON-VEG PICKLES =================
  {
    id: 'pickles-1',
    categoryId: 'non-veg-pickles',
    categoryName: 'Non-Veg Pickles',
    tag: 'BEST SELLER',
    tagBg: 'bg-[#991B1B]',
    title: 'Boneless Chicken Pickle',
    subtitle: 'Country Farm Chicken | Gingelly Oil & Sun-Dried Guntur Masala',
    description: 'Tender succulent boneless country chicken fried in wood-pressed sesame oil and steeped in grandmother\'s secret spice blend with garlic cloves and curry leaves.',
    image: chickenPickleImg,
    rating: '4.9',
    reviews: '2.1k+ Reviews',
    badge: 'Boneless Tender',
    variants: [
      { label: '500 g (Glass Jar)', price: 590, originalPrice: 690 },
      { label: '250 g (Glass Jar)', price: 320, originalPrice: 380 },
      { label: '1 kg (Glass Jar)', price: 1100, originalPrice: 1300 }
    ]
  },
  {
    id: 'pickles-2',
    categoryId: 'non-veg-pickles',
    categoryName: 'Non-Veg Pickles',
    tag: 'COASTAL SPECIAL',
    tagBg: 'bg-[#2D0345]',
    title: 'Prawn Pickle',
    subtitle: 'Fresh Catch Sea Prawns | Tangy Lemon & Spicy Ginger-Garlic Masala',
    description: 'Fresh succulent sea prawns deveined and marinated with stone-ground spice paste, lemon juice, and aromatic roasted fenugreek in cold-pressed gingelly oil.',
    image: chickenPickleImg,
    rating: '4.9',
    reviews: '1.4k+ Reviews',
    badge: 'Fresh Catch',
    variants: [
      { label: '500 g (Glass Jar)', price: 690, originalPrice: 800 },
      { label: '250 g (Glass Jar)', price: 370, originalPrice: 430 },
      { label: '1 kg (Glass Jar)', price: 1290, originalPrice: 1550 }
    ]
  },
  {
    id: 'pickles-3',
    categoryId: 'non-veg-pickles',
    categoryName: 'Non-Veg Pickles',
    tag: 'VILLAGE RECIPE',
    tagBg: 'bg-[#B91C1C]',
    title: 'Chicken Pickle - Bone',
    subtitle: 'Traditional Bone-in Country Chicken | Rich Juicy Flavor',
    description: 'Village-style bone-in chicken slow-cooked with aromatic roasted spices and natural cold-pressed oil, releasing deep marrow flavors into the masala gravy.',
    image: chickenPickleImg,
    rating: '4.8',
    reviews: '880+ Reviews',
    badge: 'Bone-in Juicy',
    variants: [
      { label: '500 g (Glass Jar)', price: 490, originalPrice: 580 },
      { label: '250 g (Glass Jar)', price: 270, originalPrice: 320 },
      { label: '1 kg (Glass Jar)', price: 920, originalPrice: 1100 }
    ]
  }
]
