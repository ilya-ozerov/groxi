import React, { CSSProperties, useEffect, useLayoutEffect, useState } from 'react';
import './ShopSidebar.scss';

import { Rate, Slider } from 'antd';
import { SearchInput } from '../../../../common/SearchInput/SearchInput';
import { ProductType } from '../../../../../types/types';
import { selectCurrentFilter, selectTrending } from '../../../../../redux/productsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingProductsThunkCreator, productsActions } from '../../../../../redux/productsReducer';
import { SidebarCategories } from './SidebarCategories/SidebarCategories';
import { CollapseItem } from '../../../../common/Collapse/Collapse';

const SidebarPriceFilter: React.FC<SidebarPriceFilterProps> = () => {

  const [priceFilterValues, setPriceFilterValues] = useState<[number, number]>([0, 0]);
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectCurrentFilter);

  // update shop filter
  const submitPriceFilter = () => {
    dispatch(productsActions.currentFilterChanged({
      price: {
        bottom: priceFilterValues[0],
        top: priceFilterValues[1],
      },
      sorting: currentFilter.sorting,
      tags: currentFilter.tags,
    }))
  }

  // styles for antd's slider
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

  return (
    <React.Fragment>
      <div className="shop-sidebar__filter">
        <div className="shop-sidebar__title">Filter By Price</div>
        <div className="shop-sidebar__slider">
          <Slider handleStyle={[handleStyle1, handleStyle2]}
            trackStyle={[trackStyle]} range={true} value={priceFilterValues} onChange={(value) => setPriceFilterValues(value)} />
        </div>

        <span className="shop-sidebar__button button">
          <button onClick={submitPriceFilter}>filter</button>
        </span>

        <span className="shop-sidebar__price-range">Price ${priceFilterValues[0]}-${priceFilterValues[1]}</span>
      </div>
      <div className="shop-sidebar__mobile-filter">
        <CollapseItem className="shop-sidebar__collapse" title="Filter By Price">
          <div className="shop-sidebar__slider">
            <Slider handleStyle={[handleStyle1, handleStyle2]}
              trackStyle={[trackStyle]} range={true} value={priceFilterValues} onChange={(value) => setPriceFilterValues(value)} />
          </div>

          <span className="shop-sidebar__button button">
            <button onClick={submitPriceFilter}>filter</button>
          </span>

          <span className="shop-sidebar__price-range">Price ${priceFilterValues[0]}-${priceFilterValues[1]}</span>
        </CollapseItem>
      </div>
    </React.Fragment>
  );
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

export const ShopSidebar: React.FC<ShopSidebarPropsType> = (props) => {
  const dispatch = useDispatch();

  // request array of trending products
  useEffect(() => {
    dispatch(getTrendingProductsThunkCreator(5));
  }, [])

  const trendingProducts = useSelector(selectTrending);

  const trendingItemsList = trendingProducts.map(p => {
    return <SidebarTrendingItem key={p.id} product={p} />
  })

  return (
    <div className="shop-sidebar">

      <SearchInput className="shop-sidebar__search" />
      <SidebarCategories />
      <SidebarPriceFilter />

      <div className="shop-sidebar__trending sidebar-trending">
        <div className="shop-sidebar__title">Trending Items</div>
        <div className="sidebar-trending__items">
          {trendingItemsList}
        </div>
        <div className="sidebar-trending__button button">
          <button>view more</button>
        </div>
      </div>

      <div className="shop-sidebar__mobile-trending sidebar-trending">
        <CollapseItem title="Trending Items" className="shop-sidebar__collapse">
          <div className="sidebar-trending__items">
            {trendingItemsList}
          </div>
          <div className="sidebar-trending__button button">
            <button>view more</button>
          </div>
        </CollapseItem>
      </div>

    </div>
  );
}

type SidebarPriceFilterProps = {}
type SidebarTrendingItemProps = {
  product: ProductType;
}
type ShopSidebarPropsType = {}