'use strict';

var express = require('express');
var compress = require('compression')();
var fs = require('fs');
var PROD = 'production';

module.exports = function(app) {

  var name;
  var js;

  function setDefaults(app) {
    var maxAge = 1000 * 60 * 60 * 24 * 365;
    app.use(compress);
    app.use(express.static( global.env.public, { maxAge: maxAge }));
    app.enable('strict routing');
    app.enable('case sensitive routing');
    app.set('view engine', 'ejs');
    app.set('views', global.env.views);
  }

  if ( process.env.NODE_ENV === PROD ) {
    name = 'production.json';
    js = require('webpack-assets.json')['bundle.min'].js;
    // buildRev = JSON.parse( fs.readFileSync(global.env.dist + 'rev-manifest.json', 'utf8') );
    // global.env.build = {
    //   css         : '/dist/' + buildRev['style.css'],
    //   mainScript  : '/dist/' + buildRev['main.js'],
    //   blogScript  : '/dist/' + buildRev['blog.js'],
    //   cvScript    : '/dist/' + buildRev['cv.js'],
    //   templates   : '/dist/' + buildRev['templates.js'],
    //   path        : '/dist/js/'
    // };
  } else {
    name = 'development.json';
    js = require('webpack-assets.json')['bundle'].js;
    // global.env.build = {
    //   css         : '/assets/styles/style.css',
    //   mainScript  : '/assets/scripts/main.js',
    //   blogScript  : '/components/blog/blog.js',
    //   cvScript    : '/components/cv/cv.js',
    //   templates   : '/dist/templates.js',
    //   path        : '/components/'
    // };
  }

  app.use(function(req, res, next) {
    req.locals = {};
    req.locals.js = '/dist/' + js;
    req.locals.css = '';
    // req.locals.mainScript = global.env.build.mainScript;
    // req.locals.blogScript = global.env.build.blogScript;
    // req.locals.cvScript   = global.env.build.cvScript;
    // req.locals.templates  = global.env.build.templates;
    // req.locals.css        = global.env.build.css;
    // req.locals.path       = global.env.build.path;
    next();
  });

  global.conf = require(global.root + '/' + name, 'utf8');
  setDefaults(app);

};
