import { createContext, ReactNode, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
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
  favRestaurants: FavRestaurant[];
  getItemQuantity: (id: number) => number;
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
  modal: boolean
    open: () => void
    close: () => void
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
  const [favRestaurants, setFavRestaurants] = useLocalStorage<FavRestaurant[]>("favourite-restaurants",[]);
//   const [favRestaurants, setFavRestaurants] = useState<FavRestaurant[]>([]);

  const favouriteRestaurantQuantity = favRestaurants.reduce(
    (quantity, restaurant) => restaurant.quantity + quantity,
    0
  );

  const [modal, setModal] = useState(false)
  const open = () => setModal(true)
  const close = () => setModal(false)

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
        modal,
        open,
        close,
        favRestaurants,
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
