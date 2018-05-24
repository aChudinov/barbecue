import './lib/setupJss';
import injectSheet from 'react-jss';
import React, { Component } from 'react';
import Routes from 'react-static-routes';
import { Router } from 'react-static';

@injectSheet({
  '@global': {
    body: {
      fontFamily: 'Oswald, sans-serif',
      fontWeight: 300,
      fontSize: '16px',
      letterSpacing: '0.1em',
      color: '#241C18',
      margin: 0,
      padding: 0,
    },

    'html, body, #root': {
      height: '100%',
    },

    a: {
      textDecoration: 'none',
      color: '#108db8',
      fontWeight: 'bold',
    },

    img: {
      maxWidth: '100%',
    },

    h1: {
      margin: 0,
    },
  },
})
export default class App extends Component {
  render() {
    return <Router><Routes /></Router>;
  }
}
