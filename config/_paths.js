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
  appComponents: resolve('components'),
  appComponentsIndexJs: resolve('components', 'index.tsx'),
  appSrc: resolve('src'),
  appTsConfig: resolve('tsconfig.json'),
  appEsLint: resolve('tslint.json'),
  appNodeModules: resolve('node_modules'),
  resolveComponentLib(...p) {
    return resolve('libs', ...p)
  },
  resolveComponent(...p) {
    return resolve('components', ...p)
  },
  resolveLib(...p) {
    return resolve('lib', ...p)
  },
  resolveComponentIndexJs(...p) {
    return resolve('components', ...p, 'index.tsx')
  },
  resolveComponentIndexScss(...p) {
    return resolve('components', ...p, 'style', 'index.scss')
  },
  resolveComponentCssDir(...p) {
    return resolve('lib', ...p, 'style')
  },
  resolveComponentIndexCss(...p) {
    return resolve('lib', ...p, 'style', 'index.css')
  }
}