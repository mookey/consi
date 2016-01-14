var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: { 'bundle': './public/client-render.js' },
  devtool: 'source-map',
  output: {
    path: './public',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel'
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  }
};
