// 1. 引入http模块
const http = require('http')
// 1.1 引入fs模块
const fs = require('fs')
// 1.2 引入path模块
const path = require('path')
// 2. 创建 web 服务器实例
const server = http.createServer()
// 3. 为服务器绑定request事件,即可监听客户端发送过来的网络请求
server.on('request',  (req, res) => { 
  // 客户端请求发出res， 服务器响应返回req
  console.log(`url 后缀: ${req.url},请求方法 method: ${req.method}`)
  // 调用res.setHeader， 设置Content-Type响应头来解决中文乱码
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  let strUrl = req.url === "index" || req.url === "/" ? "index.html" : req.url;
  let url = path.join(__dirname, '../02_progress-steps' , strUrl )
  console.log(url);
  fs.readFile(url, 'utf8', (err, success) => {
    if(err) {
      console.log("读取文件失败")
    }
    res.end(success)
  })
  // res.end 将内容响应给客户端
  // res.end("hi， 中文乱码，需要设置Content-Type") ;
});
// 4. 启动服务器, 指定端口
server.listen(88, () => {
  console.log("http server running at http://127.0.0.1:88");
})
