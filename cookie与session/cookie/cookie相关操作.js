const express = require('express')
const cookieParser = require('cookie-parser');

//创建应用实例
const app = express()

//设置全局中间件
app.use(cookieParser());

// 设置路由规则
// 设置cookie
app.get('/set-cookie',(req,res)=>{
    // 不带时效
    res.cookie('name','jiaxinke')  // 关闭浏览器后会消失
    // 时效性cookie
    res.cookie('email','3220002200@qq.com',{maxAge:1000*30})
    res.send('cookie的设置')
})
// 获取cookie
app.get('/get-cookie',(req,res)=>{
    // 读取cookie
    console.log(req.cookies);
    res.send('cookie的读取')
})
// cookie的删除
app.get('/delete-cookie', (request, response) => {
    //删除
    response.clearCookie('name');
    //响应
    response.send('cookie 的清除');
    });
app.listen('3000',()=>{
    console.log('端口监听中....');
})