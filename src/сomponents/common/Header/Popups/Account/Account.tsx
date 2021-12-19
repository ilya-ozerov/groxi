import React from 'react';
import "./Account.scss";

export const Account: React.FC<AccountProps> = (props) => {

    return (
        <div className="account">
            <div className="account__form">
                <div className="account__input input">
                    <input type="email" placeholder="email" />
                </div>
                <div className="account__input input">
                    <input type="password" placeholder="password" />
                </div>

                <div className="account__buttons">
                    <div className="account__login-button button">
                        <button>login</button>
                    </div>
                    <div className="account__register-button button">
                        <button>register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
type AccountProps = {
}
