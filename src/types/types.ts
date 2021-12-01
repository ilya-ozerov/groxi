type ImageType = {
    url: string;
    alt: string;
}

type TagType = "Food" | "Fruits" | "Health" | "Meat" | "Dairy" | "Beverages"
    | "Biscuits, Snacks" | "Breakfast & Dairy" | "Fruits & Vegetables" | "Home Needs"
    | "Grocery & Staples" | "Home & Kitchen" | "Household Needs" | "Meats, Frozen"
    | "Noodles, Sauces" | "Personal Care" | "Pet Care";

type RateType = 1 | 2 | 3 | 4 | 5;

type PriceType = {
    currentPrice: number;
    oldPrice?: number;
}

export type ReviewType = {
    id: string;
    name: string;
    mark: RateType;
    message: string;
}

export type ProductType = {
    id: string;
    name: string;
    rate: RateType;
    image: ImageType;
    price: PriceType;
    favorite: boolean;
    hot: boolean;
}

export type ProductDetailType = {
    id: string;
    name: string;
    images: ImageType[];
    rate: RateType;
    price: PriceType;
    favorite: boolean;
    hot: boolean;

    trending: boolean;

    tags: TagType[];

    overview: string;
    description: string[];
    reviews?: ReviewType[];
}