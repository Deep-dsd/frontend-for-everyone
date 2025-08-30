import { restaurants } from '@/data/restaurants';
import RestaurantCard from '@/components/RestaurantCard';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-5 py-8">
        <h1 className="text-center text-3xl font-bold mb-8 text-slate-800">
          Discover Amazing Restaurants
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </main>
    </div>
  );
}