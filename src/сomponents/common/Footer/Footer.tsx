import React from 'react';
import './Footer.scss';

import vegetablesBasket from '../../../assets/images/footer/vegetablesBasket.png';
import facebookIcon from '../../../assets/images/footer/Facebook.png';
import twitterIcon from '../../../assets/images/footer/Twitter.png';
import linkedinIcon from '../../../assets/images/footer/Linkedin.png';
import pinterestIcon from '../../../assets/images/footer/Pinterest.png';
import instagramIcon from '../../../assets/images/footer/Instagram.png';
import { CollapseItem } from '../Collapse/Collapse';

type FooterPropsType = {}

export const Footer: React.FC<FooterPropsType> = (props) => {

  const CollapseItemStyle = {
    item: "footer__collapse collapse",
    itemTitle: "collapse__title footer__title",
    itemBody: "collapse__body",
    itemIcon: "collapse__icon",
    itemActive: "collapse__active",
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="subscribe">
            <div className="subscribe__image">
              <img src={vegetablesBasket} alt="vegetables basket" />
            </div>
            <div className="subscribe__body">
              <div className="subscribe__title">Subscribe To Newsletter</div>
              <div className="subscribe__form">
                <div className="subscribe__input">
                  <input type="text" placeholder="Enter Your Email Address" />
                </div>
                <div className="subscribe__button button">
                  <button>Subscribe Now</button>
                </div>

              </div>
            </div>
          </div>

          <div className="footer__info">
            <div className="footer__column">
              <div className="footer__title">Store Location</div>
              <ul className="footer__information">
                <li>Address:</li>
                <li>121 King Street Melbourne,3000,<br /> Australia</li>
                <li>Email:</li>
                <li>info@groxistore.com</li>
                <li>Phone:</li>
                <li>+1 23 45 6789</li>
              </ul>
            </div>
            <div className="footer__column">
              <div className="footer__title">Useful Links</div>
              <ul className="footer__list">
                <li>About us</li>
                <li>Blog</li>
                <li>Check out</li>
                <li>Contact</li>
                <li>Service</li>
                <li>Shop</li>
              </ul>
            </div>
            <div className="footer__column">
              <div className="footer__title">Categories</div>
              <ul className="footer__list">
                <li>Fruits & Vegetables</li>
                <li>Dairy Products</li>
                <li>Package Foods</li>
                <li>Beverage</li>
                <li>Health & Wellness</li>
                <li>Meat Varieties</li>
              </ul>
            </div>
            <div className="footer__column">
              <div className="footer__title">Opening Hours</div>
              <ul className="footer__information">
                <li>Monday – Saturday</li>
                <li>12.00 – 14.45</li>


                <li>Sunday – Thursday</li>
                <li>17.30 – 00.00</li>

                <li>Friday – Saturday</li>
                <li>17.30 – 00.00</li>
              </ul>
            </div>

            <div className="footer__mobile-column">
              <CollapseItem title="Store Location" className="footer__collapse" titleStyle="footer__collapse-title">
                <ul className="footer__information">
                  <li>Address:</li>
                  <li>121 King Street Melbourne,3000,<br /> Australia</li>
                  <li>Email:</li>
                  <li>info@groxistore.com</li>
                  <li>Phone:</li>
                  <li>+1 23 45 6789</li>
                </ul>
              </CollapseItem>
            </div>
            <div className="footer__mobile-column">
              <CollapseItem title="Useful Links" className="footer__collapse" titleStyle="footer__collapse-title">
                <ul className="footer__list">
                  <li>About us</li>
                  <li>Blog</li>
                  <li>Check out</li>
                  <li>Contact</li>
                  <li>Service</li>
                  <li>Shop</li>
                </ul>
              </CollapseItem>
            </div>
            <div className="footer__mobile-column">
              <CollapseItem title="Categories" className="footer__collapse" titleStyle="footer__collapse-title">
                <ul className="footer__list">
                  <li>Fruits & Vegetables</li>
                  <li>Dairy Products</li>
                  <li>Package Foods</li>
                  <li>Beverage</li>
                  <li>Health & Wellness</li>
                  <li>Meat Varieties</li>
                </ul>
              </CollapseItem>
            </div>
            <div className="footer__mobile-column">
              <CollapseItem title="Opening Hours" className="footer__collapse" titleStyle="footer__collapse-title">
                <ul className="footer__information">
                  <li>Monday – Saturday</li>
                  <li>12.00 – 14.45</li>


                  <li>Sunday – Thursday</li>
                  <li>17.30 – 00.00</li>

                  <li>Friday – Saturday</li>
                  <li>17.30 – 00.00</li>
                </ul>
              </CollapseItem>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="bottom__body">
            <div className="bottom__copy">Copyright 2020, Groxi Store. All Rights Reserved.</div>
            <div className="bottom__socials">
              <div className="bottom__follow">Follow Us:</div>
              <div className="bottom__social">
                <img src={facebookIcon} alt="facebook" />
              </div>

              <div className="bottom__social">
                <img src={twitterIcon} alt="twitter" />
              </div>

              <div className="bottom__social">
                <img src={linkedinIcon} alt="linkedin" />
              </div>

              <div className="bottom__social">
                <img src={pinterestIcon} alt="pinterest" />
              </div>

              <div className="bottom__social">
                <img src={instagramIcon} alt="instagram" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}