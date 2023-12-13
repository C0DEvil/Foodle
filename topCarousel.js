import { useRef, useState } from "react";
import largeDataObject from "./swiggyData.js";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const carouselData=largeDataObject.data.cards[0].card.card.imageGridCards.info;


const TopCarousel=()=>{
    const refOne=useRef();
    const [scroller1,setscroller1]=useState(0);
    
 return (
    <div id='carouselCont'>
     <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <h2>{largeDataObject.data.cards[0].card.card.header.title}</h2>
      <div style={{display:'flex'}} className="horizScrollOuter">
      <HiOutlineArrowSmLeft style={{borderRadius:'50%',margin:'10px'}} onClick={()=>{
        const newScroll = Math.max(0,scroller1 - 450);
        setscroller1(newScroll);
        if(refOne.current) refOne.current.scrollLeft = newScroll;
      }} className="horizScroll"/>
      <HiOutlineArrowSmRight style={{borderRadius:'50%',margin:'10px'}} onClick={()=>{
        console.log(refOne.current);
        const newScroll = Math.min(refOne.current.scrollLeftMax,scroller1 + 450);
        setscroller1(newScroll);
        if(refOne.current)refOne.current.scrollLeft = newScroll;
      }} className="horizScroll"/>
      </div>
     </div>
     <div id='carousel' ref={refOne} scrollLeft={scroller1}>
        {
            carouselData.map((item)=>{
                return(
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/"+item.imageId} key={item.id} className='carouselImg'/>
                );
            })
        }
     </div>
    </div>
 );
};

export default TopCarousel;