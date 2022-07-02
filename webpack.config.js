import { join } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: join(__dirname, "dist"),
  },
  devServer: {
    static: join(__dirname, "public/"),
    port: 3000,
    hot: true,
    open: true,
  },
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            configFile: false,
            presets: ["@babel/preset-env", "solid", "@babel/preset-typescript"],
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-object-rest-spread",
            ],
          },
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};

export default config;
