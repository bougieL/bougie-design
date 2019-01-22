const paths = require('../config/_paths')
const fs = require('fs')

const exec = require('child_process').execSync

exec('rm -rf ./lib')

exec('./node_modules/.bin/tsc')

fs.readdirSync(paths.appComponents).forEach(componentDir => {
  const isDir = fs.statSync(paths.resolveComponent(componentDir)).isDirectory()
  const isInitialUppercase = componentDir.match(/^[A-Z]/)
  if (isDir && isInitialUppercase) {
    if (fs.existsSync(paths.resolveComponentIndexScss(componentDir))) {
      fs.mkdirSync(paths.resolveComponentCssDir(componentDir))
      exec(`./node_modules/.bin/node-sass ${paths.resolveComponentIndexScss(componentDir)} > ${paths.resolveComponentIndexCss(componentDir)}`)
    }
  }
})

exec(`./node_modules/.bin/node-sass ${paths.resolveComponent('_common.scss')} > ${paths.resolveLib('_common.css')}`)