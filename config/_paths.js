const path = require('path')

function resolve(...p) {
  const rootDir = path.resolve(__dirname, '..')
  return path.resolve(rootDir, ...p)
}

module.exports = {
  appBuild: resolve('dist'),
  appPublic: resolve('public'),
  appHtml: resolve('public', 'index.html'),
  appIndexJs: resolve('src', 'entry.tsx'),
  appPackageJson: resolve('package.json'),
  appSrc: resolve('src'),
  appLib: resolve('lib'),
  appTsConfig: resolve('tsconfig.json'),
  appEsLint: resolve('tslint.json'),
  appNodeModules: resolve('node_modules'),
  appComponents: resolve('src', 'components'),
  resolveComponents(...p) {
    return resolve('src', 'components', ...p)
  },
  resolveLib(...p) {
    return resolve('lib', ...p)
  },
  resolveLibComponents(...p) {
    return resolve('lib', 'components', ...p)
  },

  binTSC: resolve('node_modules', '.bin', 'tsc')
}
