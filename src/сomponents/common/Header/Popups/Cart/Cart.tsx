import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../../../../redux/cartReducer';
import { selectCart, selectTotalPrice, selectTotalProductsInCart } from '../../../../../redux/cartSelectors';
import { CartItem } from '../../../../../types/types';
import { AmountCart } from '../../../AmountCart/AmountCart';
import "./Cart.scss";

type CartProps = {
}
export const Cart: React.FC<CartProps> = (props) => {

    const totalItems = useSelector(selectTotalProductsInCart);
    const totalPrice = useSelector(selectTotalPrice);

    const cart = useSelector(selectCart);

    const itemsList = cart.map(item => {
        return <Item key={item.product.id} cartItem={item} totalPrice={totalPrice} totalProducts={totalItems} />
    })



    if (cart.length > 0) {
        return (
            <div className="cart">
                <div className="cart__total-items">Total items: {totalItems}</div>
                <div className="cart__items">
                    {itemsList}
                </div>
                <div className="cart__total-price">Total price: ${totalPrice}</div>
                <div className="cart__button button">
                    <button>Buy</button>
                </div>

            </div>
        );
    } else {
        return (
            <div className="empty-cart">
                Your cart is empty
            </div>
        );
    }
}

type CartItemProps = {
    cartItem: CartItem;

    totalProducts: number;
    totalPrice: number;
}
const Item: React.FC<CartItemProps> = ({ cartItem, totalPrice, totalProducts }) => {

    const dispatch = useDispatch();
    const addToCart = () => {
        if (cartItem.product) {
            dispatch(cartActions.productAdded({
                amount: 1,
                product: cartItem.product,
            }));
            dispatch(cartActions.totalProductsChanged(totalProducts + 1))
            dispatch(cartActions.totalPriceChanged(totalPrice + cartItem.product.price.currentPrice))
        }
    };
    const removeFromCart = () => {
        if (cartItem.product) {
            dispatch(cartActions.productRemoved(cartItem.product.id));
            dispatch(cartActions.totalProductsChanged(totalProducts - 1))
            dispatch(cartActions.totalPriceChanged(totalPrice - cartItem.product.price.currentPrice))
        }
    };

    return (
        <div className="cart__item">

            <Link className="cart__link" to={'/detail/' + cartItem.product.id}>
                <div className="cart__image">
                    <img src={cartItem.product.image.url} alt={cartItem.product.image.alt} />
                </div>
                <div className="cart__name">{cartItem.product.name}</div>
            </Link>
            <AmountCart className="cart__amount"
                amount={cartItem.amount}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            />

            <div className="cart__price">${cartItem.amount * cartItem.product.price.currentPrice}</div>

        </div>
    );
}

