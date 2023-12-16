import { useEffect, useState } from "react";
import FoodCard from "./foodCard.js";
import largeDataObject from "./swiggyData.js";
import MiddleShimmer from "./middleShimmer.js";

const restaurant=largeDataObject.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;

const RestaurantList=()=>{
  const [loading, setLoading] = useState(true);
    useEffect(() => {
      // Simulating a delay for demonstration purposes
      const timeout = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timeout);
    }, []);
    return loading?<MiddleShimmer/>:(
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