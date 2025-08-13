
import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types/Product';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-white p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <img 
        src={item.image} 
        alt={item.name}
        className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-xl mx-auto sm:mx-0 flex-shrink-0"
      />
      
      <div className="flex-1 text-center sm:text-left w-full sm:w-auto">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{item.category}</p>
        <p className="text-pink-600 font-bold text-lg">₦{item.price.toLocaleString()}</p>
      </div>
      
      <div className="flex items-center justify-center space-x-3 w-full sm:w-auto">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className={`p-2 rounded-lg transition-colors duration-200 ${
            item.quantity <= 1 
              ? 'text-gray-300 cursor-not-allowed' 
              : 'text-gray-500 hover:text-pink-600 hover:bg-pink-50'
          }`}
          disabled={item.quantity <= 1}
        >
          <Minus size={16} />
        </button>
        
        <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
        
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-2 text-gray-500 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors duration-200"
        >
          <Plus size={16} />
        </button>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <p className="text-lg font-bold text-gray-800">
          ₦{(item.price * item.quantity).toLocaleString()}
        </p>
        <button
          onClick={() => onRemove(item.id)}
          className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
