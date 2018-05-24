import injectSheet from 'react-jss';
import React, { Component } from 'react';
import Slider from '../../components/Slider';
import styles from './About.jss';
import { withSiteData } from 'react-static';

@withSiteData
@injectSheet(styles)
export default class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>

        <div className={classes.slider}>
          <Slider />
        </div>
      </div>
    );
  }
}
