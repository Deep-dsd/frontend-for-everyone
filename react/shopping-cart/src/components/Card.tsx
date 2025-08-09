import { Product } from '@/types/product';
import Image from 'next/image';

interface CardProps {
  product: Product;
  onQuantityUpdate: (productId: number, change: number) => void;
  onRemove: (productId: number) => void;
}

export default function Card({ product, onQuantityUpdate, onRemove }: CardProps) {
  return (
    <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 flex gap-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 overflow-hidden">
      
      {/* Product Image */}
      <div className="relative w-36 h-36 rounded-2xl overflow-hidden shadow-md group-hover:scale-102 transition-transform duration-300">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
            {product.name}
          </h3>
          <p className="text-gray-600 mb-5 text-sm leading-relaxed">
            {product.description}
          </p>
        </div>
        
        {/* Product Details */}
        <div className="flex justify-between items-center">
          {/* Price */}
          <div className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            ₹{product.price}
          </div>
          
          {/* Quantity Controls */}
          <div className="flex items-center gap-3 bg-indigo-50 px-4 py-2 rounded-2xl border border-indigo-100">
            <button
              onClick={() => onQuantityUpdate(product.id, -1)}
              className="w-9 h-9 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:-translate-y-0.5 hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center justify-center"
            >
              -
            </button>
            
            <span className="min-w-8 text-center font-bold text-gray-900 bg-white px-2 py-1 rounded-lg border border-indigo-200">
              {product.quantity}
            </span>
            
            <button
              onClick={() => onQuantityUpdate(product.id, 1)}
              className="w-9 h-9 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:-translate-y-0.5 hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center justify-center"
            >
              +
            </button>
          </div>
          
          {/* Remove Button */}
          <button
            onClick={() => onRemove(product.id)}
            className="px-5 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl text-sm tracking-wide hover:-translate-y-0.5 hover:shadow-lg active:scale-95 transition-all duration-200"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}