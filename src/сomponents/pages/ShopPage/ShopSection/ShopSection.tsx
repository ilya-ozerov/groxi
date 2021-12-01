import React from 'react';
import { AppstoreFilled, BarsOutlined } from '@ant-design/icons';
import './ShopSection.scss';
import { Paginator } from '../../../common/Paginator/Paginator';

import { ProductItem } from '../../../common/ProductItem/ProductItem';

import { productsAPI } from '../../../../api/api';
import { ShopSidebar } from './ShopSidebar/ShopSidebar';


export const ShopSection: React.FC<ShopSectionPropsType> = (props) => {

  const productList = productsAPI.getProducts(0, 9).map(p => {
    return <ProductItem key={p.id} className='trending__item' product={p} />
  })

  return (
    <section className="shop-section">
      <div className="container">

        <div className="shop-section__body">
          <ShopSidebar />

          <div className="shop-section__shop">
            <div className="shop-section__settings">
              <div className="shop-section__view">
                <div className="shop-section__mode">
                  <div className="shop-section__icon">
                    <AppstoreFilled />
                  </div>
                  <div className="shop-section__icon">
                    <BarsOutlined />
                  </div>
                </div>
                <div className="shop-section__total">
                  Showing 1–9 of {productsAPI.getTotalCount()} results
                </div>
              </div>
              <div className="shop-section__sorting">
                <select>
                  <option value="default">Default Sorting</option>
                  <option value="rate">Rate</option>

                  <option value="lowPrice">Price: Low to High</option>
                  <option value="default">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="shop-section__products">
              {productList}
            </div>
            <Paginator className="shop-section__paginator" />
          </div>
        </div>
      </div>
    </section>
  );
}

type ShopSectionPropsType = {

}