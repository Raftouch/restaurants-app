import React, { useContext } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { RestaurantContext } from "../context/RestaurantContext";


export default function HomePage() {
  const {restaurants} = useContext(RestaurantContext)

  return (
    <div className='pt-40 grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3 justify-items-center'>
      {restaurants.map((restaurant) => (
        <RestaurantCard restaurant={restaurant} key={restaurant.id} />
      ))}
    </div>
  );
}
