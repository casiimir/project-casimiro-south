import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ENDPOINTS } from "./utils/api/endpoints";
import { Home } from "./pages/home";
import { Explore } from "./pages/explore";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: async () => {
          return fetch(ENDPOINTS.CITIES, {
            method: "GET",
            headers: {
              "Accept-Language": "en-US",
              "X-Musement-Application": "string",
              "X-Musement-Version": "3.4.0",
            },
          });
        },
      },
      {
        path: "explore",
        element: <Explore />,
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
