const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./_paths')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  bail: true,
  entry: [paths.appIndexJs],
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].js?[hash:8]',
    chunkFilename: 'static/js/[name].chunk.js?[hash:8]'
  },
  mode: 'production',
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
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[ext]?[hash:8]'
        }
      },
      {
        test: /\.(ts|tsx)$/,
        include: paths.appSrc,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        exclude: [
          /\.(js|jsx|mjs|ts|tsx)$/,
          /\.html$/,
          /\.json$/,
          /\.scss$/,
          /\.css$/
        ],
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash:8]',
          publicPath: '../media',
          outputPath: 'static/media'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
    }),
    new ExtractTextPlugin('static/css/style.css?[hash:8]')
  ]
}
