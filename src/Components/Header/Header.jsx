import { React, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../Assets/Images/logo.png";
import { LangContext } from "../../Context/Lang-Context";
import { ThemeContext } from "../../Context/Theme-Context";
import { Language } from "../../Assets/Language/Language";
import Aos from "aos";
import "aos/dist/aos.css";

export function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LangContext);

  function handleLang(evt) {
    setLang(evt.target.value);
    localStorage.setItem("lang", evt.target.value);
  }

  function handleTheme(e) {
    setTheme(e.target.value);
    localStorage.setItem("theme", e.target.value);
  }

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <header id={`header__${theme}`}>
      <div className="conteiner header__container">
        <a href="/">
          <img src={logo} alt="#" data-aos="fade-right" />
        </a>
        <ul className="header__list" data-aos="fade-up">
          <li className="header__item">
            <Link className={`header__link--${theme}`} to="/admins">
              {Language[lang].header.Admins}
            </Link>
          </li>
          <li className="header__item">
            <Link className={`header__link--${theme}`} to="/users">
              {Language[lang].header.Users}
            </Link>
          </li>
          <li className="header__item">
            <Link className={`header__link--${theme}`} to="/courses">
              {Language[lang].header.Courses}
            </Link>
          </li>
          <li className="header__item">
            <Link className={`header__link--${theme}`} to="/news">
              {Language[lang].header.News}
            </Link>
          </li>
          <li className="header__item">
            <Link className={`header__link--${theme}`} to="/teachers">
              {Language[lang].header.Teachers}
            </Link>
          </li>
          <li className="header__item">
            <Link className={`header__link--${theme}`} to="/results">
              {Language[lang].header.Result}
            </Link>
          </li>
        </ul>
        <div
          className="d-flex col-xl-2 col-lg-4 select-div w-25"
          data-aos="fade-left"
        >
          <select
            className="form-select select"
            onChange={handleLang}
            defaultValue={lang}
          >
            <option value="uzb">Uzbek</option>
            <option value="rus">Русский</option>
          </select>
          <select
            className="select2 form-select ms-2"
            onChange={handleTheme}
            defaultValue={theme}
          >
            <option value="dark">{Language[lang].header.Dark}</option>
            <option value="light">{Language[lang].header.Light}</option>
          </select>
          <button className="btn btn-danger mb-3 ms-3">Logout</button>
        </div>
        <button
          type="button"
          className="btn-close burger__btn"
          aria-label="Close"
        ></button>
      </div>
    </header>
  );
}
