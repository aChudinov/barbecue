import Container from '../../components/Container';
import DottedLine from '../../components/DottedLine';
import injectSheets from 'react-jss';
import moment from 'moment';
import React from 'react';
import styles from './Schedule.jss';
import { Element } from 'react-scroll';

const SCHEDULE = [
  {
    id: 1,
    date: '12-12-2018 20:00',
    title: 'Saloon v Modrem',
    place: 'Mlada Boleslav, Czech Republic',
    link: 'https://google.com',
  },
  {
    id: 2,
    date: '12-12-2018 20:00',
    title: 'Saloon v Modrem',
    place: 'Mlada Boleslav, Czech Republic',
    link: 'https://google.com',
  },
  {
    id: 3,
    date: '12-12-2018 20:00',
    title: 'Saloon v Modrem',
    place: 'Mlada Boleslav, Czech Republic',
    link: 'https://google.com',
  },
  {
    id: 4,
    date: '12-12-2018 20:00',
    title: 'Saloon v Modrem',
    place: 'Mlada Boleslav, Czech Republic',
    link: 'https://google.com',
  },
];

@injectSheets(styles)
export default class Schedule extends React.PureComponent {
  renderRow = (item, index) => {
    const { classes } = this.props;
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
          <a href={link} target="_blank" className={classes.link}>Info</a>
        </li>

        {index < SCHEDULE.length - 1 &&
          <DottedLine className={classes.dots} size={7000} />
        }
      </React.Fragment>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <Element name="schedule" className={classes.container}>
        <Container>
          <h1 className={classes.heading}>Schedule</h1>

          <ul className={classes.list}>
            {SCHEDULE.map(this.renderRow)}
          </ul>
        </Container>
      </Element>
    );
  }
}
