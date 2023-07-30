const path = require('path');
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: './src/index.js',
  externals: [nodeExternals()],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "commonjs",
  },
};