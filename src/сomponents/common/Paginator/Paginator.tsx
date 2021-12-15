import React from 'react';
import './Paginator.scss';

import arrowLeft from '../../../assets/images/paginator/arrowLeft.png';
import arrowRight from '../../../assets/images/paginator/arrowRight.png';

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
                    <img src={arrowLeft} alt="prev button" />
                </div>
            }

            <ul className="paginator__list">
                {props.children}
            </ul>
            {props.currentPage < props.countOfPages &&
                <div onClick={props.nextOnClick} className="paginator__next-button">
                    <img src={arrowRight} alt="next button" />
                </div>
            }

        </div>
    );
}