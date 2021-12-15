import React, { useEffect, useState } from 'react';
import { Paginator } from './Paginator';
import { PaginatorItem } from './PaginatorItem';

type PaginatorContainerPropsType = {
    className: string;

    totalItems: number;
    pageSize: number;

    currentPage: number;

    firstItemIndex: number;
    lastItemIndex: number;

    updateFirstItemIndex: (index: number) => void;
    updateLastItemIndex: (index: number) => void;

    updateCurrentPage: (pageNumber: number) => void;
}

export const PaginatorContainer: React.FC<PaginatorContainerPropsType> = (props) => {
    const countOfPages = Math.ceil(props.totalItems / props.pageSize);
    const pages: Array<number> = [];
    for (let i = 1; i <= countOfPages; i++) {
        pages.push(i);
    }

    const pagesList = pages.map((page, index) => {
        return (
            <PaginatorItem key={index}
                currentStatePage={props.currentPage}
                tempPage={page}
                activeClassName="paginator__active"
                updateCurrentPage={props.updateCurrentPage}
            />
        );
    })

    const [tempPage, setTempPage] = useState(props.currentPage);

    // Changing product indexes when changing a page
    useEffect(() => {

        if (props.currentPage > tempPage) {
            props.updateFirstItemIndex(props.firstItemIndex + props.pageSize * (props.currentPage - tempPage));
            props.updateLastItemIndex(props.lastItemIndex + props.pageSize * (props.currentPage - tempPage));
        }
        if ((props.currentPage < tempPage)) {
            props.updateFirstItemIndex(props.firstItemIndex - props.pageSize * (tempPage - props.currentPage));
            props.updateLastItemIndex(props.lastItemIndex - props.pageSize * (tempPage - props.currentPage));
        }

        setTempPage(props.currentPage);

    }, [props.currentPage]);

    const prevOnClick = () => {
        props.updateCurrentPage(props.currentPage - 1);
    }
    const nextOnClick = () => {
        props.updateCurrentPage(props.currentPage + 1);
    }

    if (countOfPages > 1) {
        return (
            <React.Fragment>
                <Paginator className={props.className}
                    countOfPages={countOfPages}
                    currentPage={props.currentPage} nextOnClick={nextOnClick} prevOnClick={prevOnClick}>
                    {pagesList}
                </Paginator>
            </React.Fragment>
        );
    } else {
        return <React.Fragment />
    }
}