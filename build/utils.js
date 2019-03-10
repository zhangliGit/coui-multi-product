'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const pagePath = path.resolve(__dirname,'../src/pages')
const glob = require('glob')
/**
 * 自定义编译或打包的模块
 * 多应用模块开发时，所有模块同时编译会导致速度慢，可以只编译当前开发时的应用
 * 只需填写对应模块的文件目录名即可，{index为开发入口模块，必填}
 */
const defineDir = [
  'index',
];
const modulesDir = [
  /**
   * 编译所有模块, webpack3.x速度有点慢
   */
  glob.sync(pagePath + '/*').map(file => {
    return file.split('/')[file.split('/').length-1]
  }),
  defineDir
][0]; // 设置编译方式 0为全部编译 1 为自定义编译
exports.entries = function () {
  let entries = {};
  modulesDir.forEach((file) => {
    entries[file] = `./src/pages/${file}/index.js`
  })
  return entries
}

exports.defineDir = function() {
  return modulesDir;
}
exports.devHttpPlugins = function () {
  let devHttpPlugin = []
  modulesDir.forEach((file) => {
    const pageDir = file.split('/')[file.split('/').length-1]
    let httpP = new HtmlWebpackPlugin({
      filename: pageDir + '.html',
      template: 'index.html',
      chunks: [pageDir],
      inject: true
    })
    devHttpPlugin.push(httpP)
  })
  return devHttpPlugin
}

exports.prodHttpPlugins = function () {
  let prodHttpPlugin = []
  modulesDir.forEach((file) => {
    const pageDir = file.split('/')[file.split('/').length-1]
    let httpP = new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing'
        ? 'index.html'
        : path.resolve(__dirname, `../dist/${pageDir}/index.html`),
      template: 'index.html',
      chunks: ['manifest', 'vendor', pageDir],
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    })
    prodHttpPlugin.push(httpP)
  })
  return prodHttpPlugin
}

exports.prodCopyPlugins = function () {
  let prodCopyPlugin = []
  modulesDir.forEach((file) => {
    const pageDir = file.split('/')[file.split('/').length-1]
    let copyP = new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: `${pageDir}`,
        ignore: ['.*']
      }
    ])
    prodCopyPlugin.push(copyP)
  })
  return prodCopyPlugin
}

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }
  
  // 配置less全局变量访问
  function lessResourceLoader() {
    var loaders = [
        cssLoader,
        'less-loader',
        {
            loader: 'sass-resources-loader',
            options: {
                resources: [
                    path.resolve(__dirname, '../src/assets/css/common.less'),
                ]
            }
                    }
    ];
    if (options.extract) {
        return ExtractTextPlugin.extract({
            use: loaders,
            fallback: 'vue-style-loader'
        })
    } else {
        return ['vue-style-loader'].concat(loaders)
    }
  }
  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        publicPath: '../../'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: lessResourceLoader(),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
