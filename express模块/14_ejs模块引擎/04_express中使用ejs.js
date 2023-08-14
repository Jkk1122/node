// 导入expres
const express = require('express')
const path = require('path')
// 创建应用对象
const app = express()
// 1.设置模板引擎
app.set('view engine','ejs')
// 2.设置模板引擎文件存放的位置
app.set('views',path.resolve(__dirname + '/views'))
// 创建路由规则  
app.get('/home',(request,response)=>{
    // 3.响应
    // response.render('文件存放的位置',数据)
    let title = '我开始找你了'
    response.render('home',{title})
})

// 监听端口
app.listen(3000,()=>{
    console.log('3000端口开始监听......');
})