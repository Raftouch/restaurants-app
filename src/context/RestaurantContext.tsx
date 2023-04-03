import { createContext } from "react";
import { Restaurant } from "../models/Restaurant";

type RestaurantContextType = {
    restaurants: Restaurant[];
}

export const RestaurantContext = createContext({} as RestaurantContextType)