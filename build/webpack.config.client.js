const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

const config = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, '../client/app.js')
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:6].js',
    publicPath: '/public/' //加不加都不影响了
  },
  module: {
    rules: [{
        enforce: 'pre',
        test: /.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /.(js|jsx)$/,
        use: [
          "babel-loader"
        ],
        exclude: /node_modules/
      },
      {
        test: /.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    open: true,
    contentBase: '../dist/client',
    quiet: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../client/template.html'),
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, '../dist')]
    })
  ],
  optimization: {
    usedExports: true
  }
}

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
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config;
