import React, { useEffect, useState } from 'react';
import './BlogSection.scss';
import { SearchInput } from '../../../common/SearchInput/SearchInput';
import { Post } from './Post/Post';
import { PostType } from '../../../../types/types';
import { monthNames } from '../BlogPage';
import { useDispatch, useSelector } from 'react-redux';
import { blogActions, getPostsThunkCreator, getRecentThunkCreator } from '../../../../redux/blogReducer';
import {
  selectBlogCurrentPage, selectBlogFilter, selectBlogPageSize,
  selectFirstPostIndex, selectLastPostIndex, selectPosts,
  selectRecent, selectTotalPostsCount
} from '../../../../redux/blogSelectors';
import { PaginatorContainer } from '../../../common/Paginator/PaginatorContainer';

export const BlogSection: React.FC<BlogSectionPropsType> = (props) => {

  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const firstPostIndex = useSelector(selectFirstPostIndex);
  const lastPostIndex = useSelector(selectLastPostIndex);

  const currentPage = useSelector(selectBlogCurrentPage);
  const pageSize = useSelector(selectBlogPageSize);
  const totalPosts = useSelector(selectTotalPostsCount);

  // functions for Paginator
  const updateCurrentPage = (pageNumber: number) => {
    dispatch(blogActions.currentPageChanged(pageNumber));
  }
  const updateFirstPostIndex = (index: number) => {
    dispatch(blogActions.firstPostIndexChanged(index));
  }
  const updateLastPostIndex = (index: number) => {
    dispatch(blogActions.lastPostIndexChanged(index));
  }

  const filter = useSelector(selectBlogFilter);

  useEffect(() => {
    dispatch(getPostsThunkCreator(firstPostIndex, lastPostIndex, filter));
  }, [firstPostIndex, lastPostIndex, filter]);

  useEffect(() => {
    dispatch(blogActions.currentPageChanged(1));
  }, [filter]);

  useEffect(() => {
    dispatch(blogActions.currentFilterChanged({
      query: searchTerm,
    }));
  }, [searchTerm]);

  const posts = useSelector(selectPosts);

  const postsList = posts.map(p => {
    return <Post key={p.id} post={p} className="blog-section__item" />
  });

  useEffect(() => {
    dispatch(getRecentThunkCreator(5));
  }, []);

  const recent = useSelector(selectRecent)

  const recentPostsList = recent.map(p => {
    return <RecentPost key={p.id} post={p} />
  });

  return (
    <section className="blog-section">
      <div className="container">

        <div className="blog-section__body">
          <div className="blog-section__posts">
            <div className="blog-section__items">
              {postsList}
            </div>
            <PaginatorContainer
              className="blog-section__paginator"
              currentPage={currentPage}
              firstItemIndex={firstPostIndex}
              lastItemIndex={lastPostIndex}
              pageSize={pageSize}
              totalItems={totalPosts}
              updateCurrentPage={updateCurrentPage}
              updateFirstItemIndex={updateFirstPostIndex}
              updateLastItemIndex={updateLastPostIndex}
            />
          </div>

          <div className="blog-section__sidebar blog-sidebar">

            <SearchInput value={searchTerm} onChange={(ev) => { setSearchTerm(ev.currentTarget.value) }} className="blog-sidebar__search" />

            <div className="blog-sidebar__recent">
              <div className="blog-sidebar__title">Recent Posts</div>
              <div className="blog-sidebar__items">
                {recentPostsList}
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

type RecentPostPropsType = {
  post: PostType;
}

const RecentPost: React.FC<RecentPostPropsType> = ({ post }) => {

  const date = `${monthNames[post.date.getMonth()]} ${post.date.getDate()}, ${post.date.getFullYear()}`;

  return (
    <div className="blog-sidebar__item">
      <div className="blog-sidebar__image">
        <img src={post.image.url} alt={post.image.alt} />
      </div>
      <div className="blog-sidebar__info">
        <div className="blog-sidebar__text">
          {post.title.length > 30 ? post.title.substring(0, 30) + "..." : post.title}
        </div>
        <div className="blog-sidebar__date">
          {date}
        </div>
      </div>
    </div>
  );
}