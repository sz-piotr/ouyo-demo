const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProduction = process.env.npm_lifecycle_event === 'build'

const config = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'app.[chunkhash].js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: {
          loader: 'style-loader',
          options: { sourceMap: true }
        },
        use: [{
          loader: 'css-loader',
          options: { sourceMap: true }
        }]
      })
    }]
  },
  devServer: {
    stats: 'minimal',
    contentBase: 'src/assets'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html')
    }),
    new ExtractTextPlugin('style.[contenthash].css'),
  ]
}

if (isProduction) {
  config.plugins = config.plugins.concat([
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CopyWebpackPlugin([{ from: 'src/assets' }])
  ])
}

module.exports = config
