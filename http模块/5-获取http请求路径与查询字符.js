// 引入http模块
const http = require('http')
// 1.引入url模块
const url = require('url')

// 创建服务对象
const server = http.createServer((request,response)=>{
    // 获取url
    console.log(request.url);
    // 将url传入url.parse() 得到一个url对象
    console.log(url.parse(request.url));
    //向url.parse()传入第二个参数  true
    console.log(url.parse(request.url,true));
    // 根据上述获取请求路径,查询字符
    console.log(url.parse(request.url).pathname);
    console.log(url.parse(request.url,true).query.key,'查询字符');
    // 解决中文乱码
    response.setHeader('content-type','text/html;charset=utf-8')
    response.end('hello 贾新科')   //设置响应信息
})
//监听端口  启动服务
server.listen(9000,()=>{
    console.log('9000端口已开启');   
})