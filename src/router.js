import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home     from './containers/home';
import Projects from './containers/projects';
import About    from './containers/about';

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/about' exact component={About} />
          <Route path='/*' render={() => <Redirect to='/'/>} />
        </Switch>
      </BrowserRouter>
    );
  }
}
