// 引入http模块
const http = require("http");
const fs = require("fs");
const path = require('path')
// 创建服务
const server = http.createServer((request, response) => {
  // 获取路径
  let { pathname } = new URL(request.url, "http://127.0.0.1");
  //拼出文件路径
  let root = __dirname + "/page";
  let filepath = root + pathname;
  //判断请求方法
  if(request.method !== 'GET'){
    response.statusCode = 405
    response.end('<h1>405 method not allowed</h1>')
    return
  }   
  // 读取文件
  fs.readFile(filepath, (err, data) => {
    if (err) {
    //   对错误进行判断  返回错误信息
    switch(err.code){
        case 'ENOENT' :
            response.statusCode = 404
            response.end('<h1>404 NOT FOUND</h1>')
    }
      
    }
    // 响应回来的资源类型
    let mimes = {
      html: "text/html",
      css: "text/css",
      js: "text/javascript",
      png: "image/png",
      jpg: "image/jpeg",
      gif: "image/gif",
      mp4: "video/mp4",
      mp3: "audio/mpeg",
      json: "application/json",
    };
    // 获取文件的后缀名
    let ext = path.extname(filepath).slice(1)
    let type = mimes[ext]
    if(type){
        // mime有
        response.setHeader('content-type',type + ';charset=utf-8')
    }else{
        // mime没有
        response.setHeader('content-type','application/octet-stream')
    }

    console.log(ext);
    response.end(data);
  });
  //
});

// 监听端口
server.listen(9000, () => {
  console.log("监听端口9000......");
});
