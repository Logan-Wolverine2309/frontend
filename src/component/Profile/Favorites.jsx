import React from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'
const Favorites = () => {
  return (
    <div>
      <h1 className="py-5 text-xl font-semibold text-center">My Favorites</h1>

      <div className="flex flex-wrap justify-center">

        <RestaurantCard/>
      </div>
    </div>
  )
}
  

export default Favorites
