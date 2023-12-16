import { useEffect, useRef, useState } from "react";
import largeDataObject from "./swiggyData.js";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import {TOP_CAROUSEL_IMG} from "./constants.js"
import PacmanLoader from "react-spinners/PacmanLoader";

const carouselData=largeDataObject.data.cards[0].card.card.imageGridCards.info;


const TopCarousel=()=>{
    const refOne=useRef();
    const [scroller1,setscroller1]=useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      // Simulating a delay for demonstration purposes
      const timeout = setTimeout(() => setLoading(false), 2000);
  
      return () => clearTimeout(timeout);
    }, []);
    
 return loading?(<div id="topCarouselLoader"><PacmanLoader color="#F9BF45" className="loaderSpinner"/><p style={{
  fontFamily:'"Basis Grotesque Pro", Arial, sans-serif',
  fontWeight:'700',fontSize:'1.5rem',color:'#F9BF45'}}>Hungry? We're on it! Just a moment, your cravings are getting prepared</p></div>) :(
    <div id='carouselCont'>
     <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <h2>{largeDataObject.data.cards[0].card.card.header.title}</h2>
      <div style={{display:'flex'}} className="horizScrollOuter">
      <HiOutlineArrowSmLeft style={{borderRadius:'50%',margin:'10px'}} onClick={()=>{
        const newScroll = Math.max(0,scroller1 - 630);
        setscroller1(newScroll);
        if(refOne.current) refOne.current.scrollLeft = newScroll;
      }} className="horizScroll"/>
      <HiOutlineArrowSmRight style={{borderRadius:'50%',margin:'10px'}} onClick={()=>{
        console.log(refOne.current);
        const newScroll = Math.min(refOne.current.scrollLeftMax,scroller1 + 630);
        setscroller1(newScroll);
        if(refOne.current)refOne.current.scrollLeft = newScroll;
      }} className="horizScroll"/>
      </div>
     </div>
     <div id='carousel' ref={refOne} scrollLeft={scroller1}>
        {
            carouselData.map((item)=>{
                return(
                    <img src={TOP_CAROUSEL_IMG+item.imageId} key={item.id} className='carouselImg'/>
                );
            })
        }
     </div>
    </div>
 );
};

export default TopCarousel;