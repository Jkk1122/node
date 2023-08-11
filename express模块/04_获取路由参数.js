// 导入expres
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由
app.get('/:id.html',(request,response)=>{
    // 获取路由参数
    console.log(request.params.id)
    response.end('hello express')
})

// 监听端口
app.listen(3000,()=>{
    console.log('3000端口开始监听......');
})