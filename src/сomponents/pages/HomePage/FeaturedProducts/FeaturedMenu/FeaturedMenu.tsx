import React, { useEffect, useState } from 'react';
import '../FeaturedProducts.scss';

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentFilter } from '../../../../../redux/productsSelectors';
import { productsActions } from '../../../../../redux/productsReducer';

export const FeaturedMenu: React.FC<FeaturedMenuProps> = (props) => {

  const dispatch = useDispatch();

  const filter = useSelector(selectCurrentFilter);

  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryType>("All");

  const menuItemOnClick = (category: MenuCategoryType) => {
    if (selectedCategory !== category) {
      setSelectedCategory(category);
    }
  }

  // Changes the filter when selecting a category
  useEffect(() => {
    if (selectedCategory === "All") {
      dispatch(productsActions.currentFilterChanged({
        query: filter.query,
        price: filter.price,
        sorting: filter.sorting,
        tags: []
      }));
    } else {
      dispatch(productsActions.currentFilterChanged({
        query: filter.query,
        price: filter.price,
        sorting: filter.sorting,
        tags: [selectedCategory]
      }));
    }
  }, [selectedCategory]);

  return (
    <div className="featured-products__menu">
      <ul className="featured-products__list">
        <li onClick={() => menuItemOnClick("All")}
          className={selectedCategory === "All" ? "featured-products__active" : ""}>All</li>
        <li onClick={() => menuItemOnClick("Food")}
          className={selectedCategory === "Food" ? "featured-products__active" : ""}>Food</li>
        <li onClick={() => menuItemOnClick("Fruits")}
          className={selectedCategory === "Fruits" ? "featured-products__active" : ""}>Fruits</li>
        <li onClick={() => menuItemOnClick("Health")}
          className={selectedCategory === "Health" ? "featured-products__active" : ""}>Health</li>
        <li onClick={() => menuItemOnClick("Meat")}
          className={selectedCategory === "Meat" ? "featured-products__active" : ""}>Meat</li>
        <li onClick={() => menuItemOnClick("Dairy")}
          className={selectedCategory === "Dairy" ? "featured-products__active" : ""}>Dairy</li>
      </ul>
    </div>
  );
}

type MenuCategoryType = "All" | "Food" | "Fruits" | "Health" | "Meat" | "Dairy";
type FeaturedMenuProps = {
}