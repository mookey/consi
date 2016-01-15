'use strict';

var express = require('express');
var compression = require('compression');
var winston = require('winston');
var PROD = 'production';
var isProduction = process.env.NODE_ENV === PROD;

module.exports = function(app) {

  var name;
  var js;
  var css;

  function setDefaults(app) {
    var maxAge = 1000 * 60 * 60 * 24 * 365;
    app.use(compression());
    app.use(express.static( global.env.public, { maxAge: maxAge }));
    app.enable('strict routing');
    app.enable('case sensitive routing');
    app.set('view engine', 'ejs');
    app.set('views', global.env.views);
  }

  if (isProduction) {
    name = 'production.json';
    js = '/dist/' + require('assets.json')['bundle.min'].js;
    css = '/dist/' + require('assets.json')['bundle.min'].css;
    global.log = new (winston.Logger)({
      transports: [
        new (winston.transports.Console)({ level: 'warning', colorize: true })
      ]
    });
  } else {
    name = 'development.json';
    js = 'http://localhost:8080/bundle.js';
    css = 'http://localhost:8080/styles.css';
    global.log = new (winston.Logger)({
      transports: [
        new (winston.transports.Console)({ level: 'debug', colorize: true })
      ]
    });
  }

  app.use(function(req, res, next) {
    var debugJs;
    var debugCss;
    req.locals = {};
    req.locals.isProd = isProduction;
    // if (req.query.isProd) {
    //   debugJs = '/dist/' + require('assets.json')['bundle.min'].js;
    //   debugCss = '/dist/' + require('assets.json')['bundle.min'].css;
    //   req.locals.isProd = true;
    // } else if (req.query.isDev) {
    //   debugJs = 'http://localhost:8080/bundle.js';
    //   debugCss = 'http://localhost:8080/styles.css';
    //   req.locals.isProd = false;
    // }
    req.locals.js = debugJs || js;
    req.locals.css = debugCss || css;
    next();
  });

  app.use(function(req, res, next) {
    if (isProduction) {
      next();
      return;
    }
    if (!(/\.(png|jpg|gif|jpeg|ico|js)$/i).test(req.path)) {
      global.log.debug('Req: ' + req.path);
      global.log.debug('Query: ' + JSON.stringify(req.query));
    }
    next();
  });

  global.conf = require(global.root + '/' + name, 'utf8');
  setDefaults(app);

};
