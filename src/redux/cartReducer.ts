import { AppStateType, InferActionTypes } from "./store";
import { ThunkAction } from "redux-thunk";
import { CartItem } from "../types/types";

const PRODUCT_ADDED = 'groxi/cart/PRODUCT_ADDED';
const PRODUCT_REMOVED = 'groxi/cart/PRODUCT_REMOVED';

const TOTAL_PRODUCTS_CHANGED = 'groxi/cart/TOTAL_PRODUCTS_CHANGED';
const TOTAL_PRICE_CHANGED = 'groxi/cart/TOTAL_PRICE_CHANGED';

let initialState = {
    cart: [] as CartItem[],
    totalProducts: 0,
    totalPrice: 0,
};

const cartReducer = (state = initialState, action: CartActionTypes): InitialStateType => {
    switch (action.type) {
        case PRODUCT_ADDED:
            return _addProduct(state, action.newCartItem);
        case PRODUCT_REMOVED:
            return _removeProduct(state, action.productID);

        case TOTAL_PRODUCTS_CHANGED:
            return _setTotalProducts(state, action.newAmount);
        case TOTAL_PRICE_CHANGED:
            return _setTotalPrice(state, action.newTotalPrice);

        default:
            return state;
    }
}

const _addProduct = (state: InitialStateType, newCartItem: CartItem): InitialStateType => {

    const index = state.cart.findIndex(item => item.product.id === newCartItem.product.id);

    if (index === -1) {
        return {
            ...state,
            cart: [...state.cart, newCartItem],
        };
    } else {
        const newCart = [...state.cart];

        newCart[index].amount = newCart[index].amount + newCartItem.amount;

        return {
            ...state,
            cart: newCart,
        };
    }
};
const _removeProduct = (state: InitialStateType, productID: string): InitialStateType => {

    const newCart = [...state.cart]
    const index = newCart.findIndex(item => item.product.id === productID);

    if (newCart[index].amount === 1) {
        return {
            ...state,
            cart: [...state.cart].filter(item => item.product.id !== productID),
        }
    } else {
        newCart[index].amount -= 1;
        return {
            ...state,
            cart: newCart,
        }
    }
};

const _setTotalProducts = (state: InitialStateType, newAmount: number): InitialStateType => {
    return {
        ...state,
        totalProducts: newAmount,
    }
};
const _setTotalPrice = (state: InitialStateType, newTotalPrice: number): InitialStateType => {
    return {
        ...state,
        totalPrice: newTotalPrice,
    }
};

export const cartActions = {
    productAdded: (newCartItem: CartItem) => ({ type: PRODUCT_ADDED, newCartItem } as const),
    productRemoved: (productID: string) => ({ type: PRODUCT_REMOVED, productID } as const),

    totalProductsChanged: (newAmount: number) => ({ type: TOTAL_PRODUCTS_CHANGED, newAmount } as const),
    totalPriceChanged: (newTotalPrice: number) => ({ type: TOTAL_PRICE_CHANGED, newTotalPrice } as const),
}

// export const getPostsThunkCreator = (startIndex: number, endIndex: number, filter: PostFilterType): ThunkType =>
//     async (dispatch) => {
//         dispatch(blogActions.isFetchingPostsSwitched(true));

//         const payload = blogAPI.getPosts(startIndex, endIndex, filter);

//         dispatch(blogActions.postsChanged(payload.posts));
//         dispatch(blogActions.totalPostsCountChanged(payload.totalItems));

//         dispatch(blogActions.isFetchingPostsSwitched(false));
//     }

// export const getRecentThunkCreator = (amount: number): ThunkType =>
//     async (dispatch) => {
//         dispatch(blogActions.isFetchingRecentSwitched(true));

//         const payload = blogAPI.getRecent(amount);
//         dispatch(blogActions.recentChanged(payload));

//         dispatch(blogActions.isFetchingRecentSwitched(false));
//     }

export type InitialStateType = typeof initialState;
type CartActionTypes = InferActionTypes<typeof cartActions>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, CartActionTypes>;

export default cartReducer;