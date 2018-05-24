import About from '../widgets/About';
import Proposition from '../widgets/Proposition';
import React, { Component } from 'react';
import { withSiteData } from 'react-static';

@withSiteData
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Proposition />
        <About />
      </React.Fragment>
    );
  }
}
