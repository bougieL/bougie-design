const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./_paths')
const utils = require('./_utils')

const publicPath = '/'

module.exports = {
  entry: utils.genReleaseEntries(),
  output: {
    filename: '[name].js',
    path: paths.appLibs
  },
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
      {
        oneOf: [
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
                  transpileOnly: true,
                }
              }
            ]
          },
          {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            exclude: [/\.(js|jsx|mjs|ts|tsx)$/, /\.html$/, /\.json$/, /\.scss$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}