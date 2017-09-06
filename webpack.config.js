const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js',
    main2: './src/main2.js',
    main3: './src/main3.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'docs/js')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    port: 3000,
  },
};