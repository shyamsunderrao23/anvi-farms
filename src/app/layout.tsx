import type { Metadata } from "next";
import { Geist, Geist_Mono, Alex_Brush, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alexBrush = Alex_Brush({
  weight: "400",
  variable: "--font-cursive",
  subsets: ["latin"],
});

const pinyonScript = Pinyon_Script({
  weight: "400",
  variable: "--font-pinyon",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anvifarms.com"),
  title: {
    default: "Anvi Farms | 100% Pure A2 Gir Cow Vedic Bilona Ghee & Organic Produce",
    template: "%s | Anvi Farms",
  },
  description:
    "Rooted in tradition, committed to purity. Experience authentic A2 Gir Cow Bilona Ghee, raw wild forest honey, wood-pressed oils, and farm-fresh organic harvest from Anvi Farms.",
  keywords: [
    "A2 Cow Ghee",
    "Bilona Ghee",
    "Pure Desi Cow Ghee",
    "Gir Cow Ghee",
    "Organic A2 Ghee",
    "Vedic Bilona Ghee",
    "Raw Wild Forest Honey",
    "Wood Pressed Oils",
    "Cold Pressed Mustard Oil",
    "Himalayan Pink Salt",
    "Organic Jaggery",
    "Anvi Farms",
    "Pure Farm Products India",
    "Buy Pure Ghee Online",
    "Chemical Free Food",
  ],
  authors: [{ name: "Anvi Farms", url: "https://anvifarms.com" }],
  creator: "Anvi Farms",
  publisher: "Anvi Farms",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Anvi Farms | 100% Pure A2 Gir Cow Vedic Bilona Ghee & Organic Produce",
    description:
      "Rooted in tradition, committed to purity. Handcrafted traditional Vedic Bilona Ghee, pure honey, and organic farm produce delivered to your doorstep.",
    url: "https://anvifarms.com",
    siteName: "Anvi Farms",
    images: [
      {
        url: "/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Anvi Farms - 100% Pure Vedic A2 Bilona Ghee",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anvi Farms | 100% Pure A2 Gir Cow Vedic Bilona Ghee & Organic Produce",
    description:
      "Handcrafted traditional Vedic Bilona Ghee, raw organic honey, and pure cold-pressed oils.",
    images: ["/hero-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${alexBrush.variable} ${pinyonScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
