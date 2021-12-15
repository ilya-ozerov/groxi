import React from 'react';

export const PaginatorItem: React.FC<ShopPaginatorItemPropsType> = (props) => {

  const onClick = () => {
    props.updateCurrentPage(props.tempPage);
  }

  return (
    <li onClick={onClick} className={props.currentStatePage === props.tempPage ? `${props.activeClassName}` : ""} key={props.tempPage}>{props.tempPage}</li>
  );
}

type ShopPaginatorItemPropsType = {
  activeClassName: string;
  tempPage: number;

  currentStatePage: number;

  updateCurrentPage: (pageNumber: number) => void;
}