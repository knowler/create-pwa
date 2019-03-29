const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

const stats = {
  hash: false,
  version: false,
  timings: false,
  children: false,
  errors: false,
  errorDetails: false,
  warnings: false,
  chunks: false,
  modules: false,
  reasons: false,
  source: false,
  publicPath: false,
}

module.exports = (env, argv) => ({
  mode: argv && argv.mode === 'production' ? argv.mode : 'development',
  stats,
  devServer: { stats },
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[id].js',
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?/,
        use: 'eslint-loader',
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.mp3/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      'manifest.json',
      'app-icon.png',
      'app-splash.png',
    ]),
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new WorkboxWebpackPlugin.GenerateSW(),
    new FriendlyErrorsWebpackPlugin(),
  ],
})
