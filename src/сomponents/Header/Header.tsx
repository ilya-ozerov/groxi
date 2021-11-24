import React from 'react';
import './Header.scss';
import logo from '../../assets/images/header/logo.svg';

import searchIcon from '../../assets/images/header/searchIcon.png';
import accountIcon from '../../assets/images/header/accountIcon.png';
import wishListIcon from '../../assets/images/header/wishListIcon.png';
import cartIcon from '../../assets/images/header/cartIcon.png';

type HeaderPropsType = {}

export const Header: React.FC<HeaderPropsType> = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logo} alt="groxi's logo" />
          </div>
          <div className="header__menu">
            <ul className="header__list">
              <li>Home</li>
              <li>About</li>
              <li>Shop</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>

          </div>
          <div className="header__services">
            <div className="header__icon">
              <img src={searchIcon} alt="search icon" />
            </div>
            <div className="header__icon">
              <img src={accountIcon} alt="account icon" />
            </div>
            <div className="header__icon">
              <img src={wishListIcon} alt="wishlist icon" />
            </div>
            <div className="header__icon">
              <img src={cartIcon} alt="cart icon" />
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}