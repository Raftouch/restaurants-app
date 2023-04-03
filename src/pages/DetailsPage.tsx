import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../components/Modal";
import { useFavouriteRestaurant } from "../context/FavouriteContext";
import { RestaurantContext } from "../context/RestaurantContext";

export default function DetailsPage() {
  const { id } = useParams();
  const { restaurants } = useContext(RestaurantContext);
  
  const [modal, setModal] = useState(false);
  
  const restaurant = restaurants.find(
    (restaurant) => id === restaurant.id.toString()
    );
    if (restaurant == null) return null;

    const { getItemQuantity, addItem, removeItem } = useFavouriteRestaurant();
    const quantity = getItemQuantity(restaurant.id)

  return (
    <div className="font-serif pt-40 flex gap-10 justify-center flex-wrap">
      <img className="w-[400px]" src={restaurant.img} alt={restaurant.name} />
      <div className="w-[400px] text-center flex flex-col justify-center border p-8">
        <h1 className="font-bold uppercase">{restaurant.name}</h1>
        <p className="m-8">{restaurant.description_long}</p>
        <div>
          <h2 className="font-bold">Menu</h2>
          <p>{restaurant.menu.entrees}</p>
          <p>{restaurant.menu.dishes}</p>
          <p>{restaurant.menu.desserts}</p>
        </div>
        <div className="mt-auto border rounded text-center">
          {quantity === 0 ? (
            <button
              className="bg-green-300 w-full"
              onClick={() => addItem(restaurant.id)}
            >
              Add to Favourites
            </button>
          ) : (
            <button
              className="bg-red-300 w-full"
              onClick={() => setModal(true)}
            >
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
    </div>
  );
}
