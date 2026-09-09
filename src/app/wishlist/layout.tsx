import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Wishlist | Saved Favorites | Anvi Farms',
  description:
    'View and manage your favorite organic products and Vedic A2 Ghee saved in your Anvi Farms wishlist.',
  keywords: [
    'Anvi Farms Wishlist',
    'Saved Farm Products',
    'Organic Ghee Favorites',
  ],
  openGraph: {
    title: 'My Wishlist | Anvi Farms',
    description: 'Quickly access and order your favorite saved Anvi Farms organic products.',
    url: 'https://anvifarms.com/wishlist',
  },
};

export default function WishlistLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
