'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import { cartData as initialCartData } from '@/data/cartData';
import { updateQuantity, removeProduct, calculateTotal } from '@/lib/cartServices';
import { Product } from '@/types/product';

export default function Home() {
  const [cartData, setCartData] = useState<Product[]>(initialCartData);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    setTotalPrice(calculateTotal(cartData));
  }, [cartData]);

  const handleQuantityUpdate = (productId: number, change: number) => {
    setCartData(prevData => updateQuantity(prevData, productId, change));
  };

  const handleRemoveProduct = (productId: number) => {
    setCartData(prevData => removeProduct(prevData, productId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700 p-10">
      <section className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white tracking-wide">
            Shopping Cart
          </h1>
        </header>
        
        <main className="space-y-6">
          {cartData.map((product) => (
            <Card
              key={product.id}
              product={product}
              onQuantityUpdate={handleQuantityUpdate}
              onRemove={handleRemoveProduct}
            />
          ))}
        </main>
        
        <footer className="mt-10 text-center p-8 bg-white/15 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg">
          <div className="text-3xl font-extrabold text-white">
            <p>
              Total Price: ₹<span className="text-white tracking-wide">{totalPrice}</span>
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
}