// 引入fs模块
const fs = require('fs')
// appendFile文件异步追加写入
// 四个参数 文件名 | 内容数据 | [可选参数配置] | 回调函数
fs.appendFile('./天外来物.txt','\r\n我开始找你了',err=>{
    if(err){
        console.log('异步追加失败');
    }else{
        console.log('异步追加成功');
    }
})

// appendFileSync 文件同步追加写入
// 三个参数: 文件名 | 内容数据 | [可选参数配置] 
try {
    fs.appendFileSync('./天外来物.txt','\r\n求之不得')
    console.log('同步追加写入成功');
} catch (error) {
    console.log(error);
}