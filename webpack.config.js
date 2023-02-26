const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const targetDir = path.resolve(__dirname, "docs");

module.exports = {
  entry: "./src/index.js",
  mode: process.env?.NODE_ENV || "development",
  output: {
    filename: "js/main.js",
    path: targetDir,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/css", to: `${targetDir}/css` },
        { from: "src/CNAME", to: `${targetDir}` },
      ],
    }),
  ],
};
