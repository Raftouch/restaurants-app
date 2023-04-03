import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFavouriteRestaurant } from "../context/FavouriteContext";
import { restaurants } from "../data/restaurants";
import Modal from "./Modal";

interface FavRestaurantCardProps {
  id: number;
  quantity: number;
}

export default function FavRestaurantCard({
  id,
  quantity,
}: FavRestaurantCardProps) {
  const { addItem, removeItem } = useFavouriteRestaurant();
  const favRestaurant = restaurants.find((restaurant) => restaurant.id === id);
  if (favRestaurant == null) return null;

  const [modal, setModal] = useState(false);

  return (
    <div className="border rounded w-[350px] flex flex-col gap-2 p-8 font-serif">
      <Link to={`/details/${favRestaurant.id}`}>
        <div>
          <img
            className="w-full h-[350px]"
            src={favRestaurant.img}
            alt={favRestaurant.name}
          />
          <h1 className="font-bold mt-2">{favRestaurant.name}</h1>
          <p>{favRestaurant.address}</p>
          <p>{favRestaurant.description_short}</p>
        </div>
      </Link>
      <div className="mt-auto border rounded text-center">
        {quantity === 0 ? (
          <button
            className="bg-green-300 w-full"
            onClick={() => addItem(favRestaurant.id)}
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
            onDelete={() => removeItem(favRestaurant.id)}
          />
        )}
      </div>
    </div>
  );
}
