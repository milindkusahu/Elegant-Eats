import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Error from "./components/Error";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // This makes it the default route for "/"
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={router} />
  </Provider>
);
