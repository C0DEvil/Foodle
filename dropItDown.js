import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import OrderItems from "./orderItems";

const DropItDown = ({ itum, veg1 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [arr1, setArr1] = useState(itum?.itemCards);

  useEffect(() => {
    if (veg1) {
      const arr = itum?.itemCards?.filter(
        (itemm) => itemm?.card?.info?.isVeg === 1
      );
      setArr1(arr);
    } else {
      setArr1(itum.itemCards);
    }
  }, [veg1]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
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
        }}
        // Assuming each category has a unique ID
        onClick={handleToggle}
      >
        <div
          style={{
            margin: "10px 0",
            fontFamily: "ProximaNova, arial, Helvetica Neue, sans-serif",
            fontWeight: "500",
            fontSize: "14px",
            textDecoration: "rgb(40, 44, 63)",
            lineHeight: "19px",
          }}
        >
          {itum.title}
          {itum.itemCards && "(" + arr1.length + ")"}
        </div>
        {console.log(arr1)}
        <div
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            zIndex: "2",
          }}
        >
          {!itum.categories && <IoIosArrowDown />}
        </div>
      </div>
      {isOpen &&
        arr1.map((cuisine) => {
          return (
            <div>
              <OrderItems
                cuisine={cuisine}
                key={cuisine?.card?.info?.id}
                veg1={veg1}
              />
              <hr></hr>
            </div>
          );
        })}
    </div>
  );
};

export default React.memo(DropItDown);
