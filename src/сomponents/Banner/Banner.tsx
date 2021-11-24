import React from 'react';
import { Header } from '../Header/Header';
import './Banner.scss';

import background from '../../assets/images/banner/background.png';
import vegetables_bg from '../../assets/images/banner/vegetables_bg.png';

// import productBag_bg from '../../assets/images/banner/productBag_bg.png';

type BannerPropsType = {
  type: 'home' | '404' | 'other';
}

export const Banner: React.FC<BannerPropsType> = (props) => {
  return (
    <section className="banner">

      <img src={background} className="banner__background" />
      <img src={vegetables_bg} className="banner__vegetables-background" />


      <Header />


      <div className="container">
        <div className="banner__body">
          <div className="banner__title title ">
            Welcome To Our Grocery Store
          </div>
          <div className="banner__subtitle subtitle">
            Shop Online For
            <br />
            Fresh Grocries
          </div>
          <div className="banner__text">
            Duis aute irure dolor in reprehenderit in voluptate
            <br />
            velit esse cillum dolore eu fugiat nulla pariatur.
          </div>

          <div className="banner__buttons buttons">
            <div className="buttons__shop button">
              <button>shop now</button>
            </div>
            <div className="buttons__read button">
              <button>read more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}