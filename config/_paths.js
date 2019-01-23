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
  appSrc: resolve('src'),
  appTsConfig: resolve('tsconfig.json'),
  appEsLint: resolve('tslint.json'),
  appNodeModules: resolve('node_modules'),
  resolveComponents(...p) {
    return resolve('src', 'components', ...p)
  },
  resolveLib(...p) {
    return resolve('lib', ...p)
  },
  resolveLibComponents(...p) {
    return resolve('lib', 'components', ...p)
  }
}