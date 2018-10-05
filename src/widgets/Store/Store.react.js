import Container from '../../components/Container';
import injectSheet from 'react-jss';
import React from 'react';
import styles from './Store.jss';
import translate from '../../lib/translate';
import { Element } from 'react-scroll';

const ITEMS = [
  { key: 'tshirt', price: '300 Kč' },
  { key: 'cap', price: '200 Kč' },
  { key: 'album', price: '200 Kč' },
];

const MAIL_SUBJECT = item => `BarbecueBand.cz - objednávka ${item}`;

@translate
@injectSheet(styles)
export default class Store extends React.Component {
  renderItem = ({ key, price }) => {
    const { classes, msg } = this.props;
    const title = msg(`store.items.${key}.title`);

    return (
      <li className={classes.item} key={key}>
        <div className={classes.image} style={{ backgroundImage: `url(/images/${key}.png)` }} />
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{msg(`store.items.${key}.description`)}</div>
        <div className={classes.price}>{price}</div>
        <a href={`mailto:info@barbecueband.cz?subject=${MAIL_SUBJECT(title)}`} className={classes.button}>{msg('store.buy')}</a>
      </li>
    );
  }

  render() {
    const { classes, msg } = this.props;

    return (
      <Element name="store" className={classes.container}>
        <Container>
          <h1 className={classes.heading}>{msg('menu.store')}</h1>

          <ul className={classes.list}>
            {ITEMS.map(this.renderItem)}
          </ul>
        </Container>
      </Element>
    );
  }
}
