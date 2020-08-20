const path = require('path');

module.exports = {
  entry: {
    main: './client/index.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '/public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
