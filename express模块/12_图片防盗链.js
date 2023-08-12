// 导入
const express = require('express')

// 创建应用对象
const app = express()

// 设置全局中间件
app.use((req,res,next)=>{
    // 获取referer
    const referer = req.get('referer')
    // 将referer实例化
    if(referer){
        const url = new URL(referer)
        console.log(url.hostname);
        if(url.hostname !== '127.0.0.1'){
            res.status(404).send('<h1>404 not found</h1>')
            return
        }
    }
    next();
})

// 静态资源中间件
app.use(express.static(__dirname + '/public'))

// 开启服务
app.listen(3000,()=>{
    console.log('3000端口已开启.....');
})