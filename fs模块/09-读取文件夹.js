// 引入fs
const fs = require('fs')
// fs.readdir(path[, options], callback 异步读取文件夹
fs.readdir('../fs模块',(err,data)=>{
    if(err){
        console.log('读取失败');
    }else{
        console.log(data);
    }
})

// fs.readdirSync(path[, options])  同步读取文件夹
let data = fs.readdirSync('../a')
console.log(data);
