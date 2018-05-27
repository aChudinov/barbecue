import injectSheet from 'react-jss';
import Container from '../../components/Container';
import React from 'react';
import styles from './About.jss';
import { Element } from 'react-scroll';

@injectSheet(styles)
export default class About extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Element name="about" className={classes.container}>
        <Container>
          <h1 className={classes.heading}>About</h1>

          <p>Barbecue is a band from Czech Republic, that was etablished in 2002.
            We play bluegrass music with the occasional trips to the modern country music.
            Own songs, mostly in Czech, are the big part of our repertoire.
            But we play a lot of nice traditional and modern bluegrass and country songs in english.
            The band Barbecue won the first price in the competition on the oldest european bluegrass festival Banjo Jamboree in Caslav in 2009.
            We recorded our first CD called "BARBECUE" in 2010. It can be orded here via contact E-mail.
          </p>
        </Container>
      </Element>
    );
  }
}
