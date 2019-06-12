const webpack = require('webpack')
const { webpackMerge } = require('./_utils')
const paths = require('./_paths')
const baseConfig = require('./webpack.config.base')

const publicPath = '/'

module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath
  },
  module: {
    rules: baseConfig.module.rules.concat({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    })
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    host: '0.0.0.0',
    port: 3001,
    disableHostCheck: false,
    hot: true,
    contentBase: paths.appPublic,
    hotOnly: false,
    overlay: true,
    quiet: true,
    inline: true,
    watchContentBase: true,
    publicPath,
    open: true,
    stats: {
      colors: true
    },
    clientLogLevel: 'none'
  }
})
