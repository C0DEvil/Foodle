import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      className={`slider ${isToggled ? "toggled" : ""}`}
      onClick={handleToggle}
    >
      <div className={`slider-ring ${isToggled ? "toggled-ring" : ""}`}>
        {isToggled && <div className="green-circle" />}
      </div>
    </div>
  );
};

export default ToggleSwitch;
