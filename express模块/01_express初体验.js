// 导入expres
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由
app.get('/home',(request,response)=>{
    response.end('hello express')
})

// 监听端口
app.listen(3000,()=>{
    console.log('3000端口开始监听......');
})