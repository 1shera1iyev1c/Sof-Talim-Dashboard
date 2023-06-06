import React, { useContext, useEffect } from 'react';
import './About.scss';
import { ThemeContext } from '../../Context/Theme-Context';
import Aos from 'aos';
import 'aos/dist/aos.css'

export const About = () => {

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  return (
    <div id="about" className={`about__${theme}`}>
      <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
              <div className="about-box" data-aos="fade-right">
                <h2>
                  About <strong className={`yellow__${theme}`}>Our Game</strong>
                </h2>
                <p className={`about__text--${theme}`}>
                  {' '}
                  orem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                  voluptatem maiores eaque similique non distinctio voluptates
                  perspiciatis omnis, repellendus ipsa aperiam, laudantium
                  voluptatum nulla?. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Soluta, assumenda, vo luptatum. Libero
                  eligendi molestias iure error animi totam laudantium,
                  aspernatur similique id eos at consectetur illo culpa,{' '}
                </p>
                <a href="#">Read more</a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="about-box" >
                <figure>
                  <img src={'https://picsum.photos/300/200'} alt="#" data-aos="fade-left" />
                </figure>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};