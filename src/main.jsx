import { createBrowserRouter, RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProductDetail } from "./components/ProductDetail.jsx";

import App from "./App.jsx";
import "./index.css";
import { Products } from "./components/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/product", element: <Products /> },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
