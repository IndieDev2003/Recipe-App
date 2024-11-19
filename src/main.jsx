import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MealContextProvider from "./context/MealContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <MealContextProvider>
      <App />
    </MealContextProvider>
  /* </StrictMode> */
);
