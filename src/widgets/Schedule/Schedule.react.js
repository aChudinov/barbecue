import Container from '../../components/Container';
import DottedLine from '../../components/DottedLine';
import injectSheets from 'react-jss';
import moment from 'moment';
import React from 'react';
import styles from './Schedule.jss';
import translate from '../../lib/translate';
import { Element } from 'react-scroll';
import { withRouteData } from 'react-static';

@translate
@withRouteData
@injectSheets(styles)
export default class Schedule extends React.PureComponent {
  renderRow = (item, index) => {
    const { concerts, classes, msg } = this.props;
    const { id, link, place, title } = item;

    const date = moment(item.date);
    const day = date.format('DD');
    const month = date.format('MMM');
    const year = date.format('YYYY');
    const time = date.format('HH:mm');

    return (
      <React.Fragment key={id}>
        <li className={classes.item}>
          <div className={classes.date}>
            <div className={classes.day}>{day}</div>
            <div>
              <div className={classes.month}>{month}</div>
              <div className={classes.year}>{year}</div>
            </div>
          </div>
          <div className={classes.time}>{time}</div>
          <div className={classes.description}>{title} {'//'} {place}</div>
          <a href={link} target="_blank" className={classes.link}>{msg('schedule.info')}</a>
        </li>

        <div className={classes.description_mobile}>{title} {'//'} {place}</div>

        {index < concerts.length - 1 &&
          <DottedLine className={classes.dots} size={7000} />
        }
      </React.Fragment>
    );
  }

  render() {
    const { classes, msg } = this.props;
    const concerts = this.props.concerts
      .sort((a, b) => moment(a.date).isAfter(moment(b.date)))
      .filter(item => moment(item.date).isAfter(moment()));

    return (
      <Element name="schedule" className={classes.container}>
        <Container>
          <h1 className={classes.heading}>{msg('menu.schedule')}</h1>

          <ul className={classes.list}>
            {concerts.map(this.renderRow)}
          </ul>
        </Container>
      </Element>
    );
  }
}
