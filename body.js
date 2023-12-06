import React from 'react'
import TopCarousel from './topCarousel'
import MiddleCarousel from './middleCarousel'

const Body = () => {
  return (
    <div className="body">
      <TopCarousel/>
      <hr></hr>
      <MiddleCarousel/>
      <hr></hr>

    </div>
  )
}

export default Body
