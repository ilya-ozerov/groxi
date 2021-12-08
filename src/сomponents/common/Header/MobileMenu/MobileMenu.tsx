import React, { useState } from 'react';
import './MobileMenu.scss';
import { CSSTransition } from 'react-transition-group';

import searchIcon from '../../../../assets/images/header/searchIcon.png';
import accountIcon from '../../../../assets/images/header/accountIcon.png';
import wishListIcon from '../../../../assets/images/header/wishListIcon.png';
import cartIcon from '../../../../assets/images/header/cartIcon.png';
import { Link } from 'react-router-dom';

type MobileMenuPropsType = {
  className: string;
}
export const ModileMenu: React.FC<MobileMenuPropsType> = ({ className }) => {

  const [isMobile, setIsModile] = useState(false);

  return (
    <div className={`${className} mobile-menu`}>

      <div onClick={() => setIsModile(current => !current)}
        className={isMobile ? "mobile-menu__burger mobile-menu__active" : "mobile-menu__burger"}>
        {/* <MenuOutlined /> */}
        <div />
      </div>

      <CSSTransition in={isMobile} timeout={300} classNames="menu-transition" unmountOnExit>
        <div className="mobile-menu__body">
          <ul className="mobile-menu__list">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="mobile-menu__services">
            <div className="mobile-menu__icon">
              <img src={searchIcon} alt="search icon" />
            </div>
            <div className="mobile-menu__icon">
              <img src={accountIcon} alt="account icon" />
            </div>
            <div className="mobile-menu__icon">
              <img src={wishListIcon} alt="wishlist icon" />
            </div>
            <div className="mobile-menu__icon">
              <img src={cartIcon} alt="cart icon" />
            </div>
          </div>
        </div>
      </CSSTransition>

    </div>
  );
}