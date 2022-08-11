const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    filename: "bundle.js",
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
        use: ["css-loader", "style-loader"],
      },
    ],
  },
};
