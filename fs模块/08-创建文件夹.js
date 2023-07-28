// =引入fs
const fs = require('fs')
//异步创建文件夹  fs.mkdir(path[, options], callback) 
fs.mkdir('../异步步文件夹3',err=>{
    if(err){
        console.log('创建文件夹失败');
        return
    }else{
        console.log('创建文件夹成功');
    }
})

// 同步创建文件夹 fs.mkdirSync(path[, options])
fs.mkdirSync('../同步文件夹3')

// 异步递归创建文件夹
fs.mkdir('../a/b/c/d',{recursive:true},err=>{
    if(err){
        console.log('创建失败');
        return
    }else{
        console.log('创建成功');
    }
})
