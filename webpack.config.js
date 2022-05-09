const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: "eval",
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",

  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    overlay: true,
  },
  plugins: [new HtmlWebpackPlugin()],
};
