'use strict';

module.exports = function(app) {

  function r(req, res, data) {
    if (req.xhr) {
      res.send(data);
      return;
    }
    res.sendStatus(200);
  }

  app.get('*', function (req, res) {
    return r( req, res );
  });

};