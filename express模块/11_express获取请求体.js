// 导入
const express = require('express')
// 导入body-parser
const bodyParser = require('body-parser')
//创建应用对象
const app = express()
//处理 querystring 格式的请求体
let urlParser = bodyParser.urlencoded({extended:false});
//处理 JSON 格式的请求体
let jsonParser = bodyParser.json();

//路由规则
app.get('/login',(req,res)=>{
    res.sendFile(__dirname + '/11_form.html')
})

app.post('/login',urlParser,(req,res)=>{
    console.log(req.body);

    res.send(`登录数据:${req.body.username} ${req.body.password}`)
})

app.listen(3000,()=>{
    console.log('server is runnig......');
})