import React from "react";
import { Route, Routes } from "react-router-dom";
import { MapGrid } from "./MapGrid";

import { OverwatchApp } from "./OverwatchApp";
import { Pj } from "./Pj";

export const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<OverwatchApp />} />
      <Route path="personajes" element={<Pj />} />
      <Route path="mapas" element={<MapGrid />} />
    </Routes>
  );
};
