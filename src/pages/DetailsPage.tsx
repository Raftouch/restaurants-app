import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { RestaurantContext } from '../context/RestaurantContext';
import { Restaurant } from '../models/Restaurant';

export default function DetailsPage() {
    const { id } = useParams();
    const { restaurants } = useContext(RestaurantContext);
  
    const restaurant = restaurants.find(
      (restaurant) => id === restaurant.id.toString()
    );
  
    if (restaurant == null) return null;
  
    return (
      <div className="pt-40 flex flex-col">
        <h1>{restaurant.name}</h1>
        <p>{restaurant.description_long}</p>
      </div>
    );
  };
