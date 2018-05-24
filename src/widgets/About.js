import injectSheet from 'react-jss';
import React, { Component } from 'react';
import Slider from '../components/Slider';
import { withSiteData } from 'react-static';

@withSiteData
@injectSheet({
  container: {
    backgroundColor: '#E4DDDB',
    padding: '4em 0',
  },

  slider: {
    margin: 'auto',
    width: '400px',
  },
})
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
