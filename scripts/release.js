const ts = require('typescript')
const fs = require('fs-extra')
const paths = require('../config/_paths')

const tsConfig = require(paths.appTsConfig)

fs.readdirSync(paths.appComponents).forEach(name => {
  const sourcePath = paths.resolveComponents(name, 'index.ts')
  const targetPath = paths.resolveLibComponents()
})

console.log(tsConfig.compilerOptions)
const target = ts.transpile(source, tsConfig.compilerOptions)

console.log(target)
