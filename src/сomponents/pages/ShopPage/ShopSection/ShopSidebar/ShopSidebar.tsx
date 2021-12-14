import React, { useEffect, useState } from 'react';
import './ShopSidebar.scss';

import { Rate } from 'antd';
import { SearchInput } from '../../../../common/SearchInput/SearchInput';
import { ProductType } from '../../../../../types/types';
import { selectCurrentFilter, selectTrending } from '../../../../../redux/productsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingProductsThunkCreator, productsActions } from '../../../../../redux/productsReducer';
import { SidebarCategories } from './SidebarCategories/SidebarCategories';
import { CollapseItem } from '../../../../common/Collapse/Collapse';
import { PriceFilter } from './PriceFilter/PriceFilter';

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
  const filter = useSelector(selectCurrentFilter);

  const trendingItemsList = trendingProducts.map(p => {
    return <SidebarTrendingItem key={p.id} product={p} />
  })

  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    dispatch(productsActions.currentFilterChanged({
      price: filter.price,
      query: searchTerm,
      sorting: filter.sorting,
      tags: filter.tags,
    }))
  }, [searchTerm])

  return (
    <div className="shop-sidebar">

      <SearchInput value={searchTerm} onChange={(ev) => setSearchTerm(ev.currentTarget.value)}
        className="shop-sidebar__search" />
      <SidebarCategories />
      <PriceFilter />

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


type SidebarTrendingItemProps = {
  product: ProductType;
}
type ShopSidebarPropsType = {}