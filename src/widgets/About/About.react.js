import Container from '../../components/Container';
import injectSheet from 'react-jss';
import React from 'react';
import styles from './About.jss';
import translate from '../../lib/translate';

@translate
@injectSheet(styles)
export default class About extends React.Component {
  render() {
    const { classes, msg } = this.props;

    return (
      <div className={classes.container}>
        <Container>
          <div className={classes.content}>
            <div className={classes.logo} />

            <p>{msg('about')}</p>
          </div>
        </Container>
      </div>
    );
  }
}
