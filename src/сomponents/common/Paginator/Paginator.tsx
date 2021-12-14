import React from 'react';
import './Paginator.scss';

import arrow from '../../../assets/images/blogPage/posts/arrow.png';

type PaginatorPropsType = {
    className: string;
    currentPage: number;
    countOfPages: number;

    prevOnClick: () => void;
    nextOnClick: () => void;
}

export const Paginator: React.FC<PaginatorPropsType> = (props) => {
    return (
        <div className={`${props.className} paginator`}>
            {props.currentPage !== 1 &&
                <div onClick={props.prevOnClick} className="paginator__prev-button">
                    <img src={arrow} alt="prev button" />
                </div>
            }

            <ul className="paginator__list">
                {props.children}
            </ul>
            {props.currentPage < props.countOfPages &&
                <div onClick={props.nextOnClick} className="paginator__next-button">
                    <img src={arrow} alt="next button" />
                </div>
            }

        </div>
    );
}