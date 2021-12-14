import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../../../../redux/productsReducer';
import { selectCurrentFilter } from '../../../../redux/productsSelectors';
import { SortingType } from '../../../../types/types';
import './ShopSection.scss';


export const ShopSectionSort: React.FC<ShopSectionSortPropsType> = (props) => {

  const dispatch = useDispatch();
  const currentFilter = useSelector(selectCurrentFilter);

  const [sortOption, setSortOption] = useState<SortingType>("default");

  // update local state
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case "default":
        setSortOption("default");
        break;
      case "rate":
        setSortOption("rate");
        break;
      case "price:LowToHigh":
        setSortOption("price:LowToHigh");
        break;
      case "price:HighToLow":
        setSortOption("price:HighToLow");
        break;
    }
  }

  // shop filter sync
  useEffect(() => {
    dispatch(productsActions.currentFilterChanged({
      query: currentFilter.query,
      price: currentFilter.price,
      sorting: sortOption,
      tags: currentFilter.tags,
    }))
  }, [sortOption]);

  return (
    <div className="shop-section__sorting">
      <select itemType="SortingType" onChange={onChange}>
        <option value="default">Default Sorting</option>
        <option value="rate">Rate</option>

        <option value="price:LowToHigh">Price: Low to High</option>
        <option value="price:HighToLow">Price: High to Low</option>
      </select>
    </div>
  );
}

type ShopSectionSortPropsType = {

}