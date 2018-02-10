import React from 'react';
import Routes from 'react-static-routes';
import { hot } from 'react-hot-loader';
import { Router, Link } from 'react-static';

import './app.css';

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
);

export default hot(module)(App);
