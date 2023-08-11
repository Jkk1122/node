// 导入expres
const express = require('express')
const fs = require('fs')
const path = require('path')
// 创建应用对象
const app = express()
// 创建全局中间件
function recordMiddleware(request,response,next){
    const {url,ip} = request
    console.log(url,ip);
    // 将url ip 存在文件中
    fs.appendFileSync(path.resolve('./urlip.log'),`${url} ${ip} \r\n`)
    next();
}
// 使用全局中间件
app.use(recordMiddleware)
// 创建路由
app.get('/home',(request,response)=>{
    response.send('前台首页')
})
app.get('/admin',(request,response)=>{
    response.send('后台首页')
})  

// 监听端口
app.listen(3000,()=>{
    console.log('3000端口开始监听......');
})