// 导入
const express = require('express')
// 导入前台路由模块
const homeRouter = require('./routers/homeRouter')
// 后台
const adminRouter = require('./routers/adminRouter')
// 实例
const app = express()
app.use(homeRouter)
app.use(adminRouter)
// 路由规则
app.all('*',(req,res)=>{
    res.status(404).send('<h1>404 NOT FOUND</h1>')
})
// 开启服务
app.listen(3000,()=>{
    console.log('3000端口已开启.....');
})