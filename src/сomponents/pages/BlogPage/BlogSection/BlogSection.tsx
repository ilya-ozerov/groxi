import React from 'react';
import './BlogSection.scss';

import postImage1 from '../../../../assets/images/blogPage/posts/postImage1.png';
import postImage2 from '../../../../assets/images/blogPage/posts/postImage2.png';
import postImage3 from '../../../../assets/images/blogPage/posts/postImage3.png';
import postImage4 from '../../../../assets/images/blogPage/posts/postImage4.png';
import postImage5 from '../../../../assets/images/blogPage/posts/postImage5.png';
import postImage6 from '../../../../assets/images/blogPage/posts/postImage6.png';
import arrow from '../../../../assets/images/blogPage/posts/arrow.png';

import greenArrow from '../../../../assets/images/blogPage/greenArrow.png';
import search from '../../../../assets/images/blogPage/search.png';

export const BlogSection: React.FC<BlogSectionPropsType> = (props) => {
  return (
    <section className="blog-section">
      <div className="container">

        <div className="blog-section__body">
          <div className="blog-section__posts">
            <div className="blog-section__items">
              <div className="blog-section__item post">
                <div className="post__image">
                  <img src={postImage1} alt="post preview" />
                </div>
                <div className="post__info">
                  <div className="post__subtitle">
                    <div className="post__author">
                      By <span>admin</span>
                    </div>
                    <div className="post__date">Date April 24, 2020</div>
                  </div>

                  <div className="post__title">
                    Quia voluptas sit asernatur aut  renit aut fugit
                  </div>
                  <div className="post__text">
                    Neque porro quisquam est aui dolorem
                    sit amet, consectetur, adipisci velit, se
                    eius modi tempora incidunt.
                  </div>
                  <div className="post__button button">
                    <button>read more</button>
                  </div>

                </div>
              </div>

              <div className="blog-section__item post">
                <div className="post__image">
                  <img src={postImage2} alt="post preview" />
                </div>
                <div className="post__info">
                  <div className="post__subtitle">
                    <div className="post__author">
                      By <span>admin</span>
                    </div>
                    <div className="post__date">Date April 24, 2020</div>
                  </div>

                  <div className="post__title">
                    Quia voluptas sit asernatur aut  renit aut fugit
                  </div>
                  <div className="post__text">
                    Neque porro quisquam est aui dolorem
                    sit amet, consectetur, adipisci velit, se
                    eius modi tempora incidunt.
                  </div>
                  <div className="post__button button">
                    <button>read more</button>
                  </div>

                </div>
              </div>

              <div className="blog-section__item post">
                <div className="post__image">
                  <img src={postImage3} alt="post preview" />
                </div>
                <div className="post__info">
                  <div className="post__subtitle">
                    <div className="post__author">
                      By <span>admin</span>
                    </div>
                    <div className="post__date">Date April 24, 2020</div>
                  </div>

                  <div className="post__title">
                    Quia voluptas sit asernatur aut  renit aut fugit
                  </div>
                  <div className="post__text">
                    Neque porro quisquam est aui dolorem
                    sit amet, consectetur, adipisci velit, se
                    eius modi tempora incidunt.
                  </div>
                  <div className="post__button button">
                    <button>read more</button>
                  </div>

                </div>
              </div>

              <div className="blog-section__item post">
                <div className="post__image">
                  <img src={postImage4} alt="post preview" />
                </div>
                <div className="post__info">
                  <div className="post__subtitle">
                    <div className="post__author">
                      By <span>admin</span>
                    </div>
                    <div className="post__date">Date April 24, 2020</div>
                  </div>

                  <div className="post__title">
                    Quia voluptas sit asernatur aut  renit aut fugit
                  </div>
                  <div className="post__text">
                    Neque porro quisquam est aui dolorem
                    sit amet, consectetur, adipisci velit, se
                    eius modi tempora incidunt.
                  </div>
                  <div className="post__button button">
                    <button>read more</button>
                  </div>

                </div>
              </div>

              <div className="blog-section__item post">
                <div className="post__image">
                  <img src={postImage5} alt="post preview" />
                </div>
                <div className="post__info">
                  <div className="post__subtitle">
                    <div className="post__author">
                      By <span>admin</span>
                    </div>
                    <div className="post__date">Date April 24, 2020</div>
                  </div>

                  <div className="post__title">
                    Quia voluptas sit asernatur aut  renit aut fugit
                  </div>
                  <div className="post__text">
                    Neque porro quisquam est aui dolorem
                    sit amet, consectetur, adipisci velit, se
                    eius modi tempora incidunt.
                  </div>
                  <div className="post__button button">
                    <button>read more</button>
                  </div>

                </div>
              </div>

              <div className="blog-section__item post">
                <div className="post__image">
                  <img src={postImage6} alt="post preview" />
                </div>
                <div className="post__info">
                  <div className="post__subtitle">
                    <div className="post__author">
                      By <span>admin</span>
                    </div>
                    <div className="post__date">Date April 24, 2020</div>
                  </div>

                  <div className="post__title">
                    Quia voluptas sit asernatur aut  renit aut fugit
                  </div>
                  <div className="post__text">
                    Neque porro quisquam est aui dolorem
                    sit amet, consectetur, adipisci velit, se
                    eius modi tempora incidunt.
                  </div>
                  <div className="post__button button">
                    <button>read more</button>
                  </div>

                </div>
              </div>

            </div>
            <div className="blog-section__pagination">
              <div className="blog-section__prev-button">
                <img src={arrow} alt="prev button" />
              </div>
              <ul className="blog-section__list">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
              <div className="blog-section__next-button">
                <img src={arrow} alt="next button" />
              </div>
            </div>
          </div>

          <div className="blog-section__sidebar blog-sidebar">

            <div className="blog-sidebar__search">
              <div className="blog-sidebar__input">
                <input type="text" placeholder="Search" />
                <div className="blog-sidebar__icon">
                  <img src={search} alt="search icon" />
                </div>
              </div>
            </div>


            <div className="blog-sidebar__recent">
              <div className="blog-sidebar__title">Recent Posts</div>
              <div className="blog-sidebar__items">
                <div className="blog-sidebar__item">
                  <div className="blog-sidebar__image">
                    <img src={postImage1} alt="post preview" />
                  </div>
                  <div className="blog-sidebar__info">
                    <div className="blog-sidebar__text">
                      Beatae vitae rica
                      sunt exlicabo
                    </div>
                    <div className="blog-sidebar__date">
                      April 24, 2020
                    </div>

                  </div>

                </div>
                <div className="blog-sidebar__item">
                  <div className="blog-sidebar__image">
                    <img src={postImage2} alt="post preview" />
                  </div>
                  <div className="blog-sidebar__info">
                    <div className="blog-sidebar__text">
                      Beatae vitae rica
                      sunt exlicabo
                    </div>
                    <div className="blog-sidebar__date">
                      April 24, 2020
                    </div>

                  </div>

                </div>
                <div className="blog-sidebar__item">
                  <div className="blog-sidebar__image">
                    <img src={postImage3} alt="post preview" />
                  </div>
                  <div className="blog-sidebar__info">
                    <div className="blog-sidebar__text">
                      Beatae vitae rica
                      sunt exlicabo
                    </div>
                    <div className="blog-sidebar__date">
                      April 24, 2020
                    </div>

                  </div>

                </div>
                <div className="blog-sidebar__item">
                  <div className="blog-sidebar__image">
                    <img src={postImage4} alt="post preview" />
                  </div>
                  <div className="blog-sidebar__info">
                    <div className="blog-sidebar__text">
                      Beatae vitae rica
                      sunt exlicabo
                    </div>
                    <div className="blog-sidebar__date">
                      April 24, 2020
                    </div>

                  </div>

                </div>
                <div className="blog-sidebar__item">
                  <div className="blog-sidebar__image">
                    <img src={postImage5} alt="post preview" />
                  </div>
                  <div className="blog-sidebar__info">
                    <div className="blog-sidebar__text">
                      Beatae vitae rica
                      sunt exlicabo
                    </div>
                    <div className="blog-sidebar__date">
                      April 24, 2020
                    </div>

                  </div>

                </div>
              </div>
              <div className="blog-sidebar__button button">
                <button>view more</button>
              </div>

            </div>

            <div className="blog-sidebar__categories">
              <div className="blog-sidebar__title">Categories</div>

              <ul className="blog-sidebar__list">
                <li>Beverages</li>
                <li>Biscuits, Snacks</li>
                <li>Breakfast & Dairy</li>
                <li>Fruits & Vegetables</li>
                <li>Home Needs</li>
                <li>Grocery & Staples</li>
                <li>Home & Kitchen</li>
                <li>Household Needs</li>
                <li>Meats, Frozen</li>
                <li>Noodles, Sauces</li>
                <li>Personal Care</li>
                <li>Pet Care</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

type BlogSectionPropsType = {

}