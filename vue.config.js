const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css', 'svg']
const isProduction = process.env.NODE_ENV === 'production'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  transpileDependencies: [/node_modules[/\\\\]vuetify[/\\\\]/],
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src/client'))
      .set('assets', resolve('src/client/assets'))
      .set('components', resolve('src/client/components'))

    config.entry('app')
      .clear()
      .add(path.join(__dirname, './src/client/main.js'))

    config.module
      .rule('text-load')
      .test(/\.(txt|md)$/)
      .use('vue-loader')
      .loader('text-loader')
      .end()

    config.module
      .rule('ico')
      .test(/\.(ico)$/)
      .use('vue-loader')
      .loader('url-loader')
      .end()

  },
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }))
      config.externals = {
        'echarts': 'echarts'
      }
    }
  },

  // vue-loader 配置项
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8888,
    https: false,
    hotOnly: false,
    proxy: null // 设置代理
    // before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}
