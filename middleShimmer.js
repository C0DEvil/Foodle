import React from 'react'

const MiddleShimmer = () => {
  const onesArray = Array(5).fill(1);
  return (
    <div className="carousel21">
    {
        onesArray.map((item,index)=>{
            return (
                <div className="midCarouselShim" key={index}></div>
            );
        })
    }
    </div>
  )
}

export default MiddleShimmer;
