import React, { useEffect } from 'react';
import './FeaturedProducts.scss';

import background from '../../../../assets/images/featuredProducts/background.png';
import { ProductItem } from '../../../common/ProductItem/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentFilter, selectProducts } from '../../../../redux/productsSelectors';
import { getProductsThunkCreator } from '../../../../redux/productsReducer';
import { FeaturedMenu } from './FeaturedMenu/FeaturedMenu';

export const FeaturedProducts: React.FC<FeaturedProductsProps> = (props) => {

  const dispatch = useDispatch();

  const filter = useSelector(selectCurrentFilter);

  useEffect(() => {
    console.log('Home Page request products');
    dispatch(getProductsThunkCreator(0, 6, filter));
  }, [filter])

  const products = useSelector(selectProducts);


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
          <FeaturedMenu />
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