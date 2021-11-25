import React from 'react';
import './AboutUs.scss';

import mainBg from '../../assets/images/aboutUs/mainBg.png';
import rightBgPicture from '../../assets/images/aboutUs/rightBgPicture.png';

export const AboutUs: React.FC<AboutUsProps> = (props) => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__body">
          <img src={mainBg} className="about__main-bg" />
          <img src={rightBgPicture} className="about__right-bg" />

          <div className="about__info">
            <div className="about__title title">About Us</div>
            <div className="about__subtitle subtitle">We Provide You The Best Experience</div>
            <div className="about__text">
              <p>
                Neque porro quisquam est aui dolorem iesum ruia dolor
                sit amet, consectetur, adipisci velit, sed quia non numua
                eius modi tempora incidunt ut labore et dolore magnam
                volutatem exercitationem ullam.
              </p>
              <p>
                Quis autem vel eum iure reprehenderit aui in ea voluptae
                velit esse quam nihil molestiae consequatur, vel illum rui
                dolorem eum fugiat quo voluptas.
              </p>
            </div>

            <div className="about__button button">
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type AboutUsProps = {
}