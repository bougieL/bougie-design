const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { webpackMerge } = require('./_utils')
const paths = require('./_paths')
const baseConfig = require('./webpack.config.base')

module.exports = webpackMerge(baseConfig, {
  mode: 'production',
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].js?[hash:8]',
    chunkFilename: 'static/js/[name].chunk.js?[hash:8]',
    publicPath: '/'
  },
  module: {
    rules: baseConfig.module.rules.concat({
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    })
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/style.css?[hash:8]'
    })
  ]
})
