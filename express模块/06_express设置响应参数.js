// 导入expres
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由
app.get('/response',(request,response)=>{
    // 原生响应参数
    // response.statusCode = 440
    // response.statusMessage = 'love'
    // response.setHeader('aaa','bbb')
    // response.write('i`m write') 
    // response.end('hello express')
    // express响应参数
    // response.status(404)
    // response.set('aaa','bbbb')
    // response.send('我是云南的云南怒江的，中文响应不乱码')
    // 连贯操作
    // response.status(300).set('jia','xinke').send('贾新科')

    // 其他响应设置
    // 1.重定向
    // response.redirect('https://bilibili.com')
    // 2.下载响应
    // response.download('./test.json')
    // 3.响应json
    // response.json({
    //     "id": 1,
    //     "name": "张艺兴",
    //     "image": "https://tse1-mm.cn.bing.net/th/id/OIP-C.amhxroo6cN-w8gFwl7y0tQHaMl?pid=ImgDet&rs=1"
    // },)
    // 4.响应文件内容
    response.sendFile(__dirname+'/test.json')
})

// 监听端口
app.listen(3000,()=>{
    console.log('3000端口开始监听......');
})