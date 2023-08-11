// 导入
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由
// get路由
app.get('/home',(request,response)=>{
    response.end('hello home')
})
// post路由
app.post('/login',(request,response)=>{
    response.end('hello form')
})
// 匹配所有方法
app.all('/test',(request,response)=>{
    response.end('hello test')
})
// 404响应
app.all('*',(request,response)=>{
    response.end('404 Not Found')
})

//开启端口监听
app.listen(5500,()=>{
    console.log('5500端口监听中......');
})