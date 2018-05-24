import injectSheet from 'react-jss';
import Menu from '../components/Menu';
import React, { Component } from 'react';
import { withSiteData } from 'react-static';

@withSiteData
@injectSheet({
  container: {
    backgroundColor: '#826B60',
    minHeight: '100%',
  },

  heading: {
    color: '#E4DDDB',
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  subheading: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
})
export default class Proposition extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Menu />

        <h1 className={classes.heading}>Barbecue</h1>
        <h1 className={classes.subheading}>Bluegrass band</h1>
      </div>
    );
  }
}
