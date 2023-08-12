// 导入express
const express = require('express')
// 创建app对象
const app = express()
// 静态服务中间件
app.use(express.static(__dirname + '/public'))
//响应服务
app.get('/',(req,res)=>{
    res.send('<h1>我是首页设置</h1>')
})

// 监听端口
app.listen(3000,()=>{
    console.log('3000端口监听中......');
})