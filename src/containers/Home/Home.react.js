import About from '../../widgets/About';
import Footer from '../../widgets/Footer';
import styles from './Home.jss';
// import Gallery from '../../components/Gallery';
import injectSheet from 'react-jss';
import Media from '../../widgets/Media';
import Members from '../../widgets/Members';
import Proposition from '../../widgets/Proposition';
import React, { Component } from 'react';
import Schedule from '../../widgets/Schedule';
import Store from '../../widgets/Store';
import { StickyContainer } from 'react-sticky';
import { withSiteData } from 'react-static';

@withSiteData
@injectSheet(styles)
export default class Home extends Component {
  render() {
    return (
      <StickyContainer style={{ overflow: 'hidden', height: '100%' }}>
        <Proposition />
        <Members />
        <About />
        <Schedule />
        <Media />
        <Store />
        {/* <Gallery /> */}
        <Footer />
      </StickyContainer>
    );
  }
}
