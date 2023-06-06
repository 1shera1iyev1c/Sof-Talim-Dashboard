import React from "react";
import { Admins } from "../Admins";
import { About } from "../About";
import { Dashboard, Header } from "../../Components";
import { Route, Routes } from "react-router-dom";
import { Teachers } from "../Teachers/Teachers";

export function Main() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/admins" element={<Admins />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Dashboard />} />
      </Routes>
    </>
  );
}
