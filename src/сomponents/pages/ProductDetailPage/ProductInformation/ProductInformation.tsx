import React from 'react';
import { ReviewType } from '../../../../types/types';
import './ProductInformation.scss';

type ProductInformationPropsType = {
    description: string[];
    reviews?: ReviewType[];
    additional?: string;
};
export const ProductInformation: React.FC<ProductInformationPropsType> = (props) => {

    const information = props.description.map((str, i) => {
        return <p key={i}>{str}</p>
    });

    return (
        <section className="product-information">

            <div className="container">
                <div className="product-information__body">
                    <div className="product-information__nav">
                        <ul className="product-information__list">
                            <li className="product-information__active">Description</li>
                            <li>Additional Information</li>
                            <li>Reviews</li>
                        </ul>

                    </div>
                    <div className="product-information__info">
                        <div className="product-information__text">
                            {information}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

