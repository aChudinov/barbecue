import App from './App.react';
import React from 'react';
import ReactDOM from 'react-dom';

if (typeof window !== 'undefined') {
  const WebFont = require('webfontloader');

  WebFont.load({
    google: {
      families: ['Oswald'],
    },
  });

  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;

  renderMethod(<App />, document.getElementById('root'));
}

export default App;
