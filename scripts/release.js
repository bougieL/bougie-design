const paths = require('../config/_paths')
const fs = require('fs')

const exec = require('child_process').exec

exec('./node_modules/.bin/tsc')

fs.readdirSync(paths.appComponents).forEach(componentDir => {
  const isDir = fs.statSync(paths.resolveComponent(componentDir)).isDirectory()
  const isInitialUppercase = componentDir.match(/^[A-Z]/)
  if (isDir && isInitialUppercase) {
    
  }
})