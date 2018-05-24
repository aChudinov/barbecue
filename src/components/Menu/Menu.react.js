import Container from '../Container';
import injectSheet from 'react-jss';
import React, { Component } from 'react';
import styles from './Menu.jss';
import { Link, withSiteData } from 'react-static';

@withSiteData
@injectSheet(styles)
export default class Menu extends Component {
  render() {
    const { classes } = this.props;

    return (
      <nav className={classes.nav}>
        <Container>
          <Link className={classes.link} to="/">Home</Link>
          <Link className={classes.link} to="/">Home</Link>
          <Link className={classes.link} to="/">Home</Link>
        </Container>
      </nav>
    );
  }
}
