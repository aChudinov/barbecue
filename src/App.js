import React, { Component } from 'react';
import Routes from 'react-static-routes';
import { hot } from 'react-hot-loader';
import { Router, Link } from 'react-static';

import './app.css';

@hot(module)
export default class App extends Component {
  render() {
    return (
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
  }
}
