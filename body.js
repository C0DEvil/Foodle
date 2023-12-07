import React from 'react'
import TopCarousel from './topCarousel.js'
import MiddleCarousel from './middleCarousel.js'
import BottomCarousel from './bottomCarousel.js'
import RestaurantList from './restaurantList.js'

const Body = () => {
  return (
    <div className="body">
      <TopCarousel/>
      <hr></hr>
      <MiddleCarousel/>
      <hr></hr>
      <BottomCarousel/>
      <hr></hr>
      <RestaurantList/>
    </div>
  )
}

export default Body
