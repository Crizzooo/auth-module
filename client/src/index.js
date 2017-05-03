import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import history from './utils/history';

import store from './store.js';
import App from './app.js';

//load main css
import './public/stylesheets/index.scss';

ReactDOM.render(
  (<Provider store={store} >
    <Router history={history}>
      <App />
    </Router>
  </Provider>),
  document.getElementById('app'));
