import injectSheet from 'react-jss';
import React, { Component } from 'react';
import ReactSlick from 'react-slick';
import styles from './Slider.jss';
import translate from '../../lib/translate';

import LeftArrowIcon from '../../images/left-arrow.svg';
import RightArrowIcon from '../../images/right-arrow.svg';

const MEMBERS = [
  {
    key: 'pavel',
    name: 'Pavel',
    surname: 'Handlík',
  },
  {
    key: 'roman',
    name: 'Roman',
    surname: 'Zajíček',
  },
  {
    key: 'jirka',
    name: 'Jiří',
    surname: 'Šubr',
  },
  {
    key: 'eda',
    name: 'Eda',
    surname: 'Krištůfek',
  },
  {
    key: 'alexej',
    name: 'Alexey',
    surname: 'Chudinov',
  },
];

@translate
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
    const { classes, msg } = this.props;

    return (
      <div key={member.key} className={classes.slide}>
        <div className={classes.picture} style={{ backgroundImage: `url(/images/${member.key}.png)` }}>
          <h2 className={classes.name}>{member.name}</h2>
          <h2 className={classes.surname}>{member.surname}</h2>
        </div>

        <div className={classes.text}>
          <h3 className={classes.title}>{msg(`members.${member.key}.title`)}</h3>
          <div className={classes.description}>{msg(`members.${member.key}.description`)}</div>
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
