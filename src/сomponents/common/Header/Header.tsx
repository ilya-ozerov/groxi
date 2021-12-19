import React, { useEffect, useState } from 'react';
import './Header.scss';
import logo from '../../../assets/images/header/logo.svg';

import searchIcon from '../../../assets/images/header/searchIcon.png';
import accountIcon from '../../../assets/images/header/accountIcon.png';
import wishListIcon from '../../../assets/images/header/wishListIcon.png';
import cartIcon from '../../../assets/images/header/cartIcon.png';
import { NavLink } from 'react-router-dom';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { Popup } from '../Popup/Popup';
import { Wishlist } from './Popups/WishList/Wishlist';
import { Search } from './Popups/Search/Search';
import { Account } from './Popups/Account/Account';
import { Cart } from './Popups/Cart/Cart';

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
            <HeaderLogo />
            <HeaderMenu />

            {!isStickyMod && <HeaderServices />}
            {!isStickyMod && <MobileMenu className="header__mobile-menu" />}


          </div>
        </div>
      </header>
      {isStickyMod &&
        <header className={`${props.className} header sticky-header`}>
          <div className="container">
            <div className="header__row">
              <HeaderLogo />
              <HeaderMenu />
              <HeaderServices />
              <MobileMenu className="header__mobile-menu" />
            </div>
          </div>
        </header>
      }

    </React.Fragment>
  );
}

export const HeaderLogo: React.FC = (props) => {
  return (
    <div className="header__logo">
      <img src={logo} alt="groxi's logo" />
    </div>
  );
}
export const HeaderMenu: React.FC = (props) => {
  return (
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
  );
}

export const HeaderServices: React.FC = (props) => {


  const [isSearchPopup, setIsSearchPopup] = useState(false);
  const [isAccountPopup, setIsAccountPopup] = useState(false);
  const [isWishlistPopup, setIsWishlistPopup] = useState(false);
  const [isCartPopup, setIsCartPopup] = useState(false);

  useEffect(() => {
    if (isSearchPopup) {
      setIsAccountPopup(false);
      setIsWishlistPopup(false);
      setIsCartPopup(false);
    }
  }, [isSearchPopup]);

  useEffect(() => {
    if (isAccountPopup) {
      setIsSearchPopup(false);
      setIsWishlistPopup(false);
      setIsCartPopup(false);
    }
  }, [isAccountPopup]);

  useEffect(() => {
    if (isWishlistPopup) {
      setIsSearchPopup(false);
      setIsAccountPopup(false);
      setIsCartPopup(false);
    }
  }, [isWishlistPopup]);

  useEffect(() => {
    if (isCartPopup) {
      setIsSearchPopup(false);
      setIsAccountPopup(false);
      setIsWishlistPopup(false);
    }
  }, [isCartPopup]);


  return (
    <div className="header__services">
      <div className="header__service">
        <div className={isSearchPopup ? "header__icon header-service-active" : "header__icon"}
          onClick={() => { setIsSearchPopup(current => !current) }}
        >
          <img src={searchIcon} alt="search icon" />
        </div>
        <Popup isPopup={isSearchPopup}>
          <Search />
        </Popup>
      </div>
      <div className="header__service">
        <div className={isAccountPopup ? "header__icon header-service-active" : "header__icon"}
          onClick={() => { setIsAccountPopup(current => !current) }}
        >
          <img src={accountIcon} alt="account icon" />
        </div>
        <Popup isPopup={isAccountPopup}>
          <Account />
        </Popup>
      </div>
      <div className="header__service">
        <div className={isWishlistPopup ? "header__icon header-service-active" : "header__icon"}
          onClick={() => { setIsWishlistPopup(current => !current) }}
        >

          <img src={wishListIcon} alt="wishlist icon" />
        </div>
        <Popup isPopup={isWishlistPopup}>
          <Wishlist />
        </Popup>
      </div>
      <div className="header__service">
        <div className={isCartPopup ? "header__icon header-service-active" : "header__icon"}
          onClick={() => { setIsCartPopup(current => !current) }}
        >

          <img src={cartIcon} alt="cart icon" />
        </div>
        <Popup isPopup={isCartPopup}>
          <Cart />
        </Popup>
      </div>
    </div>
  );
}