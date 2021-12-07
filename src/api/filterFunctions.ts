import { ProductType, SortingType, TagType } from "../types/types";
import { intersection, isEqual } from "underscore";

export const filterBetweenPrices = (array: ProductType[], topPrice: number, bottomPrice: number): ProductType[] => {
    if (array.length < 0) return array;

    return array.filter(item => item.price.currentPrice >= bottomPrice && item.price.currentPrice <= topPrice);
}

const _compareFunction = {
    lowPrice: (a: ProductType, b: ProductType) => {
        if (a.price.currentPrice < b.price.currentPrice) {
            return -1;
        }
        if (a.price.currentPrice > b.price.currentPrice) {
            return 1;
        }
        return 0;
    },
    highPrice: (a: ProductType, b: ProductType) => {
        if (a.price.currentPrice > b.price.currentPrice) {
            return -1;
        }
        if (a.price.currentPrice < b.price.currentPrice) {
            return 1;
        }
        return 0;
    },
    rate: (a: ProductType, b: ProductType) => {
        if (a.rate > b.rate) {
            return -1;
        }
        if (a.rate < b.rate) {
            return 1;
        }
        return 0;
    },
}

export const sortingProducts = (products: ProductType[], sorting: SortingType) => {

    if (sorting === "default") return products;

    const newProducts = [...products];

    switch (sorting) {
        case "price:HighToLow": {
            return newProducts.sort(_compareFunction.highPrice);
        }
        case "price:LowToHigh": {
            return newProducts.sort(_compareFunction.lowPrice);
        }
        case "rate": {
            return newProducts.sort(_compareFunction.rate);
        }
    }

}

export const filterByTags = (array: ProductType[], tags: TagType[]): ProductType[] => {

    const newArray = array.filter(item => {

        // finding intersections in an array
        let intersectionValues = intersection(item.tags, tags);

        // comparison of intersection and array of tags
        return isEqual(intersectionValues.sort(), tags.sort());
    });

    return newArray;
}