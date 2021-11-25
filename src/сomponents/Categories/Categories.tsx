import React from 'react';
import './Categories.scss';

import productBag from '../../assets/images/categories/productBag.png';
import juice from '../../assets/images/categories/juice.png';
import lemon from '../../assets/images/categories/lemon.png';
// import rightArrow from '../../assets/images/categories/rightArrow.png';

type CategoriesPropsType = {}
export const Categories: React.FC<CategoriesPropsType> = (props) => {
  return (
    <div className="categories">
      <div className="container">
        <div className="categories__body">
          <Category title='Get Every Vegetable You Need'
            imageUrl={productBag} color='#92DDD8' imageAlt='product bag' />
          <Category title='We Have Best Beverages Collection'
            imageUrl={juice} color='#F78B1A' imageAlt='bottle of grapefruit juice' />
          <Category title='Beauty And Health Products'
            imageUrl={lemon} color='#AADA23' imageAlt='two bottles and half part of lemon' />
        </div>
      </div>
    </div>
  );
}

type CategoryProps = {
  title: string;
  imageUrl: string;
  imageAlt: string;
  color: string;
}
export const Category: React.FC<CategoryProps> = (props) => {
  return (
    <section className="categories__item" style={{ backgroundColor: props.color }}>

      <div className="categories__title">{props.title}</div>
      <div className="categories__button button">
        <button>Shop now</button>
      </div>
      <div className="categories__image">
        <img src={props.imageUrl} alt={props.imageAlt} />
      </div>
    </section>
  );
}