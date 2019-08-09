const path = require('path')

module.exports = {
  target: 'node',
  mode: 'development',
  entry: {
    index: path.join(__dirname, '../client/server-entry.js')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2',
    publicPath: '/public'
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
  }
}
