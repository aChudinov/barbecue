import injectSheet from 'react-jss';
import Container from '../../components/Container';
import React from 'react';
import styles from './Store.jss';
import { Element } from 'react-scroll';

const ITEMS = [
  {
    title: 'T-shirt',
    description: 'T-shirt description',
    price: '200 Kč',
    image: '/images/tshirt.jpg',
  },
  {
    title: 'New CD',
    description: 'New CD description',
    price: '500 Kč',
    image: '/images/album.png',
  },
];

@injectSheet(styles)
export default class About extends React.Component {
  renderItem = ({ title, description, price, image }) => {
    const { classes } = this.props;

    return (
      <li>
      </li>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <Element name="store" className={classes.container}>
        <Container>
          <h1 className={classes.heading}>Store</h1>

          <ul>
            {ITEMS.map(this.renderItem)}
          </ul>
        </Container>
      </Element>
    );
  }
}
