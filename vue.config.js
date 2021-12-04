/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-12-03 22:01:24
 * @LastEditTime: 2021-12-04 15:49:42
 */
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  publicPath: './', //配置本地时打包时引入JS url,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
}
