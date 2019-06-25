const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: './src/index.js',
  externals: {
    "vue": "Vue",
    "vue-router": "VueRouter",
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.(png|jp?eg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            outputPath: 'static/img/',
            // publicPath: '' // 单独给某个(图片)资源添加访问的公共路径，例如把资源放到cdn上
          }
        }
      }, {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {

          }
        },
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: [
          // {
          //   loader: 'style-loader',
          //   options: {
          //     insertAt: 'top'
          //   }
          // },
          {
            loader: MiniCssExtractPlugin.loader // 抽离css文件为link引入页面方式
          },
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.(sc|sa)ss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
            // loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          'postcss-loader',
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/bundle.css',
    }),
    new VueLoaderPlugin()
  ],

}
