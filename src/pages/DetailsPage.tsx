import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { RestaurantContext } from '../context/RestaurantContext';
import { Restaurant } from '../models/Restaurant';

export default function DetailsPage() {
    const { id } = useParams();
    const {restaurants} = useContext(RestaurantContext)

    const [restaurant, setRestaurant] = useState<Restaurant>();
    const getRestaurant = () => {
        const restaurant = restaurants.find(restaurant => id === restaurant.id.toString())
        setRestaurant(restaurant)
    }

    useEffect(() => {
        getRestaurant()
    }, [restaurants]);

    console.log(restaurant)
    if(restaurant==null) return null;

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description_long}</p>
    </div>
  )
}
