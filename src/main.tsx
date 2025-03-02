import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./styles/output.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
