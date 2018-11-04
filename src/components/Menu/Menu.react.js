import classnames from 'classnames';
import Container from '../Container';
import injectSheet from 'react-jss';
import React, { Component } from 'react';
import styles from './Menu.jss';
import translate from '../../lib/translate';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Sticky } from 'react-sticky';

import CZIcon from '../../images/CZ.svg';
import ENIcon from '../../images/EN.svg';

const MENU_ITEMS = ['home', 'news', 'about', 'schedule', 'media', 'store', /* 'gallery', */ 'contacts'];

const LANGUAGE_ICONS = { cz: CZIcon, en: ENIcon };
const LANGUAGE_PATHS = { cz: '/', en: '/en' };

@translate
@injectSheet(styles)
export default class Menu extends Component {
  get inactiveLanguage() {
    const { language } = this.props;

    return language === 'en' ? 'cz' : 'en';
  }

  renderMenuItems() {
    const { classes, inverseColors, msg } = this.props;

    return (
      MENU_ITEMS.map((id, index) => (
        <React.Fragment key={id}>
          <Link className={classes.link} to={id} smooth offset={-54}>{msg(`menu.${id}`)}</Link>

          {!inverseColors && index < MENU_ITEMS.length - 1 &&
            <span className={classes.dot}>●</span>
          }
        </React.Fragment>
      ))
    );
  }

  renderMenu(style, isSticky) {
    const { classes, className: classNameProp, inverseColors, sticky } = this.props;
    const className = classnames(
      classes.nav,
      inverseColors && classes.inverseColors,
      isSticky && classes.isSticky,
      sticky && classes.sticky,
      classNameProp,
    );

    const LanguageIcon = LANGUAGE_ICONS[this.inactiveLanguage];

    if (sticky) {
      return (
        <nav style={style} className={className}>
          <Container className={classes.container}>
            <div className={classes.items}>{this.renderMenuItems()}</div>
            <RouterLink className={classes.language} to={LANGUAGE_PATHS[this.inactiveLanguage]}>
              <LanguageIcon className={classes.languageIcon} />
            </RouterLink>
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
