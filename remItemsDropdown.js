import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SubcategoriesDropdown from "./subCategoriesDropdown";
import OrderItems from "./orderItems";

const DropdownMenu = ({ item, veg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [arr1, setArr1] = useState(item?.card?.card?.itemCards);

  useEffect(() => {
    if (veg) {
      const arr = item?.card?.card?.itemCards?.filter(
        (itemm) => itemm?.card?.info?.itemAttribute?.vegClassifier === "VEG"
      );
      setArr1(arr);
    } else {
      setArr1(item?.card?.card?.itemCards);
    }
  }, [veg]);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ width: "95%", margin: "10px", borderStyle: "none" }}>
      {/* Dropdown header with toggle arrow */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "start",
          cursor: "pointer",
          padding: "10px",
          width: "100%",
          transition: "background-color 0.3s ease",
          borderTop: "8px solid #f5f2f1",
        }}
        onClick={!item?.card?.card?.categories ? handleToggle : undefined}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              margin: "20px 0",
              fontFamily: "ProximaNova, arial, Helvetica Neue, sans-serif",
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            {item.card.card.title}
            {item.card.card.itemCards && "(" + arr1.length + ")"}
          </div>
          <div
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              zIndex: "2",
            }}
          >
            {!item?.card?.card?.categories && <IoIosArrowDown />}
          </div>
        </div>
        {item?.card?.card?.categories && (
          <div>
            <SubcategoriesDropdown item={item} veg={veg} />
          </div>
        )}
      </div>

      {/* Dropdown content */}
      {isOpen &&
        arr1.map((cuisine) => {
          return (
            <div>
              <OrderItems
                cuisine={cuisine}
                key={cuisine?.card?.info?.id}
                veg1={veg}
              />
              <hr></hr>
            </div>
          );
        })}
    </div>
  );
};

export default DropdownMenu;
