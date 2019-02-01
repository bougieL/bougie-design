const webpack = require('webpack')
const {exec} = require('../config/_utils')
const webpackConfig = require('../config/webpack.config.prod')

exec(`rm -rf ./build`)

webpack(webpackConfig, (err, status) => {
  if (err) {
    console.log(err)
  }
})