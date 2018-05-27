import injectSheet from 'react-jss';
import Container from '../../components/Container';
import React from 'react';
import styles from './Media.jss';
import { Element } from 'react-scroll';

@injectSheet(styles)
export default class About extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Element name="media" className={classes.container}>
        <Container>
          <h1 className={classes.heading}>Media</h1>
        </Container>
      </Element>
    );
  }
}
