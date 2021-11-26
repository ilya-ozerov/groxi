import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { Footer } from './сomponents/Footer/Footer';
import { Testimonials } from './сomponents/Testimonials/Testimonials';

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/home' />} />
        <Route path='/home' render={() => <HomePage />} />
        <Route path='*' render={() => <div>404 NOT FOUND</div>} />
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