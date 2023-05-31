import React, { useContext, useRef } from "react";
import "./Dashboard.scss";
import logo from "./../../Assets/Images/logo.png";
import { AuthContext } from "../../Context/Auth-Context";

export const Dashboard = () => {

  const { setToken } = useContext(AuthContext);

  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => setToken(data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="container d-flex">
        <div className="input__div bg-white">
          <img className="logo" src={logo} alt="logo" />
          <form onSubmit={handleSubmit}>
            <input
              ref={emailRef}
              type="text"
              placeholder="Name"
              className="text__input d-block form-control"
            />
            <input
              ref={passRef}
              type="password"
              placeholder="Password"
              className="text__pas d-block form-control mt-2"
            />
            <button className="btn">Login</button>
          </form>
        </div>
        <div className="text__div bg-dark">
          <div className="texts">
            <h3 className="text-white text-center">Welcome to ST</h3>
            <p className="text-white w-75 ">
              Sof talim oquv markazi veb-sayti uchun maxsus boshqaruv paneli.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
