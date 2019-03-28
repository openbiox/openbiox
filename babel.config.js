module.exports = {
  presets: [
    '@babel/preset-env'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-flow-strip-types',
    'babel-plugin-transform-vue-jsx',
    'syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import'
  ],
  ignore: [
    'dist/*.js',
    'packages/**/*.js'
  ]
}
