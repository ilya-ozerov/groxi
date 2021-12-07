import React, { useEffect } from 'react';
import { AppstoreFilled, BarsOutlined } from '@ant-design/icons';
import './ShopSection.scss';
import { Paginator } from '../../../common/Paginator/Paginator';

import { ProductItem } from '../../../common/ProductItem/ProductItem';

import { ShopSidebar } from './ShopSidebar/ShopSidebar';
import { getProductsThunkCreator } from '../../../../redux/productsReducer';
import { selectCurrentFilter, selectFirstProductIndex, selectLastProductIndex, selectProducts, selectTotalProductsCount } from '../../../../redux/productsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { ShopSectionSort } from './ShopSectionSort';


export const ShopSection: React.FC<ShopSectionPropsType> = (props) => {

  const dispatch = useDispatch();
  const currentFilter = useSelector(selectCurrentFilter);

  const firstProductIndex = useSelector(selectFirstProductIndex);
  const lastProductIndex = useSelector(selectLastProductIndex);

  // Updating a product array when updating currentFilter or firstProductIndex or lastProductIndex;
  useEffect(() => {
    console.log('Shop Page request products');
    dispatch(getProductsThunkCreator(firstProductIndex, lastProductIndex, currentFilter));
  }, [currentFilter, firstProductIndex, lastProductIndex]);

  const products = useSelector(selectProducts);
  const totalProductsCount = useSelector(selectTotalProductsCount);

  const productList = products.map(p => {
    return <ProductItem key={p.id} className='shop-section__item' product={p} />
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
                  Showing {firstProductIndex + 1}–{lastProductIndex > totalProductsCount ? totalProductsCount : lastProductIndex} of {totalProductsCount} results
                </div>
              </div>
              <ShopSectionSort />
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