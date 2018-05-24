import injectSheet from 'react-jss';
import React, { Component } from 'react';
import ReactSlick from 'react-slick';
import styles from './Slider.jss';

const SLIDE_DOTS = [
  { name: 'Alexey', surname: 'Chudinov' },
  { name: 'Pavel', surname: 'Handlík' },
  { name: 'Jirka', surname: 'Šubr' },
];

@injectSheet(styles)
export default class Slider extends Component {
  renderDot = index => {
    const dot = SLIDE_DOTS[index];

    return (
      <div>
        <div className={`name${index}`}>{dot.name}</div>
        <span>●</span>
        <div className="surname">{dot.surname}</div>
      </div>
    );
  }

  render() {
    return (
      <ReactSlick
        dots
        fade
        infinite
        slidesToShow={1}
        slidesToScroll={1}
        nextArrow={<div>{'>'}</div>}
        prevArrow={<div>{'<'}</div>}
        customPaging={this.renderDot}
      >
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
      </ReactSlick>
    );
  }
}
