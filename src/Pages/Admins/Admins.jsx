import React, { useEffect, useRef } from 'react'
import './Admins.scss'
import Aos from "aos";
import "aos/dist/aos.css";

export function Admins() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const loginRef = useRef()
  const passRef = useRef()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const newAdmin = {
      id: Math.round(Math.random() * 10),
      login: loginRef.current.value,
      pass: passRef.current.value,
    }

    console.log(newAdmin);

  }

  return (
    <div className='admins'>
      <div className='container' data-aos="fade-up">
        <table id="customers">
          <tbody>
            <tr>
              <th>Ism & Familiya</th>
              <th>Login</th>
              <th>Parol</th>
            </tr>
            <tr>
              <td>1. Shopo'latov Sanjar</td>
              <td>sanjarshopulatov</td>
              <td>sanjar777</td>
            </tr>
          </tbody>
        </table>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Create Admin
        </button>
      </div>


      <div className="modal fade" id="exampleModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Create Admin</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Login</label>
                  <input ref={loginRef} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input ref={passRef} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
