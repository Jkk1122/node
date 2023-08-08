// 引入http
const http = require("http");
const fs = require('fs')

// 创建服务
const server = http.createServer((request, response) => {
  // 设置响应头
  

  // 获取路径
  let {pathname} = new URL(request.url,'http://127.0.0.1')
  if(pathname === '/'){
    response.end(`${fs.readFileSync(`${__dirname+'/1-table.html'}`)}`)
  }else if(pathname === '/index.css'){
    response.end(`${fs.readFileSync(`${__dirname+'/index.css'}`)}`)
  }else if(pathname === '/index.js'){
    response.end(`${fs.readFileSync(`${__dirname+'/index.js'}`)}`)
  }else{
    response.statusCode = 404
    response.end('<h1>404 NOT FOUND</h1>')
  }
  //返回的时候读取文件，将读取的文件进行返回   
//   响应式 不用每次修改完文件进行重新的启动
});

// 监听端口
server.listen(9000, () => {
  console.log("9000端口监听中.....");
});
