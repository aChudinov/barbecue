import React, { Component } from 'react';
import Routes from 'react-static-routes';
import theme from './lib/theme';
import { Router } from 'react-static';
import { ThemeProvider } from 'react-jss';

export default class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Router>
    );
  }
}
