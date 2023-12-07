import FoodCard from "./foodCard.js";
import largeDataObject from "./swiggyData.js";

const bottomCarouselData=largeDataObject.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;

const BottomCarousel=()=>{
    return (
        <div id='bottomCarouselOuter'>
          <h2>{largeDataObject.data.cards[2].card.card.header.title}</h2>
          <div className="bottomCarousel">
            {bottomCarouselData.map(item =>{
                return <FoodCard key={item.info.id} foodCardData={item} />
            })}
          </div>
        </div>
    );
}

export default BottomCarousel;