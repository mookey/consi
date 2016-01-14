'use strict';
/*eslint-disable */
import React from 'react';
/*eslint-enable */
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import { routes } from './routes';

module.exports = function(app) {

  app.get('*', (req, res) => {
    match({ routes, location: req.url }, (err, redirectLocation, props) => {
      if (err) {
        res.status(500).send(err.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (props) {
        const markup = renderToString(<RoutingContext {...props} />);
        req.locals.markup = markup;
        res.render('index', req.locals);
      } else {
        res.sendStatus(404);
      }
    });
  });

};