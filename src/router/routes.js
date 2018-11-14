import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import App from '../App.js';
import Home from '../components/home/Home.js';
import About from '../components/about/About.js';
import People from '../components/people/People.js';
import Shows from '../components/shows/Shows.js';
import Missing from '../components/missing/Missing.js';

const routes = (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/people/" component={People} />
      <Route path="/shows/" component={Shows} />
      <Route path="*" component={Missing} />
    </Switch>
  </Router>
)

export default routes;