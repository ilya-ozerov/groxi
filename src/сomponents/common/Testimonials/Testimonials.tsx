import React from 'react';
import './Testimonials.scss';

import doubleApostrophe from '../../../assets/images/testimonials/doubleApostrophe.png';

import firstAward from '../../../assets/images/testimonials/firstAward.png';
import secondAward from '../../../assets/images/testimonials/secondAward.png';
import thirdAward from '../../../assets/images/testimonials/thirdAward.png';
import fourthAward from '../../../assets/images/testimonials/fourthAward.png';
import { Rate } from 'antd';

type TestimonialsPropsType = {};

export const Testimonials: React.FC<TestimonialsPropsType> = (props) => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__body">

          <div className="testimonials__title title">Testimonials</div>
          <div className="testimonials__subtitle subtitle">What Our Customers Saying</div>
          <div className="testimonials__comments">
            <div className="testimonials__item comment">
              <div className="comment__label">
                <img src={doubleApostrophe} alt="double green apostrophe" />
              </div>
              <div className="comment__text">
                "Quisquam est, qui dolorem ipsum quia dolor sit
                consectetur adipisci velit sed quia non numqua
                eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem repudia
                sint et molestiae"
              </div>
              <div className="comment__mark">
                <Rate disabled defaultValue={5} />
              </div>
              <div className="comment__author">
                <div className="comment__name">Alina Parker</div>
                <div className="comment__job">Ceo, GTD</div>
              </div>
            </div>
            <div className="testimonials__item comment">
              <div className="comment__label">
                <img src={doubleApostrophe} alt="double green apostrophe" />
              </div>
              <div className="comment__text">
                "Quisquam est, qui dolorem ipsum quia dolor sit
                consectetur adipisci velit sed quia non numqua
                eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem repudia
                sint et molestiae"
              </div>
              <div className="comment__mark">
                <Rate disabled defaultValue={5} />
              </div>
              <div className="comment__author">
                <div className="comment__name">Kevin Andrew</div>
                <div className="comment__job">Manager, Rex</div>
              </div>
            </div>
          </div>

          <div className="testimonials__awards">
            <div className="testimonials__award">
              <img src={firstAward} alt="award" />
            </div>
            <div className="testimonials__award">
              <img src={secondAward} alt="award" />
            </div>
            <div className="testimonials__award">
              <img src={thirdAward} alt="award" />
            </div>
            <div className="testimonials__award">
              <img src={fourthAward} alt="award" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}