import { v1 as createId } from 'uuid';

import { FilterType, ProductDetailType, ProductType } from '../types/types';

import strawberry1 from '../assets/images/detailPage/products/strawberry/strawberry1.png';
import strawberry2 from '../assets/images/detailPage/products/strawberry/strawberry2.jpg';
import strawberry3 from '../assets/images/detailPage/products/strawberry/strawberry3.jpg';
import strawberry4 from '../assets/images/detailPage/products/strawberry/strawberry4.jpg';
import strawberry5 from '../assets/images/detailPage/products/strawberry/strawberry5.jpg';
import strawberry6 from '../assets/images/detailPage/products/strawberry/strawberry6.jpg';

import meat1 from '../assets/images/detailPage/products/meat/meat1.png';
import meat2 from '../assets/images/detailPage/products/meat/meat2.jpg';
import meat3 from '../assets/images/detailPage/products/meat/meat3.png';

import broccoli1 from '../assets/images/detailPage/products/broccoli/broccoli1.png';
import broccoli2 from '../assets/images/detailPage/products/broccoli/broccoli2.jpg';
import broccoli3 from '../assets/images/detailPage/products/broccoli/broccoli3.jpg';
import broccoli4 from '../assets/images/detailPage/products/broccoli/broccoli4.jpg';
import broccoli5 from '../assets/images/detailPage/products/broccoli/broccoli5.jpg';

import honey1 from '../assets/images/detailPage/products/honey/honey1.png';

import milk1 from '../assets/images/detailPage/products/milk/milk1.png';

import mangoBeverage1 from '../assets/images/detailPage/products/mangoBeverage/mangoBeverage1.png';

import bread1 from '../assets/images/detailPage/products/freshBread/freshBread1.png';

import redPepper1 from '../assets/images/detailPage/products/redPepper/redPepper1.png';

import orangeBeverage1 from '../assets/images/detailPage/products/orangeBeverage/orangeBeverage1.png';

import eggs1 from '../assets/images/detailPage/products/eggs/eggs1.png';

import cookingOil1 from '../assets/images/detailPage/products/cookingOil/cookingOil1.png';

import bodyLotion1 from '../assets/images/detailPage/products/bodyLotion/bodyLotion1.png';
import { filterBetweenPrices, filterByQuery, filterByTags, sortingProducts } from './filterFunctions';

