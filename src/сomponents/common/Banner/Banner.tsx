import React from 'react';
import './Banner.scss';



export const Banner: React.FC<BannerPropsType> = (props) => {
  return (
    <section className={`banner ${props.className}`}>

      <img className="banner__products-bag-background" src="#" alt="products bag background" />
      <img className="banner__vegetables-background" src="#" alt="vegetables background" />

      <div className="container">
        <div className="banner__body">
          <ul className="banner__navigation">
            <li>Home</li>
            <li>{props.componentName}</li>
          </ul>
          <div className="banner__title"></div>
        </div>
      </div>
    </section>
  );
}

type ComponentNameType = 'About' | 'Shop' | 'Blog' | 'Contact' | 'Product Detail';
type BannerPropsType = {
  className?: string;
  componentName: ComponentNameType;
}