import React from 'react';
import './SearchInput.scss';

import search from '../../../assets/images/blogPage/search.png';

type SearchInputPropsType = {
  className: string;
};

export const SearchInput: React.FC<SearchInputPropsType> = (props) => {
  return (
    <div className={`search-input ${props.className}`}>
      <div className="search-input__input">
        <input type="text" placeholder="Search" />
        <div className="search-input__icon">
          <img src={search} alt="search icon" />
        </div>
      </div>
    </div>
  );
}