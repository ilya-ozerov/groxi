import React, { useState } from 'react';
import { ProductDetailType, ProductType } from '../../../../types/types';
import './Detail.scss';


import arrow from '../../../../assets/images/detailPage/arrow.png';

import facebook from '../../../../assets/images/detailPage/socials/Facebook.png';
import linkedin from '../../../../assets/images/detailPage/socials/Linkedin.png';
import twitter from '../../../../assets/images/detailPage/socials/Twitter.png';
import pinterest from '../../../../assets/images/detailPage/socials/Pinterest.png';
import instagram from '../../../../assets/images/detailPage/socials/Instagram.png';

import medal from '../../../../assets/images/detailPage/banners/medal.png';
import phone from '../../../../assets/images/detailPage/banners/phone.png';

import { Rate } from 'antd';
import { CartButton } from '../../../common/CartButton/CartButton';
import { detailToProduct } from '../../../../api/productsAPI';

type DetailPropsType = {
    product?: ProductDetailType | null;
};
export const Detail: React.FC<DetailPropsType> = ({ product }) => {

    const [bigImageIndex, setBigImageIndex] = useState(0);


    const nextImage = () => {
        if (product?.images && product.images.length > 0) {
            setBigImageIndex(current => {
                if (current < product.images.length - 1) {
                    return current + 1;
                }
                return 0;
            })
        }
    }

    const prevImage = () => {
        if (product?.images && product.images.length > 0) {
            setBigImageIndex(current => {
                if (current > 0) {
                    return current - 1;
                }
                return product.images.length - 1;
            })
        }
    }

    const images = product?.images.map((image, i) => {
        return (
            <div onClick={() => { setBigImageIndex(i) }} key={i} className={bigImageIndex === i ? "detail-gallery__image detail-gallery__active-image" : "detail-gallery__image"}>
                <img src={image.url} alt={image.alt} />
            </div>
        );
    })

    return (
        <section className="detail">
            <div className="container">
                <div className="detail__body">
                    <div className="detail__gallery detail-gallery">
                        <div onClick={prevImage} className="detail-gallery__prev">
                            <img src={arrow} alt="prev button" />
                        </div>

                        <div className="detail-gallery__images">
                            {images?.slice(bigImageIndex, bigImageIndex + 5)}
                        </div>

                        <div className="detail-gallery__mobile-images">
                            {images?.slice(bigImageIndex, bigImageIndex + 4)}
                        </div>

                        <div onClick={nextImage} className="detail-gallery__next">
                            <img src={arrow} alt="next button" />
                        </div>
                    </div>
                    <div className="detail__image">
                        <img src={product?.images[bigImageIndex].url ? product?.images[bigImageIndex].url : '#'} alt={product?.images[bigImageIndex].alt} />
                    </div>
                    <div className="detail__information">
                        <div className="detail__title">{product?.name}</div>
                        <div className="detail__rate">
                            <Rate disabled value={product?.rate} />
                        </div>
                        <div className="detail__price">
                            {product?.price.oldPrice &&
                                <React.Fragment>
                                    <span>${product.price.oldPrice}</span> ${product.price.currentPrice}
                                </React.Fragment>
                            }
                            {!product?.price.oldPrice &&
                                <React.Fragment>${product?.price.currentPrice}</React.Fragment>
                            }
                        </div>

                        <div className="detail__cart">
                            <CartButton
                                product={detailToProduct(product as ProductDetailType)}
                                amountCartStyle="detail__amount"
                                buttonStyle="detail__button"
                            />
                        </div>


                        <div className="detail__overview">
                            <div className="detail__subtitle">Overview:</div>
                            <div className="detail__text">
                                {product?.overview}
                            </div>
                        </div>

                        <div className="detail__socials">
                            <div className="detail__subtitle">Share:</div>
                            <div className="detail__social">
                                <img src={facebook} alt="facebook" />
                            </div>
                            <div className="detail__social">
                                <img src={twitter} alt="twitter" />
                            </div>
                            <div className="detail__social">
                                <img src={linkedin} alt="linkedin" />
                            </div>
                            <div className="detail__social">
                                <img src={pinterest} alt="pinterest" />
                            </div>
                            <div className="detail__social">
                                <img src={instagram} alt="instagram" />
                            </div>

                        </div>

                        <div className="detail__banners">
                            <div className="detail__banner detail-banner">
                                <div className="detail-banner__image">
                                    <img src={medal} alt="medal" />
                                </div>

                                <div className="detail-banner__title">100% Guarantee</div>
                            </div>

                            <div className="detail__banner detail-banner">
                                <div className="detail-banner__image">
                                    <img src={phone} alt="phone" />
                                </div>

                                <div className="detail-banner__title">24/7 Service</div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}