module.exports = {
  presets: [
    '@vue/app',
    '@babel/preset-env'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-flow-strip-types',
    'syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import'
  ],
  ignore: [
    'dist/*.js',
    'packages/**/*.js'
  ]
}
