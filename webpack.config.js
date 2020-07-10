const path = require('path');

module.exports = {
  entry: './src/init.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', ],
  },
  output: {
    filename: 'game.min.js',
  },
};