import largeDataObject from "./swiggyData.js";

const carouselData=largeDataObject.data.cards[0].card.card.imageGridCards.info;

const TopCarousel=()=>{
 return (
    <div id='carouselCont'>
     <h2>Best Offers For You</h2>
     <div id='carousel'>
        {
            carouselData.map((item)=>{
                return(
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/"+item.imageId} id={item.id} className='carouselImg'/>
                );
            })
        }
     </div>
    </div>
 );
};

export default TopCarousel;