import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SubcategoriesDropdown from "./subCategoriesDropdown";

const DropdownMenu = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isisOpen, setIsisOpen] = useState(false);
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setIsOpen(false); // Close the dropdown when an option is selected
  };

  const getRandomText = () => {
    const texts = [
      "This is a random text paragraph.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "React is a JavaScript library for building user interfaces.",
      "Random text for the dropdown menu.",
    ];
    return texts[Math.floor(Math.random() * texts.length)];
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
          border: "1px solid #ccc",
          borderRadius: "5px",
          width: "100%",
          transition: "background-color 0.3s ease",
          backgroundColor: isOpen ? "#e0e0e0" : "white",
        }}
        onClick={!item?.card?.card?.categories ? handleToggle : undefined}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h3 style={{ margin: 0 }}>
            {item.card.card.title}
            {item.card.card.itemCards &&
              "(" + item?.card?.card?.itemCards?.length + ")"}
          </h3>
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
            <SubcategoriesDropdown item={item} />
          </div>
        )}
      </div>

      {/* Dropdown content */}
      {isOpen && (
        <div style={{ marginTop: "10px" }}>
          {/* Dropdown menu */}
          <label htmlFor="dropdown">Select an option:</label>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleSelectChange}
            style={{ width: "100%", padding: "5px" }}
          >
            <option value="">Select...</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Display the selected option */}
          {selectedOption && <p>You selected: {selectedOption}</p>}

          {/* Display random text paragraph */}
          <p>{getRandomText()}</p>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
