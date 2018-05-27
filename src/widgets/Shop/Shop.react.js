import injectSheet from 'react-jss';
import Container from '../../components/Container';
import React from 'react';
import styles from './Shop.jss';
import { Element } from 'react-scroll';

@injectSheet(styles)
export default class About extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Element name="shop" className={classes.container}>
        <Container>
          <h1 className={classes.heading}>Shop</h1>
        </Container>
      </Element>
    );
  }
}