const productsDetail: ProductDetailType[] = [
    {
        name: 'Strawberries',
        tags: ["Food", "Fruits", "Health", "Fruits & Vegetables"],
        id: "25e31a60-52c8-11ec-9b2a-0576109a5fb1",
        rate: 3,
        favorite: false,
        hot: false,
        trending: true,
        price: {
            oldPrice: 30,
            currentPrice: 20,
        },
        images: [
            {
                url: strawberry1,
                alt: "strawberry",
            },
            {
                url: strawberry2,
                alt: "strawberry",
            },
            {
                url: strawberry3,
                alt: "strawberry",
            },
            {
                url: strawberry4,
                alt: "strawberry",
            },
            {
                url: strawberry5,
                alt: "strawberry",
            },
            {
                url: strawberry6,
                alt: "strawberry",
            },
        ],
        overview: "Neque porro quisquam est aui dolorem iesum ruia do sit amet, consectetur, adipisci velit, sed quia non num eius modi tempora incidunt ut labore et dolore magna volutatem exercitationem ullam.",
        description: [
            "Ratione volurtatem serui nesciunt neaue porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        ],
        reviews: [
            {
                id: createId(),
                name: "Lorem",
                mark: 4,
                message: "Lorem ipsum dolor sit amet. "
            }
        ],
    },
    {
        name: 'Beef Steak',
        tags: ["Food", "Meat", "Meats, Frozen", "Grocery & Staples"],
        id: "36f95711-52c8-11ec-9b2a-0576109a5fb1",
        rate: 3,
        favorite: false,
        hot: true,
        trending: true,
        price: {
            currentPrice: 12,
        },
        images: [
            {
                url: meat1,
                alt: "meat",
            },
            {
                url: meat2,
                alt: "meat",
            },
            {
                url: meat3,
                alt: "meat",
            },
        ],
        overview: "Neque porro quisquam est aui dolorem iesum ruia do sit amet, consectetur, adipisci velit, sed quia non num eius modi tempora incidunt ut labore et dolore magna volutatem exercitationem ullam.",
        description: [
            "Ratione volurtatem serui nesciunt neaue porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        ],
        reviews: [
            {
                id: createId(),
                name: "Lorem",
                mark: 4,
                message: "Lorem ipsum dolor sit amet. "
            }
        ],
    },
    {
        name: 'Broccoli',
        tags: ["Food", "Health", "Fruits & Vegetables"],
        id: "36f95713-52c8-11ec-9b2a-0576109a5fb1",
        rate: 3,
        favorite: true,
        hot: false,
        trending: true,
        price: {
            oldPrice: 20,
            currentPrice: 15,
        },
        images: [
            {
                url: broccoli1,
                alt: "meat",
            },
            {
                url: broccoli2,
                alt: "meat",
            },
            {
                url: broccoli3,
                alt: "meat",
            },
            {
                url: broccoli4,
                alt: "meat",
            },
            {
                url: broccoli5,
                alt: "meat",
            },
        ],
        overview: "Neque porro quisquam est aui dolorem iesum ruia do sit amet, consectetur, adipisci velit, sed quia non num eius modi tempora incidunt ut labore et dolore magna volutatem exercitationem ullam.",
        description: [
            "Ratione volurtatem serui nesciunt neaue porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        ],
        reviews: [
            {
                id: createId(),
                name: "Lorem",
                mark: 4,
                message: "Lorem ipsum dolor sit amet. "
            }
        ],
    },
    {
        name: 'Fresh Honey',
        tags: ["Health", "Food"],
        id: "36f95715-52c8-11ec-9b2a-0576109a5fb1",
        rate: 3,
        favorite: false,
        hot: false,
        trending: true,
        price: {
            oldPrice: 50,
            currentPrice: 40,
        },
        images: [
            {
                url: honey1,
                alt: "honey",
            },
        ],
        overview: "Neque porro quisquam est aui dolorem iesum ruia do sit amet, consectetur, adipisci velit, sed quia non num eius modi tempora incidunt ut labore et dolore magna volutatem exercitationem ullam.",
        description: [
            "Ratione volurtatem serui nesciunt neaue porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        ],
        reviews: [
            {
                id: createId(),
                name: "Lorem",
                mark: 4,
                message: "Lorem ipsum dolor sit amet. "
            }
        ],
    },
    {
        name: 'Fresh Milk',
        tags: ["Health", "Food", "Breakfast & Dairy", "Dairy"],
        id: "36f95717-52c8-11ec-9b2a-0576109a5fb1",
        rate: 3,
        favorite: false,
        hot: true,
        trending: true,
        price: {
            oldPrice: 10,
            currentPrice: 8,
        },
        images: [
            {
                url: milk1,
                alt: "milk",
            },
        ],
        overview: "Neque porro quisquam est aui dolorem iesum ruia do sit amet, consectetur, adipisci velit, sed quia non num eius modi tempora incidunt ut labore et dolore magna volutatem exercitationem ullam.",
        description: [
            "Ratione volurtatem serui nesciunt neaue porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        ],
        reviews: [
            {
                id: createId(),
                name: "Lorem",
                mark: 4,
                message: "Lorem ipsum dolor sit amet. "
            }
        ],
    },
    {
        name: 'Mango Beverage',
        tags: ["Health", "Food", "Fruits", "Fruits & Vegetables", "Beverages"],
        id: "36f95719-52c8-11ec-9b2a-0576109a5fb1",
        trending: true,
        rate: 4,
        favorite: false,
        hot: true,
        price: {
            oldPrice: 22,
            currentPrice: 18,
        },
        images: [
            {
                url: mangoBeverage1,
                alt: "mango beverage",
            },
        ],
        overview: "Neque porro quisquam est aui dolorem iesum ruia do sit amet, consectetur, adipisci velit, sed quia non num eius modi tempora incidunt ut labore et dolore magna volutatem exercitationem ullam.",
        description: [
            "Ratione volurtatem serui nesciunt neaue porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        ],
        reviews: [
            {
                id: createId(),
                name: "Lorem",
                mark: 4,
                message: "Lorem ipsum dolor sit amet. "
            }
        ],
    },
    {
        name: 'Fresh Bread',
        tags: ["Health", "Food", "Grocery & Staples"],
        id: "36f9571b-52c8-11ec-9b2a-0576109a5fb1",
        rate: 5,
        favorite: false,
        hot: true,
        trending: false,
        price: {
            oldPrice: 15,
            currentPrice: 12,
        },
        images: [
            {
                url: bread1,
                alt: "bread",
            },
        ],
        overview: "Neque porro quisquam est aui dolorem iesum ruia do sit amet, consectetur, adipisci velit, sed quia non num eius modi tempora incidunt ut labore et dolore magna volutatem exercitationem ullam.",
        description: [
            "Ratione volurtatem serui nesciunt neaue porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        ],
        reviews: [
            {
                id: createId(),
                name: "Lorem",
                mark: 4,
                message: "Lorem ipsum dolor sit amet. "
            }
        ],
    },
    {
        name: 'Red Pepper',
        tags: ["Health", "Food", "Fruits & Vegetables"],
        id: "36f9571d-52c8-11ec-9b2a-0576109a5fb1",
        rate: 4,
        favorite: false,
        hot: false,
        trending: false,
        price: {
            oldPrice: 20,
            currentPrice: 15,
        },
        images: [
            {
                url: redPepper1,
                alt: "red pepper",
            },
        ],
        overview: "Neque porro quisquam est aui dolorem iesum ruia do sit amet, consectetur, adipisci velit, sed quia non num eius modi tempora incidunt ut labore et dolore magna volutatem exercitationem ullam.",
        description: [
            "Ratione volurtatem serui nesciunt neaue porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        ],
        reviews: [
            {
                id: createId(),
                name: "Lorem",
                mark: 4,
                message: "Lorem ipsum dolor sit amet. "
            }
        ],
    },
    {
        name: 'Orange Beverage',
        tags: ["Health", "Food", "Fruits & Vegetables", "Fruits", "Beverages"],
        id: "36f9571f-52c8-11ec-9b2a-0576109a5fb1",
        rate: 5,
        favorite: false,
        hot: true,
        trending: false,
        price: {
            oldPrice: 30,
            currentPrice: 20,
        },
        images: [
            {
                url: orangeBeverage1,
                alt: "orange beverage",
            },
        ],
        overview: "Neque porro quisquam est aui dolorem iesum ruia do sit amet, consectetur, adipisci velit, sed quia non num eius modi tempora incidunt ut labore et dolore magna volutatem exercitationem ullam.",
        description: [
            "Ratione volurtatem serui nesciunt neaue porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        ],
        reviews: [
            {
                id: createId(),
                name: "Lorem",
                mark: 4,
                message: "Lorem ipsum dolor sit amet. "
            }
        ],
    },
    {
        name: 'Dozen Eggs',
        tags: ["Health", "Food", "Breakfast & Dairy", "Grocery & Staples"],
        id: "36f95721-52c8-11ec-9b2a-0576109a5fb1",
        rate: 4,
        favorite: false,
        hot: false,
        trending: false,
        price: {
            oldPrice: 15,
            currentPrice: 12,
        },
        images: [
            {
                url: eggs1,
                alt: "eggs",
            },
        ],
        overview: "Neque porro quisquam est aui dolorem iesum ruia do sit amet, consectetur, adipisci velit, sed quia non num eius modi tempora incidunt ut labore et dolore magna volutatem exercitationem ullam.",
        description: [
            "Ratione volurtatem serui nesciunt neaue porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        ],
        reviews: [
            {
                id: createId(),
                name: "Lorem",
                mark: 4,
                message: "Lorem ipsum dolor sit amet. "
            }
        ],
    },
    {
        name: 'Cooking Oil',
        tags: ["Grocery & Staples"],
        id: "36f95723-52c8-11ec-9b2a-0576109a5fb1",
        rate: 5,
        favorite: false,
        hot: true,
        trending: false,
        price: {
            oldPrice: 20,
            currentPrice: 15,
        },
        images: [
            {
                url: cookingOil1,
                alt: "oil",
            },
        ],
        overview: "Neque porro quisquam est aui dolorem iesum ruia do sit amet, consectetur, adipisci velit, sed quia non num eius modi tempora incidunt ut labore et dolore magna volutatem exercitationem ullam.",
        description: [
            "Ratione volurtatem serui nesciunt neaue porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        ],
        reviews: [
            {
                id: createId(),
                name: "Lorem",
                mark: 4,
                message: "Lorem ipsum dolor sit amet. "
            }
        ],
    },
    {
        name: 'Body Lotion',
        tags: ["Health", "Personal Care"],
        id: "36f95725-52c8-11ec-9b2a-0576109a5fb1",
        rate: 3,
        favorite: false,
        hot: false,
        trending: false,
        price: {
            oldPrice: 30,
            currentPrice: 20,
        },
        images: [
            {
                url: bodyLotion1,
                alt: "body lotion",
            },
        ],
        overview: "Neque porro quisquam est aui dolorem iesum ruia do sit amet, consectetur, adipisci velit, sed quia non num eius modi tempora incidunt ut labore et dolore magna volutatem exercitationem ullam.",
        description: [
            "Ratione volurtatem serui nesciunt neaue porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        ],
        reviews: [
            {
                id: createId(),
                name: "Lorem",
                mark: 4,
                message: "Lorem ipsum dolor sit amet. "
            }
        ],
    },
]

const detailToProduct = (item: ProductDetailType): ProductType | null => {

    if (!item) {
        return null;
    }

    let product: ProductType = {
        id: item.id,
        name: item.name,
        rate: item.rate,
        image: item.images[0],
        price: item.price,
        hot: item.hot,
        tags: [...item.tags],
    };

    return product;
}
export const productsAPI = {
    getProducts: (startIndex: number, endIndex: number, filter: FilterType) => {
        let products: ProductType[] = [];

        const data = {
            products: [] as ProductType[],
            totalItems: 0,
        }

        productsDetail.forEach(p => {
            let temp = detailToProduct(p);
            if (temp) {
                products.push(temp);
            }
        })

        if (filter.query.length > 0) {
            products = filterByQuery(products, filter.query);
        }

        if (filter.price) {
            products = filterBetweenPrices(products, filter.price.top, filter.price.bottom);
        }

        if (filter.tags.length > 0) {
            products = filterByTags(products, filter.tags);
        }

        data.totalItems = products.length;

        products = sortingProducts(products, filter.sorting);

        const slicedProducts = products.slice(startIndex, endIndex);

        data.products = slicedProducts;

        return data;
    },

    getFavourites: () => {

        const filteredProductsDateail = productsDetail.filter(p => p.favorite);

        let products: ProductType[] = [];

        filteredProductsDateail.forEach(p => {
            let temp = detailToProduct(p);
            if (temp) {
                products.push(temp);
            }
        })

        return products;
    },

    toggleFavourite: (productID: string, toggleValue: boolean) => {
        const index = productsDetail.findIndex(item => item.id === productID);

        const productCopy = { ...productsDetail[index] };
        productCopy.favorite = toggleValue;

        productsDetail[index] = productCopy;

        const data = {
            resultCode: 1,
        };

        if (productsDetail[index].favorite === toggleValue) {
            data.resultCode = 0;
        }

        return data;
    },

    getDetailProduct: (id: string) => {
        let product = productsDetail.find((item) => item.id === id)
        if (product) {
            return product;
        }
        return null;
    },

    getTrendingProducts: (startIndex: number, endIndex: number) => {

        let trendingProductsDetail = productsDetail.filter((product) => product.trending)
        let trendingProducts: ProductType[] = [];

        for (let i = startIndex; i < endIndex; i++) {
            if (trendingProductsDetail[i]) {
                let newProduct = detailToProduct(trendingProductsDetail[i]);
                if (newProduct) {
                    trendingProducts.push(newProduct);
                }
            }
        }

        return trendingProducts;
    },

    getTotalCount: () => {
        return productsDetail.length;
    },
}