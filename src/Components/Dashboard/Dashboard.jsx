import React from "react";
import "./Dashboard.scss";
import logo from "./../../Assets/Images/logo.svg";

export const Dashboard = () => {
  return (
    <div>
      <div className="container d-flex">
        <div className="input__div bg-white">
          <img className="logo" src={logo} alt="logo" />
          <input type="text" placeholder="Name" className="text__input d-block form-control"/>
          <input type="password" placeholder="Password" className="text__pas d-block form-control mt-2"/>
          <button className="btn">Login</button>
        </div>
        <div className="text__div bg-dark">
            <div className="texts">
            <h3 className="text-white text-center">Welcome to ST</h3>
            <p className="text-white w-75 ">Sof talim oquv markazi veb-sayti uchun maxsus boshqaruv paneli.</p>
            </div>
        </div>
      </div>
    </div>
  );
};
