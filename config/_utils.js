const {appComponents, resolveComponentIndexJs, resolveComponent, resolveComponentLib} = require('./_paths')
const fs = require('fs')

// 生成 webpack release 入口配置
function genReleaseEntries() {
  let componentsList = {}
  fs.readdirSync(appComponents).forEach(componentDir => {
    const isDir = fs.statSync(resolveComponent(componentDir)).isDirectory()
    const isInitialUppercase = componentDir.match(/^[A-Z]/)
    if (isDir && isInitialUppercase) {
      componentsList[`${componentDir}/index`] = resolveComponentIndexJs(componentDir)
    }
  })
  return componentsList
}

module.exports = {
  genReleaseEntries
}