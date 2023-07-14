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
  const pointRef = useRef()
  const yearRef = useRef()
  const univerRef = useRef()
  const statusRef = useRef()
  const imgRef = useRef()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const newResults = {
      id: results.at(0)?.id ? results.at(0)?.id + 1 : 1,
      ism: ismRef.current.value,
      point: pointRef.current.value,
      year: yearRef.current.value,
      univer: univerRef.current.value,
      status: statusRef.current.value,
      img: imgRef.current.value,
    }

    ismRef.current.value = ""
    pointRef.current.value = ""
    yearRef.current.value = ""
    statusRef.current.value = ""
    univerRef.current.value = ""
    imgRef.current.value = ""

    setResults([...results, newResults])
  }
  return (
    <div className='admins'>
      <div className='container' data-aos="fade-up">
        <table id="customers">
          <thead>
            <tr>
              <th>{Language[lang].Table.Name}</th>
              <th>{Language[lang].Table.Point}</th>
              <th>{Language[lang].Table.Year}</th>
              <th>{Language[lang].Table.Univer}</th>
              <th>{Language[lang].header.Status}</th>
              <th>{Language[lang].Table.Image}</th>
              <th>{Language[lang].Table.Settings}</th>
            </tr>
          </thead>
          {
            results.length > 0 && <tbody>
              {results.map(teacher => <tr key={teacher.id}>
                <td>{teacher.id}. {teacher.ism}</td>
                <td>{teacher.point}</td>
                <td>{teacher.year}</td>
                <td>{teacher.univer}</td>
                <td>{teacher.status}</td>
                <td>{teacher.img}</td>
                <td>
                  <button className="button">✏️</button>
                  <button className="button">🗑️</button>
                </td>
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
              <h1 className="modal-title fs-5" id="exampleModalLabel">{Language[lang].Table.CrResult}</h1>
              <button type="button" className="btn-close me-3" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputIsm" className="form-label">{Language[lang].Table.Name}</label>
                  <input ref={ismRef} type="text" autoComplete='off' className="form-control" id="exampleInputIsm" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">{Language[lang].Table.Point}</label>
                  <input ref={pointRef} type="text" autoComplete='off' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">{Language[lang].Table.Year}</label>
                  <input ref={yearRef} type="text" autoComplete='off' className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">{Language[lang].header.Univer}</label>
                  <input ref={univerRef} type="text" autoComplete='off' className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">{Language[lang].Table.Univer}</label>
                  <input ref={statusRef} type="text" autoComplete='off' className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">{Language[lang].Table.Img}</label>
                  <input ref={imgRef} type="file" autoComplete='off' className="form-control" id="exampleInputPassword1" />
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
