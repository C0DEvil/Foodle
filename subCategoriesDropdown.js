import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import DropItDown from "./dropItDown";

const SubcategoriesDropdown = ({ item }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
      }}
    >
      {item?.card?.card?.categories?.map((itum) => (
        <DropItDown itum={itum} key={itum.id} />
      ))}
    </div>
  );
};

export default SubcategoriesDropdown;
