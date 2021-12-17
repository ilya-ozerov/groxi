import React from 'react';
import "./AmountCart.scss";
import {
    PlusOutlined,
    MinusOutlined,

} from '@ant-design/icons';

type AmountCartProps = {
    amount: number;
    className: string;

    addToCart?: () => void;
    removeFromCart?: () => void;
}

export const AmountCart: React.FC<AmountCartProps> = (props) => {
    return (
        <div className={`${props.className} amount-cart`}>
            <div onClick={props.removeFromCart} className="amount-cart__minus">
                <MinusOutlined />
            </div>
            <div className="amount-cart__amount">{props.amount}</div>
            <div onClick={props.addToCart} className="amount-cart__plus">
                <PlusOutlined />
            </div>
        </div>

    );
}