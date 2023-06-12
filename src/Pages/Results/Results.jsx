import React, { useContext, useEffect, useRef, useState } from 'react'
import './Results.scss'
import Aos from "aos";
import "aos/dist/aos.css";
import { LangContext } from "../../Context/Lang-Context";
import { Language } from "../../Assets/Language/Language";

export function Results() {

  const { lang } = useContext(LangContext);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [results, setResults] = useState([])

  const ismRef = useRef()
  const dirRef = useRef()
  const sucRef = useRef()
  const resRef = useRef()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const newResults = {
      id: results.at(0)?.id ? results.at(0)?.id + 1 : 1,
      ism: ismRef.current.value,
      dir: dirRef.current.value,
      suc: sucRef.current.value,
      res: resRef.current.value,
    }

    ismRef.current.value = ""
    dirRef.current.value = ""
    sucRef.current.value = ""
    resRef.current.value = ""

    setResults([...results, newResults])
  }
  return (
    <div className='admins'>
      <div className='container' data-aos="fade-up">
        <table id="customers">
          <thead>
            <tr>
              <th>{Language[lang].Table.Name}</th>
              <th>{Language[lang].Table.Direction}</th>
              <th>{Language[lang].header.Result}</th>
              <th>{Language[lang].Table.Success}</th>
            </tr>
          </thead>
          {
            results.length > 0 && <tbody>
              {results.map(teacher => <tr key={teacher.id}>
                <td>{teacher.id}. {teacher.ism}</td>
                <td>{teacher.dir}</td>
                <td>{teacher.suc}</td>
                <td>{teacher.res}</td>
              </tr>)}
            </tbody>
          }
        </table>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          {Language[lang].Table.CrResult}
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
                  <label htmlFor="exampleInputEmail1" className="form-label">{Language[lang].Table.Direction}</label>
                  <input ref={dirRef} type="text" autoComplete='off' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">{Language[lang].Table.Success}</label>
                  <input ref={sucRef} type="text" autoComplete='off' className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">{Language[lang].header.Result}</label>
                  <input ref={resRef} type="text" autoComplete='off' className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">{Language[lang].Table.Img}</label>
                  <input type="file" autoComplete='off' className="form-control" id="exampleInputPassword1" />
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
