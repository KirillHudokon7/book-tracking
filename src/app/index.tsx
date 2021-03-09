import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { BooksPage } from './containers/BooksPage/Loadable';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BooksPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};
