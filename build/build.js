'use strict'
require('./check-versions')()

// process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const zipper = require('zip-local')
const utils = require('./utils')
const webpackConfig = require('./webpack.prod.conf')
const fsCopy = require('fs-sync')
const pagePath = path.resolve(__dirname,'../src/pages')
const distPath = path.resolve(__dirname,'../dist')
const glob = require('glob');
let modulesDir = utils.defineDir();
/**
 * 多模块开发时，项目中所有按需加载的模块都打包在js文件夹中，这样导致单个模块发布的时候体积增大
 * 模块正式打包时，推荐只打包当前正在开发的模块，这样会减少模块打包后的体积
 */
var spinner = ora('building for ' + process.env.NODE_ENV + ' of ' + process.env.env_config+ ' mode...' )
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    modulesDir.forEach((file) => {
      let pageDir = file.split('/')[file.split('/').length-1];
      fsCopy.copy(path.resolve(__dirname,'../dist/static'), path.resolve(__dirname, `../dist/${pageDir}/static`))
      glob.sync(distPath + `/${pageDir}/static/js/*`).forEach((file) => {
        var fileName = file.split('/')[file.split('/').length-1].split('.')[0]
        if (fileName != 'manifest' && fileName != 'vendor' && fileName != pageDir && !fileName.match(/^\d+$/)) {
          fsCopy.remove(file)
        }
      })
      glob.sync(distPath + `/${pageDir}/static/css/*`).forEach((file) => {
        var fileName = file.split('/')[file.split('/').length-1].split('.')[0]
        if (fileName != pageDir) {
            fsCopy.remove(file);
        }
      })
      fsCopy.copy(distPath + `/${pageDir}/`, distPath + `/zip/${pageDir}/${pageDir}/`)
      zipper.sync.zip(distPath + `/zip/${pageDir}`).compress().save(distPath + `/${pageDir}.zip`)
    })
    fsCopy.remove(path.resolve(__dirname,'../dist/static'))
    fsCopy.remove(path.resolve(__dirname,'../dist/index'))
    fsCopy.remove(path.resolve(__dirname,'../dist/zip'))
    fsCopy.remove(path.resolve(__dirname,'../dist/index.zip'))
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
