// production config
const merge = require('webpack-merge');
const { resolve } = require('path');
const webpack = require('webpack');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.tsx',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(__dirname, '../../client'),
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: [new webpack.NamedModulesPlugin()]
});
