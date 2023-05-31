import React from "react";
import { Home } from "../Home/Home";
import { Dashboard } from "../../Components";
import { Route, Routes } from "react-router-dom";

export function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Dashboard />} />
      </Routes>
    </>
  );
}
