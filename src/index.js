import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import theme from './lib/theme';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'react-jss';

if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;
  const Application = hot(module)(App);

  renderMethod(
    <ThemeProvider theme={theme}>
      <Application />
    </ThemeProvider>
    , document.getElementById('root')
  );
}

export default App;
