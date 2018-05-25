import Container from '../../components/Container';
import injectSheet from 'react-jss';
import Menu from '../../components/Menu';
import React, { Component } from 'react';
import styles from './Proposition.jss';
import { withSiteData } from 'react-static';

@withSiteData
@injectSheet(styles)
export default class Proposition extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Container>
          <Menu />

          <h1 className={classes.heading}>Barbecue</h1>
          <h1 className={classes.subheading}>Bluegrass band</h1>
        </Container>
      </div>
    );
  }
}
