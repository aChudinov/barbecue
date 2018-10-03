import Container from '../../components/Container';
import injectSheet from 'react-jss';
import React from 'react';
import styles from './News.jss';

@injectSheet(styles)
export default class News extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Container>
          <iframe
            src="https://www.youtube.com/embed/_GWpda72Sws?rel=0&amp;controls=0&amp;showinfo=0"
            title="Love please come home"
            allow="autoplay; encrypted-media"
            className={classes.video}
            width="560"
            height="312"
            allowFullScreen
            frameBorder="0"
          />
        </Container>
      </div>
    );
  }
}
