const path = require('path');

const entryPath = path.join(__dirname, 'src');
const outPath = path.join(__dirname, 'dist');

module.exports = {
  context: entryPath,
  entry: './index.js',
  output: {
    path: outPath,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { presets: ['es2015', 'react'] },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        },
      },
      {
        test: /\.(css)$/, // Check for sass or scss file names
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: outPath,
  },
};
