import React from 'react';
import './TrendingProducts.scss';
import { ProductItem } from '../ProductItem/ProductItem';
import { v1 as createId } from 'uuid';

import meat from '../../assets/images/products/meat.png';
import { ProductType } from '../../types/types';


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
      oldPrice: 15,
      currentPrice: 12,
    },
    image: {
      url: meat,
      alt: 'product',
    }
  },
  {
    id: createId(),
    name: 'Beef Steak',
    rate: 3,
    favorite: false,
    hot: true,
    price: {
      oldPrice: 15,
      currentPrice: 12,
    },
    image: {
      url: meat,
      alt: 'product',
    }
  },
  {
    id: createId(),
    name: 'Beef Steak',
    rate: 3,
    favorite: false,
    hot: true,
    price: {
      oldPrice: 15,
      currentPrice: 12,
    },
    image: {
      url: meat,
      alt: 'product',
    }
  },
  {
    id: createId(),
    name: 'Beef Steak',
    rate: 3,
    favorite: false,
    hot: true,
    price: {
      oldPrice: 15,
      currentPrice: 12,
    },
    image: {
      url: meat,
      alt: 'product',
    }
  },
  {
    id: createId(),
    name: 'Beef Steak',
    rate: 3,
    favorite: false,
    hot: true,
    price: {
      oldPrice: 15,
      currentPrice: 12,
    },
    image: {
      url: meat,
      alt: 'product',
    }
  },
  {
    id: createId(),
    name: 'Beef Steak',
    rate: 3,
    favorite: false,
    hot: true,
    price: {
      oldPrice: 15,
      currentPrice: 12,
    },
    image: {
      url: meat,
      alt: 'product',
    }
  },
]