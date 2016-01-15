var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: {
      'bundle': ['webpack/hot/dev-server', './public/client-render.js']
    },
    output: {
      path: './public/dev',
      filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: /.js$/,
          loaders: ['babel']
        },
        {
          test: /\.js$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(s)?css$/,
          loader: ExtractTextPlugin.extract(
            'style-loader',
            'css-loader?sourceMap!sass-loader?sourceMap'
          )
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['public/dev']),
      new ExtractTextPlugin('styles.css')
    ]
  }
];
