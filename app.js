import { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Body from "./body";
import largeDataObject from "./swiggyData";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./errorElement";
import Contact from "./contact";
import About from "./about";
import Cart from "./cart";
import RestaurantMenu from "./restaurantMenu.js";

const temp =
  largeDataObject.data.cards[5].card.card.gridElements.infoWithStyle
    .restaurants;

const Page = (search) => {
  const [searchResults, setSearchResults] = useState(search);
  return (
    <div className="outer">
      <Header style={{ zIndex: "1000" }} setSearchResults={setSearchResults} />
      <div className="body" style={{ zIndex: "0" }}>
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page search={temp} />,
    children: [
      {
        path: "home",
        element: <Body searchResults={temp} />,
        errorElement: <Error />,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
