import { Restaurant } from '@/types/restaurant';

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Bella Vista Italian",
    rating: 4.8,
    popularCuisines: ["Italian", "Pizza", "Pasta"],
    location: "Downtown, New York",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    coverPhoto: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop",
    description: "Experience authentic Italian cuisine in the heart of the city. Our chef brings traditional recipes from Naples with fresh ingredients and a modern twist. From handmade pasta to wood-fired pizzas, every dish tells a story of Italian culinary heritage."
  },
  {
    id: 2,
    name: "Sakura Sushi House",
    rating: 4.9,
    popularCuisines: ["Japanese", "Sushi", "Ramen"],
    location: "Little Tokyo, Los Angeles",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    coverPhoto: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=400&fit=crop",
    description: "Immerse yourself in an authentic Japanese dining experience. Our master sushi chef trained in Tokyo for over 15 years, bringing traditional techniques and the freshest fish. From omakase to classic rolls, every piece is crafted with precision and artistry."
  },
  {
    id: 3,
    name: "Spice Garden Indian",
    rating: 4.6,
    popularCuisines: ["Indian", "Curry", "Tandoor"],
    location: "Curry Hill, Manhattan",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    coverPhoto: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=400&fit=crop",
    description: "Journey through the diverse flavors of India with our extensive menu featuring regional specialties. From creamy butter chicken to spicy vindaloo, our chefs use traditional spice blends and cooking methods passed down through generations."
  },
  {
    id: 4,
    name: "Le Petit Bistro",
    rating: 4.7,
    popularCuisines: ["French", "Wine", "Pastry"],
    location: "French Quarter, Chicago",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    coverPhoto: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop",
    description: "Step into a charming Parisian-style bistro where classic French cuisine meets contemporary flair. Our seasonal menu features locally sourced ingredients prepared with traditional French techniques, complemented by an extensive wine selection."
  },
  {
    id: 5,
    name: "Taco Libre Mexican",
    rating: 4.5,
    popularCuisines: ["Mexican", "Tacos", "Margaritas"],
    location: "Mission District, San Francisco",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
    coverPhoto: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=400&fit=crop",
    description: "Vibrant Mexican flavors come alive in our colorful cantina. From street-style tacos to gourmet enchiladas, we use family recipes and the freshest ingredients. Don't miss our famous margaritas made with premium tequila and fresh lime."
  },
  {
    id: 6,
    name: "Ocean's Bounty Seafood",
    rating: 4.8,
    popularCuisines: ["Seafood", "Lobster", "Oysters"],
    location: "Waterfront, Seattle",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
    coverPhoto: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=400&fit=crop",
    description: "Fresh from the Pacific, our seafood restaurant offers the finest catch of the day. From succulent Dungeness crab to perfectly grilled salmon, every dish showcases the ocean's bounty. Enjoy panoramic waterfront views while dining."
  }
];