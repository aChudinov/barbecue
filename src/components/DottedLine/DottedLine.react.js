import classnames from 'classnames';
import injectSheets from 'react-jss';
import React from 'react';
import styles from './DottedLine.jss';

@injectSheets(styles)
export default class DottedLine extends React.PureComponent {
  static defaultProps = {
    size: 3500,
  }

  render() {
    const { className, classes, size } = this.props;

    return (
      <svg viewBox={`0 0 ${size} 20`} className={classnames(classes.container, className)}>
        <line x1="10" x2={size} y1="10" y2="10" strokeWidth="20" strokeLinecap="round" strokeDasharray="1, 80" />
      </svg>
    );
  }
}
