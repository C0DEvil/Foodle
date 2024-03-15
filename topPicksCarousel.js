import React from "react";
import { MENU_TOP_PICKS } from "./constants";

const TopPicksCarousel = ({ item }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={MENU_TOP_PICKS + item?.creativeId}
        style={{ scale: "0.6", margin: "0 -120px" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "0 20px",
          zIndex: "2",
        }}
      >
        {item?.dish?.info?.defaultPrice && (
          <p style={{ display: "inline", color: "white", marginTop: "-190px" }}>
            ₹{item?.dish?.info?.defaultPrice / 100}
          </p>
        )}
        <button
          style={{
            marginTop: "-200px",
            height: "35px",
            width: "95px",
            color: "#60B246",
            fontFamily: "ProximaNova, arial, Helvetica Neue, sans-serif",
            fontWeight: "600",
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TopPicksCarousel;
