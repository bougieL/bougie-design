const paths = require('./config/_paths')

export default {
  base: '/bougie-design',
  src: 'docs',
  typescript: true,
  modifyBundlerConfig: config => {
    let {
      resolve: {
        extensions,
        alias
      },
      module: {
        rules
      }
    } = config
    config.resolve.alias = {
      ...alias,
      '@components': paths.appComponents
    }
    config.resolve.extensions = [...extensions, '.css', '.scss']
    config.module.rules = [...rules, {
      test: /\.(ts|tsx)$/,
      include: paths.appSrc,
      use: [{
        loader: require.resolve('ts-loader'),
        options: {
          transpileOnly: true,
        }
      }]
    }, {
      test: /\.scss$/,
      use: [{
        loader: require.resolve('style-loader')
      }, {
        loader: require.resolve('css-loader'),
      }, {
        loader: require.resolve('sass-loader'),
      }]
    }, ]
    return config
  }
}