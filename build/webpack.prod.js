const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/bundle.js',
    publicPath: './'
  },
  optimization: {
    minimizer: [
      new OptimizeCss(), // 单独使用这个插件配置项会导致js在生产环境下也不能被压缩，需要添加新的插件处理js
      new UglifyJsPlugin({ // js优化配置插件
        cache: true, // 缓存
        parallel: true, // 并发
        sourceMap: false, // 映射源码
      }),
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        removeAttributeQuotes: true, // 双引号变成单引号
        collapseWhitespace: true, // 清理html中的空格、换行符
        removeComments: true, // 清理html中的注释
        // removeStyleLinkTypeAttributes: true, // 去掉style和link标签的type属性
      }
    }),
    new CleanWebpackPlugin({
      verbose: true,
      root: path.resolve(__dirname, '../')
    })
  ]
}

module.exports = merge(baseConfig, prodConfig);
