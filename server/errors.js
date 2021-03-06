'use strict';

module.exports = function(app) {

  switch (process.env.NODE_ENV) {
  case 'production':
    app.use(logErrors);
    app.use(errorHandler);
    break;
  case 'development':
    app.use(logErrors);
    app.use(errorHandler);
    break;
  default:
    app.use(logErrors);
    app.use(errorHandler);
    break;
  }

  function logErrors(err, req, res, next) {
    global.log.error(err.stack);
    next(err);
  }

  function errorHandler(err, req, res) {
    if (req.xhr) {
      res.send(500, { error: err.message });
    } else {
      res.status(500);
      res.render('index', { error: err.message });
    }
  }

};