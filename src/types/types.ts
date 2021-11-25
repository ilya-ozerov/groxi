export type ProductType = {
    id: string;
    name: string;
    rate: 1 | 2 | 3 | 4 | 5;
    image: {
        url: string;
        alt: string;
    }
    price: {
        currentPrice: number;
        oldPrice?: number;
    }
    favorite: boolean;
    hot: boolean;
}