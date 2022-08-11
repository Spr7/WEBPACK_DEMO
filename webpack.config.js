const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: { index: path.resolve(__dirname, "src/index.js") },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: "raw-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/i,

        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // plugins: [{ present: ["@babel/present-env"] }],
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
