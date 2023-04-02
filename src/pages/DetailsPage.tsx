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
      <div className='font-serif pt-40 flex gap-10 justify-center flex-wrap'>
        <img className='w-[400px]' src={restaurant.img} alt=''/>
        <div className='w-[400px] text-center flex flex-col justify-center border'>
          <h1 className='font-bold uppercase'>{restaurant.name}</h1>
          <p className='m-8'>{restaurant.description_long}</p>
          <div>
            <h2 className='font-bold'>Menu</h2>
            <p>{restaurant.menu.entrees}</p>
            <p>{restaurant.menu.dishes}</p>
            <p>{restaurant.menu.desserts}</p>
          </div>
        </div>
      </div>
    );
  };
