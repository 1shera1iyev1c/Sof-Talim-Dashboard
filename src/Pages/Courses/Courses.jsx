import React, { useContext, useEffect, useRef, useState } from 'react'
import { Language } from '../../Assets/Language/Language';
import { LangContext } from '../../Context/Lang-Context';
import Aos from 'aos';

export const Courses = () => {

    const { lang } = useContext(LangContext);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [admin, setAdmin] = useState([])

  const ismRef = useRef()
  const aboutRef = useRef()
  const loginRef = useRef()
  const passRef = useRef()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const newAdmin = {
      id: admin.at(0)?.id ? admin.at(0)?.id + 1 : 1,
      ism: ismRef.current.value,
      about: aboutRef.current.value,
      login: loginRef.current.value,
      pass: passRef.current.value,
    }

    ismRef.current.value = ""
    aboutRef.current.value = ""
    loginRef.current.value = ""
    passRef.current.value = ""

    setAdmin([...admin, newAdmin])
    
}


  return (
    <div>
       
    <div className='admins'>
      <div className='container' data-aos="fade-up">
        <table id="customers">
          <thead>
            <tr>
              <th>{Language[lang].coursTable.Subject}</th>
              <th>{Language[lang].coursTable.About}</th>
              <th>{Language[lang].coursTable.Continuity}</th>
              <th>{Language[lang].coursTable.Price}</th>
            </tr>
          </thead>
          {
            admin.length > 0 && <tbody>
              {admin.map(item => <tr key={item.id}>
                <td>{item.id}. {item.ism}</td>
                <td>{item.about}</td>
                <td>{item.login}</td>
                <td>{item.pass}</td>
              </tr>)}
            </tbody>
          }
        </table>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          {Language[lang].coursTable.CrSub}
        </button>
      </div>


      <div className="modal fade" id="exampleModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{Language[lang].coursTable.CrAdmin}</h1>
              <button type="button" className="btn-close me-3" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputIsm" className="form-label">{Language[lang].coursTable.Subject}</label>
                  <input required ref={ismRef} type="text" autoComplete='off' className="form-control" id="exampleInputIsm" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputIsm" className="form-label">{Language[lang].coursTable.About}</label>
                  <input required ref={aboutRef} type="text" autoComplete='off' className="form-control" id="exampleInputIsm" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">{Language[lang].coursTable.Continuity}</label>
                  <input required ref={loginRef} type="text" autoComplete='off' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">{Language[lang].coursTable.Price}</label>
                  <input required ref={passRef} type="text" autoComplete='off' className="form-control" id="exampleInputPassword1" />
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
  
    </div>
  )
}
