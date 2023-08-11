// 导入expres
const express = require('express')
// 导入数据
const singers = require('./test.json')
// console.log(singers);
// 创建应用对象
const app = express()

// 创建路由
app.get('/singer/:id.html',(request,response)=>{
    // 获取路由参数id
    let id = request.params.id
    console.log(id);
    // 筛选数据
    let singer = singers.find(item=>{
        return item.id === Number(id)
    })
    console.log(singer);
    response.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${singer.name}</h1>
        <img src="${singer.image}"/>
    </body>
    </html>
    `)
})

// 监听端口
app.listen(3000,()=>{
    console.log('3000端口开始监听......');
}) 