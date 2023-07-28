// 引入fs
const fs = require('fs')
// createReadStream 文件流式读取
// 两个参数 文件路径 | [可选参数]
// 创建读取流对象
let data = fs.createReadStream('./00封面.jpg')

// 每次取出 64k 数据后执行一次 data 回调
data.on('data',data=>{
    console.log(data);
    console.log(data.length);
})

// 读取完毕后.执行end回调
data.on('end',()=>{
    console.log('读取完毕');
})