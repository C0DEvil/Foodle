import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import RipplesComponent from "./ripplesComponent";

const placeholders=["Discover delicious dishes here...","Search for your cravings... 🍔🍕🌮","Type to find your next flavorful adventure!","Craving something specific? Search it here!","Explore a world of taste with Foodel...","Hungry? Search for your favorite meals!","Looking for a tasty delight? Start typing...","Your cravings, your search! What's on the menu?","Find food that fuels your mood...","Satisfy your hunger, one search at a time!","Search, savour, repeat! What's on your plate today?"];

const SearchDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggleShutter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shutter-container">
      <div
        className={`content ${isOpen ? "content-open" : ""}`}
        style={{
          padding: "0",
          borderBottom: "10px solid #F9BF45",
          boxShadow: "0 3px 15px 3px #333131 ",
        }}
      >
        <RipplesComponent placeholders={placeholders}/>
      </div>
      <div
        onClick={toggleShutter}
        className="toggle-button"
        style={{
          backgroundColor: "#F9BF45",
          width: "80px",
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
        }}
      >
        {!isOpen ? (
          <FiSearch
            style={{ marginLeft: "30px", scale: "1.6", color: "#FF6347" }}
          />
        ) : (
          <MdKeyboardDoubleArrowUp
            style={{ marginLeft: "30px", scale: "1.9", color: "#FF6347" }}
          />
        )}
      </div>
    </div>
  );
};

export default SearchDropdown;
