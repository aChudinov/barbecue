import classnames from 'classnames';
import injectSheet from 'react-jss';
import React from 'react';
import styles from './Container.jss';

@injectSheet(styles)
export default class Container extends React.PureComponent {
  render() {
    const { children, className, classes } = this.props;

    return (
      <div className={classnames(classes.container, className)}>{children}</div>
    );
  }
}
