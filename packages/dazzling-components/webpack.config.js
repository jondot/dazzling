//todo:
/*
  put a demo app
  storybook with all plugins like how to use
  testing / snap testing
  survey klarna toolkit for things
*/
const webpack = require('webpack')
const path = require('path')
const package = require('./package.json')

const env = process.env.NODE_ENV
const config = {
  entry: './src/index.js',
  externals: {
    lodash: true,
    react: true
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }
    ]
  },
  output: {
    libraryTarget: 'umd',
    filename: `dist/index${env === 'production' ? '.min' : ''}.js`
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
}

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
        screw_ie8: false
      },
      mangle: {
        screw_ie8: false
      },
      output: {
        screw_ie8: false
      }
    })
  )
}

module.exports = config
