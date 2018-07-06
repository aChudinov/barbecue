import App from './App.react';
import React from 'react';
import ReactDOM from 'react-dom';

if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;

  renderMethod(<App />, document.getElementById('root'));
}

export default App;
