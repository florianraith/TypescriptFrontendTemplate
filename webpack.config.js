const path = require('path');
const fs = require('fs');
const merge = require('lodash.merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';

const htmlFiles = [];
for(let file of fs.readdirSync(path.resolve(__dirname, 'src', 'html'))) {
  if(!/\.(html)$/.test(file)) continue;

  htmlFiles.push(new HtmlWebpackPlugin({
    inject: false,
    hash: true,
    template: './src/html/' + file,
    filename: file,
  }));
}

// Configuration that is the same for both production and development
const common = {
  entry: './src/bootstrap',
  plugins: [
    new CopyWebpackPlugin([
      { from: 'static' }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    ...htmlFiles,
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [{
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  }
};

// Configuration which is only valid for production
const production = {
  mode: 'production',
};

// Configuration which is only valid for development
const development = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    publicPath: '/'
  },
};

module.exports = devMode ? merge(common, development) : merge(common, production);

