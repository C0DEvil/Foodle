import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import largeDataObject from "./swiggyData.js";
import { useRef, useState } from "react";

const carousel2Data=largeDataObject.data.cards[1].card.card.imageGridCards.info;

const MiddleCarousel=()=>{
    const [scroller3,setScroller3]=useState(0);
    const refThree=useRef();
    return (
        <div id='carouselCont'>
         <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h2>{largeDataObject.data.cards[1].card.card.header.title}</h2>
           <div style={{display:'flex'}} className="horizScrollOuter">
            <HiOutlineArrowSmLeft style={{borderRadius:'50%',margin:'10px'}} onClick={()=>{
                const newScroll3 = Math.max(0,scroller3 - 700);
                setScroller3(newScroll3);
                if(refThree.current)refThree.current.scrollLeft = newScroll3;}} className="horizScroll"/>
            <HiOutlineArrowSmRight style={{borderRadius:'50%',margin:'10px'}} onClick={()=>{
                const newScroll3 = Math.min(refThree.current.scrollLeftMax,scroller3 + 700);
                setScroller3(newScroll3);
                if(refThree.current)refThree.current.scrollLeft = newScroll3;}} className="horizScroll"/>
           </div>
         </div>
         <div id='carousel2' ref={refThree}>
            {
                carousel2Data.map((item)=>{
                    return(
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/"+item.imageId} key={item.id} className='carousel2Img'/>
                    );
                })
            }
         </div>
        </div>
     );
};

export default MiddleCarousel