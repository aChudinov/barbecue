import injectSheet from 'react-jss';
import Menu from '../../components/Menu';
import React, { Component } from 'react';
import styles from './Proposition.jss';
import { Element } from 'react-scroll';
import { withSiteData } from 'react-static';

@withSiteData
@injectSheet(styles)
export default class Proposition extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Element name="home" className={classes.container}>
        <Menu sticky />
      </Element>
    );
  }
}
