import React, { useEffect, useState } from 'react';
import { AppstoreFilled, BarsOutlined } from '@ant-design/icons';
import './ShopSection.scss';
import { ProductDefault } from '../../../common/ProductItem/ProductDefault/ProductDefault';
import { ShopSidebar } from './ShopSidebar/ShopSidebar';
import { getProductsThunkCreator, productsActions } from '../../../../redux/productsReducer';
import { selectCurrentFilter, selectCurrentPage, selectFirstProductIndex, selectLastProductIndex, selectPageSize, selectProducts, selectTotalProductsCount } from '../../../../redux/productsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { ShopSectionSort } from './ShopSectionSort';

import { ProductLineItem } from '../../../common/ProductItem/ProductLineItem/ProductLineItem';
import { PaginatorContainer } from '../../../common/Paginator/PaginatorContainer';


export const ShopSection: React.FC<ShopSectionPropsType> = (props) => {

  const dispatch = useDispatch();
  const currentFilter = useSelector(selectCurrentFilter);

  const firstProductIndex = useSelector(selectFirstProductIndex);
  const lastProductIndex = useSelector(selectLastProductIndex);
  const totalProducts = useSelector(selectTotalProductsCount);
  const pageSize = useSelector(selectPageSize);
  const currentPage = useSelector(selectCurrentPage);

  // functions for Paginator
  const updateCurrentPage = (pageNumber: number) => {
    dispatch(productsActions.currentPageChanged(pageNumber));
  }
  const updateFirstItemIndex = (index: number) => {
    dispatch(productsActions.firstProductIndexChanged(index));
  }
  const updateLastItemIndex = (index: number) => {
    dispatch(productsActions.lastProductIndexChanged(index));
  }

  // Updating a product array when updating currentFilter or firstProductIndex or lastProductIndex;
  useEffect(() => {
    dispatch(getProductsThunkCreator(firstProductIndex, lastProductIndex, currentFilter));
  }, [currentFilter, firstProductIndex, lastProductIndex]);

  // whenever the filter is refreshed it puts the first page
  useEffect(() => {
    //debugger
    dispatch(productsActions.currentPageChanged(1));
  }, [currentFilter]);

  const products = useSelector(selectProducts);
  const totalProductsCount = useSelector(selectTotalProductsCount);

  const productList = products.map(p => {
    return <ProductDefault key={p.id} className='shop-section__item' product={p} />
  })

  const lineProductList = products.map(p => {
    return <ProductLineItem key={p.id} className='shop-section__item' product={p} />
  })


  const [viewMode, setViewMode] = useState<"gap" | "line">("gap");

  const [isSmallWidth, setIsSmallWidth] = useState(false);

  // Changes the display of products on the small screen
  useEffect(() => {
    const widthHandler = () => {
      if (window.innerWidth < 600) {
        setIsSmallWidth(true);
      }
      if (window.innerWidth > 600) {
        setIsSmallWidth(false);
      }
    }
    window.addEventListener("resize", widthHandler);
    return () => {
      window.removeEventListener("resize", widthHandler);
    }
  }, []);

  useEffect(() => {
    if (isSmallWidth) {
      setViewMode("gap");
    }
  }, [isSmallWidth]);

  return (
    <section className="shop-section">
      <div className="container">

        <div className="shop-section__body">
          <ShopSidebar />

          <div className="shop-section__shop">
            <div className="shop-section__settings">
              <div className="shop-section__view">
                {!isSmallWidth &&
                  <div className="shop-section__mode">
                    <div onClick={() => { setViewMode("gap") }} className={viewMode === "gap" ? "shop-section__icon active-mode" : "shop-section__icon"}>
                      <AppstoreFilled />
                    </div>
                    <div onClick={() => { setViewMode("line") }} className={viewMode === "line" ? "shop-section__icon active-mode" : "shop-section__icon"}>
                      <BarsOutlined />
                    </div>
                  </div>
                }

                <div className="shop-section__total">
                  {totalProductsCount !== 0 &&
                    <React.Fragment>
                      Showing {firstProductIndex + 1}–{lastProductIndex > totalProductsCount
                        ? totalProductsCount
                        : lastProductIndex} of
                    </React.Fragment>
                  } {totalProductsCount} results
                </div>
              </div>
              <ShopSectionSort />
            </div>
            {viewMode === "gap" &&
              <div className="shop-section__products">
                {productList}
              </div>
            }

            {viewMode === "line" &&
              <div className="shop-section__line-products">
                {lineProductList}
              </div>
            }

            <PaginatorContainer
              className="shop-section__paginator"
              currentPage={currentPage}
              firstItemIndex={firstProductIndex}
              lastItemIndex={lastProductIndex}
              pageSize={pageSize}
              totalItems={totalProducts}
              updateCurrentPage={updateCurrentPage}
              updateFirstItemIndex={updateFirstItemIndex}
              updateLastItemIndex={updateLastItemIndex}
            />

          </div>
        </div>
      </div>
    </section>
  );
}

type ShopSectionPropsType = {

}