import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./header";
import Body from "./body";
import SearchDropdown from "./searchDropdown";

const Page = () => {
  return (
    <div className="outer">
      <Header/>
      <div>
        <Body/>
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
