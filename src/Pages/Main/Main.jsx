import React from "react";
import { Admins } from "../Admins";
import { About } from "../About";
import { Dashboard, Header } from "../../Components";
import { Route, Routes } from "react-router-dom";
import { Teachers } from "../Teachers/Teachers";
import { Courses } from "../Courses";
import { News } from "../News/News";
import { Results } from "../Results/Results";

export function Main() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/results" element={<Results />} />
        <Route path="/login" element={<Dashboard />} />
      </Routes>
    </>
  );
}
