/**
 * Created by zane on 2021/4/17 上午9:41
 * @description vue 配置 https://cli.vuejs.org/zh/config/
 */
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const isDev = process.env.NODE_ENV !== 'production'
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: '',
  indexPath: 'index.html',
  runtimeCompiler: isDev,
  productionSourceMap: isDev,
  chainWebpack: config => {
    config.resolve.alias
      .set('src', resolve('src'))
      .set('router', resolve('src/router'))
      .set('portUri', resolve('src/portUri'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('common', resolve('src/common'))
      .set('store', resolve('src/store'))
      .set('assets', resolve('src/assets'))
      .end()
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        data: `@import "./src/assets/scss/element-variables";`
      }
    }
  },
  devServer: {
    // proxy: {
    //   '/api': {
    //     changeOrigin: true,
    //     target: 'http://localhost:8080',
    //     xfwd: true,
    //     headers: {
    //     }
    //   }
    // }
  },
  pluginOptions: {}
}
