type ImageType = {
    url: string;
    alt: string;
}

export type TagType = "Food" | "Fruits" | "Health" | "Meat" | "Dairy" | "Beverages"
    | "Biscuits, Snacks" | "Breakfast & Dairy" | "Fruits & Vegetables" | "Home Needs"
    | "Grocery & Staples" | "Home & Kitchen" | "Household Needs" | "Meats, Frozen"
    | "Noodles, Sauces" | "Personal Care" | "Pet Care";

export type SortingType = "default" | "rate" | "price:LowToHigh" | "price:HighToLow";
export type FilterType = {
    query: string;
    price: {
        top: number;
        bottom: number;
    } | null;
    tags: TagType[];
    sorting: SortingType;
}

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
    hot: boolean;
    tags: TagType[];
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

export type PostType = {
    id: string;
    image: ImageType;
    authorName: string;
    title: string;
    text: string;
    date: Date;
}

export type PostFilterType = {
    query: string;
}