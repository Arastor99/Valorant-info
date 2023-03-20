import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { OverwatchApp } from "./components/OverwatchApp";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Rutas } from "./components/Rutas";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Rutas />
  </BrowserRouter>
);
