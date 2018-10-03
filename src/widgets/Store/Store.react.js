import injectSheet from 'react-jss';
import Container from '../../components/Container';
import React from 'react';
import styles from './Store.jss';
import { Element } from 'react-scroll';

const ITEMS = [
  {
    title: 'T-shirt',
    description: 'Available only with blue print',
    price: '300 Kč',
    image: '/images/tshirt.png',
  },
  {
    title: 'Barbecue — Medium Rare',
    description: 'Our latest CD',
    price: '200 Kč',
    image: '/images/album.png',
  },
];

const MAIL_SUBJECT = item => `BarbecueBand.cz - objednávka ${item}`;

@injectSheet(styles)
export default class Store extends React.Component {
  renderItem = ({ title, description, price, image }) => {
    const { classes } = this.props;

    return (
      <li className={classes.item} key={title}>
        <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
        <a href={`mailto:info@barbecueband.cz?subject=${MAIL_SUBJECT(title)}`} className={classes.button}>BUY NOW</a>
      </li>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <Element name="store" className={classes.container}>
        <Container>
          <h1 className={classes.heading}>Store</h1>

          <ul className={classes.list}>
            {ITEMS.map(this.renderItem)}
          </ul>
        </Container>
      </Element>
    );
  }
}
