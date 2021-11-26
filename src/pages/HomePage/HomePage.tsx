import React from 'react';
import { AboutUs } from '../../сomponents/AboutUs/AboutUs';
import { AdsBanner } from '../../сomponents/AdsBanner/AdsBanner';
import { Banner } from '../../сomponents/Banner/Banner';
import { Categories } from '../../сomponents/Categories/Categories';
import { FeaturedProducts } from '../../сomponents/FeaturedProducts/FeaturedProducts';
import { OurFeatures } from '../../сomponents/OurFeatures/OurFeatures';
import { TrendingProducts } from '../../сomponents/TrendingProducts/TrendingProducts';

export const HomePage: React.FC = () => {
    return (
        <React.Fragment>
            <Banner type='home' />
            <Categories />
            <TrendingProducts />
            <AdsBanner />
            <AboutUs />
            <OurFeatures />
            <FeaturedProducts />
        </React.Fragment>
    );
}