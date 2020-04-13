'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const fs = require('fs')
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false,
      }) + '\n\n',
    )

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(
      chalk.yellow('  Tip: built files are meant to be served over an HTTP server.\n' + "  Opening index.html over file:// won't work.\n"),
    )

    // 删除map文件
    const pathName = path.resolve(__dirname, '../dist/static/js')
    fs.readdir(pathName, (err, files) => {
      files.forEach((filename, index) => {
        let name = path.join(pathName, filename)
        if (fs.existsSync(name) && ~name.indexOf('.js.map')) {
          fs.unlinkSync(name)
        }
      })
    })

    // 生成统计文件，供https://webpack.github.io/analyse/分析 dzq
    fs.writeFile('stats.json', JSON.stringify(stats.toJson()), err => {
      if (err) throw err
      console.log('create stats file success!')
    })
  })
})
