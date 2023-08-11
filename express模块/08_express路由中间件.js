// 目标 检查url是否有参数code = 521


// 导入expres
const express = require('express')
// 创建应用对象
const app = express()
function checkRouterMiddleware(request,response,next){
    // 获取参数
    let code = request.query.code
    if(code){
        next();
    }else{
        response.send('暗号失败')
    }
}
// 创建路由
app.get('/home',checkRouterMiddleware,(request,response)=>{
    response.send('前台首页')
})
app.get('/admin',checkRouterMiddleware,(request,response)=>{
    response.send('后台首页')
}) 

// 监听端口
app.listen(3000,()=>{
    console.log('3000端口开始监听......');
})