import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import { Home } from "./pages/home";
import { Explore } from "./pages/explore";
import { Cities } from "./pages/cities";
import { Details } from "./pages/details";
import { Info } from "./components/info";
import { Map } from "./components/map";
import { About } from "./pages/about";
import { Login } from "./pages/login";
import { Cart } from "./pages/cart";
import { EmptyCart } from "./pages/emptycart";
import { NoLoginCart } from "./pages/nologincart";
import { ThankYou } from "./pages/thankyou";
import { Error } from "./pages/error";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "cities",
        element: <Cities />,
      },
      {
        path: "details/:activity_uuid",
        element: <Details />,

        children: [
          {
            path: "",
            element: <Navigate to={"info"} />,
          },

          {
            path: "info",
            element: <Info />,
          },

          {
            path: "map",
            element: <Map />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "emptycart",
        element: <EmptyCart />,
      },
      {
        path: "nologincart",
        element: <NoLoginCart />,
      },
      {
        path: "thankyou",
        element: <ThankYou />,
      },
      {
        path: "*",
        element: <Error status={404} />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
