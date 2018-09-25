import Container from '../../components/Container';
import DottedLine from '../../components/DottedLine';
import injectSheet from 'react-jss';
import Menu from '../../components/Menu';
import React from 'react';
import styles from './Footer.jss';
import { Element } from 'react-scroll';

import EmailIcon from '../../images/email.svg';
import FacebookIcon from '../../images/facebook.svg';
import InstagramIcon from '../../images/instagram.svg';

const SOCIALS = [
  { id: 'facebook', Icon: FacebookIcon, url: 'https://www.facebook.com/barbecue.bluegrass' },
  { id: 'instagram', Icon: InstagramIcon, url: 'https://www.instagram.com/barbecue_band' },
  { id: 'email', Icon: EmailIcon, url: 'mailto:info@barbecueband.cz' },
];

@injectSheet(styles)
export default class Footer extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Element name="contacts">
        <footer className={classes.footer}>
          <Container>
            <h1 className={classes.heading}>Contacts</h1>
            <div className={classes.phone}>+420 776-230-804</div>

            <DottedLine className={classes.dots} />

            <section className={classes.socials}>
              {SOCIALS.map(({ id, Icon, url }) => (
                <a key={id} href={url} target="_blank" className={classes.socialLink}>
                  <Icon className={classes.socialIcon} />
                </a>
              ))}
            </section>

            <section className={classes.bottomLine}>
              <div className={classes.copyright}>Copyright 2018 © BarbecueBand.cz</div>

              <Menu className={classes.menu} inverseColors />
            </section>
          </Container>
        </footer>
      </Element>
    );
  }
}
