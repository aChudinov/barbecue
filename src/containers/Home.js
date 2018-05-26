import About from '../widgets/About';
import Footer from '../widgets/Footer';
import Proposition from '../widgets/Proposition';
import React, { Component } from 'react';
import Schedule from '../widgets/Schedule';
import { withSiteData } from 'react-static';

@withSiteData
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Proposition />
        <About />
        <Schedule />
        <Footer />
      </React.Fragment>
    );
  }
}
