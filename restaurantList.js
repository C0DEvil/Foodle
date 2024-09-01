import { useEffect, useState } from "react";
import FoodCard from "./foodCard.js";
import largeDataObject from "./swiggyData.js";
import MiddleShimmer from "./middleShimmer.js";
import { Link } from "react-router-dom";
import useSwiggyData from "./scrapedData.js";

const RestaurantList = ({ searchResults }) => {
  const [, , json] = useSwiggyData();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulating a delay for demonstration purposes
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);
  return loading ? (
    <MiddleShimmer />
  ) : (
    <div className="restaurantListOuter">
      <h2>{json?.data?.cards[2]?.card?.card?.title}</h2>
      <div className="restaurantList">
        {json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants?.length !== 0 ? (
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
            (item) => {
              return (
                <Link key={item.info.id} to={`/restaurant/${item.info.id}`}>
                  <FoodCard foodCardData={item} />
                </Link>
              );
            }
          )
        ) : (
          <p style={{ margin: "0 auto" }}>
            Sorry, but nothing seems to be matching your query
          </p>
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
