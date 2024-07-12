const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
var glob = require('glob');
const webpack = require('webpack');

const { VueLoaderPlugin } = require('vue-loader');

const entry = glob.sync('./src/**/*.{ts,js,vue,css}');
module.exports = {
  entry: entry,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.vue'],
    plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.json' })],
  },
  plugins: [new webpack.IgnorePlugin({ resourceRegExp: /css\.d\.ts$/ }), new VueLoaderPlugin()],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: false,
    port: 9000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
};
