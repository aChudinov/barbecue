import React from 'react';
import injectSheet from 'react-jss';
import styles from './Container.jss';

@injectSheet(styles)
export default class Container extends React.PureComponent {
  render() {
    const { children, classes } = this.props;

    return (
      <div className={classes.container}>{children}</div>
    );
  }
}
