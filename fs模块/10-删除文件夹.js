// 引入fs
const fs = require('fs')
// fs.rmdir(path[, options], callback) 异步删除文件夹
fs.rmdir('../异步步文件夹1',err=>{
    if(err){
        console.log('失败');
    }else{
        console.log('文件夹删除成功');
    }
})

// fs.rmdirSync(path[, options]) 同步删除文件夹
fs.rmdirSync('../同步文件夹1')

// 递归删除文件夹
fs.rmdir('../a',{recursive:true},err=>{
    if(err){
        console.log('递归删除失败');
    }else{
        console.log('递归删除成功');
    }
})

// 递归删除文件夹
fs.rmdirSync('../a')