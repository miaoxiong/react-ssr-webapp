const path = require('path'
)
module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
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
        'babel-loader'
      ],
      exclude: /node_modules/
    },
    {
      test: /.less$/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    },
    {
      test: /.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }
    ]
  },
  optimization: {
    usedExports: true
  }
}
