import React, { useEffect, useRef, useState } from 'react'
import './Admins.scss'
import Aos from "aos";
import "aos/dist/aos.css";

export function Admins() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const saveStorage = (data, dataName = "admin") => {
    localStorage.setItem(dataName, JSON.stringify(data));
  };
  
  const localData = JSON.parse(localStorage.getItem("admin")) || [];
  const [admin, setAdmin] = useState(localData)

  const ismRef = useRef()
  const loginRef = useRef()
  const passRef = useRef()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const newAdmin = {
      id: admin.at(0)?.id ? admin.at(0)?.id + 1 : 1,
      ism: ismRef.current.value,
      login: loginRef.current.value,
      pass: passRef.current.value,
    }

    ismRef.current.value = ""
    loginRef.current.value = ""
    passRef.current.value = ""

    setAdmin([...admin, newAdmin])
    saveStorage("admin", [...admin, newAdmin]);
  }
  return (
    <div className='admins'>
      <div className='container' data-aos="fade-up">
        <table id="customers">
          <thead>
            <tr>
              <th>Ism & Familiya</th>
              <th>Login</th>
              <th>Parol</th>
            </tr>
          </thead>

            {
              admin.length > 0 && <tbody>
                {admin.map(item => <tr key={item.id}>
                  <td>{item.id}. {item.ism}</td>
                  <td>{item.login}</td>
                  <td>{item.pass}</td>
                </tr>)}
              </tbody>
            }
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
              <button type="button" className="btn-close me-3" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputIsm" className="form-label">Ism & Familiya</label>
                  <input ref={ismRef} type="text" autoComplete='off' className="form-control" id="exampleInputIsm" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Login</label>
                  <input ref={loginRef} type="text" autoComplete='off' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input ref={passRef} type="password" autoComplete='off' className="form-control" id="exampleInputPassword1" />
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
