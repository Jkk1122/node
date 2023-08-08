// 引入http
const http = require("http");
const fs = require('fs')
const path = require('path')

// 创建服务
const server = http.createServer((request, response) => {
  // 设置响应头
  response.setHeader("content-type", "text/html;charset=utf-8");
  //返回的时候读取文件，将读取的文件进行返回   
//   响应式 不用每次修改完文件进行重新的启动
  response.end(`${fs.readFileSync(`${path.resolve(__dirname,'1-table.html')}`)}`);
});

// 监听端口
server.listen(9000, () => {
  console.log("9000端口监听中.....");
});
