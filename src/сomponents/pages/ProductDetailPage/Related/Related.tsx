import React from 'react';
import { products } from '../../../../api/api';
import { ProductItem } from '../../../common/ProductItem/ProductItem';
import './Related.scss';

type RelatedPropsType = {};
export const Related: React.FC<RelatedPropsType> = (props) => {

    const productsList = products.slice(0, 4).map(p => {
        return <ProductItem key={p.id} className="related__product" product={p} />
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

