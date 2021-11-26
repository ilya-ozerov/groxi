import React from 'react';
import { AboutUs } from './AboutUs/AboutUs';
import { AdsBanner } from './AdsBanner/AdsBanner';
import { HomeBanner } from './HomeBanner/HomeBanner';
import { Categories } from './Categories/Categories';
import { FeaturedProducts } from './FeaturedProducts/FeaturedProducts';
import { OurFeatures } from './OurFeatures/OurFeatures';
import { TrendingProducts } from './TrendingProducts/TrendingProducts';

export const HomePage: React.FC = () => {
    return (
        <React.Fragment>
            <HomeBanner />
            <Categories />
            <TrendingProducts />
            <AdsBanner />
            <AboutUs />
            <OurFeatures />
            <FeaturedProducts />
        </React.Fragment>
    );
}