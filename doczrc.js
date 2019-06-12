const paths = require('./config/_paths')

module.exports = {
  base: '/bougie-design',
  src: 'docs',
  dest: '.docz/bougie-design',
  typescript: true,
  modifyBundlerConfig(config) {
    const {
      resolve: { extensions, alias },
      module: { rules }
    } = config
    config.resolve.alias = {
      ...alias,
      '@src': paths.appSrc
    }
    config.resolve.extensions = [...extensions, '.css', '.scss']
    config.module.rules = [
      ...rules,
      {
        test: /\.(ts|tsx)$/,
        include: paths.appSrc,
        use: ['ts-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
    return config
  }
}
