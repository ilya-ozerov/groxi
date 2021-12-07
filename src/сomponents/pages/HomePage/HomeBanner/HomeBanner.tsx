import React from 'react';
import { Header } from '../../../common/Header/Header';
import './HomeBanner.scss';
import background from '../../../../assets/images/banner/background.png';
import vegetables_bg from '../../../../assets/images/banner/vegetables_bg.png';
import { Link } from 'react-router-dom';

type HomeBannerPropsType = {
}

export const HomeBanner: React.FC<HomeBannerPropsType> = (props) => {
  return (
    <section className="home-banner">

      <img src={background} className="home-banner__background" alt="background" />

      {/* left picture */}
      <img src={vegetables_bg} className="home-banner__vegetables-background" alt="background" />


      <Header />


      <div className="container">
        <div className="home-banner__body">
          <div className="home-banner__title title ">
            Welcome To Our Grocery Store
          </div>
          <div className="home-banner__subtitle subtitle">
            Shop Online For
            <br />
            Fresh Grocries
          </div>
          <div className="home-banner__text">
            Duis aute irure dolor in reprehenderit in voluptate
            <br />
            velit esse cillum dolore eu fugiat nulla pariatur.
          </div>

          <div className="home-banner__buttons buttons">
            <Link to="/shop" >
              <div className="buttons__shop button">
                <button>shop now</button>
              </div>
            </Link>

            <Link to="/about" >
              <div className="buttons__read button">
                <button>read more</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}