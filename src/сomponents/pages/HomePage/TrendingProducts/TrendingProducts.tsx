import React, { useEffect } from 'react';
import './TrendingProducts.scss';
import { ProductItem } from '../../../common/ProductItem/ProductItem';
import { productsAPI } from '../../../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { selectTrending } from '../../../../redux/productsSelectors';
import { getTrendingProductsThunkCreator } from '../../../../redux/productsReducer';


type TrendingProductsPropsType = {}
export const TrendingProducts: React.FC<TrendingProductsPropsType> = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingProductsThunkCreator(6));
  }, [])

  const trendingProducts = useSelector(selectTrending);

  const productList = trendingProducts.map(p => {
    return <ProductItem key={p.id} className='trending__item' product={p} />
  });

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