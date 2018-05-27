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

          <p>Skupina Barbecue vznikla v roce 2002. Hrajeme bluegrass s občasnými výlety do moderní country. Velkou část repertoáru vedle tradičního a moderního bluegrassu tvoří skladby vlastní. Neodmyslitelnou součástí našich vystoupení je humor v podobě soutěží či vtipů. Zkrátka na podiu se bavíme, a to baví i naše diváky... A to nás baví ... Barbecue - the band from the Czech Republic was etablished in the year 2002. Barbecue plays the bluegrass music with the occasional trips to the modern country music. Own songs, mostly in the czech language, are the big part of their repertoire . But they play a lot of nice traditional and modern bluegrass and country songs in english too. The band Barbecue won the first price in the competition on the oldest european bluegrass festival Banjo Jamboree in Caslav in 2009. They recorded their first CD called "BARBECUE" in 2010. It can be orded here via contact E-mail.</p>
        </Container>
      </Element>
    );
  }
}
