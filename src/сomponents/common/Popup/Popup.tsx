import React from 'react';
import "./Popup.scss";

export const Popup: React.FC<PopupPropsType> = (props) => {

    if (props.isPopup) {
        return (
            <div className="popup">
                <div className="popup__body">
                    {props.children}
                </div>
            </div>
        );
    } else {
        return null;
    }
}

type PopupPropsType = {
    isPopup: boolean;
}