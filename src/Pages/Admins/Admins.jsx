import React, { useContext, useEffect, useRef, useState } from "react";
import "./Admins.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { LangContext } from "../../Context/Lang-Context";
import { Language } from "../../Assets/Language/Language";

export function Admins() {
  const { lang } = useContext(LangContext);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [admin, setAdmin] = useState([]);

  const ismRef = useRef();
  const loginRef = useRef();
  const passRef = useRef();

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => setAdmin(data))
      .catch((err) => console.error(err));
  }, [admin]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // const newAdmin = {
    //   id: admin.at(0)?.id ? admin.at(0)?.id + 1 : 1,
    //   ism: ismRef.current.value,
    //   login: loginRef.current.value,
    //   pass: passRef.current.value,
    // }

    ismRef.current.value = "";
    loginRef.current.value = "";
    passRef.current.value = "";

    // setAdmin([...admin, newAdmin])
  };
  return (
    <div className="admins">
      <div className="container" data-aos="fade-up">
        <table id="customers">
          <thead>
            <tr>
              <th>{Language[lang].Table.Name}</th>
              <th>{Language[lang].Table.Login}</th>
              <th>{Language[lang].Table.Pass}</th>
            </tr>
          </thead>
          {admin.length > 0 && (
            <tbody>
              {admin.map((item) => (
                <tr key={item.id}>
                  <td>
                    {item.id}. {item.name}
                  </td>
                  <td>{item.login}</td>
                  <td>{item.password}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          {Language[lang].Table.CrAdmin}
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={"-1"}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {Language[lang].Table.CrAdmin}
              </h1>
              <button
                type="button"
                className="btn-close me-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputIsm" className="form-label">
                    {Language[lang].Table.Name}
                  </label>
                  <input
                    required
                    ref={ismRef}
                    type="text"
                    autoComplete="off"
                    className="form-control"
                    id="exampleInputIsm"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    {Language[lang].Table.Login}
                  </label>
                  <input
                    required
                    ref={loginRef}
                    type="text"
                    autoComplete="off"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    {Language[lang].Table.Pass}
                  </label>
                  <input
                    required
                    ref={passRef}
                    type="password"
                    autoComplete="off"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  {Language[lang].Table.Submit}
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                {Language[lang].Table.Close}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
