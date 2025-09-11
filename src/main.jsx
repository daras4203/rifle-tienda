import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import Hombre from "./pages/Hombre";
import LoNuevo from "./pages/LoNuevo";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoNuevo/>
  </StrictMode>
);
