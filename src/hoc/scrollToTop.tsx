import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const ScrollToTop: React.FC = (props) => {

    const history = useHistory();

    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);

    return <React.Fragment>{props.children}</React.Fragment>;;
}