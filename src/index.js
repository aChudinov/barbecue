import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;
  const Application = hot(module)(App);

  renderMethod(<Application />, document.getElementById('root'));
}

export default App;
