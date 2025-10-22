// src/main.jsx lub src/index.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";   // <-- dodane
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Schudnij_zPyza/">
      <App />
    </BrowserRouter>
  </StrictMode>
);
