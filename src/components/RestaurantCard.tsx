import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useFavouriteRestaurant } from "../context/FavouriteContext";
import { Restaurant } from "../models/Restaurant";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const {getItemQuantity, addItem, removeItem} = useFavouriteRestaurant()
  const quantity = getItemQuantity(restaurant.id)

  return (
    <div className="border rounded w-[350px] h-[400px] flex flex-col gap-2 p-8 font-serif">
      <Link to={`/details/${restaurant.id}`}>
        {/* <img src={restaurant.img} alt=''/> */}
        <h1>{restaurant.name}</h1>
        <p>{restaurant.address}</p>
        <p>{restaurant.description_short}</p>
      </Link>
      <div className="mt-auto border rounded text-center">
        {quantity === 0 ? (
          <button className="bg-green-300 w-full" onClick={() => addItem(restaurant.id)}>Add to Favourites</button>
        ) : (
          <button className="bg-red-300 w-full" onClick={() => removeItem(restaurant.id)}>Remove from Favourites</button>
        )}
      </div>
    </div>
  );
}
