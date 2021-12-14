import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPage, selectFirstProductIndex, selectLastProductIndex, selectPageSize, selectTotalProductsCount } from '../../../../../redux/productsSelectors';
import { ShopPaginatorItem } from './ShopPaginatorItem/ShopPaginatorItem';
import { productsActions } from '../../../../../redux/productsReducer';
import { Paginator } from '../../../../common/Paginator/Paginator';

export const ShopPaginator: React.FC<ShopPaginatorPropsType> = (props) => {

  const currentPage = useSelector(selectCurrentPage);
  const pageSize = useSelector(selectPageSize);
  const totalProductsCount = useSelector(selectTotalProductsCount);
  const firstProductIndex = useSelector(selectFirstProductIndex);
  const lastProductIndex = useSelector(selectLastProductIndex);
  const dispatch = useDispatch();


  const countOfPages = Math.ceil(totalProductsCount / pageSize);
  const pages: Array<number> = [];
  for (let i = 1; i <= countOfPages; i++) {
    pages.push(i);
  }

  const pagesList = pages.map((page, index) => {
    return (
      <ShopPaginatorItem key={index} page={page} activeClassName="paginator__active" />
    );
  })

  const [page, setPage] = useState(currentPage);

  useEffect(() => {

    if (currentPage > page) {
      dispatch(productsActions.firstProductIndexChanged(firstProductIndex + pageSize));
      dispatch(productsActions.lastProductIndexChanged(lastProductIndex + pageSize));
    }
    if ((currentPage < page)) {
      dispatch(productsActions.firstProductIndexChanged(firstProductIndex - pageSize));
      dispatch(productsActions.lastProductIndexChanged(lastProductIndex - pageSize));
    }

    setPage(currentPage);

  }, [currentPage])

  const prevOnClick = () => {
    dispatch(productsActions.currentPageChanged(currentPage - 1))
  }
  const nextOnClick = () => {
    dispatch(productsActions.currentPageChanged(currentPage + 1))
  }

  if (countOfPages > 1) {
    return (
      <Paginator className={props.className}
        countOfPages={countOfPages}
        currentPage={currentPage} nextOnClick={nextOnClick} prevOnClick={prevOnClick}>
        {pagesList}
      </Paginator>
    );
  } else {
    return <React.Fragment />
  }
}

type ShopPaginatorPropsType = {
  className: string;
}