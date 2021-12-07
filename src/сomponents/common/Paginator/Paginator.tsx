import React, { useEffect, useState } from 'react';
import './Paginator.scss';

import arrow from '../../../assets/images/blogPage/posts/arrow.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPage, selectFirstProductIndex, selectLastProductIndex, selectPageSize, selectTotalProductsCount } from '../../../redux/productsSelectors';
import { PaginatorItem } from './PaginatorItem';
import { productsActions } from '../../../redux/productsReducer';

export const Paginator: React.FC<PaginatorPropsType> = (props) => {

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
      <PaginatorItem key={index} page={page} activeClassName="paginator__active" />
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
      <div className={`${props.className} paginator`}>
        {currentPage !== 1 &&
          <div onClick={prevOnClick} className="paginator__prev-button">
            <img src={arrow} alt="prev button" />
          </div>
        }

        <ul className="paginator__list">
          {pagesList}
        </ul>
        {currentPage < countOfPages &&
          <div onClick={nextOnClick} className="paginator__next-button">
            <img src={arrow} alt="next button" />
          </div>
        }

      </div>
    );
  } else {
    return <React.Fragment />
  }
}

type PaginatorPropsType = {
  className: string;
}