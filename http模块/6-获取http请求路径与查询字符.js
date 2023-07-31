// 引入http模块
const http = require('http')


// 创建服务对象
const server = http.createServer((request,response)=>{
    // 创建url实例
    let url = new URL('http://www.baidu.com:3000?')


    // 解决中文乱码
    response.setHeader('content-type','text/html;charset=utf-8')
    response.end('hello 贾新科')   //设置响应信息
})
//监听端口  启动服务
server.listen(9000,()=>{
    console.log('9000端口已开启');   
})