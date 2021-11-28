import React from 'react';
import { Banner } from '../../common/Banner/Banner';
import { BlogSection } from './BlogSection/BlogSection';

export const BlogPage: React.FC = () => {
    return (
        <React.Fragment>
            <Banner componentName='Blog' title='Blog Posts' />
            <BlogSection />
        </React.Fragment>
    );
}