import { createContext } from "react";
import { Restaurant } from "../models/Restaurant";

type RestaurantContext = {
    restaurants: Restaurant[];
}

export const RestaurantContext = createContext({} as RestaurantContext)