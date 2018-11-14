import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import routes from './router/routes.js'

import Nav from './components/layouts/nav/Nav.js'
import Footer from './components/layouts/footer/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
