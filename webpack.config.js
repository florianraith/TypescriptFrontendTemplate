const path = require('path');
const merge = require('lodash.merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Configuration that is the same for both production and development
const common = {
  entry: './src/bootstrap',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/html/index.html',
      filename: 'index.html'
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
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
      }
    ],
  }
};

// Configuration which is only valid for production
const production = {
  mode: 'production',
};

function TestObject(name) {
  this.name = name;
}

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

console.log(merge(common, development));

module.exports = process.env.NODE_ENV === 'development' ? merge(common, development) : merge(common, production);

