import React, { useContext, useState } from "react";
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
  const quantity = getItemQuantity(restaurant.id);

  return (
    <div className="font-serif pt-40 flex gap-10 justify-center flex-wrap">
      <img
        className="w-[420px] h-[550px]"
        src={restaurant.img}
        alt={restaurant.name}
      />
      <div className="w-[420px] h-[550px] flex flex-col justify-center border p-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold uppercase text-center">{restaurant.name}</h1>
          <p>{restaurant.description_long}</p>
          <h2 className="font-bold text-center">Menu</h2>
          <div>
            <h3 className="italic">Entrées</h3>
            <div className="ml-8">
              {restaurant.menu.entrees.map((entree) => (
                <li>{entree}</li>
              ))}
            </div>
            <h3 className="italic">Plats</h3>
            <div className="ml-8">
              {restaurant.menu.dishes.map((dish) => (
                <li>{dish}</li>
              ))}
            </div>
            <h3 className="italic">Desserts</h3>
            <div className="ml-8">
              {restaurant.menu.desserts.map((dessert) => (
                <li>{dessert}</li>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 border rounded text-center">
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
