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
        global.log.error(err.message);
        res.status(500).send(err.message);
        return;
      }

      if (redirectLocation) {
        global.log.info('redirect:' + redirectLocation.pathname);
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        return;
      }

      if (props) {
        const markup = renderToString(<RoutingContext {...props} />);
        req.locals.markup = markup;
        res.render('index', req.locals);
        return;
      }

      global.log.info('Not found: ' + req.path);
      res.sendStatus(404);

    });
  });

};