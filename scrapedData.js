import { useState, useEffect } from "react";
import { SWIGGY_API } from "./constants.js";

const useSwiggyData = () => {
  const [dat, setDat] = useState(null);
  const [json, setJson] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(SWIGGY_API);
      const json1 = await response.json();
      setJson(json1);
      // {
      //   console.log(json1);
      // }
      setDat(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };

    fetchData();
  }, []);

  return [dat, setDat, json];
};

export default useSwiggyData;
