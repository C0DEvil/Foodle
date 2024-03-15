import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import OrderItems from "./orderItems";

const DropItDown = ({ itum }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        cursor: "pointer",
        borderTop: "1px  solid #ccc",
        borderBottom: "1px  solid #ccc",
        width: "740px",
        transition: "background-color 0.3s ease",
        backgroundColor: isOpen ? "#e0e0e0" : "white",
      }}
      // Assuming each category has a unique ID
      onClick={handleToggle}
    >
      <div
        style={{
          margin: 0,
          fontFamily: "ProximaNova, arial, Helvetica Neue, sans-serif",
          fontSize: "14px",
          textDecoration: "rgb(40, 44, 63)",
          lineHeight: "19px",
        }}
      >
        {itum.title}
        {itum.itemCards && "(" + itum.itemCards.length + ")"}
      </div>
      <div
        style={{
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          zIndex: "2",
        }}
      >
        {!itum.categories && <IoIosArrowDown />}
      </div>
      {isOpen &&
        itum.itemCards.map((cuisine, cind) => {
          return <OrderItems cuisine={cuisine} />;
        })}
    </div>
  );
};

export default React.memo(DropItDown);
