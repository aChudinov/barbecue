import injectSheet from 'react-jss';
import React, { Component } from 'react';
import ReactSlick from 'react-slick';
import styles from './Slider.jss';

import LeftArrowIcon from '../../images/left-arrow.svg';
import RightArrowIcon from '../../images/right-arrow.svg';

const MEMBERS = [
  {
    name: 'Pavel',
    surname: 'Handlík',
    title: 'Guitar | vocals',
    description: '',
    photo: 'pavel',
  },
  {
    name: 'Roman',
    surname: 'Zajíček',
    title: 'Dobro | vocals',
    description: '',
    photo: 'roman',
  },
  {
    name: 'Jiří',
    surname: 'Šubr',
    title: 'Double bass | vocals',
    description: '',
    photo: 'jirka',
  },
  {
    name: 'Eda',
    surname: 'Krištůfek',
    title: 'Mandolin',
    description: '',
    photo: 'eda',
  },
  {
    name: 'Alexey',
    surname: 'Chudinov',
    title: 'Banjo | vocals',
    description: '',
    photo: 'alexej',
  },
];

@injectSheet(styles)
export default class Slider extends Component {
  renderDot = index => {
    const member = MEMBERS[index];

    return (
      <div>
        <div className={`name${index}`}>{member.name}</div>
        <span>●</span>
        <div className="surname">{member.surname}</div>
      </div>
    );
  }

  renderSlide = member => {
    const { classes } = this.props;

    return (
      <div key={member.name} className={classes.slide}>
        <div className={classes.picture} style={{ backgroundImage: `url(/images/${member.photo}.png)` }}>
          <h2 className={classes.name}>{member.name}</h2>
          <h2 className={classes.surname}>{member.surname}</h2>
        </div>

        <div className={classes.text}>
          <h3 className={classes.title}>{member.title}</h3>
          <div className={classes.description}>{member.description}</div>
        </div>
      </div>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <ReactSlick
        dots
        fade
        infinite
        slidesToShow={1}
        slidesToScroll={1}
        nextArrow={<div><RightArrowIcon className={classes.arrow} /></div>}
        prevArrow={<div><LeftArrowIcon className={classes.arrow} /></div>}
        customPaging={this.renderDot}
      >
        {MEMBERS.map(this.renderSlide)}
      </ReactSlick>
    );
  }
}
