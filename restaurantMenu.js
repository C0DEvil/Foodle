import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HOTEL_MENU_1,HOTEL_MENU_2 } from './constants';


const RestaurantMenu = () => {
    const {id}=useParams();
    const [resMenu,setResMenu]=useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const call = await fetch(HOTEL_MENU_1+id+HOTEL_MENU_2);
            const data = await call.json();
            setResMenu(data);
        };
        fetchData(); 
      },[]);

  return (
    <div>
        <h1>Hotel Menu</h1>
        {console.log(resMenu)}
    </div>
  )
}

export default RestaurantMenu;
