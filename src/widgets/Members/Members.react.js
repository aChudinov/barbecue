import injectSheet from 'react-jss';
import React, { Component } from 'react';
import Slider from '../../components/Slider';
import styles from './Members.jss';
import { Element } from 'react-scroll';

@injectSheet(styles)
export default class Members extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Element name="about" className={classes.container}>
        <div className={classes.slider}>
          <Slider />
        </div>
      </Element>
    );
  }
}
