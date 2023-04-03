import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import Modal from "../components/Modal";
import useLocalStorage from "../hooks/useLocalStorage";
import FavouritePage from "../pages/FavouritePage";

type FavouriteRestaurantProviderProps = {
  children: ReactNode;
};

type FavRestaurant = {
  id: number;
  quantity: number;
};

type FavouriteRestaurantContextType = {
  favouriteRestaurantQuantity: number;
  favRestaurants: FavRestaurant[];
  getItemQuantity: (id: number) => number;
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
  // modal: boolean;
  //   open: () => void
  //   close: () => void
};

const FavouriteRestaurantContext = createContext(
  {} as FavouriteRestaurantContextType
);

export function useFavouriteRestaurant() {
  return useContext(FavouriteRestaurantContext);
}

export function FavouriteRestaurantProvider({
  children
}: FavouriteRestaurantProviderProps) {
  const [favRestaurants, setFavRestaurants] = useLocalStorage<FavRestaurant[]>("favourite-restaurants",[]);
//   const [favRestaurants, setFavRestaurants] = useState<FavRestaurant[]>([]);

// const [modal, setModal] = useState
// const open = () => setModal(true)
// const close = () => setModal(false)

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
    setFavRestaurants((currentRestaurants) => {
      if (
        currentRestaurants.find((restaurant) => restaurant.id === id) == null
      ) {
        return [...currentRestaurants, { id, quantity: 1 }];
      } else {
        return currentRestaurants;
      }
    });
  }

  function removeItem(id: number) {
    setFavRestaurants((currentRestaurants) => {
      return currentRestaurants.filter((restaurant) => restaurant.id !== id);
    });
    // setModal(false)
  }

  return (
    <FavouriteRestaurantContext.Provider
      value={{
        // modal,
        // open,
        // close,
        favRestaurants,
        favouriteRestaurantQuantity,
        getItemQuantity,
        addItem,
        removeItem,
      }}
    >
      {children}
    </FavouriteRestaurantContext.Provider>
  );
}
