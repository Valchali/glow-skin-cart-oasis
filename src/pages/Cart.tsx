
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, CreditCard, Banknote } from 'lucide-react';
import CartItem from '../components/CartItem';
import { CartItem as CartItemType } from '../types/Product';

interface CartProps {
  cartItems: CartItemType[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handlePayment = (method: string) => {
    console.log(`Processing payment with ${method}`);
    alert(`Redirecting to ${method} checkout...`);
    // Here you would integrate with actual payment processors
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
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-800">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {subtotal < 75 && (
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-pink-700">
                    Add ${(75 - subtotal).toFixed(2)} more to get free shipping!
                  </p>
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Options</h3>
                
                <button
                  onClick={() => handlePayment('Credit Card')}
                  className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <CreditCard size={20} />
                  <span>Pay with Card</span>
                </button>
                
                <button
                  onClick={() => handlePayment('PayPal')}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Banknote size={20} />
                  <span>Pay with PayPal</span>
                </button>
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
