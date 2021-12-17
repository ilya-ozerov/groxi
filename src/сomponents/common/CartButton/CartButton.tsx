import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../redux/cartReducer";
import { selectCart, selectTotalPrice, selectTotalProductsInCart } from "../../../redux/cartSelectors";
import { ProductType } from "../../../types/types";
import { AmountCart } from "../AmountCart/AmountCart";

type CartButtonProps = {
    product: ProductType | null;
    buttonStyle: string;
    amountCartStyle: string;
}
export const CartButton: React.FC<CartButtonProps> = (props) => {

    const dispatch = useDispatch();

    const totalProducts = useSelector(selectTotalProductsInCart);
    const totalPrice = useSelector(selectTotalPrice);

    const cart = useSelector(selectCart);
    const currentProduct = cart.find(el => el.product.id === props.product?.id);

    const addToCart = () => {
        if (props.product) {
            dispatch(cartActions.productAdded({
                amount: 1,
                product: props.product,
            }));
            dispatch(cartActions.totalProductsChanged(totalProducts + 1))
            dispatch(cartActions.totalPriceChanged(totalPrice + props.product.price.currentPrice))
        }
    };
    const removeFromCart = () => {
        if (props.product) {
            dispatch(cartActions.productRemoved(props.product.id));
            dispatch(cartActions.totalProductsChanged(totalProducts - 1))
            dispatch(cartActions.totalPriceChanged(totalPrice - props.product.price.currentPrice))
        }
    };

    console.log("Render CartButton")

    return (
        <div className={`${props.buttonStyle} button`}>
            {
                !currentProduct && <button onClick={addToCart}>Add to cart</button>
            }
            {
                currentProduct && currentProduct.amount > 0 &&
                <AmountCart
                    className={props.amountCartStyle}
                    amount={currentProduct.amount}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            }

        </div>
    );
}