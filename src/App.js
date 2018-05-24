import injectSheet from 'react-jss';
import React, { Component } from 'react';
import Routes from 'react-static-routes';
import styles from 'App.jss';
import { Router } from 'react-static';

@injectSheet(styles)
export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}
