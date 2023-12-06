import largeDataObject from "./swiggyData.js";

const carousel2Data=largeDataObject.data.cards[1].card.card.imageGridCards.info;

const MiddleCarousel=()=>{
    return (
        <div id='carouselCont'>
         <h2>What's on your mind?</h2>
         <div id='carousel2'>
            {
                carousel2Data.map((item)=>{
                    return(
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/"+item.imageId} id={item.id} className='carousel2Img'/>
                    );
                })
            }
         </div>
        </div>
     );
};

export default MiddleCarousel