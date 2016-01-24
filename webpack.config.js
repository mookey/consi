var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: [
      path.resolve(__dirname, 'public/client-render.js')
    ],
    output: {
      path: path.resolve(__dirname, 'public/dev'),
      filename: 'bundle.js'
    },
    devtool: 'source-map',
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
            'style',
            'css?sourceMap!sass?sourceMap'
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
