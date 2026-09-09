import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products | 100% Pure A2 Ghee, Raw Wild Honey & Wood Pressed Oils',
  description:
    'Explore the pure range of traditional A2 Gir Cow Vedic Bilona Ghee, Raw Forest Honey, Wood Pressed Oils, and Organic Spices from Anvi Farms.',
  keywords: [
    'Pure A2 Ghee',
    'Bilona Ghee',
    'Raw Wild Honey',
    'Wood Pressed Oil',
    'Organic Spices',
    'Buy Pure Farm Products',
    'Anvi Farms Products',
  ],
  openGraph: {
    title: 'Pure Vedic Farm Produce & A2 Ghee | Anvi Farms',
    description:
      'Explore handcrafted traditional A2 Gir Cow Ghee, pure raw honey, and chemical-free farm harvests.',
    url: 'https://anvifarms.com/products',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
