const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css', 'svg']
const isProduction = process.env.NODE_ENV === 'production'
const path = require('path')
const cdn = {
  js: {
    preload: [
      'https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.min.js',
      'https://cdn.jsdelivr.net/npm/vuetify@1.x/dist/vuetify.min.js',
      'https://cdn.jsdelivr.net/npm/vue-router@3.x/dist/vue-router.min.js',
      'https://cdn.jsdelivr.net/npm/vuex@3.x/dist/vuex.min.js'
    ]
  }
}

var externals = {
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'vue': 'Vue',
  'vuetify': 'Vuetify'
}

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'docs',
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

    config.plugin('html')
      .tap(args => {
        if (isProduction) {
          args[0].cdn = cdn
        }
        return args
      })

  },
  configureWebpack: config => {
    config.performance = {
      hints: 'warning',
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000,
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
    config.optimization = {
      runtimeChunk: true,
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    }
    if (isProduction) {
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }))
      const TerserPlugin = require('terser-webpack-plugin')
      config.optimization.minimizer = [
        new TerserPlugin({
          parallel: true,
          extractComments: false,
          terserOptions: {
            warnings: false,
            parse: {},
            compress: {
              unused: true,
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log'] // 移除console
            },
            output: {
              comments: false
            }
          },
        })
      ]
      config.externals = externals
    }
  },

  // vue-loader 配置项
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
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
