import React, { useEffect, useState } from 'react';
import './../ShopSidebar.scss';

import { Checkbox } from '../../../../../common/Checkbox/Checkbox';
import { TagType } from '../../../../../../types/types';
import { selectCurrentFilter } from '../../../../../../redux/productsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../../../../../../redux/productsReducer';

type SidebarCategoriesProps = {}
export const SidebarCategories: React.FC<SidebarCategoriesProps> = (props) => {

  const [categoriesFilter, setCategoriesFilter] = useState<TagType[]>([]);
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectCurrentFilter);

  // add new tag to categories filter array
  const addCategory = (tag: TagType) => {
    setCategoriesFilter(current => [...current, tag]);
  }

  // delete tag from categories filter array
  const removeCategory = (tag: TagType) => {
    setCategoriesFilter(current => current.filter(item => item !== tag));
  }

  // shop filter sync
  useEffect(() => {
    dispatch(productsActions.currentFilterChanged({
      price: currentFilter.price,
      sorting: currentFilter.sorting,
      tags: categoriesFilter,
    }));

  }, [categoriesFilter])

  return (
    <div className="shop-sidebar__categories">
      <div className="shop-sidebar__title">Categories</div>
      <ul className="shop-sidebar__list">
        <li>
          <Checkbox className="shop-sidebar__checkbox" tagName="Beverages"
            addCategory={addCategory} removeCategory={removeCategory} />
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" tagName="Biscuits, Snacks"
            addCategory={addCategory} removeCategory={removeCategory} />
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" tagName="Breakfast & Dairy"
            addCategory={addCategory} removeCategory={removeCategory} />
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" tagName="Fruits & Vegetables"
            addCategory={addCategory} removeCategory={removeCategory} />
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" tagName="Home Needs"
            addCategory={addCategory} removeCategory={removeCategory} />
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" tagName="Grocery & Staples"
            addCategory={addCategory} removeCategory={removeCategory} />
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" tagName="Home & Kitchen"
            addCategory={addCategory} removeCategory={removeCategory} />
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" tagName="Household Needs"
            addCategory={addCategory} removeCategory={removeCategory} />
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" tagName="Meats, Frozen"
            addCategory={addCategory} removeCategory={removeCategory} />
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" tagName="Noodles, Sauces"
            addCategory={addCategory} removeCategory={removeCategory} />
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" tagName="Personal Care"
            addCategory={addCategory} removeCategory={removeCategory} />
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" tagName="Pet Care"
            addCategory={addCategory} removeCategory={removeCategory} />
        </li>
      </ul>
    </div>
  );
}