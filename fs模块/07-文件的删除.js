// 引入fs
const fs = require('fs')
// fs.unlink(path, callback)  异步删除文件
fs.unlink('../天外来物3.txt',err=>{
    if(err){
        console.log('删除失败');
    }else{
        console.log('删除成功');
    }
})

// fs.unlinkSync(path)  同步删除文件
fs.unlinkSync('./来物.txt')
