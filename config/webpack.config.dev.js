const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./_paths')

const publicPath = '/'

module.exports = {
  entry: [paths.appIndexJs],
  output: {
    pathinfo: true,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath
  },
  devtool: 'source-map',
  mode: 'development',
  resolve: {
    modules: [paths.appNodeModules, 'node_modules'],
    alias: {
      '@': paths.appSrc
    },
    extensions: [
      '.mjs',
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
      '.web.js',
      '.js',
      '.json',
      '.web.jsx',
      '.jsx',
      '.scss',
      '.less'
    ]
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx|mjs)$/,
      //   loader: require.resolve('source-map-loader'),
      //   enforce: 'pre',
      //   include: paths.appSrc,
      // },
      // {
      //   oneOf: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(ts|tsx)$/,
        include: paths.appSrc,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: require.resolve('style-loader')
          }, {
            loader: require.resolve('css-loader'),
            options: {
              sourceMap: true
            }
          }, {
            loader: require.resolve('sass-loader'),
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        exclude: [/\.(js|jsx|mjs|ts|tsx)$/, /\.html$/, /\.json$/, /\.scss$/],
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
      //   ]
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3001,
    disableHostCheck: false,
    hot: true,
    contentBase: paths.appPublic,
    hotOnly: false,
    overlay: true,
    quiet: true,
    inline: true,
    watchContentBase: true,
    publicPath: publicPath,
    open: true,
    stats: {
      colors: true
    },
    clientLogLevel: 'none'
  }
}