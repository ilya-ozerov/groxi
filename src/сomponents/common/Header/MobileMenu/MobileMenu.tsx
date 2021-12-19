import React, { useEffect, useState } from 'react';
import './MobileMenu.scss';
import { CSSTransition } from 'react-transition-group';

import searchIcon from '../../../../assets/images/header/searchIcon.png';
import accountIcon from '../../../../assets/images/header/accountIcon.png';
import wishListIcon from '../../../../assets/images/header/wishListIcon.png';
import cartIcon from '../../../../assets/images/header/cartIcon.png';
import { Link } from 'react-router-dom';
import { Popup } from '../../Popup/Popup';
import { Search } from '../Popups/Search/Search';
import { Account } from '../Popups/Account/Account';
import { Wishlist } from '../Popups/WishList/Wishlist';
import { Cart } from '../Popups/Cart/Cart';

type MobileMenuPropsType = {
  className: string;
}
export const MobileMenu: React.FC<MobileMenuPropsType> = ({ className }) => {

  const [isMobile, setIsModile] = useState(false);

  // Removes the style on the big screen
  useEffect(() => {
    const widthHandler = () => {
      if (window.innerWidth > 1125) {
        document.body.classList.remove("mobile-menu-open");
      }
    }
    window.addEventListener("resize", widthHandler);
    return () => {
      window.removeEventListener("resize", widthHandler);
    }
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
  }, [isMobile]);

  return (
    <div className={`${className} mobile-menu`}>

      <div onClick={() => setIsModile(current => !current)}
        className={isMobile ? "mobile-menu__burger mobile-menu__active" : "mobile-menu__burger"}>
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
          <MobileMenuServices />
        </div>
      </CSSTransition>

    </div>
  );
}

export const MobileMenuServices: React.FC = (props) => {


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
    <div className="mobile-menu__services">
      <div className="mobile-menu__service">
        <div className={isSearchPopup ? "mobile-menu__icon mobile-menu-service-active" : "mobile-menu__icon"}
          onClick={() => { setIsSearchPopup(current => !current) }}
        >
          <img src={searchIcon} alt="search icon" />
        </div>
        <Popup isPopup={isSearchPopup}>
          <Search />
        </Popup>
      </div>
      <div className="mobile-menu__service">
        <div className={isAccountPopup ? "mobile-menu__icon mobile-menu-service-active" : "mobile-menu__icon"}
          onClick={() => { setIsAccountPopup(current => !current) }}
        >
          <img src={accountIcon} alt="account icon" />
        </div>
        <Popup isPopup={isAccountPopup}>
          <Account />
        </Popup>
      </div>
      <div className="mobile-menu__service">
        <div className={isWishlistPopup ? "mobile-menu__icon mobile-menu-service-active" : "mobile-menu__icon"}
          onClick={() => { setIsWishlistPopup(current => !current) }}
        >

          <img src={wishListIcon} alt="wishlist icon" />
        </div>
        <Popup isPopup={isWishlistPopup}>
          <Wishlist />
        </Popup>
      </div>
      <div className="mobile-menu__service">
        <div className={isCartPopup ? "mobile-menu__icon mobile-menu-service-active" : "mobile-menu__icon"}
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