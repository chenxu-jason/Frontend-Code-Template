const { name } = require('../package.json');
module.exports = {
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  devServer: {
    port: 7778,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
