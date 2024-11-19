import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MealContextProvider from "./context/MealContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <MealContextProvider>
      <App />
    </MealContextProvider>
    </BrowserRouter>
  /* </StrictMode> */
);
