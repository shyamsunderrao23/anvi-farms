'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ProductVariant, CartItem, CategoryId } from '../types/product';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeFromCart: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, delta: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  discount: number;
  promoCode: string;
  applyPromoCode: (code: string) => boolean;
  total: number;
  freeShippingThreshold: number;

  // Wishlist state
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  wishlistCount: number;
  isInWishlist: (productId: string) => boolean;
  isWishlistOpen: boolean;
  openWishlist: () => void;
  closeWishlist: () => void;

  // Drawer & Modals state
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;

  isCelebrationOpen: boolean;
  celebrationMessage: string;
  triggerCelebration: (msg?: string) => void;
  closeCelebration: () => void;

  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;

  isCheckoutOpen: boolean;
  openCheckout: () => void;
  closeCheckout: () => void;

  // Filtering & Search
  selectedCategory: CategoryId;
  setSelectedCategory: (cat: CategoryId) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const FREE_SHIPPING_THRESHOLD = 999; // Free shipping above ₹999

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>(['a2-desi-cow-ghee', 'raw-wild-forest-honey']);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCelebrationOpen, setIsCelebrationOpen] = useState(false);
  const [celebrationMessage, setCelebrationMessage] = useState('🎉 Celebrations Begin! Added to Your Fresh Cart!');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  // Load from localStorage only after client mount to eliminate SSR hydration mismatch
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('anvi_farms_cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
      const savedWishlist = localStorage.getItem('anvi_farms_wishlist');
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }
    } catch {
      // Ignore localStorage errors
    }
    setIsLoaded(true);
  }, []);

  // Sync cart & wishlist to localStorage only after initial client load
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('anvi_farms_cart', JSON.stringify(cart));
      localStorage.setItem('anvi_farms_wishlist', JSON.stringify(wishlist));
    } catch {
      // Ignore localStorage errors
    }
  }, [cart, wishlist, isLoaded]);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const addToCart = (product: Product, variant: ProductVariant, quantity: number = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedVariant.id === variant.id
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, selectedVariant: variant, quantity }];
      }
    });

    // Trigger Celebrations Begin animation modal & open cart drawer
    setCelebrationMessage(`🎉 Celebrations Begin! ${product.name} Added to Your Cart!`);
    setIsCelebrationOpen(true);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, variantId: string) => {
    setCart((prev) => prev.filter(
      (item) => !(item.product.id === productId && item.selectedVariant.id === variantId)
    ));
  };

  const updateQuantity = (productId: string, variantId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.selectedVariant.id === variantId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyPromoCode = (code: string): boolean => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'ANVI10' || cleanCode === 'PURE10') {
      setPromoCode(cleanCode);
      setDiscountPercent(10);
      return true;
    }
    return false;
  };

  const cartCount = isLoaded ? cart.reduce((total, item) => total + item.quantity, 0) : 0;
  const wishlistCount = isLoaded ? wishlist.length : 2;

  const subtotal = cart.reduce(
    (acc, item) => acc + item.selectedVariant.price * item.quantity,
    0
  );

  const discount = Math.round((subtotal * discountPercent) / 100);
  const total = Math.max(0, subtotal - discount);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        discount,
        promoCode,
        applyPromoCode,
        total,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        wishlist,
        toggleWishlist,
        wishlistCount,
        isInWishlist,
        isWishlistOpen,
        openWishlist: () => setIsWishlistOpen(true),
        closeWishlist: () => setIsWishlistOpen(false),
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        isCelebrationOpen,
        celebrationMessage,
        triggerCelebration: (msg) => {
          if (msg) setCelebrationMessage(msg);
          setIsCelebrationOpen(true);
        },
        closeCelebration: () => setIsCelebrationOpen(false),
        quickViewProduct,
        openQuickView: (product) => setQuickViewProduct(product),
        closeQuickView: () => setQuickViewProduct(null),
        isCheckoutOpen,
        openCheckout: () => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        },
        closeCheckout: () => setIsCheckoutOpen(false),
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
