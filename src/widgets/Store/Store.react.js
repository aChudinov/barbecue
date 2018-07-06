import injectSheet from 'react-jss';
import Container from '../../components/Container';
import React from 'react';
import styles from './Store.jss';
import { Element } from 'react-scroll';

@injectSheet(styles)
export default class About extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Element name="store" className={classes.container}>
        <Container>
          <h1 className={classes.heading}>Store</h1>
        </Container>
      </Element>
    );
  }
}
