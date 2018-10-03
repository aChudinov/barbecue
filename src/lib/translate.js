import React from 'react';
import translations from './translations';
import { withRouteData } from 'react-static';

export default Component => {
  class Translated extends React.Component {
    static displayName = `Translated${Component.displayName}`

    msg = path => {
      const { language } = this.props;
      const arr = path.split('.');

      arr.push(language);

      return getPropertyByPath(translations, arr);
    }

    render() {
      return <Component {...this.props} msg={this.msg} />;
    }
  }

  return withRouteData(Translated);
};

function getPropertyByPath(object, path) {
  return path.reduce((acc, key) => acc[key], object);
}
