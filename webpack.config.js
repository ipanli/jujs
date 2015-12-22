var
  isProdEnv = ~process.argv.indexOf('--prod'),
  webpack = require('webpack'),
  version = require('./package.json').version,
  config;

config = {
  entry: './src/ju',
  output: {
    path: './build',
    filename: 'Ju' + (isProdEnv ? '.min' : '') + '.js',
    library: 'Ju',
    libraryTarget: 'umd'
  },
  resolve: {
    root: './src',
    alias: {
      AbstractStorage: 'store/AbstractStorage',
      AbstractStore: 'store/AbstractStore',
      LocalStore: 'store/LocalStore',
      SessionStore: 'store/SessionStore',
      common: 'common',
      Cookie: 'Cookie',
      date: 'date',
      es5: 'es5.super',
      IdCard: 'IdCard',
      objectPath: 'object.path',
      ParseUrl: 'parse.url',
      pubSub: 'pubSub',
      rules: 'rules',
      util: 'util'
    }
  },
  plugins: [
    new webpack.BannerPlugin(
      'Ju.js v' + version + '\n' +
      'http://zanjs.com/api/jujs.html\n' +
      '(c) 2015-' + new Date().getFullYear() + ' Julaud'
    )
  ]
};

if (isProdEnv) {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
}

module.exports = config;