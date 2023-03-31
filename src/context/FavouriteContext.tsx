import { createContext, ReactNode, useContext, useState } from "react";
import { restaurants } from "../data/restaurants";
import FavouritePage from "../pages/FavouritePage";

type FavouriteRestaurantProviderProps = {
  children: ReactNode;
};

type FavRestaurant = {
  id: number;
  quantity: number;
};

type FavouriteRestaurantContext = {
  favouriteRestaurantQuantity: number;
//   favouriteRestaurants: FavRestaurant[];
  getItemQuantity: (id: number) => number;
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
};

const FavouriteRestaurantContext = createContext(
  {} as FavouriteRestaurantContext
);

export function useFavouriteRestaurant() {
  return useContext(FavouriteRestaurantContext);
}

export function FavouriteRestaurantProvider({
  children,
}: FavouriteRestaurantProviderProps) {
  const [favRestaurants, setFavRestaurants] = useState<FavRestaurant[]>([]);

  const favouriteRestaurantQuantity = favRestaurants.reduce(
    (quantity, restaurant) => restaurant.quantity + quantity,
    0
  );

  function getItemQuantity(id: number) {
    return (
      favRestaurants.find((restaurant) => restaurant.id === id)?.quantity || 0
    );
  }

  function addItem(id: number) {
    setFavRestaurants((currentResraurants) => {
      if (
        currentResraurants.find((restaurant) => restaurant.id === id) == null
      ) {
        return [...currentResraurants, { id, quantity: 1 }];
      } else {
        return currentResraurants;
      }
    });
  }

  function removeItem(id: number) {
    setFavRestaurants((currentRestaurants) => {
      return currentRestaurants.filter((restaurant) => restaurant.id !== id);
    });
  }

  return (
    <FavouriteRestaurantContext.Provider
      value={{
        favouriteRestaurantQuantity,
        getItemQuantity,
        addItem,
        removeItem,
      }}
    >
      {children}
      <FavouritePage />
    </FavouriteRestaurantContext.Provider>
  );
}
