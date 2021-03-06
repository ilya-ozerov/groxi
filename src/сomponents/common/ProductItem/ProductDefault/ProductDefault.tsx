import React, { useEffect, useState } from 'react';
import './ProductDefault.scss';
import { Rate } from 'antd';
import { ProductType } from '../../../../types/types';
import { HeartFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavouriteThunkCreator } from '../../../../redux/productsReducer';
import { selectFavourites } from '../../../../redux/productsSelectors';
import { Link } from 'react-router-dom';
import { CartButton } from '../../CartButton/CartButton';

export const ProductDefault: React.FC<ProductDefaultProps> = ({ className, product }) => {

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
    <div className={`${className} product-item`}>

      {product.hot && <div className="product-item__label">Hot</div>}

      {isFavourite &&
        <div onClick={removeToFavourites} className="product-item__favorite favorite-active">
          <HeartFilled />
        </div>
      }

      {!isFavourite &&
        <div onClick={addToFavourites} className="product-item__favorite">
          <HeartFilled />
        </div>
      }

      <div className="product-item__image">
        <Link to={'/detail/' + product.id}>
          <img src={product.image.url} alt={product.image.alt} />
        </Link>
      </div>
      <div className="product-item__info">
        <div className="product-item__rate">
          <Rate disabled defaultValue={product.rate} />
        </div>
        <Link to={'/detail/' + product.id}>
          <div className="product-item__name">{product.name}</div>
        </Link>
        <div className="product-item__price">
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
          amountCartStyle="product-item__amount"
          buttonStyle="product-item__button" />
      </div>

    </div>
  );
}
type ProductDefaultProps = {
  className: string;
  product: ProductType;
}