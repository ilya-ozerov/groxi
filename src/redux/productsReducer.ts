import { AppStateType, InferActionTypes } from "./store";
import { ThunkAction } from "redux-thunk";
import { ProductType } from "../types/types";

const PRODUCTS_CHANGED = 'groxi/products/PRODUCTS_CHANGED';
const TRENDING_CHANGED = 'groxi/products/TRENDING_CHANGED';
const FAVOURITES_CHANGED = 'groxi/products/FAVOURITES_CHANGED';

const IS_FETCHING_PRODUCTS_SWITCHED = 'groxi/products/IS_FETCHING_PRODUCTS_SWITCHED';
const IS_FETCHING_TRENDING_SWITCHED = 'groxi/products/IS_FETCHING_TRENDING_SWITCHED';
const IS_FETCHING_FAVOURITES_SWITCHED = 'groxi/products/IS_FETCHING_FAVOURITES_SWITCHED';

const TOTAL_PRODUCTS_COUNT_CHANGED = 'groxi/products/TOTAL_PRODUCTS_COUNT_CHANGED';
const CURRENT_PAGE_CHANGED = 'groxi/products/CURRENT_PAGE_CHANGED';

let initialState = {
    products: [] as ProductType[],
    trendingProducts: [] as ProductType[],
    favouritesProducts: [] as ProductType[],

    isFetchingProducts: false,
    isFetchingTrending: false,
    isFetchingFavourites: false,

    pageSize: 9, // never changed
    totalProductsCount: 0,
    currentPage: 1,
};

const productsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case PRODUCTS_CHANGED:
            return _setProducts(state, action.newProducts);
        case TRENDING_CHANGED:
            return _setTrendingProducts(state, action.newProducts);
        case FAVOURITES_CHANGED:
            return _setFavouritesProducts(state, action.newProducts);

        case IS_FETCHING_PRODUCTS_SWITCHED:
            return _switchIsFetchingProducts(state, action.fetchingValue);
        case IS_FETCHING_TRENDING_SWITCHED:
            return _switchIsFetchingTrending(state, action.fetchingValue);
        case IS_FETCHING_FAVOURITES_SWITCHED:
            return _switchIsFetchingFavourites(state, action.fetchingValue);

        case TOTAL_PRODUCTS_COUNT_CHANGED:
            return _setTotalProductsCount(state, action.count);
        case CURRENT_PAGE_CHANGED:
            return _setCurrentPage(state, action.page);

        default:
            return state;
    }
}

const _setProducts = (state: InitialStateType, newProducts: ProductType[]): InitialStateType => {
    return {
        ...state,
        products: [...newProducts],
    };
};
const _setTrendingProducts = (state: InitialStateType, newProducts: ProductType[]): InitialStateType => {
    return {
        ...state,
        trendingProducts: [...newProducts],
    };
};
const _setFavouritesProducts = (state: InitialStateType, newProducts: ProductType[]): InitialStateType => {
    return {
        ...state,
        favouritesProducts: [...newProducts],
    };
};

const _switchIsFetchingProducts = (state: InitialStateType, fetchingValue: boolean): InitialStateType => {
    return {
        ...state,
        isFetchingProducts: fetchingValue,
    };
};
const _switchIsFetchingTrending = (state: InitialStateType, fetchingValue: boolean): InitialStateType => {
    return {
        ...state,
        isFetchingTrending: fetchingValue,
    };
};
const _switchIsFetchingFavourites = (state: InitialStateType, fetchingValue: boolean): InitialStateType => {
    return {
        ...state,
        isFetchingFavourites: fetchingValue,
    };
};

const _setTotalProductsCount = (state: InitialStateType, count: number): InitialStateType => {
    return {
        ...state,
        totalProductsCount: count,
    };
};
const _setCurrentPage = (state: InitialStateType, page: number): InitialStateType => {
    return {
        ...state,
        currentPage: page,
    };
};

export const productsActions = {
    productsChanged: (newProducts: ProductType[]) => ({ type: PRODUCTS_CHANGED, newProducts } as const),
    trendingChanged: (newProducts: ProductType[]) => ({ type: TRENDING_CHANGED, newProducts } as const),
    favouritesChanged: (newProducts: ProductType[]) => ({ type: FAVOURITES_CHANGED, newProducts } as const),

    isFetchingProductsSwitched: (fetchingValue: boolean) => ({ type: IS_FETCHING_PRODUCTS_SWITCHED, fetchingValue } as const),
    isFetchingTrendingSwitched: (fetchingValue: boolean) => ({ type: IS_FETCHING_TRENDING_SWITCHED, fetchingValue } as const),
    isFetchingFavouritesSwitched: (fetchingValue: boolean) => ({ type: IS_FETCHING_FAVOURITES_SWITCHED, fetchingValue } as const),

    currentPageChanged: (page: number) => ({ type: CURRENT_PAGE_CHANGED, page } as const),
    totalProductsCountChanged: (count: number) => ({ type: TOTAL_PRODUCTS_COUNT_CHANGED, count } as const),
}

export type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof productsActions>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export default productsReducer;