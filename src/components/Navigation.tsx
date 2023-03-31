import React from "react";
import { Link } from "react-router-dom";
import { useFavouriteRestaurant } from "../context/FavouriteContext";

export default function Navigation() {
  const {favouriteRestaurantQuantity} = useFavouriteRestaurant()

  return (
    <div className="font-serif fixed h-[100px] w-full bg-slate-600 text-white flex justify-between items-center px-5">
      <span className="max-w-[200px]">Restaurants App</span>
      <span className="flex">
        <Link to="/" className="mr-5 hover:text-slate-500">
          Home
        </Link>
        <Link to="/favourites" className="hover:text-slate-500">
          <span className="relative">Favourites</span> 
          {favouriteRestaurantQuantity > 0 && (
            <span className="text-sm absolute top-16 right-10 border rounded-full px-2">{favouriteRestaurantQuantity}</span>
          )}
        </Link>
      </span>
    </div>
  );
}
