import React from 'react';
import './TrendingProducts.scss';
import { ProductItem } from '../../../common/ProductItem/ProductItem';
import { v1 as createId } from 'uuid';

import meat from '../../../../assets/images/products/meat.png';
import broccoli from '../../../../assets/images/products/broccoli.png';
import strawberry from '../../../../assets/images/products/strawberry.png';
import honey from '../../../../assets/images/products/honey.png';
import milk from '../../../../assets/images/products/milk.png';
import mangoBeverage from '../../../../assets/images/products/mangoBeverage.png';
import { ProductType } from '../../../../types/types';


type TrendingProductsPropsType = {}
export const TrendingProducts: React.FC<TrendingProductsPropsType> = (props) => {

  const productList = products.map(p => {
    return <ProductItem key={p.id} className='trending__item' product={p} />
  })

  return (
    <section className="trending">
      <div className="container">
        <div className="trending__body">
          <div className="trending__title title">Most Popular</div>
          <div className="trending__subtitle subtitle">Trending Products</div>
          <div className="trending__products">
            {productList}
          </div>
        </div>
      </div>
    </section>
  );
}

const products: ProductType[] = [
  {
    id: createId(),
    name: 'Beef Steak',
    rate: 3,
    favorite: false,
    hot: true,
    price: {
      currentPrice: 12,
    },
    image: {
      url: meat,
      alt: 'product',
    }
  },
  {
    id: createId(),
    name: 'Broccoli',
    rate: 3,
    favorite: true,
    hot: false,
    price: {
      oldPrice: 20,
      currentPrice: 15,
    },
    image: {
      url: broccoli,
      alt: 'broccoli',
    }
  },
  {
    id: createId(),
    name: 'Strawberries',
    rate: 3,
    favorite: false,
    hot: false,
    price: {
      oldPrice: 30,
      currentPrice: 20,
    },
    image: {
      url: strawberry,
      alt: 'Strawberries',
    }
  },
  {
    id: createId(),
    name: 'Fresh Honey',
    rate: 3,
    favorite: false,
    hot: false,
    price: {
      oldPrice: 50,
      currentPrice: 40,
    },
    image: {
      url: honey,
      alt: 'bottle of honey',
    }
  },
  {
    id: createId(),
    name: 'Fresh Milk',
    rate: 3,
    favorite: false,
    hot: true,
    price: {
      oldPrice: 10,
      currentPrice: 8,
    },
    image: {
      url: milk,
      alt: 'milk',
    }
  },
  {
    id: createId(),
    name: 'Mango Beverage',
    rate: 3,
    favorite: false,
    hot: true,
    price: {
      oldPrice: 22,
      currentPrice: 18,
    },
    image: {
      url: mangoBeverage,
      alt: 'mango beverage',
    }
  },
]