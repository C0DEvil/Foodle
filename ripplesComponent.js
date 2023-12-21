import React, { useEffect, useState } from 'react';
import companyLogo from "./resources/Foodel.png"; 
import $ from 'jquery';
import 'jquery.ripples';
import dishBG from './resources/sumeet-b-e2b0-q7gjgg-unsplash.jpg'
import largeDataObject from "./swiggyData.js";

const RipplesComponent = ({placeholders,setFilteredResults,setIsOpen}) => {
  useEffect(() => {
    // Initialize Ripples effect when the component mounts
    $(".search").ripples({
      resolution: 256,
      perturbance: 0.01,
    });

    // Cleanup when the component unmounts
    return () => {
      $(".search").ripples('destroy');
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount
  
  const [searchResults,setSearchResults]=useState(largeDataObject.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
  const [search,setSearch]=useState("");
  const handleSearch=()=>{
    setFilteredResults(searchResults.filter(item=>item.info.name.toLowerCase().includes(search.toLowerCase())));
    setIsOpen(false);
    setSearch("");
  }

  return (
    <div className="full-landing-image">
      <div style={{ height: "500px", width: "100%" ,background:`url(${dishBG})`}} className="search">
          <img src={companyLogo} style={{width:'330px',margin:'50px'}}/>
          <input
            type="search"
            style={{ width: "30%", height: "60px", borderRadius: "40px",marginBottom:'30px',padding:'auto',textAlign:'center',fontSize:'15px'}}
            placeholder={`${placeholders[Math.floor(Math.random()*11)]}`}
            className='searchInput' 
            value={search}
            onChange={(e)=>{
              setSearch(e.target.value);
            }}        
          ></input>
          <button style={{width:'10%',height:'40px',borderRadius:'15px',backgroundColor:'green',color:"white"}} onClick={handleSearch}> Foodel Search</button>
        </div>
    </div>
  );
};


export default RipplesComponent;
