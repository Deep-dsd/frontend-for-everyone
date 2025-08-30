'use client'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Restaurant } from '@/types/restaurant';
import { restaurants } from '@/data/restaurants';
import Header from '@/components/Header';

export default function RestaurantDetails() {
  const params = useParams();
  const id = params.id as string;
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    if (id) {
      const foundRestaurant = restaurants.find(r => r.id === parseInt(id));
      setRestaurant(foundRestaurant || null);
    }
  }, [id]);

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

  if (!restaurant) {
    return (
      <div>
        <Header />
        <div className="container mx-auto px-5 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-600">Restaurant not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto px-5 py-4">
        {/* Hero Section */}
        <div className="relative h-72 overflow-hidden rounded-lg mb-8">
          <Image
            src={restaurant.coverPhoto}
            alt={restaurant.name}
            fill
            className="object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">
              {restaurant.name}
            </h1>
            
            <div className="flex items-center gap-4 text-lg border border-white/25 w-fit bg-white/10 px-3 py-2 rounded-lg backdrop-blur-md">
              <span className="text-yellow-400 text-xl">
                {generateStars(restaurant.rating)}
              </span>
              <span className="font-semibold">
                {restaurant.rating} / 5.0
              </span>
            </div>
          </div>
        </div>

        {/* Restaurant Info */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">About</h3>
            <p className="text-base leading-relaxed text-gray-600 mb-6">
              {restaurant.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                📍 Location
              </h3>
              <p className="text-gray-600">{restaurant.location}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                🍴 Popular Cuisines
              </h3>
              <div className="flex flex-wrap gap-2">
                {restaurant.popularCuisines.map((cuisine, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full font-medium"
                  >
                    {cuisine}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}