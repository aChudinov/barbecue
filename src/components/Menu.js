import injectSheet from 'react-jss';
import React, { Component } from 'react';
import { Link, withSiteData } from 'react-static';

@withSiteData
@injectSheet({
  nav: {
    width: '100%',
  },

  link: {
    color: 'black',
    padding: '1rem',
    display: 'inline-block',
    textTransform: 'uppercase',
  },

  content: {
    padding: '1rem',
  },
})
export default class Menu extends Component {
  render() {
    const { classes } = this.props;

    return (
      <nav className={classes.nav}>
        <Link className={classes.link} to="/">Home</Link>
      </nav>
    );
  }
}
