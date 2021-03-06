import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './src/routes';
import App from './src/App.jsx';

ReactDOM.render((
  <Router history={browserHistory} routes={routes}>
  </Router>  
), document.getElementById('app'));