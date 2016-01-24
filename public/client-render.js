'use strict';
import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import { routes } from '../server/routes';

import createBrowserHistory from 'history/lib/createBrowserHistory';

require('normalize.css');
require('./entry.scss');

ReactDOM.render(
  <Router routes={routes} history={createBrowserHistory()} />,
  document.getElementById('main')
);