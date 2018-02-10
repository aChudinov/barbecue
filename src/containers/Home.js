import logoImg from '../logo.png';
import React from 'react';
import { withSiteData } from 'react-static';

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <img src={logoImg} alt="" />
  </div>
));
