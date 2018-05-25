import Container from '../../components/Container';
import injectSheet from 'react-jss';
import Menu from '../../components/Menu';
import React from 'react';
import styles from './Footer.jss';

import EmailIcon from '../../images/email.svg';
import FacebookIcon from '../../images/facebook.svg';
import InstagramIcon from '../../images/instagram.svg';

const SOCIALS = [
  { id: 'facebook', Icon: FacebookIcon, url: 'https://www.facebook.com/barbecue.bluegrass' },
  { id: 'instagram', Icon: InstagramIcon, url: 'https://www.instagram.com/barbecue_band' },
  { id: 'email', Icon: EmailIcon, url: 'mailto:sbf@seznam.cz' },
];

@injectSheet(styles)
export default class Footer extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <footer className={classes.footer}>
        <Container>
          <h1 className={classes.heading}>Contacts</h1>
          <div className={classes.phone}>+420 776-230-804</div>

          <svg viewBox="0 0 3500 20" className={classes.dots}>
            <line x1="10" x2="3500" y1="10" y2="10" strokeWidth="20" strokeLinecap="round" strokeDasharray="1, 80" />
          </svg>

          <section className={classes.socials}>
            {SOCIALS.map(({ id, Icon, url }) => (
              <a key={id} href={url} target="_blank" className={classes.socialLink}>
                <Icon className={classes.socialIcon} />
              </a>
            ))}
          </section>

          <section className={classes.bottomLine}>
            <div className={classes.copyright}>Copyright 2018 © BarbecueBand.cz</div>

            <Menu inverseColors />
          </section>
        </Container>
      </footer>
    );
  }
}
