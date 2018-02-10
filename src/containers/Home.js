import logoImg from '../logo.png';
import React, { Component } from 'react';
import { withSiteData } from 'react-static';

@withSiteData
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
        <img src={logoImg} alt="" />
      </div>
    );
  }
}
