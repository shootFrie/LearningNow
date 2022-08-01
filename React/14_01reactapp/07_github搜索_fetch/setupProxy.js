const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
  app.use (
    createProxyMiddleware("/api",  { // 遇见api前缀的请求就会触发该代理
      target: 'http://localhost:5000', // 请求转发对象
      changeOrigin: true, // 控制服务器收到的响应头中HOST字段的值
      pathRewrite: {'^/api' : ''} // 重写请求路径
    })
  
  )
    
  
}
