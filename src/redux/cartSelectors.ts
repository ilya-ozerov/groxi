import { CartItem } from "../types/types";
import { AppStateType } from "./store";

export const selectCart = (state: AppStateType): CartItem[] => {
    return state.cart.cart;
}

export const selectTotalPrice = (state: AppStateType): number => {
    return state.cart.totalPrice;
}

export const selectTotalProductsInCart = (state: AppStateType): number => {
    return state.cart.totalProducts;
}