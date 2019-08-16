const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const isDev = process.env.NODE_ENV === 'development'

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, '../client/app.js')
  ],
  output: {
    filename: '[name].[hash:6].js'
  },
  devServer: {
    hot: true,
    open: true,
    contentBase: '../dist/client',
    quiet: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../client/template.html')
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, '../dist')]
    })
  ]
})

if (isDev) {
  config.devServer = {
    hot: true,
    contentBase: path.join(__dirname, '../dist'),
    host: '0.0.0.0',
    port: 8888,
    overlay: {
      errors: true
    },
    publicPath: '/public',
    historyApiFallback: {
      index: '/public/index.html'
    },
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
