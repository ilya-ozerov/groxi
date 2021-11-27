import React from 'react';
import { Banner } from '../../common/Banner/Banner';
import { InformationSection } from './InformationSection/InformationSection';
import { CardsSection } from './CardsSection/CardsSection';
import { VideoSection } from './VideoSection/VideoSection';
import { WhySection } from './WhySection/WhySection';

export const AboutPage: React.FC = () => {
    return (
        <React.Fragment>
            <Banner componentName='About' title='About Us' />
            <InformationSection />
            <CardsSection />
            <VideoSection />
            <WhySection />
        </React.Fragment>
    );
}