import { AppStateType, InferActionTypes } from "./store";
import { ThunkAction } from "redux-thunk";
import { FilterType, ProductType } from "../types/types";
import { productsAPI } from "../api/productsAPI";

const PRODUCTS_CHANGED = 'groxi/products/PRODUCTS_CHANGED';
const TRENDING_CHANGED = 'groxi/products/TRENDING_CHANGED';
const FAVOURITES_CHANGED = 'groxi/products/FAVOURITES_CHANGED';

const IS_FETCHING_PRODUCTS_SWITCHED = 'groxi/products/IS_FETCHING_PRODUCTS_SWITCHED';
const IS_FETCHING_TRENDING_SWITCHED = 'groxi/products/IS_FETCHING_TRENDING_SWITCHED';
const IS_FETCHING_FAVOURITES_SWITCHED = 'groxi/products/IS_FETCHING_FAVOURITES_SWITCHED';

const TOTAL_PRODUCTS_COUNT_CHANGED = 'groxi/products/TOTAL_PRODUCTS_COUNT_CHANGED';
const CURRENT_PAGE_CHANGED = 'groxi/products/CURRENT_PAGE_CHANGED';

const CURRENT_FILTER_CHANGED = 'groxi/products/CURRENT_FILTER_CHANGED';

const FIRST_PRODUCT_INDEX_CHANGED = 'groxi/products/FIRST_PRODUCT_INDEX_CHANGED';
const LAST_PRODUCT_INDEX_CHANGED = 'groxi/products/LAST_PRODUCT_INDEX_CHANGED';

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

    currentFilter: {
        query: '',
        price: null,
        sorting: "default",
        tags: [],
    } as FilterType,


    firstProductIndex: 0, // current index of first product on page
    lastProductIndex: 9, // current index of last product on page
};

const productsReducer = (state = initialState, action: ProductsActionTypes): InitialStateType => {
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

        case CURRENT_FILTER_CHANGED:
            return _setCurrentFilter(state, action.filter);

        case FIRST_PRODUCT_INDEX_CHANGED:
            return _setFirstProductIndex(state, action.index);
        case LAST_PRODUCT_INDEX_CHANGED:
            return _setLastProductIndex(state, action.index);

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

const _setCurrentFilter = (state: InitialStateType, filter: FilterType): InitialStateType => {
    return {
        ...state,
        currentFilter: filter,
    };
};

const _setFirstProductIndex = (state: InitialStateType, index: number): InitialStateType => {
    return {
        ...state,
        firstProductIndex: index,
    };
};
const _setLastProductIndex = (state: InitialStateType, index: number): InitialStateType => {
    return {
        ...state,
        lastProductIndex: index,
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

    currentFilterChanged: (filter: FilterType) => ({ type: CURRENT_FILTER_CHANGED, filter } as const),

    firstProductIndexChanged: (index: number) => ({ type: FIRST_PRODUCT_INDEX_CHANGED, index } as const),
    lastProductIndexChanged: (index: number) => ({ type: LAST_PRODUCT_INDEX_CHANGED, index } as const),
}

export const getProductsThunkCreator = (startIndex: number, endIndex: number, filter: FilterType): ThunkType =>
    async (dispatch) => {
        dispatch(productsActions.isFetchingProductsSwitched(true));

        const payload = productsAPI.getProducts(startIndex, endIndex, filter);
        dispatch(productsActions.productsChanged(payload.products));
        dispatch(productsActions.totalProductsCountChanged(payload.totalItems));

        dispatch(productsActions.isFetchingProductsSwitched(false));
    }

export const getTrendingProductsThunkCreator = (amount: number): ThunkType =>
    async (dispatch) => {
        dispatch(productsActions.isFetchingTrendingSwitched(true));

        const products = productsAPI.getTrendingProducts(0, amount);
        dispatch(productsActions.trendingChanged(products));

        dispatch(productsActions.isFetchingTrendingSwitched(false));
    }

export const getFavouritesThunkCreator = (): ThunkType =>
    async (dispatch) => {
        const favourites = productsAPI.getFavourites();
        dispatch(productsActions.favouritesChanged(favourites));
    }

export const toggleFavouriteThunkCreator = (productID: string, toggleValue: boolean): ThunkType =>
    async (dispatch) => {
        const payload = productsAPI.toggleFavourite(productID, toggleValue);

        if (payload.resultCode === 0) {
            const favourites = productsAPI.getFavourites();
            dispatch(productsActions.favouritesChanged(favourites));
        }
    }

export type InitialStateType = typeof initialState;
type ProductsActionTypes = InferActionTypes<typeof productsActions>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ProductsActionTypes>;

export default productsReducer;