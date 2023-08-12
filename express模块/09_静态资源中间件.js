// 导入
const express = require('express')

// 创建app对象
const app = express()

// 同时存在index.html  谁写在前面谁响应

// 响应服务
app.get('/index.html',(res,req)=>{
    req.send('<h1>我是首页</h1>')
})
// 静态资源中间件
app.use(express.static(__dirname + '/public'))


// 开启端口监听
app.listen(3000,()=>{
    console.log('3000端口监听中......');
})