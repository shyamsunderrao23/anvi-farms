import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story & Vedic Bilona Process | Anvi Farms',
  description:
    'Discover our roots, our ethical Gir cows, and our timeless Vedic Bilona method of crafting pure, authentic A2 Desi Cow Ghee.',
  keywords: [
    'About Anvi Farms',
    'Vedic Bilona Method',
    'A2 Desi Cow Farming',
    'Gir Cow Care',
    'Traditional Ghee Making',
    'Sustainable Organic Farming',
  ],
  openGraph: {
    title: 'Our Story & Vedic Bilona Method | Anvi Farms',
    description:
      'Learn how Anvi Farms preserves age-old Vedic dairy traditions with our free-grazing Gir cows and pure Bilona churning.',
    url: 'https://anvifarms.com/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
