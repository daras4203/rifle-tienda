import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import { routerApp } from "./routes/routerApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/pages/Home.css"



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(routerApp)}/>
  </StrictMode>
);
