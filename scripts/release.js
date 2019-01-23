const {resolveComponents, resolveLibComponents} = require('../config/_paths')
const {exec, replaceFileContent} = require('../config/_utils')
const fs = require('fs')

exec('rm -rf ./lib')

exec('cp -r ./src ./lib')

exec('./node_modules/.bin/tsc')

fs.readdirSync(resolveComponents()).forEach(componentDir => {
  const isDir = fs.statSync(resolveComponents(componentDir)).isDirectory()
  const isInitialUppercase = componentDir.match(/^[A-Z]/)
  if (isDir && isInitialUppercase) {
    if (fs.existsSync(resolveComponents(componentDir, 'style'))) {
      const indexJsPath = resolveLibComponents(componentDir, 'index.js')
      replaceFileContent(indexJsPath, '"./style"', '"./style/index.css"')
      exec(`./node_modules/.bin/node-sass ${resolveComponents(componentDir, 'style', 'index.scss')} > ${resolveLibComponents(componentDir, 'style', 'index.css')}`)
    }
  }
})

exec(`./node_modules/.bin/node-sass ${resolveComponents('_common.scss')} > ${resolveLibComponents('_common.css')}`)

replaceFileContent(resolveLibComponents('index.js'), '"./_common"', '"./_common.css"')