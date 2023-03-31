import React, { useContext } from 'react'
import FavRestaurantCard from '../components/FavRestaurantCard'
import { useFavouriteRestaurant } from '../context/FavouriteContext'
import { RestaurantContext } from '../context/RestaurantContext'

export default function FavouritePage() {
  const {restaurants} = useContext(RestaurantContext)
  const {favRestaurants} = useFavouriteRestaurant()

  return (
    <>
      <h1 className="pt-40 text-center">My favourite restaurants</h1>
      <div className="pt-20 grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3 justify-items-center">
          {favRestaurants.map(restaurant => (
            <FavRestaurantCard key={restaurant.id} {...restaurant} />
          ))}
      </div>
    </>
  )
}
