import React from 'react';
import './ProductItem.scss';
import { Rate } from 'antd';
import { ProductType } from '../../../types/types';
import { HeartFilled } from '@ant-design/icons';
import { Link, NavLink, Redirect } from 'react-router-dom';

export const ProductItem: React.FC<ProductItemProps> = ({ className, product }) => {
  return (
    <div className={`${className} product-item`}>

      {product.hot && <div className="product-item__label">Hot</div>}

      {product.favorite &&
        <div className="product-item__favorite favorite-active">
          <HeartFilled />
        </div>
      }

      {!product.favorite &&
        <div className="product-item__favorite">
          <HeartFilled />
        </div>
      }

      <Link to={'/detail/' + product.id}>
        <div className="product-item__image">
          <img src={product.image.url} alt={product.image.alt} />
        </div>
        <div className="product-item__info">
          <div className="product-item__rate">
            <Rate disabled defaultValue={product.rate} />
          </div>
          <div className="product-item__name">{product.name}</div>
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
        </div>
      </Link>


      <div className="product-item__button button">
        <button>Add to cart</button>
      </div>

    </div>
  );
}

type ProductItemProps = {
  className: string;
  product: ProductType;
}