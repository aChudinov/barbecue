import Container from '../../components/Container';
import injectSheet from 'react-jss';
import MediaPlayer from '../../components/MediaPlayer';
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

          <div className={classes.flex}>
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

            <MediaPlayer />
          </div>
        </Container>
      </Element>
    );
  }
}
