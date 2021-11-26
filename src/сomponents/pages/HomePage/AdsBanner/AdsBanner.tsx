import React from 'react';
import './AdsBanner.scss';

import bannerImage from '../../../../assets/images/adsBanner/bannerImage.png'


export const AdsBanner: React.FC<AdsBannerProps> = (props) => {
  return (
    <div className="ads-banner">
      <div className="container">
        <div className="ads-banner__body">
          <div className="ads-banner__column">
            <div className="ads-banner__subtitle">
              <span>50% </span>OFF
            </div>
            <div className="ads-banner__button button">
              <button>Shop now</button>
            </div>
          </div>
          <div className="ads-banner__column">
            <div className="ads-banner__title">
              Popular and Trending Products
            </div>
          </div>
          <div className="ads-banner__column">
            <div className="ads-banner__image">
              <img src={bannerImage} alt="wdad" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

type AdsBannerProps = {
}