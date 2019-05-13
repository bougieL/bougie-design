const path = require('path')

function resolve(...p) {
  const rootDir = path.resolve(__dirname, '..')
  return path.resolve(rootDir, ...p)
}

module.exports = {
  appBuild: resolve('docs'),
  appPublic: resolve('public'),
  appHtml: resolve('public', 'index.html'),
  appIndexJs: resolve('src', 'index.tsx'),
  appPackageJson: resolve('package.json'),
  appSrc: resolve('src'),
  appTsConfig: resolve('tsconfig.json'),
  appEsLint: resolve('tslint.json'),
  appNodeModules: resolve('node_modules'),
  appComponents: resolve('src', 'components'),
  resolveComponents(...p) {
    return resolve('src', 'components', ...p)
  },
  resolveLibComponents(...p) {
    return resolve('lib', 'components', ...p)
  }
}
