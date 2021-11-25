import React from 'react';
import { v1 as createId } from 'uuid';
import './FeaturedProducts.scss';

import background from '../../assets/images/featuredProducts/background.png';

import bread from '../../assets/images/featuredProducts/freshBread.png';
import redPepper from '../../assets/images/featuredProducts/redPepper.png';
import orangeBeverage from '../../assets/images/featuredProducts/orangeBeverage.png';
import eggs from '../../assets/images/featuredProducts/eggs.png';
import cookingOil from '../../assets/images/featuredProducts/cookingOil.png';
import bodyLotion from '../../assets/images/featuredProducts/bodyLotion.png';
import { ProductType } from '../../types/types';
import { ProductItem } from '../ProductItem/ProductItem';

export const FeaturedProducts: React.FC<FeaturedProductsProps> = (props) => {

  const productsList = products.map(p => {
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

const products: ProductType[] = [
  {
    id: createId(),
    name: 'Fresh Bread',
    rate: 5,
    favorite: false,
    hot: true,
    price: {
      oldPrice: 15,
      currentPrice: 12,
    },
    image: {
      url: bread,
      alt: 'bread',
    }
  },
  {
    id: createId(),
    name: 'Red Pepper',
    rate: 4,
    favorite: false,
    hot: false,
    price: {
      oldPrice: 20,
      currentPrice: 15,
    },
    image: {
      url: redPepper,
      alt: 'two red peppers',
    }
  },
  {
    id: createId(),
    name: 'Orange Beverage',
    rate: 5,
    favorite: false,
    hot: true,
    price: {
      oldPrice: 30,
      currentPrice: 20,
    },
    image: {
      url: orangeBeverage,
      alt: 'glass of orange juice',
    }
  },
  {
    id: createId(),
    name: 'Dozen Eggs',
    rate: 4,
    favorite: false,
    hot: false,
    price: {
      oldPrice: 15,
      currentPrice: 12,
    },
    image: {
      url: eggs,
      alt: 'eggs',
    }
  },
  {
    id: createId(),
    name: 'Cooking Oil',
    rate: 5,
    favorite: false,
    hot: true,
    price: {
      oldPrice: 20,
      currentPrice: 15,
    },
    image: {
      url: cookingOil,
      alt: 'bottle of oil',
    }
  },
  {
    id: createId(),
    name: 'Body Lotion',
    rate: 3,
    favorite: false,
    hot: false,
    price: {
      oldPrice: 30,
      currentPrice: 20,
    },
    image: {
      url: bodyLotion,
      alt: 'lotion',
    }
  },
]