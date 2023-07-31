// 引入http模块
const http = require('http')


// 创建服务对象
const server = http.createServer((request,response)=>{
    let str = '' //创建空的字符串
    // 绑定data 事件 流入式读取
    request.on('data',chunk=>{
        console.log(chunk);
        str += chunk
    })
    // 绑定end事件   读取结束触发
    request.on('end',()=>{
        console.log(str);
        // 响应报文
        response.end('hello http body')
    })
})

// 开启服务  监听9000端口
server.listen(9000,()=>{
    console.log('9000端口监听中.....');
})