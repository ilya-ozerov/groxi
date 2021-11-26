import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import { HomePage } from './сomponents/pages/HomePage/HomePage';
import { Page404 } from './сomponents/pages/Page404/Page404';
import { Footer } from './сomponents/common/Footer/Footer';
import { Testimonials } from './сomponents/common/Testimonials/Testimonials';
import { AboutPage } from './сomponents/pages/AboutPage/AboutPage';

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/home' />} />
        <Route path='/home' render={() => <HomePage />} />

        <Route path='*' render={() => <Page404 />} />
      </Switch>

      <Testimonials />
      <Footer />
    </div>
  );
}

const GroxiApp: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default GroxiApp;