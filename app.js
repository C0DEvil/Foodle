import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./header";
import Body from "./body";
import SearchDropdown from "./searchDropdown";

const Page = () => {
  return (
    <div className="outer">
      <Header style={{ zIndex: "1000" }} />
      <div className="body" style={{ zIndex: "0" }}>
        <Body />
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
