import React from "react";
import { Slider } from "antd";
import { CSSProperties, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../../../../../redux/productsReducer";
import { selectCurrentFilter } from "../../../../../../redux/productsSelectors";
import { CollapseItem } from "../../../../../common/Collapse/Collapse";

import './../ShopSidebar.scss';

export const PriceFilter: React.FC<PriceFilterProps> = () => {

    const [priceFilterValues, setPriceFilterValues] = useState<[number, number]>([0, 0]);
    const dispatch = useDispatch();
    const currentFilter = useSelector(selectCurrentFilter);

    // update shop filter
    const submitPriceFilter = () => {
        dispatch(productsActions.currentFilterChanged({
            query: currentFilter.query,
            price: {
                bottom: priceFilterValues[0],
                top: priceFilterValues[1],
            },
            sorting: currentFilter.sorting,
            tags: currentFilter.tags,
        }))
    }

    // styles for antd's slider
    const handleStyle1: CSSProperties = {
        borderRadius: 0,
        width: "12px",
        height: "12px",
        borderColor: '#9FCB22',
        backgroundColor: '#9FCB22',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto",
    }
    const handleStyle2: CSSProperties = {
        borderRadius: 0,
        width: "12px",
        height: "12px",
        borderColor: '#9FCB22',
        backgroundColor: '#9FCB22',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto",
    }
    const trackStyle: CSSProperties = {
        height: '8px',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto",
        backgroundColor: "#F6FAFB",
    }

    return (
        <React.Fragment>
            <div className="shop-sidebar__filter">
                <div className="shop-sidebar__title">Filter By Price</div>
                <div className="shop-sidebar__slider">
                    <Slider handleStyle={[handleStyle1, handleStyle2]}
                        trackStyle={[trackStyle]} range={true} value={priceFilterValues} onChange={(value) => setPriceFilterValues(value)} />
                </div>

                <span className="shop-sidebar__button button">
                    <button onClick={submitPriceFilter}>filter</button>
                </span>

                <span className="shop-sidebar__price-range">Price ${priceFilterValues[0]}-${priceFilterValues[1]}</span>
            </div>
            <div className="shop-sidebar__mobile-filter">
                <CollapseItem className="shop-sidebar__collapse" title="Filter By Price">
                    <div className="shop-sidebar__slider">
                        <Slider handleStyle={[handleStyle1, handleStyle2]}
                            trackStyle={[trackStyle]} range={true} value={priceFilterValues} onChange={(value) => setPriceFilterValues(value)} />
                    </div>

                    <span className="shop-sidebar__button button">
                        <button onClick={submitPriceFilter}>filter</button>
                    </span>

                    <span className="shop-sidebar__price-range">Price ${priceFilterValues[0]}-${priceFilterValues[1]}</span>
                </CollapseItem>
            </div>
        </React.Fragment>
    );
}
type PriceFilterProps = {}