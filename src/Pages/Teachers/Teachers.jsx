import React, { useContext, useEffect, useRef, useState } from 'react'
import './Teachers.scss'
import Aos from "aos";
import "aos/dist/aos.css";
import { LangContext } from "../../Context/Lang-Context";
import { Language } from "../../Assets/Language/Language";

export function Teachers() {

  const { lang } = useContext(LangContext);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [teachers, setTeachers] = useState([])

  const ismRef = useRef()
  const loginRef = useRef()
  const passRef = useRef()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const newTeacher = {
      id: teachers.at(0)?.id ? teachers.at(0)?.id + 1 : 1,
      ism: ismRef.current.value,
      login: loginRef.current.value,
      pass: passRef.current.value,
    }

    ismRef.current.value = ""
    loginRef.current.value = ""
    passRef.current.value = ""

    setTeachers([...teachers, newTeacher])
  }
  return (
    <div className='admins'>
      <div className='container' data-aos="fade-up">
        <table id="customers">
          <thead>
            <tr>
              <th>{Language[lang].Table.Name}</th>
              <th>{Language[lang].Table.Subject}</th>
              <th>{Language[lang].Table.Info}</th>
              <th>{Language[lang].Table.Tel}</th>
            </tr>
          </thead>
          {
            teachers.length > 0 && <tbody>
              {teachers.map(teacher => <tr key={teacher.id}>
                <td>{teacher.id}. {teacher.ism}</td>
                <td>{teacher.login}</td>
                <td>{teacher.pass}</td>
                <td>{teacher.pass}</td>
              </tr>)}
            </tbody>
          }
        </table>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          {Language[lang].Table.CrTeacher}
        </button>
      </div>


      <div className="modal fade" id="exampleModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{Language[lang].Table.CrTeacher}</h1>
              <button type="button" className="btn-close me-3" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputIsm" className="form-label">{Language[lang].Table.Name}</label>
                  <input ref={ismRef} type="text" autoComplete='off' className="form-control" id="exampleInputIsm" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">{Language[lang].Table.Subject}</label>
                  <input ref={loginRef} type="text" autoComplete='off' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">{Language[lang].Table.Info}</label>
                  <input ref={passRef} type="text" autoComplete='off' className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">{Language[lang].Table.Tel}</label>
                  <input ref={passRef} type="tel" autoComplete='off' className="form-control" id="exampleInputPassword1" />
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
