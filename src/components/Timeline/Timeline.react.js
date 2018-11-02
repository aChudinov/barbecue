import classnames from 'classnames';
import injectSheet from 'react-jss';
import moment from 'moment';
import React from 'react';
import styles from './Timeline.jss';

@injectSheet(styles)
export default class Timeline extends React.PureComponent {
  componentDidMount() {
    if (!this.list) {
      return;
    }

    this.list.scrollLeft = this.list.scrollWidth;
  }

  renderSlide = item => {
    const { classes } = this.props;
    const { id, place, title } = item;
    const date = moment(item.date).format('DD.MM.YYYY');
    const isPast = moment(item.date).isBefore(moment());

    return (
      <div key={id} className={classnames(classes.item, isPast && classes.past)}>
        <div className={classes.content}>
          <span>{date}</span>
          <br />
          {title}
          <br />
          <span>{place}</span>
        </div>
      </div>
    );
  }

  render() {
    const { concerts, classes } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.list} ref={el => { this.list = el; }}>
          <div className={classes.track}>
            {concerts.map(this.renderSlide)}
          </div>
        </div>
      </div>
    );
  }
}
