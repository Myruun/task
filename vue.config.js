// 在根目录下自行创建vue.config.js
module.exports = {
  // cli3 代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/css/variables.scss";`
      }
    }
  },
  devServer: {
    open: true,
    proxy: {
      '/api': {
        // 注意是以/api开头，即：axios.post({url: '/api/xxx/xxx'})
        target: 'http://3733w5z476.wicp.vip:23898/',
        changeOrigin: true,
        pathRewrite: { '^/api': 'http://3733w5z476.wicp.vip:23898/' }
      }
    }
  }
}
