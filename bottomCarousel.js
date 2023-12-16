import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import FoodCard from "./foodCard.js";
import largeDataObject from "./swiggyData.js";
import { useEffect, useRef, useState } from "react";
import MiddleShimmer from "./middleShimmer.js";

const bottomCarouselData=largeDataObject.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;

const BottomCarousel=()=>{
  const [scroller2,setScroller2]=useState(0);
  const refTwo=useRef();
  const [loading, setLoading] = useState(true);
    useEffect(() => {
      // Simulating a delay for demonstration purposes
      const timeout = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timeout);
    }, []);
    return loading?<MiddleShimmer/>:(
        <div id='bottomCarouselOuter'>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <h2>{largeDataObject.data.cards[2].card.card.header.title}</h2>
            <div style={{display:'flex'}} className="horizScrollOuter">
              <HiOutlineArrowSmLeft style={{borderRadius:'50%',margin:'10px'}} onClick={()=>{
                const newScroll2 = Math.max(0,scroller2 - 700);
                setScroller2(newScroll2);
                if(refTwo.current)refTwo.current.scrollLeft = newScroll2;}}
              className="horizScroll"/>
              <HiOutlineArrowSmRight style={{borderRadius:'50%',margin:'10px'}} onClick={()=>{
                console.log(refTwo.current);
                const newScroll2 = Math.min(refTwo.current.scrollLeftMax,scroller2 + 700);
                setScroller2(newScroll2);
                if(refTwo.current)refTwo.current.scrollLeft = newScroll2;}}
              className="horizScroll"/>
            </div>
          </div>
          <div className="bottomCarousel" ref={refTwo}>
            {bottomCarouselData.map(item =>{
                return <FoodCard key={item.info.id} foodCardData={item} />
            })}
          </div>
        </div>
    );
}

export default BottomCarousel;