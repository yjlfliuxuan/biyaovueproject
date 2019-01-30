module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '',
  outputDir: 'mycli3',
  assetsDir: 'static',
  filenameHashing: false,
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    host: 'localhost',
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
