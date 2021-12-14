import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPage } from '../../../../../../redux/productsSelectors';
import { productsActions } from '../../../../../../redux/productsReducer';

export const ShopPaginatorItem: React.FC<ShopPaginatorItemPropsType> = (props) => {

  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(productsActions.currentPageChanged(props.page));
  }

  return (
    <li onClick={onClick} className={currentPage === props.page ? `${props.activeClassName}` : ""} key={props.page}>{props.page}</li>
  );
}

type ShopPaginatorItemPropsType = {
  activeClassName: string;
  page: number;
}