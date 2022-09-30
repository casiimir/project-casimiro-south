import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { Explore } from "./pages/explore";
import { Details } from "./pages/details";
import { Provider } from "react-redux";
import store from "./store";

import { Error } from "./pages/error";
import { Cities } from "./pages/cities/";
import { Info }from "./components/info";
import { Map }from "./components/map";


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
        path: "details",
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
      { path: "*", element: <Error status={404} /> },
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
