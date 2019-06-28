const paths = require('./config/_paths')

module.exports = {
  title: 'Bougie Design',
  base: '/bougie-design',
  src: 'docs',
  dest: '.docz/bougie-design',
  typescript: true,
  themeConfig: {
    logo: {
      src: 'https://s2.ax1x.com/2019/04/27/EKF09s.png',
      width: 150
    },
    radii: '0'
  },
  onCreateWebpackChain(config) {
    config.resolve.alias.set('@src', paths.appSrc)
    config.resolve.extensions.add('.css').add('.scss')
    config.module
      .rule('scss')
      .test(/\.(css|scss|sass)$/)
      .use('style')
      .loader('style-loader')
      .end()
      .use('css')
      .loader('css-loader')
      .end()
      .use('sass')
      .loader('sass-loader')
      .end()
    config.module
      .rule('tsx')
      .test(/\.tsx?$/)
      .use('ts')
      .loader('ts-loader')
      .end()
    return config
  }
}
