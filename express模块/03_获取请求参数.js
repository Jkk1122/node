// 导入expres
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由
app.get('/request',(request,response)=>{
    // 原生操作
    console.log(request.method);
    console.log(request.url);
    console.log(request.httpVersion);
    console.log(request.headers);

    // express操作
    console.log(request.path);
    console.log(request.query);
    // 获取ip
    console.log(request.ip);
    // 获取请求头
    console.log(request.get('host'));
    response.end('hello express')
})

// 监听端口
app.listen(3000,()=>{
    console.log('3000端口开始监听......');
})