// 引入http模块
const http = require('http')


// 创建服务对象
const server = http.createServer((request,response)=>{
    // 获取请求方法
    // console.log(request.method)
    // 获取url
    // console.log(request.url);
    // 获取http协议版本号
    // console.log(request.httpVersion);
    // 获取http请求头   request.headers
    console.log(request.headers.host);
    // 响应报文
    response.end('hello http')
})

// 开启服务  监听9000端口
server.listen(9000,()=>{
    console.log('9000端口监听中.....');
})