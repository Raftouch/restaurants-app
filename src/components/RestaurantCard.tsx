import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { MyRestaurant } from "../models/MyRestaurant";
import { restaurants } from "../data/restaurants";
import { Restaurant } from "../models/Restaurant";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  // const {restaurants} = useContext(RestaurantContext)
// export default function RestaurantCard() {
//   const restaurantDetails = useContext(RestaurantsData)

  return (
      <Link to={`/details/${restaurant.id}`}>
        <div className="border rounded w-[300px] h-[400px] flex flex-col gap-2 p-8 font-serif">
          {/* <img src={restaurant.img} alt=''/> */}
          <h1>{restaurant.name}</h1>
          <p>{restaurant.address}</p>
          <p>{restaurant.description_short}</p>
          {/* <p>{restaurantDetails}</p> */}
        </div>
      </Link>
  );
}
