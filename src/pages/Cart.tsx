
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import CartItem from '../components/CartItem';
import { CartItem as CartItemType } from '../types/Product';

interface CartProps {
  cartItems: CartItemType[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 75000 ? 0 : 2500; // Updated for Nigerian pricing
  const tax = subtotal * 0.075; // 7.5% VAT in Nigeria
  const total = subtotal + shipping + tax;

  const sendCartToWhatsApp = () => {
    const phoneNumber = "2348027797190";
    let message = "Hi! I want to order the following items:\n\n";
    
    cartItems.forEach(item => {
      message += `• ${item.name} - ${item.quantity}x - ₦${item.price.toLocaleString()}\n`;
    });
    
    message += `\nSubtotal: ₦${subtotal.toLocaleString()}\n`;
    message += `Shipping: ${shipping === 0 ? 'Free' : `₦${shipping.toLocaleString()}`}\n`;
    message += `Tax (7.5%): ₦${tax.toLocaleString()}\n`;
    message += `Total: ₦${total.toLocaleString()}\n\n`;
    message += "My details:\n";
    message += "Name: [Please fill your name]\n";
    message += "Phone: [Please fill your phone number]\n";
    message += "Address: [Please fill your delivery address]\n\n";
    message += "Thank you!";
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag size={80} className="mx-auto text-gray-300 mb-6" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-gray-600 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link
              to="/products"
              className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-700 hover:to-rose-700 transition-all duration-200 transform hover:scale-105"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemoveItem}
              />
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-lg sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `₦${shipping.toLocaleString()}`}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (7.5% VAT)</span>
                  <span>₦{tax.toLocaleString()}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-800">
                    <span>Total</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {subtotal < 75000 && (
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-pink-700">
                    Add ₦{(75000 - subtotal).toLocaleString()} more to get free shipping!
                  </p>
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Checkout Options</h3>
                
                <button
                  onClick={sendCartToWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Order via WhatsApp</span>
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  Click to send your order details via WhatsApp for easy checkout
                </p>
              </div>

              <div className="mt-6 pt-6 border-t">
                <Link
                  to="/products"
                  className="block text-center text-pink-600 hover:text-pink-700 font-medium"
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
