import React, { useEffect, useState } from 'react';
import './Header.scss';
import logo from '../../../assets/images/header/logo.svg';

import searchIcon from '../../../assets/images/header/searchIcon.png';
import accountIcon from '../../../assets/images/header/accountIcon.png';
import wishListIcon from '../../../assets/images/header/wishListIcon.png';
import cartIcon from '../../../assets/images/header/cartIcon.png';
import { NavLink } from 'react-router-dom';
import { ModileMenu } from './MobileMenu/MobileMenu';

type HeaderPropsType = {
  className?: string;
}

export const Header: React.FC<HeaderPropsType> = (props) => {

  const [isStickyMod, setIsStickyMod] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 50) {
      setIsStickyMod(true)
    } else {
      setIsStickyMod(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    }
  }, []);

  return (
    <React.Fragment>
      <header className={`${props.className} header`}>
        <div className="container">
          <div className="header__row">
            <div className="header__logo">
              <img src={logo} alt="groxi's logo" />
            </div>
            <div className="header__menu">
              <ul className="header__list">
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
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

            {!isStickyMod && <ModileMenu className="header__mobile-menu" />}


          </div>
        </div>
      </header>
      {isStickyMod &&
        <header className={`${props.className} header sticky-header`}>
          <div className="container">
            <div className="header__row">
              <div className="header__logo">
                <img src={logo} alt="groxi's logo" />
              </div>
              <div className="header__menu">
                <ul className="header__list">
                  <li>
                    <NavLink to="/home">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop">Shop</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
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

              <ModileMenu className="header__mobile-menu" />

            </div>
          </div>
        </header>
      }

    </React.Fragment>
  );
}