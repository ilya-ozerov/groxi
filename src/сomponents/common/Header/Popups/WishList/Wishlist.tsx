import React from 'react';
import "./Wishlist.scss"
import { useDispatch, useSelector } from 'react-redux';
import { selectFavourites } from '../../../../../redux/productsSelectors';
import { ProductType } from '../../../../../types/types';

import { CloseOutlined } from '@ant-design/icons'
import { toggleFavouriteThunkCreator } from '../../../../../redux/productsReducer';
import { Link } from 'react-router-dom';

export const Wishlist: React.FC = (props) => {

    const favourites = useSelector(selectFavourites);

    const favouritesList = favourites.map(product => {
        return <WishListItem
            key={product.id}
            product={product}
        />
    })

    if (favourites.length > 0) {
        return (
            <div className="wishlist">
                {favouritesList}
            </div>
        );
    } else {
        return (
            <div className="wishlist-empty">
                Your wishlist is empty
            </div>
        );
    }
}
type WishListItemProps = {
    product: ProductType;
}
const WishListItem: React.FC<WishListItemProps> = ({ product }) => {

    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(toggleFavouriteThunkCreator(product.id, false));
    }

    return (
        <div className="wishlist__item">

            <Link to={'/detail/' + product.id} className="wishlist__link">
                <div className="wishlist__image">
                    <img src={product.image.url} alt={product.image.alt} />
                </div>
                <div className="wishlist__name">{product.name}</div>
                <div className="wishlist__price">${product.price.currentPrice}</div>
            </Link>


            <div onClick={onClose} className="wishlist__close">
                <CloseOutlined />
            </div>
        </div>
    );
}