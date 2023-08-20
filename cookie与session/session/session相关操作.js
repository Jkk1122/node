const express = require('express')
const app = express()
//1. 安装包 npm i express-session connect-mongo
//2. 引入 express-session connect-mongo
const session = require("express-session");
const MongoStore = require('connect-mongo');

//3. 设置 session 的中间件
app.use(session(
    {
        name: 'sid', //设置cookie的name，默认值是：connect.sid
        secret: 'jiaxinke', //参与加密的字符串（又称签名）
        saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
        resave: true, //是否在每次请求时重新保存session   每保存一次都会刷新时间
        store: MongoStore.create({
            mongoUrl: 'mongodb://127.0.0.1:27017/project' //数据库的连接配置
        }),
        cookie: {
            httpOnly: true, //   开启后前端无法通过 JS 操作
            maxAge: 1000 * 60 // 这一条 是控制 sessionID 的过期时间的！！！  也是cookie的过期时间
        },
    }
    ))


//创建 session
app.get('/login', (req, res) => {
    //设置session
    if(req.query.username === 'admin',req.query.password === 'admin'){
        req.session.username = 'admin',
        req.session.age = 19
        res.send('登录成功')
    }else{
        res.send('登录失败')
    }
    })
// 读取session
app.get('/cart',(req,res)=>{
    if(req.session.username){
        res.send(`欢迎您~~${req.session.username}`)
    }else{
        res.send('您未登录')
    }
})

// 销毁session
app.get('/loginout',(req,res)=>{
    req.session.destroy(()=>{
        res.send('退出成功')
    })
})

app.listen('3000',()=>{
    console.log('3000监听中.....');
})