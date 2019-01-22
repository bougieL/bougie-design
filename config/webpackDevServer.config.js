const webpack = require('webpack')
const config = require('./webpack.config.dev')
const paths = require('./_paths')
const WebpackDevServer = require('webpack-dev-server')
const compiler = webpack(config)

module.exports = new WebpackDevServer(compiler, {
  hot: true,
  quiet: true,
  contentBase: paths.appPublic,
  watchContentBase: true,
  publicPath: config.output.publicPath,
  compress: true,
  stats: {
    colors: true
  },
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  clientLogLevel: 'none'
})