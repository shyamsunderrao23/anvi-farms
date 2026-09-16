import React from 'react'
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Truck } from 'lucide-react'

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems = [], 
  onUpdateQuantity, 
  onRemoveItem,
  onCheckout
}) {
  if (!isOpen) return null

  const subtotal = cartItems.reduce((acc, item) => {
    const numericPrice = typeof item.price === 'number' 
      ? item.price 
      : parseInt(String(item.price).replace(/[^0-9]/g, '')) || 0
    return acc + (numericPrice * item.quantity)
  }, 0)

  const freeShippingThreshold = 999
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal)
  const shippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100))

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          
          {/* Drawer Header */}
          <div className="px-5 py-4 bg-[#2D0345] text-white flex items-center justify-between border-b border-purple-950">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-amber-300" />
              <h2 className="text-base font-bold tracking-tight">Your Farm Basket</h2>
              <span className="bg-white/20 text-amber-300 text-xs font-bold px-2 py-0.5 rounded-full">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-amber-50 px-5 py-3 border-b border-amber-100 text-xs">
            {amountToFreeShipping > 0 ? (
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-amber-900 font-semibold">
                  <Truck className="w-4 h-4 text-amber-600" />
                  <span>Add <strong className="text-[#2D0345]">₹{amountToFreeShipping}</strong> more for <strong>FREE Express Delivery</strong>!</span>
                </div>
                <div className="w-full bg-amber-200/60 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-amber-500 h-1.5 rounded-full transition-all duration-500" 
                    style={{ width: `${shippingProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-emerald-800 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>🎉 Congratulations! You have unlocked FREE Express Delivery!</span>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-purple-50 flex items-center justify-center text-[#2D0345] mb-4">
                  <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">Your basket is empty</h3>
                <p className="text-xs text-gray-500 max-w-xs mb-6">
                  Explore our pure Vedic bilona ghee, raw forest honey, cold-pressed oils, and farm-fresh staples.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-lg bg-[#2D0345] text-white font-bold text-xs transition-colors shadow-sm"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center gap-3.5 p-3 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors"
                >
                  {/* Item Image */}
                  <div className="w-18 h-18 rounded-lg bg-white border border-gray-200 overflow-hidden shrink-0 flex items-center justify-center">
                    {item.image ? (
                      <img src={item.image} alt={item.title || item.name} className="w-full h-full object-cover" />
                    ) : (
                      <ShoppingBag className="w-6 h-6 text-gray-400" />
                    )}
                  </div>

                  {/* Item Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                      {item.title || item.name}
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      {item.weight || item.selectedVariant || 'Standard Pack'}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-xs sm:text-sm font-black text-[#2D0345]">
                        ₹{(typeof item.price === 'number' ? item.price : parseInt(String(item.price).replace(/[^0-9]/g, '')) || 0) * item.quantity}
                      </span>
                      {item.originalPrice && (
                        <span className="text-[10px] text-gray-400 line-through">
                          {item.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity Actions */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-rose-600 transition-colors p-1"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex items-center border border-gray-300 rounded-md bg-white shadow-2xs">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer / Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 bg-white border-t border-gray-200 space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Shipping</span>
                <span className={amountToFreeShipping === 0 ? "text-emerald-600 font-bold" : "text-gray-900 font-semibold"}>
                  {amountToFreeShipping === 0 ? "FREE" : "₹50"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-gray-900">Subtotal</span>
                <span className="text-lg font-black text-[#2D0345]">₹{subtotal + (amountToFreeShipping === 0 ? 0 : 50)}</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (onCheckout) onCheckout()
                  else alert(`Proceeding to checkout with ₹${subtotal + (amountToFreeShipping === 0 ? 0 : 50)}`)
                }}
                className="w-full py-3 rounded-xl bg-[#2D0345] text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Secure Checkout • Pure Farm Direct</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
