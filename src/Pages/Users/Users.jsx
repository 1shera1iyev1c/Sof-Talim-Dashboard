import React, { useContext, useEffect, useRef, useState } from 'react'
import './Users.scss'
import Aos from "aos";
import "aos/dist/aos.css";
import { LangContext } from "../../Context/Lang-Context";
import { Language } from "../../Assets/Language/Language";


export function Users() {
    const { lang } = useContext(LangContext);

    useEffect(() => {
      Aos.init({ duration: 1500 });
    }, []);
  
    const [users, setUsers] = useState([])
  
    const ismRef = useRef()
    const telRef = useRef()
  
    const handleSubmit = (evt) => {
      evt.preventDefault()
  
      const newUser = {
        id: users.at(0)?.id ? users.at(0)?.id + 1 : 1,
        ism: ismRef.current.value,
        tel: telRef.current.value,
      }
  
      ismRef.current.value = ""
      telRef.current.value = ""
  
      setUsers([...users, newUser])
    }
    return (
      <div className='admins'>
        <div className='container' data-aos="fade-up">
          <table id="customers">
            <thead>
              <tr>
                <th>{Language[lang].Table.Name}</th>
                <th>{Language[lang].Table.Tel}</th>
                <th>{Language[lang].Table.Settings}</th>
              </tr>
            </thead>
            {
              users.length > 0 && <tbody>
                {users.map(user => <tr key={user.id}>
                  <td>{user.id}. {user.ism}</td>
                  <td>{user.tel}</td>
                  <td>
                    <button className="button">✏️</button>
                    <button className="button">🗑️</button>
                  </td>
                </tr>)}
              </tbody>
            }
          </table>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            {Language[lang].Table.CrUsers}
          </button>
        </div>
  
  
        <div className="modal fade" id="exampleModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">{Language[lang].Table.CrUsers}</h1>
                <button type="button" className="btn-close me-3" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputIsm" className="form-label">{Language[lang].Table.Name}</label>
                    <input ref={ismRef} type="text" autoComplete='off' className="form-control" id="exampleInputIsm" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">{Language[lang].Table.Tel}</label>
                    <input ref={telRef} type="text" autoComplete='off' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <button type="submit" className="btn btn-primary">{Language[lang].Table.Submit}</button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" data-bs-dismiss="modal">{Language[lang].Table.Close}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  