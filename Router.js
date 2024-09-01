import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./about";
import Page from "./app";
import Body from "./body";
import Cart from "./cart";
import Contact from "./contact";
import Error from "./errorElement";
import RestaurantMenu from "./restaurantMenu";
import call from "./scrapedData";

const data = await call();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page search={data} />,
    children: [
      {
        path: "home",
        element: <Body searchResults={data} />,
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
