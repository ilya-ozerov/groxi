import React from 'react';
import { Banner } from '../../common/Banner/Banner';
import { FormSection } from './FormSection/FormSection';
import { MapSection } from './MapSection/MapSection';

export const ContactPage: React.FC = () => {
    return (
        <React.Fragment>
            <Banner componentName='Contact' title='Contact' />
            <FormSection />
            <MapSection />
        </React.Fragment>
    );
}