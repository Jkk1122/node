// 引入fs
const fs = require('fs')
// fs.rename(oldPath, newPath, callback)重命名或移动
fs.rename('../移动/天外来物.txt','./天外来物2.txt',err=>{
    if(err){
        console.log('移动或重命名失败');
    }else{
        console.log('成功');
    }
})

// fs.renameSync(oldPath, newPath)  同步文件的重命名或移动
fs.renameSync('./天外来物2.txt','../天外来物3.txt')