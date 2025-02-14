import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/app.css";
import App from "./app";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
);
