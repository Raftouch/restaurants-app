import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFavouriteRestaurant } from "../context/FavouriteContext";
import { Restaurant } from "../models/Restaurant";
import Modal from "./Modal";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const { getItemQuantity, addItem, removeItem } = useFavouriteRestaurant();
  const quantity = getItemQuantity(restaurant.id);

  const [modal, setModal] = useState(false);

  return (
    <div className="border rounded w-[350px] flex flex-col gap-2 p-8 font-serif">
      <Link to={`/details/${restaurant.id}`}>
        <img
          className="w-full h-[350px]"
          src={restaurant.img}
          alt={restaurant.name}
        />
        <h1 className="font-bold mt-2">{restaurant.name}</h1>
        <p>{restaurant.address}</p>
        <p>{restaurant.description_short}</p>
      </Link>
      <div className="mt-auto border rounded text-center">
        {quantity === 0 ? (
          <button
            className="bg-green-300 w-full"
            onClick={() => addItem(restaurant.id)}
          >
            Add to Favourites
          </button>
        ) : (
          <button className="bg-red-300 w-full" onClick={() => setModal(true)}>
            Remove from Favourites
          </button>
        )}
        {modal && (
          <Modal
            onClose={() => setModal(false)}
            onDelete={() => removeItem(restaurant.id)}
          />
        )}
      </div>
    </div>
  );
}
