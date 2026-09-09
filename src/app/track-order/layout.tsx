import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Track Your Order | Real-Time Live Status | Anvi Farms',
  description:
    'Track your Anvi Farms parcel in real-time. Enter your Order ID to see estimated delivery dates and dispatch progress.',
  keywords: [
    'Track Anvi Farms Order',
    'Order Tracking Ghee',
    'Check Delivery Status',
    'Anvi Farms Shipping',
  ],
  openGraph: {
    title: 'Track Your Order | Anvi Farms',
    description: 'Track your order dispatch and express courier status in real-time.',
    url: 'https://anvifarms.com/track-order',
  },
};

export default function TrackOrderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
