import React, { useEffect, useState } from 'react';
import './ProductLineItem.scss';
import { Rate } from 'antd';
import { ProductType } from '../../../../types/types';
import { HeartFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavouriteThunkCreator } from '../../../../redux/productsReducer';
import { selectFavourites } from '../../../../redux/productsSelectors';
import { CartButton } from '../../CartButton/CartButton';

export const ProductLineItem: React.FC<ProductLineItemProps> = ({ product, className }) => {

  const dispatch = useDispatch();

  const addToFavourites = () => {
    dispatch(toggleFavouriteThunkCreator(product.id, true));
  };

  const removeToFavourites = () => {
    dispatch(toggleFavouriteThunkCreator(product.id, false));
  };

  const [isFavourite, setIsFavourite] = useState(false);
  const favourites = useSelector(selectFavourites);

  useEffect(() => {
    let index = favourites.findIndex(el => el.id === product.id);

    if (index === -1) {
      setIsFavourite(false);
    } else {
      setIsFavourite(true);
    }

  }, [favourites]);

  return (
    <div className={`${className} line-product-item`}>

      {product.hot && <div className="line-product-item__label">Hot</div>}

      {isFavourite &&
        <div onClick={removeToFavourites} className="line-product-item__favorite line-product-item__favorite-active">
          <HeartFilled />
        </div>
      }

      {!isFavourite &&
        <div onClick={addToFavourites} className="line-product-item__favorite">
          <HeartFilled />
        </div>
      }

      <div className="line-product-item__body">

        <div className="line-product-item__image">
          <Link to={'/detail/' + product.id}>
            <img src={product.image.url} alt={product.image.alt} />
          </Link>
        </div>

        <div className="line-product-item__info">
          <Link to={'/detail/' + product.id}>
            <div className="line-product-item__name">
              {product.name}
            </div>
          </Link>
          <div className="line-product-item__rate">
            <Rate disabled defaultValue={product.rate} />
          </div>
          <div className="line-product-item__price">
            {product.price.oldPrice &&
              <React.Fragment>
                <span>${product.price.oldPrice}</span> ${product.price.currentPrice}
              </React.Fragment>
            }
            {!product.price.oldPrice &&
              <React.Fragment>${product.price.currentPrice}</React.Fragment>
            }
          </div>

          <CartButton
            product={product}
            amountCartStyle="line-product-item__amount"
            buttonStyle="line-product-item__button"
          />
        </div>
      </div>

    </div>
  );
}

type ProductLineItemProps = {
  className: string;
  product: ProductType;
}