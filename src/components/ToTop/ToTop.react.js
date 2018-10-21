import classnames from 'classnames';
import injectSheet from 'react-jss';
import React from 'react';
import styles from './ToTop.jss';
import translate from '../../lib/translate';
import { Link } from 'react-scroll';

@translate
@injectSheet(styles)
export default class ToTop extends React.Component {
  state = {
    visible: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ visible: window.scrollY > 500 });
  }

  render() {
    const { classes, msg } = this.props;
    const { visible } = this.state;

    return (
      <Link to="home" smooth className={classnames(classes.base, visible && classes.visible)}>
        {msg('toTop')}
      </Link>
    );
  }
}
