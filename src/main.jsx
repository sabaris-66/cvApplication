import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./components/homePage";
import "./styles/homePageStyles.css";
import "./styles/cvPageStyles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePage></HomePage>
  </StrictMode>
);
