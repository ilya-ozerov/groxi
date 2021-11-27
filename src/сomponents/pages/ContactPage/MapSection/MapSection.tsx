import React from 'react';
import './MapSection.scss';

import map from '../../../../assets/images/contactPage/map/map.png';

export const MapSection: React.FC<MapSectionPropsType> = (props) => {
  return (
    <section className="map-section">
      <img className="map-section__image" src={map} alt="map" />
    </section>
  );
}

type MapSectionPropsType = {

}