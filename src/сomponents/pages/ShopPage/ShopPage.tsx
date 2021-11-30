import React from 'react';
import { Banner } from '../../common/Banner/Banner';
import { ShopSection } from './ShopSection/ShopSection';

export const ShopPage: React.FC = () => {
    return (
        <React.Fragment>
            <Banner componentName='Shop' title='Shop' />
            <ShopSection />
        </React.Fragment>
    );
}

