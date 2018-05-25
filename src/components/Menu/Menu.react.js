import classnames from 'classnames';
import injectSheet from 'react-jss';
import React, { Component } from 'react';
import styles from './Menu.jss';
import { Link, withSiteData } from 'react-static';

@withSiteData
@injectSheet(styles)
export default class Menu extends Component {
  render() {
    const { classes, inverseColors } = this.props;

    return (
      <nav className={classnames(classes.nav, inverseColors && classes.inverseColors)}>
        <Link className={classes.link} to="/">Home</Link>
        <Link className={classes.link} to="/">About</Link>
        <Link className={classes.link} to="/">Contacts</Link>
      </nav>
    );
  }
}
