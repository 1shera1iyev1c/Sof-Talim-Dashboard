import React from "react";
import { Admins } from "../Admins";
import { Dashboard, Header } from "../../Components";
import { Route, Routes } from "react-router-dom";
import { Teachers } from "../Teachers/Teachers";
import { Courses } from "../Courses";
import { News } from "../News/News";
import { Results } from "../Results/Results";
import { Users } from "../Users/Users";

export function Main() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/users" element={<Users />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/news" element={<News />} />
        <Route path="/results" element={<Results />} />
        <Route path="/login" element={<Dashboard />} />
      </Routes>
    </>
  );
}
