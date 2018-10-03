import Container from '../../components/Container';
import injectSheet from 'react-jss';
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
          <div className={classes.content}>
            <div className={classes.logo} />

            <p>Barbecue, the bluegrass band, was founded in 2002 in the heart of Europe in the Czech Republic.
              A large part of their repertoire, alongside the traditional and modern bluegrass, features its own songs.
              The performance of the Barbecue group emanates positive energy and good humour.
              As the band members say themselves: "We have fun at the stage and we pass it onto our audience."</p>
          </div>
        </Container>
      </Element>
    );
  }
}
