import React from 'react';
import './Page404.scss';

import background from '../../../assets/images/404/background.png';
import vegetables_bg from '../../../assets/images/404/vegetables_bg.png';
import boxOfEggs from '../../../assets/images/404/boxOfEggs.png';
import { Header } from '../../common/Header/Header';
export const Page404: React.FC = () => {
    return (
        <div className="page-404">
            <img className="page-404__background" src={background} alt="background" />
            <img className="page-404__vegetables-bg" src={vegetables_bg} alt="background" />

            <div className="container">

                <Header className="page-404__header" />

                <div className="page-404__body">
                    <div className="page-404__image">
                        <img src={boxOfEggs} alt="box of eggs" />
                    </div>
                    <div className="page-404__info">
                        <div className="page-404__title">404</div>
                        <div className="page-404__subtitle">We Could Not Find Page You’re Looking</div>
                        <div className="page-404__text">
                            The link you’re trying to access is probably broken, or
                            the page has been removed.
                        </div>
                        <div className="page-404__button button">
                            <button>Back to home</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}