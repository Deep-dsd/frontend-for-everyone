'use client'
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const isDetailsPage = pathname.includes('/restaurant/');

  return (
    <header className="bg-slate-800 text-white py-4 shadow-lg">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-blue-300 transition-colors">
          🍽️ FoodieHub
        </Link>
        {isDetailsPage && (
          <button
            onClick={() => router.push('/')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
          >
            ← Back to Restaurants
          </button>
        )}
      </div>
    </header>
  );
}