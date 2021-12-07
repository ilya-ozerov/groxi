import React from 'react';
import './CardsSection.scss';

import hand from '../../../../assets/images/aboutPage/cards/hand.png';
import growChart from '../../../../assets/images/aboutPage/cards/growChart.png';
import { Link } from 'react-router-dom';

export const CardsSection: React.FC<CardsSectionPropsType> = (props) => {
  return (
    <section className="cards-section">
      <div className="container">
        <div className="cards-section__body">
          <div className="cards-section__card">
            <div className="cards-section__image">
              <img src={hand} alt="hand" />
            </div>
            <div className="cards-section__title">Our Vision</div>
            <div className="cards-section__text">
              Neque porro quisquam est aui dolorem iesum ruia
              sit amet, consectetur, adipisci velit, sed quia non
              eius modi tempora incidunt ut labore et dolore ma
              volutatem exercitationem ullam.
            </div>
            <Link to="/shop">
              <div className="cards-section__button button">
                <button>
                  Shop now
                </button>
              </div>
            </Link>
          </div>

          <div className="cards-section__card">
            <div className="cards-section__image">
              <img src={growChart} alt="growth chart" />
            </div>
            <div className="cards-section__title">Our Goal</div>
            <div className="cards-section__text">
              Neque porro quisquam est aui dolorem iesum ruia
              sit amet, consectetur, adipisci velit, sed quia non
              eius modi tempora incidunt ut labore et dolore ma
              volutatem exercitationem ullam.
            </div>
            <Link to="/shop">
              <div className="cards-section__button button">
                <button>
                  Shop now
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

type CardsSectionPropsType = {

}