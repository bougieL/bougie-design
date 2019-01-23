const paths = require('../config/_paths')
const fs = require('fs')

const exec = require('child_process').execSync

// exec('rm -rf ./lib')

exec('./node_modules/.bin/tsc')

exec('cp -r ./components ./lib')

function replaceFileContent(path, searchValue, replaceValue) {
  let fileContent = fs.readFileSync(path, 'utf8')
  fs.writeFileSync(path, fileContent.replace(searchValue, replaceValue))
}

fs.readdirSync(paths.appComponents).forEach(componentDir => {
  const isDir = fs.statSync(paths.resolveComponent(componentDir)).isDirectory()
  const isInitialUppercase = componentDir.match(/^[A-Z]/)
  if (isDir && isInitialUppercase) {
    if (fs.existsSync(paths.resolveComponentIndexScss(componentDir))) {
      let indexJsPath = paths.resolveLibIndexJs(componentDir)
      replaceFileContent(indexJsPath, '"./style"', '"./style/index.css"')
      exec(`./node_modules/.bin/node-sass ${paths.resolveComponentIndexScss(componentDir)} > ${paths.resolveComponentIndexCss(componentDir)}`)
    }
  }
})

exec(`./node_modules/.bin/node-sass ${paths.resolveComponent('_common.scss')} > ${paths.resolveLib('_common.css')}`)

replaceFileContent(paths.resolveLib('index.js'), '"./_common"', '"./_common.css"')