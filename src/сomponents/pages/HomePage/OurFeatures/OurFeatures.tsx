import React from 'react';
import './OurFeatures.scss';

import productBasket from '../../../../assets/images/ourFeatures/productBasket.png';

import quality from '../../../../assets/images/ourFeatures/quality.png';
import delivery from '../../../../assets/images/ourFeatures/delivery.png';
import onlineOrder from '../../../../assets/images/ourFeatures/onlineOrder.png';
import service from '../../../../assets/images/ourFeatures/service.png';

export const OurFeatures: React.FC<OurFeaturesProps> = (props) => {
  return (
    <section className="our-features">
      <div className="container">
        <div className="our-features__body">
          <div className="our-features__column">
            <div className="our-features__item">
              <div className="our-features__image">
                <img src={quality} alt="medal of quality" />
              </div>
              <div className="our-features__title">Quality Products</div>
              <div className="our-features__text">
                Aui dolorem iesum ruia dolor
                sit amet, consectetur, adipisci
                eius modi incidunt
              </div>
            </div>
            <div className="our-features__item">
              <div className="our-features__image">
                <img src={delivery} alt="cart" />
              </div>
              <div className="our-features__title">Fast Delivery</div>
              <div className="our-features__text">
                Aui dolorem iesum ruia dolor
                sit amet, consectetur, adipisci
                eius modi incidunt
              </div>
            </div>
          </div>

          <div className="our-features__column">
            <div className="our-features__basket">
              <img src={productBasket} alt="basket of products" />
            </div>
            <div className="our-features__button button">
              <button>Shop now</button>
            </div>
          </div>

          <div className="our-features__column">
            <div className="our-features__item">
              <div className="our-features__image">
                <img src={onlineOrder} alt="basket" />
              </div>
              <div className="our-features__title">Online Order</div>
              <div className="our-features__text">
                Aui dolorem iesum ruia dolor
                sit amet, consectetur, adipisci
                eius modi incidunt
              </div>
            </div>
            <div className="our-features__item">
              <div className="our-features__image">
                <img src={service} alt="phone" />
              </div>
              <div className="our-features__title">24/7 Service</div>
              <div className="our-features__text">
                Aui dolorem iesum ruia dolor
                sit amet, consectetur, adipisci
                eius modi incidunt
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type OurFeaturesProps = {
}