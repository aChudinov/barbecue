import injectSheet from 'react-jss';
import React from 'react';
import styles from './News.jss';
import translate from '../../lib/translate';
import { Element, Link } from 'react-scroll';

@translate
@injectSheet(styles)
export default class News extends React.Component {
  render() {
    const { classes, msg } = this.props;

    return (
      <Element name="news" className={classes.container}>
        <div className={classes.first}>
          <h3 className={classes.heading}>{msg('news.first.title')}</h3>

          <div className={classes.cd}>
            <div className={classes.image} style={{ backgroundImage: 'url(/images/album.png)' }} />

            <div>
              <p>{msg('news.first.text_1')}</p>
              <p>{msg('news.first.text_2')}</p>
              <p>{msg('news.first.text_3')}</p>
              <Link className={classes.button} to="store" smooth offset={-54}>{msg('store.buy')}</Link>
            </div>
          </div>
        </div>

        <div className={classes.second}>
          <h3 className={classes.heading}>{msg('news.second.title')}</h3>
          <p>{msg('news.second.text_1')}</p>
          <iframe
            title="FB Page"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbarbecue.bluegrass%2F&tabs&width=340&height=154&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1608346892822730"
            width="340"
            height="122"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
          />

          <p>{msg('news.second.text_2')}</p>

          <div style={{ textAlign: 'center' }}>
            <iframe
              title="FB Share"
              src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fbarbecueband.cz%2F&layout=button&size=large&mobile_iframe=true&appId=1608346892822730&width=115&height=28"
              width="115"
              height="28"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowTransparency="true"
              allow="encrypted-media"
            />
          </div>
        </div>

        <div className={classes.third}>
          <h3 className={classes.heading}>{msg('news.third.title')}</h3>
          <p>{msg('news.third.text_1')}<a href="https://www.thebluegrassstandard.com/" target="_blank">{msg('news.third.link')}</a>{msg('news.third.text_2')}</p>

          <iframe
            src="https://www.youtube.com/embed/CmTN-7k6paA"
            title="Barbecue USA tour 2018"
            allow="autoplay; encrypted-media"
            className={classes.video}
            width="100%"
            height="180"
            allowFullScreen
            frameBorder="0"
          />
        </div>
      </Element>
    );
  }
}
