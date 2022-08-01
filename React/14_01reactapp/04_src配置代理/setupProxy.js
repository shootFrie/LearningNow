// 内置模块; react内已有
const {createProxyMiddleware} = require('http-proxy-middleware')
// 暴露个对象
module.exports = function(app) {
  app.use(
    // 前缀请求， 转发的对象
    createProxyMiddleware('/api1', { // 遇见/api1前缀的请求就会触发该代理配置
      target: 'http://localhost:5000', // 请求转发对象
      changeOrigin: true,  // 控制服务器收到的响应头中HOST字段的值
      pathRewrite: {'^/api1': ''} // 重写请求路径（必须）在请求服务器时要去掉
    }),
    createProxyMiddleware('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: {"^/api2": ""}
    })
  )
}
