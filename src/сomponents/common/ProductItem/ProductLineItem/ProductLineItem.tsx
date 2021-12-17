import React, { useEffect, useState } from 'react';
import './ProductLineItem.scss';
import { Rate } from 'antd';
import { ProductType } from '../../../../types/types';
import { HeartFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavouriteThunkCreator } from '../../../../redux/productsReducer';
import { selectFavourites } from '../../../../redux/productsSelectors';

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

      <Link to={'/detail/' + product.id}>

        <div className="line-product-item__body">

          <div className="line-product-item__image">
            <img src={product.image.url} alt={product.image.alt} />
          </div>

          <div className="line-product-item__info">
            <div className="line-product-item__name">
              {product.name}
            </div>
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
            <div className="line-product-item__button button">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </Link>

    </div>
  );
}

type ProductLineItemProps = {
  className: string;
  product: ProductType;
}