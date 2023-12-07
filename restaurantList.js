import FoodCard from "./foodCard.js";
import largeDataObject from "./swiggyData.js";

const restaurant=largeDataObject.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;

const RestaurantList=()=>{
  return(
    <div className="restaurantListOuter">
        <h2>{largeDataObject.data.cards[3].card.card.title}</h2>
          <div className="restaurantList">
            {restaurant.map(item =>{
                return <FoodCard key={item.info.id} foodCardData={item} />
            })}
          </div>
    </div>
  );
}

export default RestaurantList;