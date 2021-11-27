import React from 'react';
import './InformationSection.scss';
import manAndWoman from '../../../../assets/images/aboutPage/information/manAndWoman.png';

export const InformationSection: React.FC<InformationSectionPropsType> = (props) => {
  return (
    <section className="information-section">

      <div className="container">
        <div className="information-section__body">
          <div className="information-section__image">
            <img src={manAndWoman} alt="man and woman with product bag" />
          </div>

          <div className="information-section__info">
            <div className="information-section__title">
              We Give The Lowest
              Price on Grocery Items
            </div>
            <div className="information-section__text">
              <p>
                Neque porro quisquam est aui dolorem iesum ruia dolor
                sit amet, consectetur, adipisci velit, sed quia non numua
                eius modi tempora incidunt ut labore et dolore magnam
                volutatem exercitationem ullam.
              </p>
              <p>
                Quis autem vel eum iure reprehenderit aui in ea voluptae
                velit esse quam nihil molestiae consequatur, vel illum rui
                dolorem eum fugiat quo voluptas excepteur deserunt
                veniam adipisicing do adipisicing adipisicing proident
                esse aud irure commodo mollit voluptate irure alorem
                consequat ullamco do laboris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type InformationSectionPropsType = {

}