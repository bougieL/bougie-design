const webpack = require('webpack')
const config = require('./webpack.config.dev')
const paths = require('./_paths')
const WebpackDevServer = require('webpack-dev-server')
const compiler = webpack(config)

module.exports = new WebpackDevServer(compiler, {
  host: '0.0.0.0',
  disableHostCheck: false,
  hot: true,
  contentBase: paths.appPublic,
  quiet: true,
  overlay: true,
  inline: true,
  watchContentBase: true,
  publicPath: config.output.publicPath,
  compress: true,
  open: true,
  stats: {
    colors: true
  },
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  clientLogLevel: 'none'
})