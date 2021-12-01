import React from 'react';
import { v1 as createId } from 'uuid';
import './FeaturedProducts.scss';

import background from '../../../../assets/images/featuredProducts/background.png';
import { ProductItem } from '../../../common/ProductItem/ProductItem';
import { productsAPI } from '../../../../api/api';

export const FeaturedProducts: React.FC<FeaturedProductsProps> = (props) => {

  const productsList = productsAPI.getProducts(6, 12).map(p => {
    return <ProductItem key={p.id} product={p} className="featured-products__item" />
  })

  return (
    <section className="featured-products">

      <img className="featured-products__background" src={background} alt="bg" />

      <div className="container">
        <div className="featured-products__body">
          <div className="featured-products__title title">Best Seller</div>
          <div className="featured-products__subtitle subtitle">Featured Products</div>
          <div className="featured-products__menu">
            <ul className="featured-products__list">
              <li>All</li>
              <li>Food</li>
              <li>Fruits</li>
              <li>Health</li>
              <li>Meat</li>
              <li>Dairy</li>
            </ul>
          </div>
          <div className="featured-products__products">
            {productsList}
          </div>
        </div>

      </div>
    </section>
  );
}

type FeaturedProductsProps = {
}