// 引入http模块
const http = require('http')

// 创建http服务
const server = http.createServer((request,response)=>{
    response.setHeader('content-type','text/html;charset=utf-8')
    // 获取请求方法
    let {method} = request
    // 获取url信息进行判断
    let {pathname} = new URL(request.url,'http://127.0.0.1');
    if(method == 'GET' && pathname=='/login'){
        response.write('登录界面')
    }else if(method == 'GET' && pathname == '/home'){
        response.write('首页')
    }else{
        response.end('not found')
    }
})

// 开启监听端口
server.listen(9000,()=>{
    console.log('9000端口开启.......');
})