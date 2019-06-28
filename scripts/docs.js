const fs = require('fs-extra')
const { resolve, join } = require('path')
const paths = require('../config/_paths')
const { dest } = require(paths.doczrc)
const destRoot = resolve(__dirname, '..', dest)

fs.copySync(join(paths.appPublic, '_redirects'), join(destRoot, '_redirects'))
