import React, { useState } from 'react';
import "./Collapse.scss";

import { UpOutlined, DownOutlined } from '@ant-design/icons';

type CollapseItemProps = {
    className: string;
    title: string;
    titleStyle?: string;
}

export const CollapseItem: React.FC<CollapseItemProps> = (props) => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(current => !current);
    }

    return (
        <div className={`${props.className} collapse`}>
            <div className={props.titleStyle ? props.titleStyle : "collapse__title"} onClick={toggleCollapse}>
                {props.title}
                {isCollapsed ? <UpOutlined /> : <DownOutlined />}
            </div>

            {isCollapsed &&
                <div className="collapse__children">
                    {props.children}
                </div>
            }
        </div>
    );
}