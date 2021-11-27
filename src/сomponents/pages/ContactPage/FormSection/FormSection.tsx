import React from 'react';
import './FormSection.scss';

import pointIcon from '../../../../assets/images/contactPage/form/pointIcon.png';
import phoneIcon from '../../../../assets/images/contactPage/form/phoneIcon.png';
import messageIcon from '../../../../assets/images/contactPage/form/messageIcon.png';

export const FormSection: React.FC<FormSectionPropsType> = (props) => {
  return (
    <section className="form-section">
      <div className="container">
        <div className="form-section__body">
          <div className="form-section__form form">

            <div className="form__title">Get In Touch</div>

            <div className="form__body">
              <div className="form__name input">
                <input type="text" placeholder="Name" />
              </div>
              <div className="form__email input">
                <input type="text" placeholder="Email" />
              </div>
              <div className="form__phone input">
                <input type="text" placeholder="Phone" />
              </div>
              <div className="form__address input">
                <input type="text" placeholder="Address" />
              </div>
              <div className="form__message">
                <textarea placeholder="Message" />
              </div>

            </div>
            <div className="form__button button">
              <button>Send now</button>
            </div>
          </div>
          <div className="form-section__info">
            <div className="form-section__title">Reach Us</div>
            <div className="form-section__text">
              Aui dolorem iesum ruia dolor sit
              amet, consectetur.
            </div>

            <div className="form-section__item">
              <div className="form-section__image">
                <img src={pointIcon} alt="point icon" />
              </div>
              <div className="form-section__data">
                <div className="form-section__field">Location</div>
                <ul className="form-section__values">
                  <li>121 King Street Melbourne,</li>
                  <li>3000, Australia</li>
                </ul>
              </div>
            </div>

            <div className="form-section__item">
              <div className="form-section__image">
                <img src={phoneIcon} alt="phone icon" />
              </div>
              <div className="form-section__data">
                <div className="form-section__field">Phone</div>
                <ul className="form-section__values">
                  <li>0-589-96369-95823</li>
                  <li>0-825-63596-471254</li>
                </ul>
              </div>
            </div>

            <div className="form-section__item">
              <div className="form-section__image">
                <img src={messageIcon} alt="message icon" />
              </div>
              <div className="form-section__data">
                <div className="form-section__field">Email</div>
                <ul className="form-section__values">
                  <li>Groxistore@gmail.com</li>
                  <li>info@groxistore.com</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

type FormSectionPropsType = {

}