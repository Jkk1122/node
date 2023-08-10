// 引入http
const http = require('http')

// 创建服务
const server = http.createServer((request,response)=>{
    // 设置响应头
    response.setHeader('content-type','text/html;charset=utf-8')
    // 设置响应状态码
    response.statusCode = 404
    // 重复设置会被覆盖
    response.statusCode = 406
    // 
    response.setHeader('double',['1','2'])
    // 设置响应状态描述
    response.statusMessage = 'nononono'
    // write可以多次使用  end只能有一个
    response.write('1222222')
    response.write('345')
    response.end('响应报文设置')
})

// 监听端口
server.listen(9000,()=>{
    console.log('9000端口监听中.....');
})