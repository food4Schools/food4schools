const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const dotenv = require('dotenv');

const entry = glob.sync('./src/**/*.{ts,js,vue,css}');

// Determine the mode and load the appropriate .env file
const mode = process.env.NODE_ENV || 'development';
const envFile = mode === 'production' ? '.env.production' : mode === 'development' ? '.env.development' : '.env';
dotenv.config({ path: path.resolve(__dirname, envFile) });

module.exports = {
  entry: entry,
  mode: mode,
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
  plugins: [
    new webpack.IgnorePlugin({ resourceRegExp: /css\.d\.ts$/ }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
    }),
  ],
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