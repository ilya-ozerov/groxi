import React from 'react';
import './Paginator.scss';

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPage } from '../../../redux/productsSelectors';
import { productsActions } from '../../../redux/productsReducer';

export const PaginatorItem: React.FC<PaginatorItemPropsType> = (props) => {

  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(productsActions.currentPageChanged(props.page));
  }

  return (
    <li onClick={onClick} className={currentPage === props.page ? `${props.activeClassName}` : ""} key={props.page}>{props.page}</li>
  );
}

type PaginatorItemPropsType = {
  activeClassName: string;
  page: number;
}