import './lib/setupJss';
import injectSheet from 'react-jss';
import React, { Component } from 'react';
import Routes from 'react-static-routes';
import { Router, Link } from 'react-static';

@injectSheet({
  '@global': {
    body: {
      fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
      fontWeight: 300,
      fontSize: '16px',
      margin: 0,
      padding: 0,
    },

    a: {
      textDecoration: 'none',
      color: '#108db8',
      fontWeight: 'bold',
    },

    img: {
      maxWidth: '100%',
    },
  },

  nav: {
    width: '100%',
    background: '#108db8',
  },

  link: {
    color: 'white',
    padding: '1rem',
    display: 'inline-block',
  },

  content: {
    padding: '1rem',
  },
})
export default class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Router>
        <React.Fragment>
          <nav className={classes.nav}>
            <Link className={classes.link} to="/">Home</Link>
            <Link className={classes.link} to="/about">About</Link>
            <Link className={classes.link} to="/blog">Blog</Link>
          </nav>

          <div className={classes.content}>
            <Routes />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}
