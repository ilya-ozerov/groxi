import React from 'react';
import { PostType } from '../../../../../types/types';
import { monthNames } from '../../BlogPage';
import './Post.scss';

export const Post: React.FC<PostPropsType> = ({ post, className }) => {

    const date = `${monthNames[post.date.getMonth()]} ${post.date.getDate()}, ${post.date.getFullYear()}`;

    return (
        <div className={`${className} post`}>
            <div className="post__image">
                <img src={post.image.url} alt={post.image.alt} />
            </div>
            <div className="post__info">
                <div className="post__subtitle">
                    <div className="post__author">
                        By <span>{post.authorName}</span>
                    </div>
                    <div className="post__date">
                        {/* Date {post.date.month} {post.date.day}, {post.date.year} */}
                        Date {date}
                    </div>
                </div>

                <div className="post__title">
                    {post.title.length > 60 ? post.title.substring(0, 60) + "..." : post.title}
                </div>
                <div className="post__text">
                    {post.text}
                </div>
                <div className="post__button button">
                    <button>read more</button>
                </div>

            </div>
        </div>
    );
}

type PostPropsType = {
    post: PostType;
    className: string;
}