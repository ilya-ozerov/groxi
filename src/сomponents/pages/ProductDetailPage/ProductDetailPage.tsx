import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsAPI } from '../../../api/api';
import { ProductDetailType } from '../../../types/types';
import { Banner } from '../../common/Banner/Banner';
import { Detail } from './Detail/Detail';
import './ProductDetailPage.scss';
import { ProductInformation } from './ProductInformation/ProductInformation';
import { Related } from './Related/Related';

type ParamsType = {
    id: string;
}

export const ProductDetailPage: React.FC = () => {

    const [product, setProduct] = useState<ProductDetailType | null>(null);
    const params = useParams<ParamsType>();

    useEffect(() => {
        let productDetail = productsAPI.getDetailProduct(params.id);
        setProduct(productDetail);
    }, [params])

    return (
        <React.Fragment>
            <Banner componentName="Product Detail" title="Product Detail" />
            <Detail product={product} />
            <ProductInformation description={product?.description ? product?.description : []} />
            <Related />
        </React.Fragment>
    );
}

