// import Gallery from '../../components/Gallery';
import About from '../../widgets/About';
import Footer from '../../widgets/Footer';
import injectSheet from 'react-jss';
import Media from '../../widgets/Media';
import Members from '../../widgets/Members';
import News from '../../widgets/News';
import Proposition from '../../widgets/Proposition';
import React, { Component } from 'react';
import Schedule from '../../widgets/Schedule';
import Store from '../../widgets/Store';
import styles from './Home.jss';
import ToTop from '../../components/ToTop';
import { StickyContainer } from 'react-sticky';
import { withSiteData } from 'react-static';

@withSiteData
@injectSheet(styles)
export default class Home extends Component {
  render() {
    return (
      <StickyContainer style={{ overflow: 'hidden', height: '100%' }}>
        <Proposition />
        <News />
        <Members />
        <About />
        <Schedule />
        <Media />
        <Store />
        {/* <Gallery /> */}
        <Footer />
        <ToTop />
      </StickyContainer>
    );
  }
}
