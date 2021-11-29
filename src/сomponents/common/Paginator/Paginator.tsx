import React from 'react';
import './Paginator.scss';

import arrow from '../../../assets/images/blogPage/posts/arrow.png';

export const Paginator: React.FC<PaginatorPropsType> = (props) => {
  return (
    <div className={`${props.className} paginator`}>
      <div className="paginator__prev-button">
        <img src={arrow} alt="prev button" />
      </div>
      <ul className="paginator__list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <div className="paginator__next-button">
        <img src={arrow} alt="next button" />
      </div>
    </div>
  );
}

type PaginatorPropsType = {
  className: string;
}