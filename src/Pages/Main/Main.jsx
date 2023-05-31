import React, { useEffect } from "react";
import { Home } from "../Home/Home";
import { Dashboard } from "../../Components";
import { Route, Routes, useNavigate } from "react-router-dom";

export function Main() {

  const navigate = useNavigate();
    useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
    <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Dashboard />} />
      </Routes>
    </>
  );
}
