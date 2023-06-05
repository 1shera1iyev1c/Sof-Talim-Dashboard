import React, { useEffect } from "react";
import { Admins } from "../Admins";
import { Dashboard, Header } from "../../Components";
import { Route, Routes, useNavigate } from "react-router-dom";

export function Main() {

  const navigate = useNavigate();
    useEffect(() => {
    navigate("/admins");
  }, [navigate]);

  return (
    <>
    <Header />
      <Routes>
        <Route path="/admins" element={<Admins />} />
        <Route path="/login" element={<Dashboard />} />
      </Routes>
    </>
  );
}
