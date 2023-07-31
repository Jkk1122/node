// 1.引入http模块
const http = require('http')

// 2.创建服务对象
const server = http.createServer((requesrt,response)=>{
    // 解决中文乱码
    response.setHeader('content-type','text/html;charset=utf-8')
    response.end('hello 贾新科')   //设置响应信息
})

//3.监听端口  启动服务
server.listen(9000,()=>{
    console.log('9000端口已开启');   
})