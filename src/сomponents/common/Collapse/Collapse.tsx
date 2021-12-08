import React, { useState } from 'react';

type CollapseItemProps = {
    style: {
        item: string;
        itemTitle: string;
        itemBody: string;
        itemIcon: string;
        itemActive: string;
    }
    title: string;

}

export const CollapseItem: React.FC<CollapseItemProps> = (props) => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className={props.style.item}>
            <div onClick={() => setIsCollapsed(current => !current)}
                className={props.style.itemTitle}>
                {props.title}
                <span className={isCollapsed ? props.style.itemActive : props.style.itemIcon}></span>
            </div>

            {isCollapsed &&
                <div className={props.style.itemBody}>
                    {props.children}
                </div>
            }
        </div>
    );
}