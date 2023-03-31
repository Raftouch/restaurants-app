import React from "react";
import { useFavouriteRestaurant } from "../context/FavouriteContext";
import { restaurants } from "../data/restaurants";

interface FavRestaurantCardProps {
  id: number;
  quantity: number;
}

export default function FavRestaurantCard({
  id,
  quantity,
}: FavRestaurantCardProps) {
  const { removeItem } = useFavouriteRestaurant();
  const favRestaurant = restaurants.find((restaurant) => restaurant.id === id);
  if (favRestaurant == null) return null;

  return (
    <div className="border rounded w-[350px] h-[400px] flex flex-col gap-2 p-8 font-serif">
      {/* {favRestaurant.img} */}
      <h1>{favRestaurant.name}</h1>
      <p>{favRestaurant.description_short}</p>
    </div>
  );
}
