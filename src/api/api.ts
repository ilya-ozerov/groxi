import { v1 as createId } from 'uuid';

import { ProductType } from './../types/types';

import meat from '../assets/images/products/meat.png';
import broccoli from '../assets/images/products/broccoli.png';
import strawberry from '../assets/images/products/strawberry.png';
import honey from '../assets/images/products/honey.png';
import milk from '../assets/images/products/milk.png';
import mangoBeverage from '../assets/images/products/mangoBeverage.png';
import bread from '../assets/images/featuredProducts/freshBread.png';
import redPepper from '../assets/images/featuredProducts/redPepper.png';
import orangeBeverage from '../assets/images/featuredProducts/orangeBeverage.png';
import eggs from '../assets/images/featuredProducts/eggs.png';
import cookingOil from '../assets/images/featuredProducts/cookingOil.png';
import bodyLotion from '../assets/images/featuredProducts/bodyLotion.png';


export const products: ProductType[] = [
    {
        id: createId(),
        name: 'Beef Steak',
        rate: 3,
        favorite: false,
        hot: true,
        price: {
            currentPrice: 12,
        },
        image: {
            url: meat,
            alt: 'product',
        }
    },
    {
        id: createId(),
        name: 'Broccoli',
        rate: 3,
        favorite: true,
        hot: false,
        price: {
            oldPrice: 20,
            currentPrice: 15,
        },
        image: {
            url: broccoli,
            alt: 'broccoli',
        }
    },
    {
        id: createId(),
        name: 'Strawberries',
        rate: 3,
        favorite: false,
        hot: false,
        price: {
            oldPrice: 30,
            currentPrice: 20,
        },
        image: {
            url: strawberry,
            alt: 'Strawberries',
        }
    },
    {
        id: createId(),
        name: 'Fresh Honey',
        rate: 3,
        favorite: false,
        hot: false,
        price: {
            oldPrice: 50,
            currentPrice: 40,
        },
        image: {
            url: honey,
            alt: 'bottle of honey',
        }
    },
    {
        id: createId(),
        name: 'Fresh Milk',
        rate: 3,
        favorite: false,
        hot: true,
        price: {
            oldPrice: 10,
            currentPrice: 8,
        },
        image: {
            url: milk,
            alt: 'milk',
        }
    },
    {
        id: createId(),
        name: 'Mango Beverage',
        rate: 3,
        favorite: false,
        hot: true,
        price: {
            oldPrice: 22,
            currentPrice: 18,
        },
        image: {
            url: mangoBeverage,
            alt: 'mango beverage',
        }
    },
    {
        id: createId(),
        name: 'Fresh Bread',
        rate: 5,
        favorite: false,
        hot: true,
        price: {
            oldPrice: 15,
            currentPrice: 12,
        },
        image: {
            url: bread,
            alt: 'bread',
        }
    },
    {
        id: createId(),
        name: 'Red Pepper',
        rate: 4,
        favorite: false,
        hot: false,
        price: {
            oldPrice: 20,
            currentPrice: 15,
        },
        image: {
            url: redPepper,
            alt: 'two red peppers',
        }
    },
    {
        id: createId(),
        name: 'Orange Beverage',
        rate: 5,
        favorite: false,
        hot: true,
        price: {
            oldPrice: 30,
            currentPrice: 20,
        },
        image: {
            url: orangeBeverage,
            alt: 'glass of orange juice',
        }
    },
    {
        id: createId(),
        name: 'Dozen Eggs',
        rate: 4,
        favorite: false,
        hot: false,
        price: {
            oldPrice: 15,
            currentPrice: 12,
        },
        image: {
            url: eggs,
            alt: 'eggs',
        }
    },
    {
        id: createId(),
        name: 'Cooking Oil',
        rate: 5,
        favorite: false,
        hot: true,
        price: {
            oldPrice: 20,
            currentPrice: 15,
        },
        image: {
            url: cookingOil,
            alt: 'bottle of oil',
        }
    },
    {
        id: createId(),
        name: 'Body Lotion',
        rate: 3,
        favorite: false,
        hot: false,
        price: {
            oldPrice: 30,
            currentPrice: 20,
        },
        image: {
            url: bodyLotion,
            alt: 'lotion',
        }
    },
]