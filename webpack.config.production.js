var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'bundle.min': './public/client-render.js'
  },
  output: {
    path: './public/dist',
    filename: '[name].[hash].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /bundle\.min\.(.)*\.js$/,
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new AssetsPlugin({
      filename: 'assets.json'
    }),
    new CleanWebpackPlugin(['public/dist']),
    new ExtractTextPlugin('styles.[hash].css')
  ],
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
      },
      {
        test: /\.(s)?css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!sass-loader'
        )
      }
    ]
  }
};
