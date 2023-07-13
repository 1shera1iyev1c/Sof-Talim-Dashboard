import React, { useContext, useEffect, useRef, useState } from 'react'
import './News.scss'
import Aos from "aos";
import "aos/dist/aos.css";
import { LangContext } from "../../Context/Lang-Context";
import { Language } from "../../Assets/Language/Language";

export function News() {

  const { lang } = useContext(LangContext);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [news, setNews] = useState([])

  const ismRef = useRef()
  const infoRef = useRef()
  const imgRef = useRef()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const newNews = {
      id: news.at(0)?.id ? news.at(0)?.id + 1 : 1,
      ism: ismRef.current.value,
      info: infoRef.current.value,
      img: imgRef.current.value,
    }

    ismRef.current.value = ""
    imgRef.current.value = ""
    infoRef.current.value = ""

    setNews([...news, newNews])
  }
  return (
    <div className='admins'>
      <div className='container' data-aos="fade-up">
        <table id="customers">
          <thead>
            <tr>
              <th>{Language[lang].Table.Title}</th>
              <th>{Language[lang].Table.Info}</th>
              <th>{Language[lang].Table.Image}</th>
              <th>{Language[lang].Table.Settings}</th>
            </tr>
          </thead>
          {
            news.length > 0 && <tbody>
              {news.map(item => <tr key={item.id}>
                <td>{item.id}. {item.ism}</td>
                <td>{item.info}</td>
                <td>{item.img}</td>
                <td>
                  <button className="button">✏️</button>
                  <button className="button">🗑️</button>
                </td>
              </tr>)}
            </tbody>
          }
        </table>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          {Language[lang].Table.CrNews}
        </button>
      </div>


      <div className="modal fade" id="exampleModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{Language[lang].Table.CrNews}</h1>
              <button type="button" className="btn-close me-3" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputIsm" className="form-label">{Language[lang].Table.Title}</label>
                  <input ref={ismRef} type="text" autoComplete='off' className="form-control" id="exampleInputIsm" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">{Language[lang].Table.Info}</label>
                  <input ref={infoRef} type="text" autoComplete='off' className="form-control" id="exampleInputPassword1" />
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
