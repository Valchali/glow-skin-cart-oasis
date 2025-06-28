
import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover-scale">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <button
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 right-4 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Plus size={20} />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-200">
            {product.name}
          </h3>
          <span className="text-2xl font-bold text-pink-600">
            ₦{product.price}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {product.category}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-200 transform hover:scale-105 font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
