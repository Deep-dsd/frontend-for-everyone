import Link from 'next/link';
import Image from 'next/image';
import { Restaurant } from '@/types/restaurant';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const generateStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    if (hasHalfStar) {
      stars.push('☆');
    }
    while (stars.length < 5) {
      stars.push('☆');
    }

    return stars.join('');
  };

  return (
    <Link href={`/restaurant/${restaurant.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="h-48 overflow-hidden">
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-slate-800">
            {restaurant.name}
          </h3>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500 text-base">
              {generateStars(restaurant.rating)}
            </span>
            <span className="font-semibold text-gray-600">
              {restaurant.rating}
            </span>
          </div>
          
          <div className="mb-4 flex gap-2 flex-wrap">
            {restaurant.popularCuisines.slice(0, 2).map((cuisine, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                {cuisine}
              </span>
            ))}
          </div>
          
          <div className="text-gray-600 flex items-center gap-1">
            <span>📍</span>
            {restaurant.location}
          </div>
        </div>
      </div>
    </Link>
  );
}