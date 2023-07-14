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
                  <button className="button">🗑️</button>
                </td>
              </tr>)}
            </tbody>
          }
        </table>
      </div>
    </div>
  )
}
