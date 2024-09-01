import React from 'react'
import TopCarousel from './topCarousel.js'
import MiddleCarousel from './middleCarousel.js'
import BottomCarousel from './bottomCarousel.js'
import RestaurantList from './restaurantList.js'


const Body = ({searchResults}) => {
  return (
    <div className="body">
      <TopCarousel/>
      <hr></hr>
      <MiddleCarousel/>
      <hr></hr>
      <BottomCarousel/>
      <hr></hr>
      <RestaurantList searchResults={searchResults}/>
    </div>
  )
}

export default Body
