// 引入fs
const fs = require('fs')
// fs.stat(path[, options], callback)  异步查看文件状态
fs.stat('./00封面.jpg',(err,data)=>{
    if(err) throw err;
    console.log(data);
})

// fs.statSync(path[, options] ) 同步查看文件状态
let data = fs.statSync('./00封面.jpg')
console.log(data);