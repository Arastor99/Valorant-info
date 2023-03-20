import React from "react";
import { Route, Routes } from "react-router-dom";

import { OverwatchApp } from "./OverwatchApp";
import { Pj } from "./Pj";

export const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<OverwatchApp />} />
      <Route path="personajes" element={<Pj />} />
    </Routes>
  );
};
