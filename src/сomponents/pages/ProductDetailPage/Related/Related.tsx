import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingProductsThunkCreator } from '../../../../redux/productsReducer';
import { selectTrending } from '../../../../redux/productsSelectors';
import { ProductDefault } from '../../../common/ProductItem/ProductDefault/ProductDefault';
import './Related.scss';

type RelatedPropsType = {};
export const Related: React.FC<RelatedPropsType> = (props) => {

    const dispatch = useDispatch();

    // request trending products
    useEffect(() => {
        dispatch(getTrendingProductsThunkCreator(4));
    }, []);

    const products = useSelector(selectTrending);

    const productsList = products.map(p => {
        return <ProductDefault key={p.id} className="related__product" product={p} />
    })

    return (
        <section className="related">
            <div className="container">
                <div className="related__body">
                    <div className="related__title">Related Products</div>
                    <div className="related__products">
                        {productsList}
                    </div>
                </div>
            </div>
        </section>
    );
}

