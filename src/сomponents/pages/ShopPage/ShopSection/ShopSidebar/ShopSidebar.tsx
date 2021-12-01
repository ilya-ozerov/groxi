import React, { CSSProperties } from 'react';
import './ShopSidebar.scss';

import { Rate, Slider } from 'antd';
import { SearchInput } from '../../../../common/SearchInput/SearchInput';
import { Checkbox } from '../../../../common/Checkbox/Checkbox';
import { ProductType } from '../../../../../types/types';
import { productsAPI } from '../../../../../api/api';

type SidebarTrendingItemProps = {
  product: ProductType;
}
const SidebarTrendingItem: React.FC<SidebarTrendingItemProps> = ({ product }) => {
  return (
    <div className="sidebar-trending__item">
      <div className="sidebar-trending__image">
        <img src={product.image.url} alt={product.image.alt} />
      </div>
      <div className="sidebar-trending__info">
        <div className="sidebar-trending__title">{product.name}</div>
        <div className="sidebar-trending__price">
          {product.price.oldPrice &&
            <React.Fragment>
              <span>${product.price.oldPrice}</span> ${product.price.currentPrice}
            </React.Fragment>
          }
          {!product.price.oldPrice &&
            <React.Fragment>${product.price.currentPrice}</React.Fragment>
          }
        </div>
        <div className="sidebar-trending__rate">
          <Rate style={{ fontSize: '11px' }} disabled value={product.rate} />
        </div>
      </div>
    </div>
  );
}

type SidebarCategoriesProps = {}
const SidebarCategories: React.FC<SidebarCategoriesProps> = (props) => {
  return (
    <div className="shop-sidebar__categories">
      <div className="shop-sidebar__title">Categories</div>
      <ul className="shop-sidebar__list">
        <li>
          <Checkbox className="shop-sidebar__checkbox" />
          <span>Beverages</span>
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" />
          <span>Biscuits, Snacks</span>
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" />
          <span>Breakfast & Dairy</span>
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" />
          <span>Fruits & Vegetables</span>
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" />
          <span>Home Needs</span>
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" />
          <span>Grocery & Staples</span>
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" />
          <span>Home & Kitchen</span>
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" />
          <span>Household Needs</span>
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" />
          <span>Meats, Frozen</span>
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" />
          <span>Noodles, Sauces</span>
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" />
          <span>Personal Care</span>
        </li>
        <li>
          <Checkbox className="shop-sidebar__checkbox" />
          <span>Pet Care</span>
        </li>
      </ul>

    </div>
  );
}

type ShopSidebarPropsType = {}
export const ShopSidebar: React.FC<ShopSidebarPropsType> = (props) => {

  const handleStyle1: CSSProperties = {
    borderRadius: 0,
    width: "12px",
    height: "12px",
    borderColor: '#9FCB22',
    backgroundColor: '#9FCB22',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
  }

  const handleStyle2: CSSProperties = {
    borderRadius: 0,
    width: "12px",
    height: "12px",
    borderColor: '#9FCB22',
    backgroundColor: '#9FCB22',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
  }

  const trackStyle: CSSProperties = {
    height: '8px',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
    backgroundColor: "#F6FAFB",
  }

  const trendingItemsList = productsAPI.getTrendingProducts(0, 5).map(p => {
    return <SidebarTrendingItem key={p.id} product={p} />
  })

  return (
    <div className="shop-sidebar">

      <SearchInput className="shop-sidebar__search" />

      <SidebarCategories />

      <div className="shop-sidebar__filter">
        <div className="shop-sidebar__title">Filter By Price</div>
        <div className="shop-sidebar__slider">
          <Slider handleStyle={[handleStyle1, handleStyle2]}
            trackStyle={[trackStyle]} range={true} defaultValue={[20, 50]} />
        </div>

        <span className="shop-sidebar__button button">
          <button>filter</button>
        </span>

        <span className="shop-sidebar__price-range">Price $20-$50</span>
      </div>

      <div className="shop-sidebar__trending sidebar-trending">
        <div className="shop-sidebar__title">Trending Items</div>
        <div className="sidebar-trending__items">
          {trendingItemsList}
        </div>

        <div className="sidebar-trending__button button">
          <button>view more</button>
        </div>

      </div>

    </div>
  );
}