const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: path.join(__dirname, "public"),
    compress: true, 
    port: 8080
  },
  mode: 'development'  
};