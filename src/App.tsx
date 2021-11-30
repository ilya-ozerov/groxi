import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import { HomePage } from './сomponents/pages/HomePage/HomePage';
import { Page404 } from './сomponents/pages/Page404/Page404';
import { Footer } from './сomponents/common/Footer/Footer';
import { Testimonials } from './сomponents/common/Testimonials/Testimonials';
import { AboutPage } from './сomponents/pages/AboutPage/AboutPage';
import { ContactPage } from './сomponents/pages/ContactPage/ContactPage';
import { BlogPage } from './сomponents/pages/BlogPage/BlogPage';
import { ShopPage } from './сomponents/pages/ShopPage/ShopPage';
import { ProductDetailPage } from './сomponents/pages/ProductDetailPage/ProductDetailPage';
import { ScrollToTop } from './hoc/scrollToTop';

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <ScrollToTop>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/home' />} />
          <Route path='/home' render={() => <HomePage />} />
          <Route path='/about' render={() => <AboutPage />} />
          <Route path='/shop' render={() => <ShopPage />} />
          <Route path='/blog' render={() => <BlogPage />} />
          <Route path='/contact' render={() => <ContactPage />} />
          <Route path='/detail/:id' render={() => <ProductDetailPage />} />
          <Route path='*' render={() => <Page404 />} />
        </Switch>
      </ScrollToTop>
      <Testimonials />
      <Footer />
    </div>
  );
}

export const GroxiApp: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}