import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Home from '../pages/Home';
import FileView from '../pages/FileView';
import "circular-std";
import '../css/app.scss';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/share/:id" component={FileView} />
      {/* <Route path="/store/:storeId" component={App} /> */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;