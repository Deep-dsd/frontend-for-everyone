import { Product } from '@/types/product';

export function updateQuantity(cartData: Product[], productId: number, change: number): Product[] {
  return cartData.map(product => {
    if (product.id === productId) {
      return {
        ...product,
        quantity: Math.max(1, product.quantity + change)
      };
    }
    return product;
  });
}

export function removeProduct(cartData: Product[], productId: number): Product[] {
  return cartData.filter(product => product.id !== productId);
}

export function calculateTotal(cartData: Product[]): number {
  return cartData.reduce((sum, product) => {
    return sum + (product.price * product.quantity);
  }, 0);
}

export function addProduct(cartData: Product[], newProduct: Product): Product[] {
  const existingProduct = cartData.find(product => product.id === newProduct.id);
  
  if (existingProduct) {
    return updateQuantity(cartData, newProduct.id, newProduct.quantity);
  }
  
  return [...cartData, newProduct];
}

export function clearCart(): Product[] {
  return [];
}