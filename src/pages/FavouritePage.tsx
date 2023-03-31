import React, { useContext } from "react";
import FavRestaurantCard from "../components/FavRestaurantCard";
import { useFavouriteRestaurant } from "../context/FavouriteContext";

export default function FavouritePage() {
  const { favRestaurants } = useFavouriteRestaurant();

  return (
    <div className="pt-40 grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3 justify-items-center">
      {favRestaurants.map((restaurant) => (
        <FavRestaurantCard key={restaurant.id} {...restaurant} />
      ))}
    </div>
  );
}
