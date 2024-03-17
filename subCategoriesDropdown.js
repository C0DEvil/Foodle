import React, { useState } from "react";
import DropItDown from "./dropItDown";

const SubcategoriesDropdown = ({ item, veg }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        margin: "10px 0",
      }}
    >
      {item?.card?.card?.categories?.map((itum) => (
        <DropItDown itum={itum} key={itum.id} veg1={veg} />
      ))}
    </div>
  );
};

export default SubcategoriesDropdown;
