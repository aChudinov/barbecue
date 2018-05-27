import injectSheet from 'react-jss';
import React, { Component } from 'react';
import Slider from '../../components/Slider';
import styles from './Members.jss';
import { Element } from 'react-scroll';
import { withSiteData } from 'react-static';

@withSiteData
@injectSheet(styles)
export default class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Element name="members" className={classes.container}>
        <div className={classes.slider}>
          <Slider />
        </div>
      </Element>
    );
  }
}
