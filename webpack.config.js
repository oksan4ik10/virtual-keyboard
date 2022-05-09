const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: "eval",
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "RSS Keyboard",
      template: "src/index.html"
    })
  ],
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

};
