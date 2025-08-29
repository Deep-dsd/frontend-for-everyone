import { restaurants } from '@/data/restaurants';
import RestaurantCard from '@/components/RestaurantCard';

export default function Home() {
  return (
    <div className="py-8">
      <h2 className="text-center text-3xl font-bold mb-8 text-slate-800">
        Discover Amazing Restaurants
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}