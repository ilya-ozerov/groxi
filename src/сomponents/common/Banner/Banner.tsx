import React from 'react';
import { Header } from '../Header/Header';
import './Banner.scss';

import vegetables from '../../../assets/images/banner/vegetables_bg.png';
import productBag from '../../../assets/images/banner/productBag_bg.png';


export const Banner: React.FC<BannerPropsType> = (props) => {
  return (
    <section className={`banner ${props.className ? props.className : ''}`}>

      <img className="banner__products-bag-background" src={productBag} alt="products bag background" />
      <img className="banner__vegetables-background" src={vegetables} alt="vegetables background" />

      <div className="container">
        <Header className="banner__header" />
        <div className="banner__body">
          <div className="banner__banner">
            <ul className="banner__navigation">
              <li>Home</li>
              <li>{props.componentName}</li>
            </ul>
            <div className="banner__title">{props.title}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ComponentNameType = 'About' | 'Shop' | 'Blog' | 'Contact' | 'Product Detail';
type BannerPropsType = {
  className?: string;
  componentName: ComponentNameType;
  title: string;
}