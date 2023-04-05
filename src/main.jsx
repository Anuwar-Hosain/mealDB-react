import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Product from "./components/Product/Product";
import CountryDetails from "./components/CountryDetails/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/product",
        element: <Product></Product>,
        loader: () => fetch("https://restcountries.com/v3.1/all"),
      },
      {
        path: "/about",
        element: <div className="w-4/5 mx-auto">hello about</div>,
      },
      {
        path: "/country/:name",
        element: <CountryDetails></CountryDetails>,
        loader: ({ params }) =>
          fetch(`https://restcountries.com/v3.1/name/${params.name}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
