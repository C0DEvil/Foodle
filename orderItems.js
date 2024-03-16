import React from "react";
import { DROP_IT_DOWN } from "./constants";
import veg from "./resources/veg-icon.webp";
import nonVeg from "./resources/non-veg-icon.webp";

const OrderItems = ({ cuisine }) => {
  return (
    <div
      className="cuisine-card"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px 0",
      }}
    >
      <div className="cuisine-details">
        <img
          src={`${
            cuisine?.card?.info?.itemAttribute?.vegClassifier == "NONVEG"
              ? nonVeg
              : veg
          }`}
          alt="NoImg"
          style={{ width: "15px" }}
        />
        <div
          style={{
            fontFamily: "ProximaNova, arial, Helvetica Neue, sans-serif",
            fontSize: "17.08px",
            fontWeight: "500",
          }}
        >
          {cuisine?.card?.info?.name}
        </div>
        <p style={{ fontSize: "16px" }}>
          ₹
          {cuisine?.card?.info?.price / 100 ||
            cuisine?.card?.info?.defaultPrice / 100}
        </p>
        <p
          style={{
            fontFamily: "ProximaNova, arial, Helvetica Neue, sans-serif",
            fontSize: "13.5px",
            fontWeight: "500",
            lineHeight: "18.2px",
            color: "rgba(152, 150, 151, 0.8)",
          }}
        >
          {cuisine?.card?.info?.description}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={DROP_IT_DOWN + cuisine?.card?.info?.imageId}
          alt={cuisine?.info?.name}
          style={{ width: "200px", borderRadius: "10px" }}
        />
        <button
          style={{
            height: "35px",
            position: "relative",
            top: "-20px",
            width: "95px",
            color: "#60B246",
            backgroundColor: "#fff",
            fontFamily: "ProximaNova, arial, Helvetica Neue, sans-serif",
            fontWeight: "600",
            borderRadius: "5px",
            border: "1px solid rgba(152, 150, 151, 0.8)",
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default OrderItems;
