import injectSheet from 'react-jss';
import React, { Component } from 'react';
import ReactSlick from 'react-slick';

const SLIDE_DOTS = [
  { name: 'Alexey', surname: 'Chudinov' },
  { name: 'Pavel', surname: 'Handlík' },
  { name: 'Jirka', surname: 'Šubr' },
];

@injectSheet({
  '@global': {
    '.slick-slider': {
      position: 'relative',
    },

    '.slick-list': {
      width: '100%',
      overflow: 'hidden',
    },

    '.slick-track': {
      position: 'relative',
      left: 0,
      top: 0,
      display: 'block',
    },

    '.slick-slide': {
      float: 'left',
      height: '100%',
      minHeight: '1px',
    },

    '.slick-dots': {
      position: 'absolute',
      top: 0,
      right: 0,
      listStyle: 'none',
      textAlign: 'center',
      padding: 0,
      margin: 0,
    },

    '.slick-dots li': {
      color: '#C1AEA5',
      textTransform: 'uppercase',
      cursor: 'pointer',
      display: 'inline-block',
      position: 'relative',
      width: '1.5em',
      userSelect: 'none',
    },

    '.slick-dots li.slick-active': {
      color: '#826B60',
    },

    '.slick-dots li span': {
      fontSize: '1.4em',
      position: 'relative',
      left: '-3px',
    },

    '.slick-dots li div div': {
      transform: 'rotate(-90deg)',
      transformOrigin: 'top left',
      position: 'absolute',
      fontSize: '0.7em',
      fontWeight: 500,
    },

    '.slick-dots .surname': {
      bottom: '10px',
    },

    '.slick-dots .name0': {
      bottom: '-56px',
    },
    '.slick-dots .name1': {
      bottom: '-49px',
    },
    '.slick-dots .name2': {
      bottom: '-48px',
    },
  },
})
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
