import React from 'react';
import { OurFeatures } from '../../../common/OurFeatures/OurFeatures';
import './WhySection.scss';

import productsPacket from '../../../../assets/images/aboutPage/why/image.png';

export const WhySection: React.FC<WhySectionPropsType> = (props) => {
  return (
    <section className="why-section">
      <div className="why-section__title">Why Choose Us</div>
      <OurFeatures className="why-section__features" image={productsPacket} showButton={false} />
    </section>
  );
}

type WhySectionPropsType = {

}