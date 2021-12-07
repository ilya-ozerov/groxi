import { FilterType, ProductType } from "../types/types";
import { AppStateType } from "./store";

export const selectProducts = (state: AppStateType): ProductType[] => {
    return state.products.products;
}
export const selectTrending = (state: AppStateType): ProductType[] => {
    return state.products.trendingProducts;
}
export const selectFavourites = (state: AppStateType): ProductType[] => {
    return state.products.favouritesProducts;
}

export const selectIsFetchingFavourites = (state: AppStateType): boolean => {
    return state.products.isFetchingFavourites;
}
export const selectIsFetchingProducts = (state: AppStateType): boolean => {
    return state.products.isFetchingProducts;
}
export const selectIsFetchingTrending = (state: AppStateType): boolean => {
    return state.products.isFetchingTrending;
}


export const selectCurrentPage = (state: AppStateType): number => {
    return state.products.currentPage;
}
export const selectPageSize = (state: AppStateType): number => {
    return state.products.pageSize;
}
export const selectTotalProductsCount = (state: AppStateType): number => {
    return state.products.totalProductsCount;
}

export const selectCurrentFilter = (state: AppStateType): FilterType => {
    return state.products.currentFilter;
}

export const selectFirstProductIndex = (state: AppStateType): number => {
    return state.products.firstProductIndex;
}
export const selectLastProductIndex = (state: AppStateType): number => {
    return state.products.lastProductIndex;
}