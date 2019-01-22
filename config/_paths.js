const path = require('path')

function resolve(...p) {
  const rootDir = path.resolve(__dirname, '..')
  return path.resolve(rootDir, ...p)
}

module.exports = {
  appBuild: resolve('build'),
  appPublic: resolve('public'),
  appHtml: resolve('public', 'index.html'),
  appIndexJs: resolve('src', 'index.tsx'),
  appPackageJson: resolve('package.json'),
  appLibs: resolve('libs'),
  appComponents: resolve('src', 'components'),
  appComponentsIndexJs: resolve('src', 'components', 'index.tsx'),
  appSrc: resolve('src'),
  appTsConfig: resolve('tsconfig.json'),
  appEsLint: resolve('tslint.json'),
  appNodeModules: resolve('node_modules'),
  resolveComponentLib(...p) {
    return resolve('libs', ...p)
  },
  resolveComponent(...p) {
    return resolve('src', 'components', ...p)
  },
  resolveComponentIndexJs(...p) {
    return resolve('src', 'components', ...p, 'index.tsx')
  }
}