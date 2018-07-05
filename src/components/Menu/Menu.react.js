import classnames from 'classnames';
import Container from '../Container';
import injectSheet from 'react-jss';
import React, { Component } from 'react';
import styles from './Menu.jss';
import { Link } from 'react-scroll';
import { Sticky } from 'react-sticky';

const MENU_ITEMS = [
  { id: 'home', title: 'Home' },
  { id: 'members', title: 'Members' },
  { id: 'about', title: 'About' },
  { id: 'schedule', title: 'Schedule' },
  { id: 'media', title: 'Media' },
  { id: 'store', title: 'Store' },
  { id: 'contacts', title: 'Contacts' },
];

@injectSheet(styles)
export default class Menu extends Component {
  renderMenuItems() {
    const { classes, inverseColors } = this.props;

    return (
      MENU_ITEMS.map(({ id, title }, index) => (
        <React.Fragment key={id}>
          <Link className={classes.link} to={id} smooth offset={-54}>{title}</Link>

          {!inverseColors && index < MENU_ITEMS.length - 1 &&
            <span className={classes.dot}>●</span>
          }
        </React.Fragment>
      ))
    );
  }

  renderMenu(style, isSticky) {
    const { classes, inverseColors, sticky } = this.props;
    const className = classnames(
      classes.nav,
      inverseColors && classes.inverseColors,
      isSticky && classes.isSticky,
      sticky && classes.sticky,
    );

    if (sticky) {
      return (
        <nav style={style} className={className}>
          <Container className={classes.container}>
            <div>{this.renderMenuItems()}</div>
            <div className={classes.logo} />
          </Container>
        </nav>
      );
    }

    return (
      <nav style={style} className={className}>
        {this.renderMenuItems()}
      </nav>
    );
  }
  render() {
    const { sticky } = this.props;

    if (sticky) {
      return (
        <Sticky topOffset={15}>
          {({ style, isSticky }) => this.renderMenu(style, isSticky)}
        </Sticky>
      );
    }

    return this.renderMenu();
  }
}
